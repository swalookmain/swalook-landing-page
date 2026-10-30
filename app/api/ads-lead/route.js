import { NextResponse } from 'next/server';

const RECIPIENT = 'info@swalook.in';
const MIN_SUBMIT_MS = 1200;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX_PER_IP = 8;
const DUPE_WINDOW_MS = 10 * 60 * 1000;

/** Best-effort in-memory guards (per server instance). */
const ipHits = new Map();
const phoneHits = new Map();

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isValidIndianMobile(mobile) {
  const cleaned = mobile.replace(/[\s\-+()]/g, '');
  return /^(91)?[6-9]\d{9}$/.test(cleaned) || /^[6-9]\d{9}$/.test(cleaned);
}

function normalizePhoneKey(mobile) {
  return mobile.replace(/\D/g, '').slice(-10);
}

function pruneMap(map, windowMs, now) {
  for (const [key, timestamps] of map.entries()) {
    const kept = timestamps.filter((t) => now - t < windowMs);
    if (kept.length === 0) map.delete(key);
    else map.set(key, kept);
  }
}

function clientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request) {
  try {
    const body = await request.json();
    const now = Date.now();

    // Honeypot — bots fill hidden fields; pretend success without emailing.
    const honeypot = clean(body.company_website, 200);
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const formLoadedAt = Number(body.formLoadedAt);
    if (Number.isFinite(formLoadedAt) && now - formLoadedAt < MIN_SUBMIT_MS) {
      return NextResponse.json({ error: 'Please wait a moment and try again.' }, { status: 429 });
    }

    const name = clean(body.name, 120);
    const salonName = clean(body.salonName, 160);
    const mobile = clean(body.mobile, 40);
    const email = clean(body.email, 160).toLowerCase();
    const city = clean(body.city, 80);
    const branches = clean(body.branches, 40);
    const priority = clean(body.priority, 80);
    const gclid = clean(body.gclid, 120);
    const utmSource = clean(body.utm_source, 80);
    const utmMedium = clean(body.utm_medium, 80);
    const utmCampaign = clean(body.utm_campaign, 120);
    const utmContent = clean(body.utm_content, 120);
    const utmTerm = clean(body.utm_term, 120);
    const landingPage = clean(body.landingPage, 300) || '/ads';
    const formId = clean(body.formId, 40) || 'ads';

    if (!name || !salonName || !mobile) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    if (/^\d+$/.test(name) || /^\d+$/.test(salonName)) {
      return NextResponse.json({ error: 'Please enter a valid name and salon name.' }, { status: 400 });
    }

    if (!isValidIndianMobile(mobile)) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit mobile number.' }, { status: 400 });
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }

    const ip = clientIp(request);
    pruneMap(ipHits, RATE_WINDOW_MS, now);
    pruneMap(phoneHits, DUPE_WINDOW_MS, now);

    const ipList = ipHits.get(ip) || [];
    if (ipList.length >= RATE_MAX_PER_IP) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a few minutes or WhatsApp us.' },
        { status: 429 },
      );
    }
    ipList.push(now);
    ipHits.set(ip, ipList);

    const phoneKey = normalizePhoneKey(mobile);
    const phoneList = phoneHits.get(phoneKey) || [];
    const possibleDuplicate = phoneList.length > 0;
    phoneList.push(now);
    phoneHits.set(phoneKey, phoneList);

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      console.error('Ads lead form email configuration is missing.');
      return NextResponse.json({ error: 'The contact service is temporarily unavailable.' }, { status: 503 });
    }

    const fields = [
      ['Name', name],
      ['Salon name', salonName],
      ['Phone number', mobile],
      ['Email', email || 'Not provided'],
      ['City', city || 'Not provided'],
      ['Branches', branches || 'Not provided'],
      ['Priority', priority || 'Not provided'],
      ['Landing page', landingPage],
      ['Form', formId],
      ['gclid', gclid || 'Not provided'],
      ['utm_source', utmSource || 'Not provided'],
      ['utm_medium', utmMedium || 'Not provided'],
      ['utm_campaign', utmCampaign || 'Not provided'],
      ['utm_content', utmContent || 'Not provided'],
      ['utm_term', utmTerm || 'Not provided'],
      ['Possible duplicate', possibleDuplicate ? 'Yes (same phone within 10 min)' : 'No'],
    ];
    const text = fields.map(([label, value]) => `${label}: ${value}`).join('\n');
    const html = fields
      .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`)
      .join('');

    const dupeTag = possibleDuplicate ? ' [DUPLICATE?]' : '';
    const campaignBit = utmCampaign ? ` · ${utmCampaign}` : '';

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [RECIPIENT],
        subject: `New Ads lead from ${name} (${salonName})${campaignBit}${dupeTag}`,
        text,
        html: `<h2>New Ads lead</h2>${html}`,
      }),
    });

    if (!resendResponse.ok) {
      const providerError = await resendResponse.text();
      console.error('Resend email failed (ads-lead):', providerError);
      return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, possibleDuplicate });
  } catch (error) {
    console.error('Ads lead form request failed:', error);
    return NextResponse.json({ error: 'Unable to process your message right now.' }, { status: 400 });
  }
}

import { NextResponse } from 'next/server';

const RECIPIENT = 'info@swalook.in';

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

export async function POST(request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const salonName = clean(body.salonName, 160);
    const mobile = clean(body.mobile, 40);
    const email = clean(body.email, 254);
    const city = clean(body.city, 80);
    const branches = clean(body.branches, 20);
    const currentSoftware = clean(body.currentSoftware, 160);
    const message = clean(body.message, 2000);

    if (!name || !salonName || !mobile || !email) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      console.error('Contact form email configuration is missing.');
      return NextResponse.json({ error: 'The contact service is temporarily unavailable.' }, { status: 503 });
    }

    const fields = [
      ['Name', name],
      ['Salon name', salonName],
      ['Phone number', mobile],
      ['Email', email],
      ['City', city || 'Not provided'],
      ['Number of branches', branches || 'Not provided'],
      ['Current software', currentSoftware || 'Not provided'],
      ['Message', message || 'Not provided'],
    ];
    const text = fields.map(([label, value]) => `${label}: ${value}`).join('\n');
    const html = fields
      .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`)
      .join('');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [RECIPIENT],
        reply_to: email,
        subject: `New demo request from ${name} (${salonName})`,
        text,
        html: `<h2>New demo request</h2>${html}`,
      }),
    });

    if (!resendResponse.ok) {
      const providerError = await resendResponse.text();
      console.error('Resend email failed:', providerError);
      return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form request failed:', error);
    return NextResponse.json({ error: 'Unable to process your message right now.' }, { status: 400 });
  }
}
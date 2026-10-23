/**
 * GA4 + Google Ads helpers for swalook.in.
 *
 * Measurement / conversion IDs:
 * - GA4: G-F1Z96JJDJK
 * - Google Ads: AW-18515220361
 * - Microsoft Clarity: z26j2lnvp2
 *
 * After deploy, verify:
 * 1. DevTools → Network → filter `gtag` / `collect` — requests include both IDs
 * 2. analytics.google.com → Reports → Realtime — active user + page path
 * 3. Successful /contact submit → conversion BsdrCOXE0p8d + demo_form_submit
 * 4. WhatsApp / tel clicks → conversions GDoSCMa8258d / KMpqCJyi1Z8d
 * 5. Network → clarity.ms/tag/z26j2lnvp2
 */
export const GA_MEASUREMENT_ID = 'G-F1Z96JJDJK';
export const AW_CONVERSION_ID = 'AW-18515220361';
export const CLARITY_PROJECT_ID = 'z26j2lnvp2';

/** Google Ads conversion send_to labels */
export const AW_CONVERSIONS = {
  demoForm: `${AW_CONVERSION_ID}/BsdrCOXE0p8dEImv3_xE`,
  whatsappClick: `${AW_CONVERSION_ID}/GDoSCMa8258dEImv3_xE`,
  callClick: `${AW_CONVERSION_ID}/KMpqCJyi1Z8dEImv3_xE`,
};

function getGtag() {
  if (typeof window === 'undefined') return null;
  return typeof window.gtag === 'function' ? window.gtag : null;
}

/** Fire a GA4 event. No-ops when gtag is not loaded yet. */
export function gtagEvent(name, params = {}) {
  const gtag = getGtag();
  if (!gtag || !name) return;
  gtag('event', name, params);
}

/** Record a page view for App Router client navigations. */
export function gtagPageview(url) {
  const gtag = getGtag();
  if (!gtag || !url) return;
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

/** Set enhanced conversions user_data (email + E.164 phone). */
export function gtagSetUserData({ email, phoneNumber }) {
  const gtag = getGtag();
  if (!gtag) return;
  const data = {};
  if (email) data.email = String(email).trim().toLowerCase();
  if (phoneNumber) data.phone_number = phoneNumber;
  if (!data.email && !data.phone_number) return;
  gtag('set', 'user_data', data);
}

/** Fire a Google Ads conversion event. */
export function gtagAdsConversion(sendTo) {
  const gtag = getGtag();
  if (!gtag || !sendTo) return;
  gtag('event', 'conversion', { send_to: sendTo });
}

/**
 * Normalize an Indian mobile to +91XXXXXXXXXX (last 10 digits).
 * Strips spaces, dashes, and leading +91 / 91 / 0.
 */
export function toIndiaE164(phoneValue) {
  const digits = String(phoneValue || '').replace(/\D/g, '').slice(-10);
  if (digits.length !== 10) return null;
  return `+91${digits}`;
}

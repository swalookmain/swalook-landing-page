/**
 * GA4 helpers for swalook.in (measurement ID G-6RXV2QNNYG).
 *
 * After deploy, verify:
 * 1. DevTools → Network → filter `gtag` / `collect` — requests include G-6RXV2QNNYG
 * 2. analytics.google.com → Reports → Realtime — active user + page path
 * 3. Click WhatsApp / Book a Demo / submit contact or free-trial → Realtime → Events
 * 4. After ~24h: Acquisition, Pages and screens, Events reports
 */
export const GA_MEASUREMENT_ID = 'G-6RXV2QNNYG';

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

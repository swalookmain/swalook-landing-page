'use client';

import { useEffect } from 'react';
import { AW_CONVERSIONS, gtagAdsConversion, gtagEvent } from '@/lib/analytics';

/**
 * Site-wide capture-phase click listener for WhatsApp + tel conversions.
 * Mount once near end of <body>; covers footer, floating button, thank-you links, etc.
 */
export default function AdsClickConversions() {
  useEffect(() => {
    function onClick(e) {
      const el = e.target.closest('a, button');
      if (!el) return;
      const href = el.getAttribute('href') || '';

      // WhatsApp clicks
      if (
        href.indexOf('wa.me') > -1 ||
        href.indexOf('api.whatsapp.com') > -1 ||
        href.indexOf('whatsapp://') > -1
      ) {
        gtagAdsConversion(AW_CONVERSIONS.whatsappClick);
        gtagEvent('whatsapp_click', { link_url: href });
        return;
      }

      // Phone call clicks
      if (href.indexOf('tel:') === 0) {
        gtagAdsConversion(AW_CONVERSIONS.callClick);
        gtagEvent('call_click', { link_url: href });
      }
    }

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

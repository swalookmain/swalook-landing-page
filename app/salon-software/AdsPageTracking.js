'use client';

import { useEffect } from 'react';
import { gtagEvent } from '@/lib/analytics';
import { mergeAttributionFromUrl } from './adsConfig';

let didTrackLandingView = false;

/** Persist gclid / UTMs and mark this paid landing view in GA4. */
export default function AdsPageTracking() {
  useEffect(() => {
    mergeAttributionFromUrl();
    if (didTrackLandingView) return;
    didTrackLandingView = true;
    gtagEvent('ads_landing_view', { page_path: '/salon-software' });
  }, []);

  return null;
}

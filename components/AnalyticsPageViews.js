'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gtagPageview } from '@/lib/analytics';

function AnalyticsPageViewsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams?.toString();
    const url = search ? `${pathname}?${search}` : pathname;
    gtagPageview(url);
  }, [pathname, searchParams]);

  return null;
}

/** Tracks App Router client navigations as GA4 pageviews. */
export default function AnalyticsPageViews() {
  return (
    <Suspense fallback={null}>
      <AnalyticsPageViewsInner />
    </Suspense>
  );
}

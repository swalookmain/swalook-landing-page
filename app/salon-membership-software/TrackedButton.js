'use client';

import Link from 'next/link';
import { gtagEvent } from '@/lib/analytics';

export function TrackedButton({ href, className, children, eventName, eventParams, style }) {
  const handleClick = () => {
    if (eventName) gtagEvent(eventName, eventParams);
  };

  if (href.startsWith('#')) {
    return (
      <a href={href} className={className} style={style} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
export const TrackedAnchor = TrackedButton;

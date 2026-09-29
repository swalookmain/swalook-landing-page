'use client';

import Link from 'next/link';

export function TrackedButton({ href, className, children, eventName, eventParams }) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  };

  if (href.startsWith('#')) {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
export const TrackedAnchor = TrackedButton;

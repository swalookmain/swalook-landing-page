'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SiteChrome({ children }) {
  const pathname = usePathname() || '';
  const isAdsPage = pathname === '/ads' || pathname.startsWith('/ads/');

  return (
    <>
      {!isAdsPage && <Navbar />}
      <main className={isAdsPage ? 'adsLanding' : undefined}>{children}</main>
      {!isAdsPage && <Footer />}
      {/* Ads page already has Call / WhatsApp in the header — avoid duplicate FAB */}
      {!isAdsPage && <WhatsAppButton />}
    </>
  );
}

import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnalyticsPageViews from '@/components/AnalyticsPageViews';
import AdsClickConversions from '@/components/AdsClickConversions';
import { GA_MEASUREMENT_ID, AW_CONVERSION_ID, CLARITY_PROJECT_ID } from '@/lib/analytics';

const SITE_URL = 'https://swalook.in';

export const metadata = {
  metadataBase: new URL('https://swalook.in'),
  icons: {
    icon: [
      // { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png' },
    ],
  },
  title: 'Salon Management Software with Salon CRM | Swalook',
  description: 'Salon management software with CRM, appointments, billing, WhatsApp automation and marketing tools to help salons get and retain more customers.',
  keywords: [
    'salon management software',
    'salon software India',
    'salon CRM software',
    'salon CRM',
    'salon customer management software',
    'salon appointment software',
    'salon billing software',
    'WhatsApp marketing for salons',
    'salon customer retention',
    'salon customer acquisition',
  ].join(', '),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  links: [
    { rel: 'alternate', type: 'application/rss+xml', title: 'Swalook Blog', url: '/feed.xml' },
  ],
  openGraph: {
    title: 'Salon Management Software with Salon CRM | Swalook',
    description: 'Salon management software with CRM, appointments, billing, WhatsApp automation and marketing tools to help salons get and retain more customers.',
    url: SITE_URL,
    siteName: 'Swalook',
    type: 'website',
    locale: 'en_IN',
    countryName: 'India',
    images: [
      {
        url: `${SITE_URL}/swalook-logo.webp`,
        width: 360,
        height: 56,
        alt: 'Swalook - The CRM Built to Grow Your Salon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon Management Software with Salon CRM | Swalook',
    description: 'Salon management software with CRM, appointments, billing, WhatsApp automation and marketing tools to help salons get and retain more customers.',
    images: [`${SITE_URL}/swalook-logo.webp`],
  },
};

// Tells Google the site's name and logo (the square mark), which it uses in search results.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Swalook',
      legalName: 'Swalook Global Pvt. Ltd.',
      url: SITE_URL,
      logo: `${SITE_URL}/swalook-icon-512.png`,
      email: 'info@swalook.in',
      telephone: '+91-98701-03761',
      sameAs: [
        'https://www.facebook.com/people/SwaLook/100082780576167/',
        'https://www.youtube.com/channel/UCQj9_wk87-iDb9h9TdxjHYg',
        'https://www.linkedin.com/company/swalook/',
        'https://www.instagram.com/swalook_official/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Swalook',
      url: SITE_URL,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: 'Swalook',
      operatingSystem: 'All',
      applicationCategory: 'BusinessApplication',
      url: SITE_URL,
      description:
        'Swalook is an all-in-one cloud-based Salon Management Software and Salon CRM designed to automate appointments, billing POS, inventory tracking, and marketing.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: 'Contact for pricing',
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${AW_CONVERSION_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AnalyticsPageViews />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <AdsClickConversions />
      </body>
    </html>
  );
}

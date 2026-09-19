import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SITE_URL = 'https://swalook.in';

export const metadata = {
  metadataBase: new URL('https://swalook.in'),
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
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

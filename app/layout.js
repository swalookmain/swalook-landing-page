import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SITE_URL = 'https://swalook.in';

export const metadata = {
  metadataBase: new URL('https://swalook.in'),
  title: 'Swalook: All-in-One Salon Management Software and Marketing Platform',
  description: 'Swalook is an all-in-one salon management software and marketing platform for bookings, billing, retention, marketing automation, and staff management. Trusted by salons, spas, and multi-branch beauty brands across India.',
  icons: {
    icon: '/swalook-logo.webp',
    apple: '/swalook-logo.webp',
  },
  keywords: [
    'salon management software',
    'salon CRM',
    'salon marketing platform',
    'beauty industry software',
    'salon booking software',
    'salon billing software',
    'salon retention software',
    'salon marketing automation',
    'salon no show reduction',
    'salon appointment management',
    'salon inventory management',
    'beauty salon CRM',
    'spa management software',
    'salon software India',
    'salon CRM India',
    'beauty business software India',
    'salon management India',
    'salon CRM Maharashtra',
    'salon CRM Mumbai',
    'salon CRM Delhi',
    'salon CRM Bangalore',
    'salon CRM Chennai',
    'salon CRM Hyderabad',
    'salon CRM Pune',
    'salon CRM Kolkata'
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
    title: 'Swalook: All-in-One Salon Management Software and Marketing Platform',
    description: 'Swalook is an all-in-one salon management software and marketing platform for bookings, billing, retention, marketing automation, and staff management. Trusted by salons, spas, and multi-branch beauty brands across India.',
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
        alt: 'Swalook - All-in-One Salon Management Software & Marketing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swalook: All-in-One Salon Management Software and Marketing Platform',
    description: 'Swalook is an all-in-one salon management software and marketing platform for bookings, billing, retention, marketing automation, and staff management. Trusted by salons, spas, and multi-branch beauty brands across India.',
    images: [`${SITE_URL}/swalook-logo.webp`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

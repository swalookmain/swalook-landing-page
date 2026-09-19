const PAGE_TITLE = 'Book a Salon Software Demo | Swalook';
const PAGE_DESCRIPTION =
  'Book a demo of Swalook, the salon CRM and management software. See how it helps you manage customers, bring them back on WhatsApp and grow your salon.';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/contact',
    siteName: 'Swalook',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function ContactLayout({ children }) {
  return children;
}

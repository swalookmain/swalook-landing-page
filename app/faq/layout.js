const PAGE_TITLE = 'Salon CRM & Software FAQs | Swalook';
const PAGE_DESCRIPTION =
  'Answers to common questions about Swalook salon CRM software: appointments, billing, WhatsApp follow-ups, getting new customers and booking a demo.';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/faq' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/faq',
    siteName: 'Swalook',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function FAQLayout({ children }) {
  return children;
}

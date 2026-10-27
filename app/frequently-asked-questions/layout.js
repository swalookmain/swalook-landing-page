import { featureFaqJsonLd } from '../faq/faq-data';

const PAGE_TITLE = 'Features FAQ | Swalook Salon Software';
const PAGE_DESCRIPTION =
  'How Swalook handles salon billing, staff commissions, inventory alerts, multi-branch performance, WhatsApp campaigns, and walk-in inquiries.';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/frequently-asked-questions' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/frequently-asked-questions',
    siteName: 'Swalook',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function FrequentlyAskedQuestionsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featureFaqJsonLd) }}
      />
      {children}
    </>
  );
}

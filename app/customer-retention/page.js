import { FiRepeat } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/customer-retention';
const title = 'Salon Customer Retention Software | Repeat Customers | Swalook';
const description = 'Salon customer retention software that shows which customers are due for a visit, at risk or dormant, so you can follow up on WhatsApp and bring them back.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function CustomerRetentionPage() {
  return (
    <FeaturePage
      currentSlug="customer-retention"
      icon={<FiRepeat />}
      title="Salon Customer Retention Starts With Knowing Who Is Not Coming Back"
      heroDesc="You don't need another list of customer names. You need to know who needs attention."
      intro={[
        'Swalook helps identify customers who are due for a visit, becoming inactive or have stopped visiting so you can take action.',
      ]}
      keyFeatures={[
        { title: 'Repeat Customers', desc: 'Know who is coming back and how often.' },
        { title: 'At-Risk Customers', desc: 'Find customers whose visits are slowing down.' },
        { title: 'Dormant Customers', desc: 'Find customers who haven\'t visited for a while.' },
        { title: 'Rebooking', desc: 'Remind customers when it\'s time to book their next visit.' },
        { title: 'Reactivation', desc: 'Reach out to customers who have stopped visiting.' },
        { title: 'Loyalty', desc: 'Keep customers engaged and encourage repeat visits.' },
        { title: 'WhatsApp Follow-Ups', desc: 'Reach customers who need attention without manually sorting lists.' },
      ]}
      flow={['First Visit', 'Next Visit', 'Regular Customer', 'Loyal Customer']}
      flowTitle="From First Visit to Loyal Customer"
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/whatsapp-marketing', label: 'WhatsApp Marketing' },
        { href: '/salon-analytics-software', label: 'Customer Analytics' },
        { href: '/salon-loyalty-program-software', label: 'Customer Loyalty' },
      ]}
    />
  );
}

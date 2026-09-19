import { FiUserPlus } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/customer-acquisition';
const title = 'Salon Customer Acquisition Software | Get More Salon Customers | Swalook';
const description = 'Salon customer acquisition software that connects your CRM with Google and Meta, so you can see where new customers come from and whether they come back.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function CustomerAcquisitionPage() {
  return (
    <FeaturePage
      currentSlug="customer-acquisition"
      icon={<FiUserPlus />}
      title="Get More Customers for Your Salon"
      heroDesc="New customer acquisition is important. But getting customers is only part of the story."
      intro={[
        'Swalook connects your CRM, customer information and marketing activity so you can understand where customers come from and what happens after they visit.',
      ]}
      keyFeatures={[
        { title: 'Customer Source', desc: 'See where your new customers are coming from.' },
        { title: 'Local Customers', desc: 'Know which areas your customers come from.' },
        { title: 'Google', desc: 'Use what you know about your best customers to guide your Google campaigns.' },
        { title: 'Meta', desc: 'Use the same customer information for your Facebook and Instagram campaigns.' },
        { title: 'Customer Value', desc: 'See whether new customers come back and how much they spend.' },
        { title: 'Campaign Performance', desc: 'See which campaigns bring customers.' },
        { title: 'New vs Repeat Customers', desc: 'See how many new and returning customers you are getting.' },
      ]}
      flow={['Existing Customers', 'CRM', 'Customer Insights', 'Google + Meta', 'New Customers', 'CRM']}
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/salon-marketing-templates', label: 'Salon Marketing' },
        { href: '/salon-analytics-software', label: 'Analytics' },
        { href: '/customer-retention', label: 'Customer Retention' },
      ]}
    />
  );
}

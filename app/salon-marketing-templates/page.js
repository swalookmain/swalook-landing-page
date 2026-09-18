import { FiTarget } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-marketing-templates';
const title = 'Salon Marketing Software | Marketing Automation for Salons | Swalook';
const description = 'Salon marketing software that uses your customer information to run WhatsApp, Google and Meta campaigns for the right customers, not one offer for everyone.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function SalonMarketingPage() {
  return (
    <FeaturePage
      currentSlug="salon-marketing-templates"
      icon={<FiTarget />}
      title="Salon Marketing Built Around Your Customers"
      heroDesc="Your salon already has useful customer information. Use it to create more relevant marketing campaigns instead of sending the same offer to everyone."
      keyFeatures={[
        { title: 'Customer Segmentation', desc: 'Group customers by their visits, services and spending.' },
        { title: 'WhatsApp Marketing', desc: 'Send follow-ups and campaigns to customers on WhatsApp.' },
        { title: 'Customer Reactivation', desc: 'Bring back customers who haven\'t visited in a while.' },
        { title: 'Google', desc: 'Use your customer information to guide your Google campaigns.' },
        { title: 'Meta', desc: 'Use your customer information to guide your Facebook and Instagram campaigns.' },
        { title: 'Campaigns', desc: 'Run birthday, festive and promotional campaigns from ready templates.' },
        { title: 'Customer Acquisition', desc: 'See which campaigns bring new customers to your salon.' },
      ]}
      related={[
        { href: '/customer-acquisition', label: 'Customer Acquisition' },
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/whatsapp-marketing', label: 'WhatsApp Marketing' },
        { href: '/salon-analytics-software', label: 'Analytics' },
      ]}
    />
  );
}

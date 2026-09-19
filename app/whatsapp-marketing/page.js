import { FiMessageCircle } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/whatsapp-marketing';
const title = 'WhatsApp Marketing for Salons | WhatsApp Automation | Swalook';
const description = 'WhatsApp marketing for salons that uses your CRM to find customers who are due, at risk or dormant, then helps you review, confirm and send each follow-up.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function WhatsAppMarketingPage() {
  return (
    <FeaturePage
      currentSlug="whatsapp-marketing"
      icon={<FiMessageCircle />}
      title="WhatsApp Marketing for Salons That Starts With Your CRM"
      heroDesc="Stop sending the same message to every customer."
      intro={['Use your salon CRM to identify who needs a follow-up and reach them through WhatsApp.']}
      keyFeatures={[
        { title: 'Due for Visit', desc: 'Find customers who may be ready for their next service.' },
        { title: 'At-Risk Customers', desc: 'Find customers whose visit pattern is changing.' },
        { title: 'Dormant Customers', desc: 'Find customers who haven\'t visited recently.' },
        { title: 'First-Time Customers', desc: 'Follow up after a customer\'s first visit.' },
        { title: 'Service Follow-Ups', desc: 'Send a follow-up based on the service a customer took.' },
        { title: 'Customer Reactivation', desc: 'Invite customers who stopped visiting to come back.' },
        { title: 'Promotional Campaigns', desc: 'Send offers to the customers they are most relevant to.' },
      ]}
      steps={['Find', 'Prepare', 'Review', 'Confirm', 'Send']}
      ctaLabel="See WhatsApp Automation"
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/customer-retention', label: 'Customer Retention' },
        { href: '/salon-marketing-templates', label: 'Salon Marketing' },
        { href: '/salon-analytics-software', label: 'Analytics' },
      ]}
    />
  );
}

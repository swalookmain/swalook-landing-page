import { FiMessageSquare } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-inquiry-management';
const title = 'Salon Inquiry Management Software | Salon Lead Management | Swalook';
const description = 'Salon inquiry management software to track enquiries from the first conversation to the appointment, set follow-ups and see which leads became customers.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function InquiriesPage() {
  return (
    <FeaturePage
      currentSlug="salon-inquiry-management"
      icon={<FiMessageSquare />}
      title="Don't Lose a Potential Customer Because Nobody Followed Up"
      heroDesc="Keep track of salon enquiries from the first conversation to the appointment."
      intro={['Know which enquiries are new, which need a follow-up and which became customers.']}
      keyFeatures={[
        { title: 'Lead Capture', desc: 'Record enquiries from calls, walk-ins, social media and your website.' },
        { title: 'Follow-Up', desc: 'Set follow-up reminders so no enquiry goes cold.' },
        { title: 'Communication History', desc: 'Keep a complete history of all interactions with each lead.' },
        { title: 'Lead Status', desc: 'See which enquiries are new, in follow-up or converted.' },
        { title: 'Conversion Tracking', desc: 'See which enquiries became customers.' },
        { title: 'Enquiry Sources', desc: 'Know where your enquiries are coming from.' },
      ]}
      flow={['New Enquiry', 'Follow-Up', 'Appointment', 'Customer']}
      flowTitle="From Enquiry to Customer"
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/customer-acquisition', label: 'Customer Acquisition' },
        { href: '/salon-appointment-scheduling-software', label: 'Appointments' },
        { href: '/whatsapp-marketing', label: 'WhatsApp Marketing' },
      ]}
    />
  );
}

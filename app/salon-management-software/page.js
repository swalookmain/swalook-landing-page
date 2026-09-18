import { FiLayers } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-management-software';
const title = 'Salon Management Software in India | Swalook';
const description = 'Salon management software for appointments, billing, staff, inventory and customers, all connected to a built-in CRM that helps your salon keep and win customers.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function SalonManagementSoftwarePage() {
  return (
    <FeaturePage
      currentSlug="salon-management-software"
      icon={<FiLayers />}
      title="Salon Management Software for Your Everyday Business"
      heroDesc="Manage appointments, customers, billing, staff, inventory and salon operations from one platform."
      intro={[
        'And because everything is connected to your CRM, the information you collect while running your salon can also help you improve customer retention and acquisition.',
      ]}
      keyFeatures={[
        { title: 'Salon CRM', desc: 'Manage customer profiles, history and activity.' },
        { title: 'Appointment Management', desc: 'Manage bookings, schedules and customer visits.' },
        { title: 'Salon Billing', desc: 'Manage bills, payments, services and sales.' },
        { title: 'Inventory', desc: 'Track products, stock and purchases.' },
        { title: 'Staff', desc: 'Manage staff, attendance and performance.' },
        { title: 'Customer Loyalty', desc: 'Keep customers engaged and encourage repeat visits.' },
        { title: 'Marketing', desc: 'Send campaigns to the customers they suit, not the same offer to everyone.' },
        { title: 'WhatsApp', desc: 'Follow up on WhatsApp with customers who are due, at risk or inactive.' },
        { title: 'Analytics', desc: 'See your sales, customers, services and business performance.' },
        { title: 'Multi-Branch', desc: 'Manage multiple locations and compare performance.' },
      ]}
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/salon-appointment-scheduling-software', label: 'Appointments' },
        { href: '/salon-invoice-software', label: 'Billing & POS' },
        { href: '/salon-staff-attendance-software', label: 'Staff Management' },
        { href: '/salon-inventory-management-software', label: 'Inventory' },
        { href: '/salon-analytics-software', label: 'Analytics' },
      ]}
    />
  );
}

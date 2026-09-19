import { FiMapPin } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/multi-branch-salon-software';
const title = 'Multi-Branch Salon Software | Manage Multiple Salon Locations | Swalook';
const description = 'Multi-branch salon software to manage customers, staff, appointments, billing and reports across all your salon locations and compare branch performance.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function MultiBranchPage() {
  return (
    <FeaturePage
      currentSlug="multi-branch-salon-software"
      icon={<FiMapPin />}
      title="Manage Multiple Salon Branches From One Platform"
      heroDesc="Keep your customers, staff, appointments, billing and business reports connected across your salon locations."
      keyFeatures={[
        { title: 'Branch Management', desc: 'Manage all your salon branches from one account.' },
        { title: 'Central Customer Data', desc: 'Keep one customer database for all your branches.' },
        { title: 'Branch Reports', desc: 'Compare sales and performance across branches.' },
        { title: 'Staff', desc: 'Manage staff and attendance at each branch.' },
        { title: 'Billing', desc: 'See bills and payments for every branch.' },
        { title: 'Inventory', desc: 'Track stock at each location.' },
        { title: 'Appointments', desc: 'Manage bookings across all your branches.' },
        { title: 'Marketing', desc: 'Plan campaigns for each branch using its customer data.' },
      ]}
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/salon-management-software', label: 'Salon Management Software' },
        { href: '/salon-analytics-software', label: 'Analytics' },
        { href: '/salon-dashboard-software', label: 'Dashboard' },
      ]}
    />
  );
}

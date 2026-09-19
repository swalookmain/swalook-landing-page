import { FiLayout } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-dashboard-software';
const title = 'Salon Dashboard Software | Swalook';
const description = 'Salon dashboard software that shows your bookings, sales and staff performance at a glance, with branch views and data you can export for your own reports.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function DashboardPage() {
  return (
    <FeaturePage
      currentSlug="salon-dashboard-software"
      icon={<FiLayout />}
      title="Smart Salon Dashboard Software"
      heroDesc="Stay on top of your business with Swalook's dashboard. See your bookings, sales, staff performance and revenue trends in one view."
      whyTitle="Why Dashboards Matter for Salons"
      whyDesc="It is hard to grow a salon when you can't see what is happening. Swalook's dashboard puts your sales, bookings and staff numbers in one place, next to what your CRM knows about your customers, so you can decide what to do next."
      keyFeatures={[
        { title: 'Key Numbers at a Glance', desc: 'See bookings, revenue and staff performance for the day.' },
        { title: 'Customizable Views', desc: 'Focus on the data that matters most to your salon.' },
        { title: 'Comparative Analytics', desc: 'Compare monthly and seasonal performance trends.' },
        { title: 'Multi-Branch Monitoring', desc: 'Track multiple salon locations from one dashboard.' },
        { title: 'Data Export', desc: 'Export insights for reports and presentations.' },
      ]}
      withPoints={[
        'See how your salon is doing every day.',
        'Make decisions based on your own salon\'s numbers.',
        'Keep track of how your salon is growing.',
      ]}
      related={[
        { href: '/salon-analytics-software', label: 'Analytics' },
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/multi-branch-salon-software', label: 'Multi-Branch' },
        { href: '/salon-staff-attendance-software', label: 'Staff Management' },
      ]}
    />
  );
}

import { FiBarChart2 } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-analytics-software';
const title = 'Salon Analytics Software | Salon Business Analytics | Swalook';
const description = 'Salon analytics software to see your customers, revenue, services, staff and marketing performance in one place, for one salon or every branch you run.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function AnalyticsPage() {
  return (
    <FeaturePage
      currentSlug="salon-analytics-software"
      icon={<FiBarChart2 />}
      title="Salon Analytics That Help You Understand Your Business"
      heroDesc="See your salon's customers, revenue, services, staff and marketing performance in one place."
      keyFeatures={[
        { title: 'Sales Analytics', desc: 'See your daily, weekly and monthly sales.' },
        { title: 'Customer Analytics', desc: 'See how many new and returning customers you are getting.' },
        { title: 'Revenue', desc: 'Track how much your salon is earning over time.' },
        { title: 'Service Performance', desc: 'See which services bring in the most revenue and bookings.' },
        { title: 'Staff Performance', desc: 'Track each stylist\'s revenue and bookings.' },
        { title: 'Customer Spending', desc: 'See how much each customer spends and how often they visit.' },
        { title: 'Marketing Performance', desc: 'See where new customers are coming from and which campaigns bring them.' },
        { title: 'Branch Performance', desc: 'Compare how your salon locations are performing.' },
      ]}
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/customer-retention', label: 'Customer Retention' },
        { href: '/customer-acquisition', label: 'Customer Acquisition' },
        { href: '/multi-branch-salon-software', label: 'Multi-Branch' },
        { href: '/salon-dashboard-software', label: 'Dashboard' },
      ]}
    />
  );
}

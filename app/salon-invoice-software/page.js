import { FiFileText } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-invoice-software';
const title = 'Salon Billing Software & POS | Swalook';
const description = 'Salon billing software and POS to create bills, take payments and track sales, connected to your CRM so you can see what each customer buys and spends.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function InvoicesPage() {
  return (
    <FeaturePage
      currentSlug="salon-invoice-software"
      icon={<FiFileText />}
      title="Salon Billing Software Connected to Your Customer CRM"
      heroDesc="Create bills, manage payments and keep your sales records organized."
      intro={[
        'Because billing is connected to your CRM, you can also see what each customer buys and how much they spend over time.',
      ]}
      keyFeatures={[
        { title: 'Billing', desc: 'Create bills for services and products at the counter.' },
        { title: 'Invoices', desc: 'Create digital invoices and send them to customers on WhatsApp.' },
        { title: 'Payments', desc: 'Keep track of paid and pending payments.' },
        { title: 'Services', desc: 'Keep your service list and prices ready for billing.' },
        { title: 'Products', desc: 'Sell retail products on the same bill.' },
        { title: 'Discounts', desc: 'Apply discounts and offers when you bill.' },
        { title: 'Sales History', desc: 'See past bills and what each customer has bought.' },
      ]}
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/salon-appointment-scheduling-software', label: 'Appointments' },
        { href: '/salon-inventory-management-software', label: 'Inventory' },
        { href: '/salon-analytics-software', label: 'Analytics' },
      ]}
    />
  );
}

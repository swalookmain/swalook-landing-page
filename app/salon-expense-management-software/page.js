import { FiDollarSign } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-expense-management-software';
const title = 'Salon Expense Management Software | Swalook';
const description = 'Salon expense management software to log expenses, manage purchases from vendors, track payments and see where your salon\'s money goes each month.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function ExpensePage() {
  return (
    <FeaturePage
      currentSlug="salon-expense-management-software"
      icon={<FiDollarSign />}
      title="Salon Expense & Purchasing Management Software"
      heroDesc="Track expenses, manage purchases and control budgets with Swalook's salon expense management software."
      whyTitle="Why Expense Management Matters"
      whyDesc="Without proper expense tracking, it is easy to lose money on purchases you didn't need. Swalook keeps your expenses next to your sales, so you can see where your money goes."
      keyFeatures={[
        { title: 'Expense Tracking', desc: 'Log and categorize every business expense.' },
        { title: 'Purchase Management', desc: 'Create, track, and manage purchase orders from vendors.' },
        { title: 'Payment History', desc: 'Maintain a complete record of all payments and transactions.' },
        { title: 'Budget Planning', desc: 'Set budgets and track spending against targets.' },
        { title: 'Financial Reports', desc: 'Generate profit/loss reports and expense summaries.' },
      ]}
      withPoints={[
        'Track every expense in one place.',
        'Manage purchases from your vendors.',
        'Make informed financial decisions.',
      ]}
      related={[
        { href: '/salon-inventory-management-software', label: 'Inventory' },
        { href: '/salon-invoice-software', label: 'Billing & POS' },
        { href: '/salon-analytics-software', label: 'Analytics' },
        { href: '/salon-management-software', label: 'Salon Management Software' },
      ]}
    />
  );
}

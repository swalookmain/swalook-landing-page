import { FiPackage } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-inventory-management-software';
const title = 'Salon Inventory Management Software | Swalook';
const description = 'Salon inventory management software to track products, stock, purchases and usage, spot low stock early and stop relying on spreadsheets to run your salon.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function InventoryPage() {
  return (
    <FeaturePage
      currentSlug="salon-inventory-management-software"
      icon={<FiPackage />}
      title="Salon Inventory Management Without the Headache"
      heroDesc="Keep track of products, stock, purchases and usage without relying on spreadsheets."
      keyFeatures={[
        { title: 'Product Management', desc: 'Keep all your salon and retail products in one list.' },
        { title: 'Stock Tracking', desc: 'See how much of each product you have in stock.' },
        { title: 'Purchases', desc: 'Create and track purchase orders from your suppliers.' },
        { title: 'Usage', desc: 'Track how much product is used in your services.' },
        { title: 'Low Stock', desc: 'Know when a product is running low.' },
        { title: 'Inventory Reports', desc: 'See stock, purchases and usage in simple reports.' },
      ]}
      related={[
        { href: '/salon-management-software', label: 'Salon Management Software' },
        { href: '/salon-invoice-software', label: 'Billing & POS' },
        { href: '/salon-expense-management-software', label: 'Expenses' },
        { href: '/multi-branch-salon-software', label: 'Multi-Branch' },
      ]}
    />
  );
}

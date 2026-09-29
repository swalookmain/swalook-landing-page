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
      flow={[
        "Add products to inventory",
        "Create purchase orders for suppliers",
        "Receive stock to update quantities",
        "Record product consumption during services",
        "Track low stock alerts and reorder"
      ]}
      flowTitle="Purchase to Consumption Workflow"
      screenshot={{ src: "/images/inventory.png", alt: "Inventory stock screenshot", caption: "Track available products and monitor usage" }}
      useCases={[
        { title: "Low Stock Alerts", desc: "Get notified when essential products are running low so you never run out during a busy day." },
        { title: "Service Consumption", desc: "Track exactly how much product is used per service to manage costs and reduce waste." }
      ]}
      faqs={[
        { q: "Does the system alert me when stock is low?", a: "Yes, you can set low stock thresholds and the system will highlight items that need reordering." },
        { q: "Can I track retail products separately from salon use products?", a: "Yes, you can manage retail inventory for sale and professional inventory for service consumption." }
      ]}
      related={[
        { href: '/salon-expense-management-software', label: 'Expenses' },
        { href: '/salon-invoice-software', label: 'Billing & POS' },
        { href: '/salon-analytics-software', label: 'Analytics' },
      ]}
    />
  );
}

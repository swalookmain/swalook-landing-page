import { FiDatabase } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-crm-features';
const title = 'Salon CRM Software for Salons | Customer Management | Swalook';
const description = 'Salon CRM software that keeps customer profiles, visits, and spending in one place. Spot at-risk customers and follow up at the right time.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function SalonCrmFeaturesPage() {
  return (
    <FeaturePage
      currentSlug="salon-crm-features"
      icon={<FiDatabase />}
      title="Salon CRM Software That Helps You Understand Your Customers"
      heroDesc="Keep customer profiles, appointments, services, visit history and billing information together in one salon CRM."
      intro={["Swalook helps you see what's happening with your customers and take action when it matters."]}
      keyFeatures={[
        { title: 'Customer Profiles', desc: "Keep each customer's name, number and details in one profile." },
        { title: 'Customer History', desc: "See everything a customer has done with your salon." },
        { title: 'Visit History', desc: "Know when a customer last visited and how often they come." },
        { title: 'Service History', desc: "See which services each customer has taken." },
        { title: 'Customer Spending', desc: "See the total and average spend for every customer." },
        { title: 'Customer Segmentation', desc: "Group customers as new, repeat, at risk or dormant." },
        { title: 'At-Risk Customers', desc: "Find customers whose visits are slowing down." },
        { title: 'Dormant Customers', desc: "Find customers who haven't visited for a while." },
        { title: 'Follow-Ups', desc: "Find the customers who need a follow-up and reach them on WhatsApp." },
        { title: 'Customer Value', desc: "Identify customers who spend more or visit more often." },
      ]}
      flow={[
        "Customer details are captured",
        "Visits and services build their history",
        "CRM identifies patterns (e.g. at risk)",
        "Review recommendations",
        "Send targeted WhatsApp follow-ups"
      ]}
      flowTitle="Customer History Workflow"
      screenshot={{ src: "/images/feature-profiles.png", alt: "Customer profile screenshot", caption: "Customer profile and visit history overview" }}
      useCases={[
        { title: "Due for a Visit", desc: "Easily identify customers who are due for their next appointment and send a friendly reminder to book." },
        { title: "At Risk Customers", desc: "Find customers whose visits are slowing down before they stop coming altogether and win them back." },
        { title: "High Value Customers", desc: "Identify your most loyal, high-spending customers and reward them to keep retention high." }
      ]}
      faqs={[
        { q: "What is a Salon CRM?", a: "A Salon CRM is a system that keeps all your customer profiles, visit history, services, and spending in one place, helping you manage relationships and retention." },
        { q: "How does the CRM help with retention?", a: "By tracking visit frequency, the CRM automatically highlights customers who are due for a visit, at risk of leaving, or have become dormant." },
        { q: "Is the CRM connected to billing and appointments?", a: "Yes, every appointment and bill automatically updates the customer's profile so their history is always up to date." }
      ]}
      related={[
        { href: '/customer-retention', label: 'Customer Retention' },
        { href: '/whatsapp-marketing', label: 'WhatsApp Marketing' },
        { href: '/salon-membership-software', label: 'Membership' },
        { href: '/salon-analytics-software', label: 'Analytics' },
      ]}
    />
  );
}

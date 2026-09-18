import { FiCalendar } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-appointment-scheduling-software';
const title = 'Salon Appointment Software | Booking & Scheduling | Swalook';
const description = 'Salon appointment software to manage bookings, schedules, staff availability and rescheduling, with every visit added to your customer history in the CRM.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function AppointmentsPage() {
  return (
    <FeaturePage
      currentSlug="salon-appointment-scheduling-software"
      icon={<FiCalendar />}
      title="Salon Appointment Software That Keeps Your Bookings Organized"
      heroDesc="Manage appointments, bookings, schedules and customer visits from one place."
      intro={['Every appointment also adds useful information to your customer history.']}
      keyFeatures={[
        { title: 'Appointment Calendar', desc: 'See all your salon bookings in one calendar.' },
        { title: 'Customer Booking', desc: 'Book customers in with the service, stylist, date and time they want.' },
        { title: 'Staff Availability', desc: 'See each stylist\'s availability at a glance.' },
        { title: 'Appointment History', desc: 'See past and upcoming appointments for every customer.' },
        { title: 'Rescheduling', desc: 'Move an appointment to a new time when plans change.' },
        { title: 'Customer Details', desc: 'See the customer\'s details while you book.' },
        { title: 'Visit History', desc: 'Know how often each customer visits and which services they take.' },
        { title: 'Reminders & Confirmations', desc: 'Use automated reminders and confirmations to reduce avoidable no-shows.' },
      ]}
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/salon-invoice-software', label: 'Billing & POS' },
        { href: '/salon-staff-attendance-software', label: 'Staff Management' },
        { href: '/customer-retention', label: 'Customer Retention' },
      ]}
    />
  );
}

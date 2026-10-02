import { FiCalendar } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-appointment-scheduling-software';
const title = 'Salon Appointment Software | Booking & Scheduling | Swalook';
const description = 'Salon appointment software to manage bookings, schedules, staff availability and rescheduling, with every visit added to customer history in the CRM.';

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
      flow={[
        "Create an appointment",
        "Send confirmation to the customer",
        "Reschedule easily if plans change",
        "Complete the appointment and generate the bill"
      ]}
      flowTitle="Appointment Workflow"
      screenshot={{ src: "/images/appointment.png", alt: "Appointment calendar screenshot", caption: "Clear view of daily bookings and staff availability" }}
      useCases={[
        { title: "Staff Availability", desc: "Check which stylists are free and book a walk-in customer instantly without double-booking." },
        { title: "Reduce No-Shows", desc: "Automated reminders ensure customers don't forget their scheduled appointments, keeping your calendar full." }
      ]}
      faqs={[
        { q: "Can I manage schedules for multiple stylists?", a: "Yes, you can view your entire team's calendar side by side to manage availability easily." },
        { q: "Does it track appointment history?", a: "Absolutely. Every booking is logged in the customer's profile for future reference." }
      ]}
      related={[
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/salon-staff-attendance-software', label: 'Staff Management' },
        { href: '/salon-invoice-software', label: 'Billing & POS' },
        { href: '/whatsapp-marketing', label: 'WhatsApp Marketing' },
      ]}
    />
  );
}

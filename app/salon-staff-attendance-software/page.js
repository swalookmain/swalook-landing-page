import { FiUsers } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-staff-attendance-software';
const title = 'Salon Staff Management Software | Swalook';
const description = 'Salon staff management software to manage your team\'s profiles, attendance, shifts, performance and commissions from one place, with simple staff reports.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function StaffPage() {
  return (
    <FeaturePage
      currentSlug="salon-staff-attendance-software"
      icon={<FiUsers />}
      title="Salon Staff Management Made Simple"
      heroDesc="Manage your salon team, attendance and performance from one place."
      keyFeatures={[
        { title: 'Staff Profiles', desc: 'Keep each team member\'s details and role in one place.' },
        { title: 'Attendance', desc: 'Record daily check-in and check-out for every staff member.' },
        { title: 'Shifts', desc: 'Plan and manage staff shifts.' },
        { title: 'Performance', desc: 'See the bookings, services and revenue each stylist brings in.' },
        { title: 'Commissions', desc: 'Work out staff commissions from the services they do.' },
        { title: 'Staff Reports', desc: 'See attendance and performance for your whole team.' },
      ]}
      related={[
        { href: '/salon-management-software', label: 'Salon Management Software' },
        { href: '/salon-appointment-scheduling-software', label: 'Appointments' },
        { href: '/salon-analytics-software', label: 'Analytics' },
        { href: '/multi-branch-salon-software', label: 'Multi-Branch' },
      ]}
    />
  );
}

const title = 'Careers at Swalook | Work on Salon CRM Software';
const description = 'Join the Swalook team and help salon owners understand their customers and grow their business. See open roles and how to apply.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/careers' },
  openGraph: { title, description, url: '/careers' },
};

export default function Layout({ children }) {
  return children;
}

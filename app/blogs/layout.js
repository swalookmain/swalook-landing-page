const title = 'Salon Business Blog: Marketing, CRM and Growth Tips | Swalook';
const description = 'Practical guides for salon owners on getting more customers, bringing them back, WhatsApp follow-ups, salon marketing and running a salon with a CRM.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/blogs' },
  openGraph: { title, description, url: '/blogs' },
};

export default function Layout({ children }) {
  return children;
}

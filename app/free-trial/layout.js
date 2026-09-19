const title = 'Free Trial | Swalook Salon CRM Software';
const description = 'Try Swalook salon CRM and management software before you decide and see how it fits the way your salon works every day.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/free-trial' },
  openGraph: { title, description, url: '/free-trial' },
};

export default function Layout({ children }) {
  return children;
}

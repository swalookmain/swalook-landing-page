const title = 'Privacy Policy | Swalook';
const description = 'How Swalook collects, uses and protects personal information when you use our salon CRM and management software, website and mobile app.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy' },
  openGraph: { title, description, url: '/privacy-policy' },
};

export default function Layout({ children }) {
  return children;
}

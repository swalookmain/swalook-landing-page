const title = 'Shipping Policy | Swalook';
const description = 'Swalook is online salon software, so there are no physical goods to ship. Read how access to the service is delivered after you subscribe.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/shipping-policy' },
  openGraph: { title, description, url: '/shipping-policy' },
};

export default function Layout({ children }) {
  return children;
}

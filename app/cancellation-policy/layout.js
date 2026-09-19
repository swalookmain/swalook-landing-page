const title = 'Cancellation and Refund Policy | Swalook';
const description = 'How to cancel a Swalook salon software subscription, how refunds work, and what happens to your account and data after cancellation.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/cancellation-policy' },
  openGraph: { title, description, url: '/cancellation-policy' },
};

export default function Layout({ children }) {
  return children;
}

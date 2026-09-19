const title = 'Terms and Conditions | Swalook';
const description = 'The terms that apply when you use Swalook salon CRM and management software, including subscriptions, payments and acceptable use.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/terms-conditions' },
  openGraph: { title, description, url: '/terms-conditions' },
};

export default function Layout({ children }) {
  return children;
}

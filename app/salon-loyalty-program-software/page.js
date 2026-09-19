import { FiHeart } from 'react-icons/fi';
import FeaturePage from '@/components/FeaturePage';

const path = '/salon-loyalty-program-software';
const title = 'Salon Loyalty Program Software | Customer Loyalty | Swalook';
const description = 'Salon loyalty program software to reward repeat visits, track customer spending and send offers that keep your regular customers coming back to your salon.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

export default function LoyaltyPage() {
  return (
    <FeaturePage
      currentSlug="salon-loyalty-program-software"
      icon={<FiHeart />}
      title="Salon Loyalty Program Software"
      heroDesc="Reward your regular customers, track their visits and give them more reasons to come back with Swalook's salon loyalty software."
      whyTitle="Why Loyalty Programs Matter"
      whyDesc="Your regular customers keep your salon going. Swalook's loyalty features use the visit and spending history in your CRM to reward your best customers and encourage repeat visits."
      keyFeatures={[
        { title: 'Points-Based Rewards', desc: 'Set up point systems where customers earn rewards for every visit or purchase.' },
        { title: 'Visit Tracking', desc: 'Track customer visit frequency and spending patterns automatically.' },
        { title: 'Personalized Offers', desc: 'Send offers based on customer preferences and history.' },
        { title: 'Referral Programs', desc: 'Encourage customers to refer friends with referral rewards.' },
        { title: 'Birthday & Anniversary Specials', desc: 'Send birthday and anniversary offers automatically.' },
      ]}
      withPoints={[
        'Reward customers for coming back.',
        'Send offers that fit each customer.',
        'Get regular customers to refer their friends.',
      ]}
      related={[
        { href: '/customer-retention', label: 'Customer Retention' },
        { href: '/salon-crm-features', label: 'Salon CRM' },
        { href: '/whatsapp-marketing', label: 'WhatsApp Marketing' },
        { href: '/salon-marketing-templates', label: 'Salon Marketing' },
      ]}
    />
  );
}

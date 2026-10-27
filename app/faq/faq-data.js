/**
 * Central FAQ content for /faq (GEO/AEO-friendly plain strings).
 * Optional [[label|/path]] markers become internal links in the UI;
 * JSON-LD uses stripFaqLinks() so schema stays plain text.
 */

/** Document (35) feature FAQs, in source order. */
export const featureFaqIds = [
  'billing-pos',
  'staff-commissions',
  'at-risk-dormant',
  'inventory-alerts',
  'multi-branch',
  'marketing-vs-blast',
  'inquiries-leads',
];

export const faqCategories = [
  {
    id: 'features-faq',
    label: 'Features FAQ',
    eyebrow: 'Help Center',
    blurb: 'How Swalook handles billing, staff, inventory, branches, marketing, and inquiries.',
  },
  {
    id: 'operations',
    label: 'Operations',
    eyebrow: 'Daily work',
    blurb: 'What Swalook is, what the CRM shows, and how appointments and no-shows are handled.',
  },
  {
    id: 'growth',
    label: 'Growth',
    eyebrow: 'Customers',
    blurb: 'Retention, WhatsApp follow-ups, campaigns, and salon performance.',
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    eyebrow: 'Before you decide',
    blurb: 'Who Swalook is for, how a demo works, and how to reach us.',
  },
];

export const faqItems = [
  // —— Operations ——
  {
    id: 'what-is-swalook',
    category: 'operations',
    q: 'What is Swalook?',
    a: 'Swalook is [[salon CRM|/salon-crm-features]] and salon management software that helps you run daily operations, understand your customers, and take action to get more customers and bring them back.',
  },
  {
    id: 'what-can-manage',
    category: 'operations',
    q: 'What can Swalook help my salon manage?',
    a: 'Appointments, billing, customers, staff, inventory, enquiries, loyalty, WhatsApp follow-ups, marketing, and analytics — connected to your CRM so day-to-day work also improves retention and acquisition.',
  },
  {
    id: 'crm-customer-profile',
    category: 'operations',
    q: 'What does the salon CRM show about each customer?',
    a: 'Each customer profile shows last visit, total visits, services, total spend, average spend, appointment history, and customer status so your team knows who they are serving before deciding what to do next.',
  },
  {
    id: 'appointments-no-shows',
    category: 'operations',
    q: 'Does Swalook help with appointments and no-shows?',
    a: 'Yes. Manage bookings, schedules, and visits from one place. Swalook reduces salon appointment no-shows by up to 35% using automated WhatsApp reminders, and confirmations keep customers informed. Learn more about [[appointment scheduling|/salon-appointment-scheduling-software]].',
  },
  {
    id: 'billing-pos',
    category: 'operations',
    q: 'How does Swalook Salon POS handle daily billing and multiple payment methods?',
    a: 'The [[Swalook billing and POS module|/salon-invoice-software]] generates instant digital invoices, calculates real-time taxes, and allows front desk staff to split or record multi-mode payments including cash, digital wallets, cards, and custom salon membership credits in a single checkout workflow.',
  },
  {
    id: 'staff-commissions',
    category: 'operations',
    q: 'Can Swalook track staff attendance and calculate stylist commissions automatically?',
    a: 'Yes, Swalook features an integrated [[staff and attendance management module|/salon-staff-attendance-software]] that tracks daily shifts and performance metrics, automatically calculating individual stylist commissions based on services completed during the billing process to protect salon profit margins.',
  },
  {
    id: 'inventory-alerts',
    category: 'operations',
    q: 'Does Swalook inventory management send alerts before retail products run out of stock?',
    a: 'Yes, the [[Swalook inventory management system|/salon-inventory-management-software]] actively monitors salon product consumption and retail stock levels, providing automated alerts before essential backbar products or retail items run out so owners can streamline procurement.',
  },
  {
    id: 'multi-branch',
    category: 'operations',
    q: 'How does Swalook help multi-branch salon owners monitor cross-location performance?',
    a: 'Swalook provides a [[centralized multi-branch analytics dashboard|/multi-branch-salon-software]] that allows salon owners to manage multiple locations simultaneously, compare daily sales across different branches, and monitor cross-location staff performance from a single login.',
  },
  {
    id: 'inquiries-leads',
    category: 'operations',
    q: 'Can a salon track walkthrough lead inquiries using Swalook management software?',
    a: 'Yes, Swalook includes a dedicated [[inquiries and leads tracking system|/salon-inquiry-management]] that allows salon receptionists to log incoming phone calls or walk-in inquiries, set up follow-up reminders, and measure lead-to-booking conversion rates accurately.',
  },

  // —— Growth ——
  {
    id: 'at-risk-dormant',
    category: 'growth',
    q: 'How does the Swalook customer retention system identify at-risk or dormant clients?',
    a: 'Swalook uses historic CRM booking and spending data to continuously analyze client visit patterns, automatically bucketing clients into real-time segments such as first-time, due for a visit, at-risk, or dormant based on the time elapsed since their last appointment.',
  },
  {
    id: 'bring-customers-back',
    category: 'growth',
    q: 'How does Swalook help me bring customers back?',
    a: 'Swalook surfaces customers who are due, at risk, or inactive so you can follow up on WhatsApp at the right time instead of guessing who needs attention.',
  },
  {
    id: 'whatsapp-followups',
    category: 'growth',
    q: 'How do WhatsApp follow-ups work?',
    a: 'Swalook finds customers who need a follow-up from your CRM, prepares the message, and you review and confirm before send. Use it for visit reminders, rebooking, at-risk and dormant customers, birthdays, and promotions. Explore [[WhatsApp marketing|/whatsapp-marketing]].',
  },
  {
    id: 'marketing-vs-blast',
    category: 'growth',
    q: 'What makes Swalook marketing campaigns different from generic blast text messaging?',
    a: 'Swalook salon marketing uses direct CRM data targeting to send personalized automated follow-ups and campaigns via [[WhatsApp|/whatsapp-marketing]] based on exact customer history, ensuring that special offers match a customer\'s specific past services instead of sending one blanket message to everyone.',
  },
  {
    id: 'get-new-customers',
    category: 'growth',
    q: 'Can Swalook help me get new customers?',
    a: 'Yes. Swalook connects CRM data with Google and Meta so you can see where customers come from, which campaigns convert, and whether new customers return. Learn about [[customer acquisition|/customer-acquisition]].',
  },
  {
    id: 'valuable-customers',
    category: 'growth',
    q: 'Can I see which customers are most valuable?',
    a: 'Yes. Customer, appointment, and billing data stay connected so you can see who spends more, who visits more often, and who has stopped coming.',
  },
  {
    id: 'salon-performance',
    category: 'growth',
    q: 'Can I see how my salon is performing?',
    a: 'Yes. View customers, revenue, services, staff, and marketing performance in one place with [[salon analytics|/salon-analytics-software]].',
  },

  // —— Getting started ——
  {
    id: 'not-only-billing',
    category: 'getting-started',
    q: 'Is Swalook only billing or booking software?',
    a: 'No. Appointments, billing, and staff management matter, but Swalook is built around your CRM — every bill and visit also helps you understand customers, bring them back, and find new ones.',
  },
  {
    id: 'tech-comfort',
    category: 'getting-started',
    q: 'Do I need to be good with technology?',
    a: 'No. Swalook is made for salon owners and teams. It finds customers and opportunities that need attention; you review, then click and confirm.',
  },
  {
    id: 'who-for',
    category: 'getting-started',
    q: 'Who is Swalook for?',
    a: 'Salons that want to grow: independent salons, growing salons, and multi-branch salons.',
  },
  {
    id: 'see-before-deciding',
    category: 'getting-started',
    q: 'How can I see Swalook before deciding?',
    a: 'Book a demo on our [[contact page|/contact]]. Tell us about your salon and we will show you how Swalook can help.',
  },
  {
    id: 'contact-swalook',
    category: 'getting-started',
    q: 'How do I contact Swalook?',
    a: 'Email info@swalook.in, email sales@swalook.in for sales, or call +91 98701 03761.',
  },
  {
    id: 'read-more',
    category: 'getting-started',
    q: 'Where can I read more about running a salon?',
    a: 'The [[Swalook blog|/blogs]] has articles on salon CRM, marketing, no-shows, and billing.',
  },
];

const LINK_RE = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

/** Plain text for schema / crawlers (strips [[label|/path]] to label only). */
export function stripFaqLinks(text) {
  return text.replace(LINK_RE, '$1');
}

export function parseFaqAnswer(text) {
  const parts = [];
  let lastIndex = 0;
  let match;
  const re = new RegExp(LINK_RE.source, 'g');
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'link', label: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) });
  }
  return parts.length ? parts : [{ type: 'text', value: text }];
}

export const allFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: stripFaqLinks(faq.a),
    },
  })),
};

export function featureFaqs() {
  return featureFaqIds.map((id) => faqItems.find((faq) => faq.id === id)).filter(Boolean);
}

export const featureFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: featureFaqIds
    .map((id) => faqItems.find((faq) => faq.id === id))
    .filter(Boolean)
    .map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripFaqLinks(faq.a),
      },
    })),
};

export function faqsByCategory(categoryId) {
  if (categoryId === 'features-faq') return featureFaqs();
  return faqItems.filter(
    (faq) => faq.category === categoryId && !featureFaqIds.includes(faq.id),
  );
}

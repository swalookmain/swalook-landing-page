import { getPublicPosts } from '@/lib/site-posts';

const SITE_URL = 'https://swalook.in';

// When the page copy last changed. Bump it when you change a page's content so Google re-crawls it.
// Don't set it to "today" on every build — Google stops trusting a lastmod that always changes.
const PAGES_UPDATED = '2026-09-19';

// Final URLs only (they return 200). Redirecting paths — /book-demo, /crm, /blog — stay out,
// otherwise Search Console reports them under "Page with redirect".
const PAGES = [
  ['/', 1.0, 'weekly'],
  ['/salon-crm-features', 0.9, 'monthly'],
  ['/salon-management-software', 0.9, 'monthly'],
  ['/whatsapp-marketing', 0.8, 'monthly'],
  ['/customer-retention', 0.8, 'monthly'],
  ['/customer-acquisition', 0.8, 'monthly'],
  ['/salon-marketing-templates', 0.8, 'monthly'],
  ['/salon-appointment-scheduling-software', 0.8, 'monthly'],
  ['/salon-invoice-software', 0.8, 'monthly'],
  ['/salon-analytics-software', 0.8, 'monthly'],
  ['/salon-inventory-management-software', 0.8, 'monthly'],
  ['/salon-staff-attendance-software', 0.8, 'monthly'],
  ['/salon-inquiry-management', 0.8, 'monthly'],
  ['/multi-branch-salon-software', 0.8, 'monthly'],
  ['/salon-dashboard-software', 0.7, 'monthly'],
  ['/salon-expense-management-software', 0.7, 'monthly'],
  ['/salon-loyalty-program-software', 0.7, 'monthly'],
  ['/mobile-app', 0.7, 'monthly'],
  ['/contact', 0.8, 'monthly'],
  ['/about', 0.7, 'monthly'],
  ['/faq', 0.7, 'monthly'],
  ['/blogs', 0.8, 'weekly'],
  ['/careers', 0.5, 'monthly'],
  ['/privacy-policy', 0.3, 'yearly'],
  ['/terms-conditions', 0.3, 'yearly'],
  ['/cancellation-policy', 0.3, 'yearly'],
  ['/shipping-policy', 0.3, 'yearly'],
];

// Rebuild at most hourly so posts published through the CMS show up without a deploy.
export const revalidate = 3600;

export default async function sitemap() {
  const pages = PAGES.map(([path, priority, changeFrequency]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: PAGES_UPDATED,
    changeFrequency,
    priority,
  }));

  const posts = (await getPublicPosts()).map((post) => {
    const updated = post.updatedAt || post.publishedAt || post.published_at;
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      ...(updated ? { lastModified: updated } : {}),
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  return [...pages, ...posts];
}

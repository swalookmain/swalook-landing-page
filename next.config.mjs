// Blog posts that used to live at the site root before posts moved under /blog/.
// Google still has these URLs and reports them as 404s.
const OLD_ROOT_BLOG_SLUGS = [
  '7-key-factors-for-choosing-salon-crm-software',
  'why-salons-fall-behind-without-crm-software',
  'the-importance-of-integrated-marketing',
  'how-to-automate-your-salon-marketing-with-swalook',
];

const DUPLICATE_HOSTS = ['www.swalook.in', 'swalook.com', 'www.swalook.com'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // One host only: www.swalook.in, swalook.com and www.swalook.com all served a duplicate
      // copy of every page from the same Vercel project.
      ...DUPLICATE_HOSTS.map((host) => ({
        source: '/:path*',
        has: [{ type: 'host', value: host }],
        destination: 'https://swalook.in/:path*',
        permanent: true,
      })),
      ...OLD_ROOT_BLOG_SLUGS.map((slug) => ({ source: `/${slug}`, destination: `/blog/${slug}`, permanent: true })),
      { source: '/blogs/:slug', destination: '/blog/:slug', permanent: true },
      // Was a temporary (307) redirect from app/crm/page.js.
      { source: '/crm', destination: '/salon-crm-features', permanent: true },
    ];
  },
  // Switch from static export to server mode so ISR (revalidate) and
  // API routes (revalidation webhook) work at runtime.
  // output: 'export',  — removed for ISR support
  images: {
    unoptimized: true,
  },
  // Allow revalidation webhook to be called from backend
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST, GET, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization, X-Webhook-Secret' },
        ],
      },
    ];
  },
};

export default nextConfig;

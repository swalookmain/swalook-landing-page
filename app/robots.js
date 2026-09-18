const SITE_URL = 'https://swalook.in';

// Served at /robots.txt. Everything is crawlable except the form/webhook API routes,
// which only accept POST and would otherwise show up as errors in Search Console.
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

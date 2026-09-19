import { getPublicPosts } from '@/lib/site-posts';

const SITE_URL = 'https://swalook.in';

function escapeXml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = (await getPublicPosts())
    .map((post) => ({ ...post, date: new Date(post.publishedAt || post.published_at || post.createdAt || Date.now()) }))
    .sort((a, b) => b.date - a.date);

  const items = posts.map((post) => `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${SITE_URL}/blog/${post.slug}</link>
    <description>${escapeXml(post.excerpt)}</description>
    <pubDate>${post.date.toUTCString()}</pubDate>
    <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
  </item>`).join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Swalook Blog</title>
  <link>${SITE_URL}/blogs</link>
  <description>Salon CRM, marketing and growth guides for salon owners, from Swalook</description>
  <language>en-IN</language>
  <lastBuildDate>${(posts[0]?.date || new Date()).toUTCString()}</lastBuildDate>${items}
</channel>
</rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } }
  );
}

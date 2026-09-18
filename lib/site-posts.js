import { blogPosts } from '@/components/blog/blogData';
import { fetchPublishedPosts } from '@/lib/blog-public';

/**
 * Every public blog post, for the sitemap and RSS feed: the site's own posts (blogData, which
 * the /blog/[slug] pages are built from) plus any extra posts published through the backend CMS.
 * The API is best effort — if it is down, the static posts are still listed.
 */
export async function getPublicPosts() {
  const bySlug = new Map(blogPosts.map((post) => [post.slug, post]));

  try {
    const { posts = [] } = (await fetchPublishedPosts({ limit: 100 })) || {};
    for (const post of posts) {
      if (post?.slug && !bySlug.has(post.slug)) bySlug.set(post.slug, post);
    }
  } catch {
    // Backend unreachable: static posts only.
  }

  return [...bySlug.values()];
}

import BlogIndex from './BlogIndex';
import { blogCategories } from '@/components/blog/blogData';
import { fetchCategories } from '@/lib/blog-public';
import { getPublicPosts } from '@/lib/site-posts';

export const revalidate = 300;

function cardPost(post) {
  const { contentBlocks: _contentBlocks, ...card } = post;
  return card;
}

function publishedTime(post) {
  const value = post.publishedAt || post.published_at || post.createdAt || '';
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? 0 : time;
}

function mergeCategories(staticCategories, apiCategories) {
  const seen = new Set();
  const merged = [];
  for (const category of [...staticCategories, ...apiCategories]) {
    const label = category?.name || category?.label;
    if (!label || seen.has(label)) continue;
    seen.add(label);
    merged.push({
      label,
      slug: category.slug || label.toLowerCase().replace(/\s+/g, '-'),
    });
  }
  return merged;
}

export default async function BlogsPage() {
  const [posts, apiCategories] = await Promise.all([
    getPublicPosts(),
    fetchCategories().catch(() => []),
  ]);

  const cards = posts
    .map(cardPost)
    .sort((left, right) => publishedTime(right) - publishedTime(left));

  return (
    <BlogIndex
      posts={cards}
      categories={mergeCategories(blogCategories, Array.isArray(apiCategories) ? apiCategories : [])}
    />
  );
}

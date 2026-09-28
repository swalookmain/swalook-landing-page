'use client';

import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import BlogHero from '@/components/blog/BlogHero';
import BlogCategoryTabs from '@/components/blog/BlogCategoryTabs';
import BlogPostGrid from '@/components/blog/BlogPostGrid';
import styles from './Blogs.module.css';

function normalizePost(post, index = 0) {
  const category = post.category || post.categories?.[0]?.name || 'Salon Growth';
  const readTime = post.readTime || (post.readingTimeMinutes ? `${post.readingTimeMinutes} min read` : '6 min read');
  const image =
    post.coverImage ||
    post.ogImage ||
    post.heroMedia?.publicUrl ||
    post.image ||
    null;
  const authorName = typeof post.author === 'string'
    ? post.author
    : post.author?.name || 'Swalook Editorial';

  return {
    ...post,
    href: post.href || `/blog/${post.slug}`,
    category,
    readTime,
    author: authorName,
    publishedAt: post.publishedAt || post.published_at || post.createdAt,
    eyebrow: post.eyebrow || (post.featured ? 'Featured guide' : 'Salon insight'),
    coverImage: image,
    imageAlt: post.coverImageAlt || post.heroMedia?.altText || `${post.title} article cover`,
    featured: Boolean(post.featured) || index === 0,
  };
}

export default function BlogIndex({ posts: sourcePosts, categories }) {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  const posts = useMemo(
    () => sourcePosts.map((post, index) => normalizePost(post, index)),
    [sourcePosts]
  );

  const filteredPosts = useMemo(() => {
    const byCategory = activeCategory === 'All Posts' ? posts : posts.filter((post) => {
      const catNames = post.categories
        ? post.categories.map((item) => item.name || item.label || item)
        : [post.category];
      return catNames.includes(activeCategory);
    });

    const query = searchQuery.trim().toLowerCase();
    if (!query) return byCategory;
    return byCategory.filter((post) =>
      [post.title, post.excerpt, post.category, ...(post.tags || []).map((tag) => tag.name || tag)]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query))
    );
  }, [posts, activeCategory, searchQuery]);

  const displayCategories = categories.map((category) => {
    const name = category.name || category.label;
    const slug = category.slug || name.toLowerCase().replace(/\s+/g, '-');
    return { label: name, slug };
  });

  const tabs = [
    { label: 'All Posts', slug: 'all-posts' },
    ...displayCategories.filter((category) => category.label && category.label !== 'All Posts'),
  ];

  return (
    <>
      <BlogHero
        label="Blog"
        title={<>Insights and strategies for salon success</>}
        description="Practical CRM, marketing, and growth guidance for salon owners who want more repeat clients, cleaner operations, and stronger revenue."
      />

      <section className={styles.blogsSection}>
        <div className={styles.blogsInner}>
          <div className={styles.toolbar}>
            <label className={styles.searchBox}>
              <FiSearch aria-hidden="true" />
              <span className="sr-only">Search articles</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles on salon CRM, marketing, billing..."
              />
            </label>
            <BlogCategoryTabs
              categories={tabs}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <BlogPostGrid
            posts={filteredPosts}
            emptyState={
              <div className={styles.emptyState}>
                <h2>No posts found</h2>
                <p>Try another category or return to all posts.</p>
              </div>
            }
          />
        </div>
      </section>
    </>
  );
}

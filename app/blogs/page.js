'use client';

import { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import BlogHero from '@/components/blog/BlogHero';
import BlogCategoryTabs from '@/components/blog/BlogCategoryTabs';
import BlogPostGrid from '@/components/blog/BlogPostGrid';
import {
  blogPosts as staticPosts,
  blogCategories as staticCategories,
} from '@/components/blog/blogData';
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

  return {
    ...post,
    href: post.href || `/blog/${post.slug}`,
    category,
    readTime,
    author: post.author?.name || post.author || 'Swalook Editorial',
    publishedAt: post.publishedAt || post.published_at || post.createdAt,
    eyebrow: post.eyebrow || (post.featured ? 'Featured guide' : 'Salon insight'),
    coverImage: image,
    imageAlt: post.coverImageAlt || post.heroMedia?.altText || `${post.title} article cover`,
    featured: Boolean(post.featured) || index === 0,
  };
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  const posts = useMemo(
    () => staticPosts.map((post, index) => normalizePost(post, index)),
    []
  );

  const categories = staticCategories;

  const filteredPosts = useMemo(() => {
    const byCategory = activeCategory === 'All Posts' ? posts : posts.filter((post) => {
      const catNames = post.categories
        ? post.categories.map((c) => c.name)
        : [post.category];
      return catNames.includes(activeCategory);
    });

    const query = searchQuery.trim().toLowerCase();
    if (!query) return byCategory;
    return byCategory.filter((post) =>
      [post.title, post.excerpt, post.category, ...(post.tags || []).map((tag) => tag.name)]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query))
    );
  }, [posts, activeCategory, searchQuery]);

  const displayCategories = categories.map((c) => {
    const name = c.name || c.label;
    const slug = c.slug || name.toLowerCase().replace(/\s+/g, '-');
    return { label: name, slug };
  });

  const tabs = [
    { label: 'All Posts', slug: 'all-posts' },
    ...displayCategories.filter((c) => c.label !== 'All Posts'),
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

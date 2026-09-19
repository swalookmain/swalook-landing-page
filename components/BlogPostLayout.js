'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import BlogMeta from '@/components/blog/BlogMeta';
import { getRelatedBlogPosts } from '@/components/blog/blogData';
import { fetchPublishedPosts } from '@/lib/blog-public';
import styles from './BlogPost.module.css';

const API_ROOT = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/+$/, '');

export default function BlogPostLayout({
  title,
  category,
  children,
  currentSlug,
  readTime = '6 min read',
  publishedAt = '2026-01-01',
  author = 'Swalook Editorial',
}) {
  const [relatedPosts, setRelatedPosts] = useState(null);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const viewRecorded = useRef(false);

  // Fetch related posts from API first, fall back to static data
  useEffect(() => {
    let cancelled = false;
    async function loadRelated() {
      setRelatedLoading(true);
      try {
        if (category) {
          const result = await fetchPublishedPosts({ category: category.toLowerCase().replace(/\s+/g, '-'), limit: 4 });
          if (cancelled) return;
          if (result.posts && result.posts.length > 0) {
            const filtered = result.posts
              .filter((p) => p.slug !== currentSlug)
              .slice(0, 3);
            setRelatedPosts(
              filtered.map((p) => ({
                slug: p.slug,
                title: p.title,
                href: `/blog/${p.slug}`,
              }))
            );
            setRelatedLoading(false);
            return;
          }
        }
      } catch {
        // Fall through to static data
      }
      if (!cancelled) {
        // Fall back to static blogData
        setRelatedPosts(getRelatedBlogPosts(currentSlug));
        setRelatedLoading(false);
      }
    }
    loadRelated();
    return () => { cancelled = true; };
  }, [category, currentSlug]);

  // Use static data while loading or if API fails
  const displayRelatedPosts = relatedPosts || getRelatedBlogPosts(currentSlug);

  // Record a blog view once when the post first renders
  useEffect(() => {
    if (viewRecorded.current) return;
    viewRecorded.current = true;

    // Create a privacy-safe visitor key using a hash of session data
    const rawKey = [navigator.language || 'en', screen.width || 0].join('|');
    const visitorKey = Array.from(
      new TextEncoder().encode(rawKey)
    ).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 32);

    fetch(`${API_ROOT}/api/v1/public/blog/posts/${encodeURIComponent(currentSlug)}/view`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitorKey,
        referrer: document.referrer?.slice(0, 1000) || null,
      }),
    }).catch(() => {
      // Silently ignore — view tracking is non-critical
    });
  }, [currentSlug]);

  return (
    <article className={styles.post}>
      <div className={styles.container}>
        <div className={styles.content}>
          <BlogBreadcrumb title={title} />

          <header className={styles.header}>
            <BlogMeta
              category={category}
              readTime={readTime}
              author={author}
              publishedAt={publishedAt}
            />
            <h1 className={styles.title}>{title}</h1>
          </header>

          <div className={styles.body}>{children}</div>
        </div>

        <aside className={styles.sidebar}>
          <section className={styles.sidebarCard}>
            <span className={styles.sidebarEyebrow}>About Swalook</span>
            <h2>Built for salon growth</h2>
            <p>
              Swalook helps salons improve retention, simplify operations, and turn everyday workflows into
              more repeat revenue.
            </p>
          </section>

          <section className={styles.sidebarCard}>
            <span className={styles.sidebarEyebrow}>Related posts</span>
            <h3>Continue reading</h3>
            <div className={styles.relatedList}>
              {displayRelatedPosts.map((post) => (
                <Link key={post.slug} href={post.href} className={styles.relatedLink}>
                  <span>{post.title}</span>
                  <FiArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.sidebarCard}>
            <span className={styles.sidebarEyebrow}>Next step</span>
            <h3>See the product in action</h3>
            <p>Book a demo to see how Swalook helps you understand your customers and grow your salon.</p>
            <div className={styles.actionStack}>
              <Link href="/contact" className="btn btn-primary btn-sm">
                Book a Demo <FiArrowRight />
              </Link>
              <Link href="/salon-crm-features" className="btn btn-outline btn-sm">
                Explore Salon CRM
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </article>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
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
  excerpt = '',
  coverImage = null,
  coverImageAlt = '',
}) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [progress, setProgress] = useState(0);
  const viewRecorded = useRef(false);
  const articleRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    async function loadRelated() {
      try {
        if (category) {
          const result = await fetchPublishedPosts({
            category: category.toLowerCase().replace(/\s+/g, '-'),
            limit: 4,
          });
          if (cancelled) return;
          if (result.posts && result.posts.length > 0) {
            setRelatedPosts(
              result.posts
                .filter((post) => post.slug !== currentSlug)
                .slice(0, 3)
                .map((post) => ({
                  slug: post.slug,
                  title: post.title,
                  href: `/blog/${post.slug}`,
                }))
            );
            return;
          }
        }
      } catch {
        // Fall through to static data
      }
      if (!cancelled) {
        setRelatedPosts(getRelatedBlogPosts(currentSlug, { category, limit: 3 }));
      }
    }
    loadRelated();
    return () => {
      cancelled = true;
    };
  }, [category, currentSlug]);

  useEffect(() => {
    if (viewRecorded.current) return;
    viewRecorded.current = true;

    const rawKey = [navigator.language || 'en', screen.width || 0].join('|');
    const visitorKey = Array.from(new TextEncoder().encode(rawKey))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
      .slice(0, 32);

    fetch(`${API_ROOT}/api/v1/public/blog/posts/${encodeURIComponent(currentSlug)}/view`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitorKey,
        referrer: document.referrer?.slice(0, 1000) || null,
      }),
    }).catch(() => {});
  }, [currentSlug]);

  useEffect(() => {
    function onScroll() {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(100);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(Math.round((scrolled / total) * 100));
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [currentSlug]);

  const displayRelatedPosts =
    relatedPosts.length > 0
      ? relatedPosts
      : getRelatedBlogPosts(currentSlug, { category, limit: 3 });

  return (
    <article className={styles.post} ref={articleRef}>
      <div className={styles.progressTrack} aria-hidden="true">
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topBar}>
            <Link href="/blogs" className={styles.backLink}>
              <FiArrowLeft aria-hidden="true" />
              All articles
            </Link>
            <BlogBreadcrumb title={title} />
          </div>

          <header className={styles.header}>
            <BlogMeta
              category={category}
              readTime={readTime}
              author={author}
              publishedAt={publishedAt}
            />
            <h1 className={styles.title}>{title}</h1>
            {excerpt ? <p className={styles.lead}>{excerpt}</p> : null}
          </header>

          {coverImage ? (
            <figure className={styles.cover}>
              <Image
                src={coverImage}
                alt={coverImageAlt || title}
                width={1200}
                height={630}
                className={styles.coverImage}
                priority
                unoptimized
              />
            </figure>
          ) : null}

          <div className={styles.body}>{children}</div>

          <footer className={styles.articleFooter}>
            <div className={styles.footerCard}>
            <h2>Grow your salon with Swalook</h2>
            <p>
              See how Swalook helps salons manage clients, appointments, billing, and marketing in one place.
            </p>
              <div className={styles.footerActions}>
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Book a Demo <FiArrowRight />
                </Link>
                <Link href="/blogs" className="btn btn-outline btn-sm">
                  More articles
                </Link>
              </div>
            </div>
          </footer>
        </div>

        <aside className={styles.sidebar}>
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
              <Link href="/blogs" className={styles.relatedAllLink}>
                Blogs/Articles
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className={`${styles.sidebarCard} ${styles.aboutCard}`}>
            <span className={styles.sidebarEyebrow}>About Swalook</span>
            <h2>Built for salon growth</h2>
            <p>
              Swalook helps salons improve retention, simplify operations, and turn everyday workflows into
              more repeat revenue.
            </p>
          </section>
        </aside>
      </div>
    </article>
  );
}

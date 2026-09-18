'use client';

import { useState } from 'react';
import Link from 'next/link';
import BlogIcon from './BlogIcon';
import BlogMeta from './BlogMeta';
import styles from './BlogPostCard.module.css';

export default function BlogPostCard({ post, featured: isFeatured }) {
  const [imgError, setImgError] = useState(false);
  const hasCover = !!(post.coverImage || post.ogImage);
  const showFallback = !hasCover || imgError;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`${styles.card} ${isFeatured ? styles.cardFeatured : ''}`}
    >
      {/* Featured badge */}
      {isFeatured && (
        <span className={styles.featuredBadge}>Featured</span>
      )}
      {/* Image / Visual Section */}
      {showFallback ? (
        <div className={styles.visual}>
          <BlogIcon icon={post.icon} accent={post.accent} />
          <div className={styles.visualText}>
            <span className={styles.eyebrow}>{post.eyebrow}</span>
            <span className={styles.category}>{post.category}</span>
          </div>
        </div>
      ) : (
        <div className={styles.imageWrap}>
          <img
            src={post.coverImage || post.ogImage}
            alt={post.imageAlt || `${post.title} cover`}
            className={styles.coverImage}
            onError={() => setImgError(true)}
            loading="lazy"
          />
          <div className={styles.imageOverlay}>
            <span className={styles.eyebrow}>{post.eyebrow}</span>
          </div>
        </div>
      )}

      <div className={styles.content}>
        <BlogMeta
          compact
          category={null}
          readTime={post.readTime}
          author={post.author}
          publishedAt={post.publishedAt}
        />
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>

        {/* Category chips */}
        <div className={styles.chips}>
          {post.categories && Array.isArray(post.categories)
            ? post.categories.slice(0, 2).map((cat) => (
                <span key={cat.slug || cat.name} className={styles.chip}>
                  {cat.name}
                </span>
              ))
            : post.category ? (
                <span className={styles.chip}>{post.category}</span>
              ) : null}
        </div>

        <span className={styles.readMore}>Read article</span>
      </div>
    </Link>
  );
}

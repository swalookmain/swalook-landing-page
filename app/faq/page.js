'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import {
  faqCategories,
  faqsByCategory,
} from './faq-data';
import FeatureFaqList from './FeatureFaqList';
import styles from './FAQ.module.css';

function scrollToCategory(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function FAQPage() {
  const [activeId, setActiveId] = useState(faqCategories[0].id);

  useEffect(() => {
    const sections = faqCategories
      .map((cat) => document.getElementById(cat.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Common questions about Swalook, the salon CRM and management software built to help salons grow."
      />

      <div className={styles.page}>
        <nav className={styles.chipNav} aria-label="FAQ categories">
          <div className={styles.chipNavInner}>
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`${styles.chip} ${activeId === cat.id ? styles.chipActive : ''}`}
                aria-current={activeId === cat.id ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(cat.id);
                  scrollToCategory(cat.id);
                }}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </nav>

        {faqCategories.map((cat) => {
          const items = faqsByCategory(cat.id);
          return (
            <section
              key={cat.id}
              id={cat.id}
              className={styles.faqSection}
              aria-labelledby={`${cat.id}-heading`}
            >
              <header className={styles.sectionHeader}>
                <span className={styles.eyebrow}>{cat.eyebrow}</span>
                <h2 id={`${cat.id}-heading`}>{cat.label}</h2>
                <p>{cat.blurb}</p>
              </header>
              <FeatureFaqList items={items} />
            </section>
          );
        })}

        <section className={styles.ctaBlock}>
          <div className={styles.ctaCard}>
            <h2>Still have a question?</h2>
            <p>Tell us about your salon and we will walk you through Swalook.</p>
            <Link href="/contact" className="btn btn-primary">
              Book a Demo <FiArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

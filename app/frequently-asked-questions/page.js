import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import FeatureFaqList from '../faq/FeatureFaqList';
import { featureFaqs } from '../faq/faq-data';
import styles from '../faq/FAQ.module.css';

export default function FrequentlyAskedQuestionsPage() {
  return (
    <>
      <PageHero
        label="Help Center"
        title="Features FAQ"
        description="Answers about Swalook billing, staff, inventory, multi-branch performance, marketing, and inquiries."
      />

      <div className={styles.page}>
        <section id="features-faq" className={styles.faqSection} aria-labelledby="features-faq-heading">
          <header className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Help Center</span>
            <h2 id="features-faq-heading">Features FAQ</h2>
            <p>Each question is answered in full below.</p>
          </header>
          <FeatureFaqList items={featureFaqs()} />
        </section>

        <section className={styles.ctaBlock}>
          <div className={styles.ctaCard}>
            <h2>More questions?</h2>
            <p>The full FAQ also covers getting started, no-shows, and booking a demo.</p>
            <Link href="/faq" className="btn btn-outline">
              All FAQs <FiArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

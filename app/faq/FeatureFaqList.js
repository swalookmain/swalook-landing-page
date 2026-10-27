import Link from 'next/link';
import { parseFaqAnswer } from './faq-data';
import styles from './FAQ.module.css';

export function FaqAnswer({ text }) {
  const parts = parseFaqAnswer(text);
  return (
    <p>
      {parts.map((part, i) =>
        part.type === 'link' ? (
          <Link key={`${part.href}-${i}`} href={part.href} className={styles.faqLink}>
            {part.label}
          </Link>
        ) : (
          <span key={i}>{part.value}</span>
        )
      )}
    </p>
  );
}

/** Each question is an h3 with the answer in the p directly under it. */
export default function FeatureFaqList({ items }) {
  return (
    <div className={styles.faqList}>
      {items.map((faq) => (
        <article key={faq.id} className={styles.faqEntry}>
          <h3>{faq.q}</h3>
          <FaqAnswer text={faq.a} />
        </article>
      ))}
    </div>
  );
}

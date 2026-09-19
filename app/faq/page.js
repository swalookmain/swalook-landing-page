'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './FAQ.module.css';

const crmFaqs = [
  {
    q: 'What is Swalook?',
    a: 'Swalook is salon management software with a built-in CRM that helps you manage your salon, understand your customers and take action. It is built to help you get more customers, understand their value and bring them back.',
  },
  {
    q: 'What can Swalook help my salon manage?',
    a: 'Appointments, billing, customers, staff, inventory, enquiries, loyalty, WhatsApp follow-ups, marketing and analytics. And because everything is connected to your CRM, the information you collect while running your salon can also help you improve customer retention and acquisition.',
  },
  {
    q: 'What does the salon CRM show about each customer?',
    a: 'Each customer profile shows the last visit, total visits, services, total spend, average spend, appointment history and customer status. Know your customers before deciding what to do next.',
  },
  {
    q: 'Does Swalook help with appointments and no-shows?',
    a: 'Yes. Manage appointments, bookings, schedules and customer visits from one place. Use automated reminders and confirmations to reduce avoidable no-shows and keep customers informed about their appointments.',
  },
  {
    q: 'Can I manage multiple salon branches?',
    a: 'Yes. Keep your customers, staff, appointments, billing and business reports connected across your salon locations, and compare how each branch is performing.',
  },
];

const growthFaqs = [
  {
    q: 'How does Swalook help me bring customers back?',
    a: 'Swalook helps you identify customers who are due, at risk or inactive so you can take action at the right time. You can then follow up with them on WhatsApp.',
  },
  {
    q: 'How do WhatsApp follow-ups work?',
    a: 'Swalook uses your CRM to find customers who need a follow-up and prepares the message. You review it and confirm before it is sent. Use it for visit reminders, rebooking reminders, at-risk and dormant customers, birthday campaigns and promotions.',
  },
  {
    q: 'Can Swalook help me get new customers?',
    a: 'Yes. Swalook connects your CRM with Google and Meta so your customer information can help guide your acquisition efforts. You can see where customers are coming from, which campaigns bring customers and whether new customers come back.',
  },
  {
    q: 'Can I see which customers are most valuable?',
    a: 'Yes. Swalook connects your customer, appointment and billing data so you can get a clearer picture of customer value. See who spends more, who visits more often and who has stopped coming.',
  },
  {
    q: 'Can I see how my salon is performing?',
    a: "Yes. See your salon's customers, revenue, services, staff and marketing performance in one place.",
  },
];

const generalFaqs = [
  {
    q: 'Is Swalook only billing or booking software?',
    a: 'No. Appointments, billing and staff management are important, but they are only one part of the business. Swalook is built around your CRM, so every bill and visit also helps you understand customers, bring them back and find new ones.',
  },
  {
    q: 'Do I need to be good with technology?',
    a: 'No. Swalook is made for salon owners and salon teams. Swalook finds customers and opportunities that need attention. You review what is happening, then click and confirm.',
  },
  {
    q: 'Who is Swalook for?',
    a: 'Salons that want to grow: independent salons, growing salons and multi-branch salons.',
  },
  {
    q: 'How can I see Swalook before deciding?',
    a: (
      <>
        Book a demo on our <Link href="/contact" className={styles.faqLink}>contact page</Link>. Tell us about
        your salon and we&rsquo;ll show you how Swalook can help.
      </>
    ),
  },
  {
    q: 'How do I contact Swalook?',
    a: (
      <>
        Email <a href="mailto:info@swalook.in" className={styles.faqLink}>info@swalook.in</a>, email{' '}
        <a href="mailto:sales@swalook.in" className={styles.faqLink}>sales@swalook.in</a> for sales, or call{' '}
        <a href="tel:+919870103761" className={styles.faqLink}>+91 98701 03761</a>.
      </>
    ),
  },
  {
    q: 'Where can I read more about running a salon?',
    a: (
      <>
        The <Link href="/blogs" className={styles.faqLink}>Swalook blog</Link> has articles on salon CRM,
        marketing, no-shows and billing.
      </>
    ),
  },
];

function FAQAccordion({ items, category }) {
  const [open, setOpen] = useState(null);

  return (
    <div>
      {category && <h2 className={styles.faqCategoryTitle}>{category}</h2>}
      {items.map((item, i) => {
        const questionId = `faq-question-${category ? category.toLowerCase().replace(/\s+/g, '-') : 'general'}-${i}`;
        const answerId = `faq-answer-${category ? category.toLowerCase().replace(/\s+/g, '-') : 'general'}-${i}`;
        const isOpen = open === i;

        return (
          <AnimatedSection key={i} delay={i * 0.05}>
            <div className={styles.faqItem}>
              <button
                type="button"
                id={questionId}
                className={styles.faqQuestion}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                {item.q}
                <FiPlus className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`} />
              </button>
              <div
                id={answerId}
                className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}
                role="region"
                aria-labelledby={questionId}
                hidden={!isOpen}
              >
                <div className={styles.faqAnswerInner}>{item.a}</div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Common questions about Swalook, the salon CRM and management software built to help salons grow."
      />

      {/* Salon CRM and daily work */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <FAQAccordion items={crmFaqs} category="Salon CRM and Daily Work" />
        </div>
      </section>

      {/* Getting and keeping customers */}
      <section className={`${styles.faqSection} ${styles.faqSectionAlt}`}>
        <div className={styles.faqContainer}>
          <FAQAccordion items={growthFaqs} category="Getting and Keeping Customers" />
          <div className={styles.askBtn}>
            <Link href="/contact" className="btn btn-outline btn-sm">
              Have More Questions? <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* General FAQ */}
      <section className={styles.generalFaq}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">General</span>
            <h2 className="section-title">Getting Started with Swalook</h2>
          </AnimatedSection>
        </div>
        <StaggerContainer className={styles.generalFaqGrid}>
          {generalFaqs.map((faq) => (
            <StaggerItem key={faq.q}>
              <div className={styles.generalFaqCard}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className={styles.askBtn}>
          <Link href="/contact" className="btn btn-primary">
            Book a Demo <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}

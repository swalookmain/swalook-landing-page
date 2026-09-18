'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import {
  FiArrowRight, FiArrowDown, FiCheck, FiCheckCircle,
  FiLayout, FiCalendar, FiFileText, FiBarChart2, FiMessageSquare,
  FiPackage, FiUsers, FiDollarSign, FiHeart, FiDatabase, FiLayers,
  FiUserPlus, FiRepeat, FiMessageCircle, FiTarget, FiMapPin,
} from 'react-icons/fi';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import styles from './FeaturePage.module.css';

// Product and solution pages, used for the "Keep Exploring" links.
const allFeatures = [
  { href: '/salon-crm-features', title: 'Salon CRM', icon: <FiDatabase /> },
  { href: '/salon-management-software', title: 'Salon Management Software', icon: <FiLayers /> },
  { href: '/salon-appointment-scheduling-software', title: 'Appointments', icon: <FiCalendar /> },
  { href: '/salon-invoice-software', title: 'Billing & POS', icon: <FiFileText /> },
  { href: '/salon-inventory-management-software', title: 'Inventory', icon: <FiPackage /> },
  { href: '/salon-staff-attendance-software', title: 'Staff Management', icon: <FiUsers /> },
  { href: '/salon-analytics-software', title: 'Analytics', icon: <FiBarChart2 /> },
  { href: '/customer-acquisition', title: 'Customer Acquisition', icon: <FiUserPlus /> },
  { href: '/customer-retention', title: 'Customer Retention', icon: <FiRepeat /> },
  { href: '/whatsapp-marketing', title: 'WhatsApp Marketing', icon: <FiMessageCircle /> },
  { href: '/salon-marketing-templates', title: 'Salon Marketing', icon: <FiTarget /> },
  { href: '/salon-inquiry-management', title: 'Inquiry Management', icon: <FiMessageSquare /> },
  { href: '/multi-branch-salon-software', title: 'Multi-Branch', icon: <FiMapPin /> },
  { href: '/salon-loyalty-program-software', title: 'Customer Loyalty', icon: <FiHeart /> },
  { href: '/salon-expense-management-software', title: 'Expenses', icon: <FiDollarSign /> },
  { href: '/salon-dashboard-software', title: 'Dashboard', icon: <FiLayout /> },
];

// Default accent colors based on currentSlug
const defaultAccents = {
  'salon-dashboard-software': '#00BCD4',
  'salon-appointment-scheduling-software': '#6C63FF',
  'salon-invoice-software': '#4CAF50',
  'salon-analytics-software': '#FF9800',
  'salon-inquiry-management': '#26C6DA',
  'salon-inventory-management-software': '#8BC34A',
  'salon-staff-attendance-software': '#AB47BC',
  'salon-expense-management-software': '#EF5350',
  'salon-loyalty-program-software': '#EC407A',
  'salon-marketing-templates': '#42A5F5',
  'salon-management-software': '#0097A7',
  'whatsapp-marketing': '#128C7E',
  'customer-retention': '#E91E63',
  'customer-acquisition': '#5C6BC0',
  'multi-branch-salon-software': '#7E57C2',
};

export default function FeaturePage({
  icon,
  title,
  heroDesc,
  intro = [],
  whyTitle,
  whyDesc,
  featuresTitle = 'What You Can Do',
  keyFeatures = [],
  steps = [],
  stepsTitle = 'How It Works',
  flow = [],
  flowTitle = 'How It Works',
  compareTitle,
  compareDesc,
  withPoints = [],
  withCta,
  ctaTitle = 'Ready to Know Your Salon Better?',
  ctaLabel = 'Book a Demo',
  related,
  currentSlug,
  accentColor,
}) {
  const color = accentColor || defaultAccents[currentSlug] || '#00BCD4';
  const hasWhy = Boolean(whyTitle || whyDesc || intro.length > 0);
  const hasPoints = withPoints.length > 0;

  const relatedLinks = related && related.length > 0
    ? related.map((r) => ({
        href: r.href,
        title: r.label,
        icon: allFeatures.find((f) => f.href === r.href)?.icon || <FiArrowRight />,
      }))
    : allFeatures.filter((f) => f.href !== `/${currentSlug}`);

  return (
    <>
      {/* Hero */}
      <section className={styles.featureHero}>
        <div className={styles.featureHeroBg} />
        <div className={styles.featureHeroContent}>
          <AnimatedSection>
            <div
              className={styles.featureHeroIcon}
              style={{
                background: `${color}14`,
                color: color,
              }}
            >
              {icon}
            </div>
            <h1
              className={styles.featureHeroTitle}
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {title}
            </h1>
            {heroDesc && <p className={styles.featureHeroDesc}>{heroDesc}</p>}
          </AnimatedSection>
        </div>
      </section>

      {/* Intro / Why */}
      {hasWhy && (
        <section className={`${styles.whySection} ${whyTitle ? '' : styles.introOnly}`}>
          <AnimatedSection>
            <div className={styles.whyContent}>
              {whyTitle && <h2>{whyTitle}</h2>}
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {whyDesc && <p>{whyDesc}</p>}
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Key Features */}
      {keyFeatures.length > 0 && (
        <section className={styles.keyFeatures}>
          <div className="section-header">
            <AnimatedSection>
              <span className="section-label">Key Features</span>
              <h2 className="section-title">{featuresTitle}</h2>
            </AnimatedSection>
          </div>
          <StaggerContainer className={styles.featuresGrid}>
            {keyFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className={styles.fCard}>
                  <div className={styles.fCardIcon} style={{ color: color }}><FiCheckCircle /></div>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* Workflow steps (horizontal) */}
      {steps.length > 0 && (
        <section className={styles.flowSection}>
          <div className="section-header">
            <AnimatedSection>
              <span className="section-label">Workflow</span>
              <h2 className="section-title">{stepsTitle}</h2>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <ol className={styles.stepsRow}>
              {steps.map((s, i) => (
                <Fragment key={s}>
                  <li
                    className={styles.stepChip}
                    style={{ borderColor: `${color}55`, background: `${color}10`, color: color }}
                  >
                    <span className={styles.stepNum} style={{ background: color }}>{i + 1}</span>
                    {s}
                  </li>
                  {i < steps.length - 1 && (
                    <li className={styles.stepArrow} aria-hidden="true" style={{ color: color }}>
                      <FiArrowRight />
                    </li>
                  )}
                </Fragment>
              ))}
            </ol>
          </AnimatedSection>
        </section>
      )}

      {/* Flow (vertical) */}
      {flow.length > 0 && (
        <section className={styles.flowSection}>
          <div className="section-header">
            <AnimatedSection>
              <span className="section-label">Flow</span>
              <h2 className="section-title">{flowTitle}</h2>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <ol className={styles.flowCol}>
              {flow.map((s, i) => (
                <Fragment key={`${s}-${i}`}>
                  <li
                    className={styles.flowBox}
                    style={{ borderColor: `${color}55`, background: `${color}10`, color: color }}
                  >
                    {s}
                  </li>
                  {i < flow.length - 1 && (
                    <li className={styles.flowArrow} aria-hidden="true" style={{ color: color }}>
                      <FiArrowDown />
                    </li>
                  )}
                </Fragment>
              ))}
            </ol>
          </AnimatedSection>
        </section>
      )}

      {/* Compare Section */}
      {compareTitle && (
        <section className={styles.compareSection}>
          <AnimatedSection>
            <div className={styles.compareContent}>
              <h2>{compareTitle}</h2>
              <p>{compareDesc}</p>
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* With Swalook / CTA */}
      <section className={styles.withSection}>
        <div className="section-header">
          <AnimatedSection>
            <h2 className="section-title">{hasPoints ? 'With Swalook You Can:' : ctaTitle}</h2>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <div className={styles.withContent}>
            {hasPoints && (
              <div className={styles.withList}>
                {withPoints.map((p, i) => (
                  <div key={i} className={styles.withItem}>
                    <FiCheck className={styles.withIcon} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            )}
            {(withCta || !hasPoints) && (
              <p className={styles.withCta}>
                {withCta || 'See how Swalook can help you manage your salon, understand your customers, bring them back and find new ones.'}
              </p>
            )}
            <Link href="/contact" className="btn btn-primary btn-lg">
              {ctaLabel} <FiArrowRight />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Related */}
      <section className={styles.otherFeatures}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">Related</span>
            <h2 className="section-title">Keep Exploring</h2>
          </AnimatedSection>
        </div>
        <StaggerContainer className={related && related.length > 0 ? styles.relatedGrid : styles.otherGrid}>
          {relatedLinks.map((f) => (
            <StaggerItem key={f.href}>
              <Link href={f.href} className={styles.otherCard}>
                <span className={styles.otherIcon}>{f.icon}</span>
                {f.title}
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}

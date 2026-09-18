import Link from 'next/link';
import {
  FiLayout, FiCalendar, FiFileText, FiBarChart2, FiMessageSquare,
  FiPackage, FiUsers, FiArrowRight, FiCheckCircle, FiRepeat,
  FiUserPlus, FiStar, FiCheck, FiGitBranch,
} from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './About.module.css';

const PAGE_TITLE = 'About Swalook | The CRM Built to Grow Your Salon';
const PAGE_DESCRIPTION =
  'Swalook is salon CRM and management software built for salon owners who want more customers, more repeat visits and a clear view of customer value.';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/about',
    siteName: 'Swalook',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const salonWork = ['Customers', 'Staff', 'Appointments', 'Billing', 'Inventory'];

const swalookFeatures = [
  { icon: <FiUsers />, name: 'Salon CRM', desc: 'Manage customer profiles, history and activity.' },
  { icon: <FiCalendar />, name: 'Appointments', desc: 'Manage bookings, schedules and customer visits.' },
  { icon: <FiFileText />, name: 'Billing & POS', desc: 'Manage bills, payments, services and sales.' },
  { icon: <FiMessageSquare />, name: 'WhatsApp Follow-Ups', desc: 'Reach customers who need attention without manually sorting lists.' },
  { icon: <FiRepeat />, name: 'Customer Retention', desc: 'Find customers who are due, at risk or inactive.' },
  { icon: <FiUserPlus />, name: 'New Customer Acquisition', desc: 'Use Google and Meta to help bring in new customers.' },
  { icon: <FiPackage />, name: 'Inventory', desc: 'Track products, stock and purchases.' },
  { icon: <FiCheckCircle />, name: 'Staff & Attendance', desc: 'Manage staff, attendance and performance.' },
  { icon: <FiBarChart2 />, name: 'Analytics', desc: 'See your sales, customers, services and business performance.' },
  { icon: <FiGitBranch />, name: 'Multi-Branch', desc: 'Manage multiple locations and compare performance.' },
];

const crmIdeas = [
  {
    title: 'Run Your Salon From One Place',
    desc: 'Appointments, billing, services and other salon activities create customer data. That data goes into the CRM.',
    icon: <FiLayout />,
  },
  {
    title: 'Know Which Customers Matter',
    desc: 'Use customer, appointment and billing data to understand customer value.',
    icon: <FiStar />,
  },
  {
    title: 'Bring Customers Back',
    desc: 'Use CRM data and WhatsApp to follow up with customers who are due, at risk or dormant.',
    icon: <FiRepeat />,
  },
  {
    title: 'Get More Customers',
    desc: 'Use CRM data and Google and Meta to support customer acquisition.',
    icon: <FiUserPlus />,
  },
];

const salonTypes = [
  { name: 'Independent salons.', desc: 'Manage customers, appointments and daily operations from one place.' },
  { name: 'Growing salons.', desc: 'Get better visibility into customers, staff and revenue.' },
  { name: 'Multi-branch salons.', desc: 'Manage multiple locations and compare performance.' },
];

const values = [
  {
    icon: <FiCheckCircle />,
    text: "Swalook is made for salon owners and salon teams. You shouldn't have to spend hours learning complicated software.",
  },
  {
    icon: <FiUsers />,
    text: 'Your customer data is at the centre of the platform. Know your customers before deciding what to do next.',
  },
  {
    icon: <FiBarChart2 />,
    text: "You don't need more numbers. You need answers.",
  },
  {
    icon: <FiCheck />,
    text: 'Swalook finds what needs attention. You review. You confirm.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="We Built Swalook for"
        highlight="Salon Owners Who Want to Grow"
        description="The CRM built to grow your salon. Get more customers. Understand their value. Bring them back."
      />

      {/* Our Story */}
      <section className={styles.companyInfo}>
        <div className={styles.companyGrid}>
          <AnimatedSection direction="left">
            <div className={styles.companyText}>
              <h3>Our Story</h3>
              <h2>Salon owners already have enough to manage.</h2>
              <ul className={styles.storyList} aria-label="What salon owners manage every day">
                {salonWork.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.storyLine}>And then there is the question every owner keeps asking:</p>
              <p className={styles.storyQuestion}>How do I get more customers and get them to come back?</p>
              <p className={styles.storyLine}>That&rsquo;s why we built Swalook around the customer.</p>
              <p className={styles.storyLine}>
                Every appointment, bill and visit adds information. Swalook brings that information together
                and helps you use it.
              </p>
              <p className={styles.storyHighlight}>
                Manage your salon. Understand your customers. Grow your business.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className={styles.companyImage}>
              <img
                src="/images/team-about.png"
                alt="Swalook team working together"
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-xl)' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CRM at the centre */}
      <section className={styles.milestonesSection}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">How Swalook Works</span>
            <h2 className="section-title">Everything Starts With Your CRM</h2>
            <p className="section-subtitle">
              Your everyday salon activity creates useful customer information.
            </p>
          </AnimatedSection>
        </div>
        <StaggerContainer className={styles.milestonesGrid}>
          {crmIdeas.map((m) => (
            <StaggerItem key={m.title}>
              <div className={styles.milestoneCard}>
                <div className={styles.milestoneIcon}>{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">Features</span>
            <h2 className="section-title">What Swalook Helps You Do</h2>
          </AnimatedSection>
        </div>
        <StaggerContainer className={styles.featuresGrid}>
          {swalookFeatures.map((f) => (
            <StaggerItem key={f.name}>
              <div className={styles.featureCard}>
                <div className={styles.featureCardIcon}>{f.icon}</div>
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/salon-crm-features" className="btn btn-primary btn-lg">
            Explore All Features <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Mission & who it is for */}
      <section className={styles.missionSection}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">Our Purpose</span>
          </AnimatedSection>
        </div>
        <StaggerContainer className={styles.missionGrid}>
          <StaggerItem>
            <div className={styles.missionCard}>
              <h3>Our Mission</h3>
              <p>
                Swalook helps salon owners understand their customers and use that information to grow the salon.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.missionCard}>
              <h3>Built for Salons That Want to Grow</h3>
              {salonTypes.map((t) => (
                <p key={t.name}>
                  <strong>{t.name}</strong> {t.desc}
                </p>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">Core Values</span>
            <h2 className="section-title">How We Build Swalook</h2>
          </AnimatedSection>
        </div>
        <StaggerContainer className={styles.valuesGrid}>
          {values.map((v) => (
            <StaggerItem key={v.text}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <p>{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className={styles.aboutCta}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 12 }}>
              Ready to Know Your Salon Better?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.7 }}>
              See how Swalook can help you manage your salon, understand your customers, bring them back and find new ones.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Demo <FiArrowRight />
            </Link>
            <p style={{ marginTop: 16, color: 'var(--text-tertiary)' }}>
              Manage your salon. Understand your customers. Grow your business.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

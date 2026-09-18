import Link from 'next/link';
import {
  FiLayout, FiCalendar, FiFileText, FiBarChart2, FiMessageSquare,
  FiPackage, FiUsers, FiDollarSign, FiHeart, FiArrowRight, FiCheckCircle,
  FiLayers, FiUserPlus, FiRepeat, FiMessageCircle, FiTarget, FiMapPin,
} from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './Features.module.css';

const path = '/salon-crm-features';
const title = 'Salon CRM Software for Salons | Customer Management | Swalook';
const description = 'Salon CRM software that keeps customer profiles, visits, services and spending in one place, so you can spot at-risk customers and follow up at the right time.';

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, siteName: 'Swalook', type: 'website', locale: 'en_IN', images: ['/swalook-logo.webp'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/swalook-logo.webp'] },
};

// Doc §21 sections
const crmSections = [
  { title: 'Customer Profiles', desc: 'Keep each customer\'s name, number and details in one profile.' },
  { title: 'Customer History', desc: 'See everything a customer has done with your salon.' },
  { title: 'Visit History', desc: 'Know when a customer last visited and how often they come.' },
  { title: 'Service History', desc: 'See which services each customer has taken.' },
  { title: 'Customer Spending', desc: 'See the total and average spend for every customer.' },
  { title: 'Customer Segmentation', desc: 'Group customers as new, repeat, at risk or dormant.' },
  { title: 'At-Risk Customers', desc: 'Find customers whose visits are slowing down.' },
  { title: 'Dormant Customers', desc: 'Find customers who haven\'t visited for a while.' },
  { title: 'Follow-Ups', desc: 'Find the customers who need a follow-up and reach them on WhatsApp.' },
  { title: 'Customer Value', desc: 'Identify customers who spend more or visit more often.' },
];

// Everything else in Swalook, connected to the CRM
const features = [
  { icon: <FiLayers />, title: 'Salon Management Software', href: '/salon-management-software', desc: 'Manage appointments, customers, billing, staff, inventory and salon operations from one platform.' },
  { icon: <FiCalendar />, title: 'Appointments', href: '/salon-appointment-scheduling-software', desc: 'Manage bookings, schedules and customer visits.' },
  { icon: <FiFileText />, title: 'Billing & POS', href: '/salon-invoice-software', desc: 'Manage bills, payments, services and sales.' },
  { icon: <FiPackage />, title: 'Inventory', href: '/salon-inventory-management-software', desc: 'Track products, stock and purchases.' },
  { icon: <FiUsers />, title: 'Staff Management', href: '/salon-staff-attendance-software', desc: 'Manage staff, attendance and performance.' },
  { icon: <FiBarChart2 />, title: 'Analytics', href: '/salon-analytics-software', desc: 'See your sales, customers, services and business performance.' },
  { icon: <FiUserPlus />, title: 'Customer Acquisition', href: '/customer-acquisition', desc: 'Use Google and Meta to help bring in new customers.' },
  { icon: <FiRepeat />, title: 'Customer Retention', href: '/customer-retention', desc: 'Find customers who are due, at risk or inactive.' },
  { icon: <FiMessageCircle />, title: 'WhatsApp Marketing', href: '/whatsapp-marketing', desc: 'Reach customers who need attention without manually sorting lists.' },
  { icon: <FiTarget />, title: 'Salon Marketing', href: '/salon-marketing-templates', desc: 'Run campaigns based on what you know about your customers.' },
  { icon: <FiMessageSquare />, title: 'Inquiry Management', href: '/salon-inquiry-management', desc: 'Track enquiries and follow up with potential customers.' },
  { icon: <FiMapPin />, title: 'Multi-Branch', href: '/multi-branch-salon-software', desc: 'Manage multiple locations and compare performance.' },
  { icon: <FiHeart />, title: 'Customer Loyalty', href: '/salon-loyalty-program-software', desc: 'Keep customers engaged and encourage repeat visits.' },
  { icon: <FiDollarSign />, title: 'Expenses', href: '/salon-expense-management-software', desc: 'Track expenses, purchases and payment history.' },
  { icon: <FiLayout />, title: 'Dashboard', href: '/salon-dashboard-software', desc: 'See how your salon is doing at a glance.' },
];

// Rule 43 internal links
const related = [
  { icon: <FiRepeat />, label: 'Customer Retention', href: '/customer-retention' },
  { icon: <FiMessageCircle />, label: 'WhatsApp Marketing', href: '/whatsapp-marketing' },
  { icon: <FiUserPlus />, label: 'Customer Acquisition', href: '/customer-acquisition' },
  { icon: <FiBarChart2 />, label: 'Analytics', href: '/salon-analytics-software' },
  { icon: <FiLayers />, label: 'Salon Management Software', href: '/salon-management-software' },
];

export default function SalonCrmFeaturesPage() {
  return (
    <>
      <PageHero
        label="Salon CRM"
        title="Salon CRM Software That Helps You"
        highlight="Understand Your Customers"
        description="Keep customer profiles, appointments, services, visit history and billing information together in one salon CRM."
      />

      {/* Intro */}
      <section className={styles.introSection}>
        <AnimatedSection>
          <div className={styles.introContent}>
            <p>
              Swalook helps you see what&apos;s happening with your customers and take action when it matters.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* CRM sections */}
      <section className={styles.crmSection}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">Salon CRM</span>
            <h2 className="section-title">What&apos;s in Your Salon CRM</h2>
          </AnimatedSection>
        </div>
        <StaggerContainer className={styles.crmGrid}>
          {crmSections.map((s) => (
            <StaggerItem key={s.title}>
              <div className={styles.crmCard}>
                <div className={styles.crmCardIcon}><FiCheckCircle /></div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Feature Grid */}
      <section className={styles.featuresSection}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">Built Around Your CRM</span>
            <h2 className="section-title">Everything Connects to Your CRM</h2>
            <p className="section-subtitle">Your everyday salon activity creates useful customer information.</p>
          </AnimatedSection>
        </div>
        <StaggerContainer className={styles.featuresGrid}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <Link href={f.href} style={{ display: 'block' }}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                  <span className={styles.learnBtn}>
                    Learn More <FiArrowRight />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className={styles.withSection}>
        <div className="section-header">
          <AnimatedSection>
            <h2 className="section-title">Ready to Know Your Salon Better?</h2>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <div className={styles.withContent}>
            <p className={styles.withCta}>
              See how Swalook can help you manage your salon, understand your customers, bring them back and find new ones.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Demo <FiArrowRight />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Related */}
      <section className={styles.relatedSection}>
        <div className="section-header">
          <AnimatedSection>
            <span className="section-label">Related</span>
            <h2 className="section-title">Keep Exploring</h2>
          </AnimatedSection>
        </div>
        <StaggerContainer className={styles.relatedGrid}>
          {related.map((r) => (
            <StaggerItem key={r.href}>
              <Link href={r.href} className={styles.relatedCard}>
                <span className={styles.relatedIcon}>{r.icon}</span>
                {r.label}
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiAlertCircle,
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiBell,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiDatabase,
  FiDollarSign,
  FiFileText,
  FiGlobe,
  FiHeart,
  FiMail,
  FiMessageCircle,
  FiMessageSquare,
  FiMoon,
  FiPackage,
  FiPlus,
  FiRepeat,
  FiSmile,
  FiStar,
  FiTarget,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import styles from './Home.module.css';

const heroHighlights = ['Salon CRM', 'Appointments', 'Billing','Inventory','Staff','Attendance','Automated WhatsApp','Google Ads','Meta Ads','Automated Marketing', 'Analytics'];

const customerTypes = [
  { icon: <FiUserPlus />, title: 'New Customers', desc: 'See how many new customers your salon is getting.' },
  { icon: <FiRepeat />, title: 'Repeat Customers', desc: 'Know who is coming back and how often.' },
  { icon: <FiAlertCircle />, title: 'At-Risk Customers', desc: 'Find customers whose visits are slowing down.' },
  { icon: <FiMoon />, title: 'Dormant Customers', desc: 'Find customers who haven\'t visited for a while.' },
];

const customerProfileFields = [
  'Last Visit',
  'Total Visits',
  'Services',
  'Total Spend',
  'Average Spend',
  'Appointment History',
  'Customer Status',
];

const followUpCards = [
  { icon: <FiCalendar />, title: 'Due for a Visit', desc: 'Find customers who may be ready for their next service.' },
  { icon: <FiAlertCircle />, title: 'At Risk', desc: 'Find customers whose visit pattern is changing.' },
  { icon: <FiMoon />, title: 'Dormant', desc: 'Find customers who haven\'t visited recently.' },
  { icon: <FiUserPlus />, title: 'First-Time Customers', desc: 'Follow up after a customer\'s first visit.' },
  { icon: <FiStar />, title: 'High-Value Customers', desc: 'Identify customers who spend more or visit more often.' },
];

const whyReasons = [
  { icon: <FiDatabase />, title: 'One Customer Database', desc: 'Keep customer information, appointments, services and billing together.' },
  { icon: <FiTarget />, title: 'Built Around Your CRM', desc: 'Your customer data is at the centre of the platform.' },
  { icon: <FiMessageCircle />, title: 'WhatsApp Follow-Ups', desc: 'Reach customers who need attention without manually sorting lists.' },
  { icon: <FiRepeat />, title: 'Customer Retention', desc: 'Find customers who are due, at risk or inactive.' },
  { icon: <FiUserPlus />, title: 'New Customer Acquisition', desc: 'Use Google and Meta to help bring in new customers.' },
  { icon: <FiSmile />, title: 'Simple to Use', desc: 'Your team can use it without needing to be tech experts.' },
];

const featureGroups = [
  { icon: <FiUsers />, title: 'Salon CRM', desc: 'Keep customer profiles, visits, services and spending in one place.', link: '/salon-crm-features' },
  { icon: <FiCalendar />, title: 'Appointments', desc: 'Schedule, confirm, reschedule, and reduce booking confusion.', link: '/salon-appointment-scheduling-software' },
  { icon: <FiFileText />, title: 'Billing & POS', desc: 'Create fast bills, manage payments, and keep billing accurate.', link: '/salon-invoice-software' },
  { icon: <FiMessageSquare />, title: 'Inquiries & Leads', desc: 'Track every lead, follow up faster, and convert more enquiries.', link: '/salon-inquiry-management' },
  { icon: <FiPackage />, title: 'Inventory', desc: 'Monitor stock, usage, and replenishment before products run out.', link: '/salon-inventory-management-software' },
  { icon: <FiUserCheck />, title: 'Staff & Attendance', desc: 'Track attendance, shifts, and staff performance in one place.', link: '/salon-staff-attendance-software' },
  { icon: <FiDollarSign />, title: 'Expenses & Purchasing', desc: 'Track expenses, purchases, and costs to protect margins.', link: '/salon-expense-management-software' },
  { icon: <FiHeart />, title: 'Customer Loyalty', desc: 'Build repeat visits with rewards, combos, and special offers.', link: '/salon-loyalty-program-software' },
  { icon: <FiMessageCircle />, title: 'WhatsApp Automation', desc: 'Send follow-ups and campaigns to the right customers on WhatsApp.', link: '/whatsapp-marketing' },
  { icon: <FiMail />, title: 'Marketing', desc: 'Run campaigns based on your customers instead of one offer for everyone.', link: '/salon-marketing-templates' },
  { icon: <FiGlobe />, title: 'Google & Meta', desc: 'Use your customer data to help bring in new customers.', link: '/customer-acquisition' },
  { icon: <FiBarChart2 />, title: 'Analytics', desc: 'See sales, customers, services and daily performance at a glance.', link: '/salon-analytics-software' },
];

const retentionItems = [
  { icon: <FiUserPlus />, title: 'First Visit', desc: 'Follow up after a customer\'s first visit.' },
  { icon: <FiCalendar />, title: 'Next Visit', desc: 'Remind them when their next service is due.' },
  { icon: <FiRepeat />, title: 'Regular Customer', desc: 'Keep them coming back with offers and loyalty.' },
  { icon: <FiAward />, title: 'Loyal Customer', desc: 'Know your best customers and look after them.' },
];

const noShowItems = [
  { icon: <FiBell />, title: 'Automated reminders', desc: 'Send appointment reminders before visits so customers do not forget.' },
  { icon: <FiCalendar />, title: 'Easy confirmations', desc: 'Let customers confirm or reschedule quickly to protect your calendar.' },
  { icon: <FiClock />, title: 'Timely follow-up', desc: 'Nudge clients before and after appointments to keep the schedule full.' },
  { icon: <FiCheckCircle />, title: 'Better front-desk visibility', desc: 'Help your team manage the day with clear booking and status updates.' },
];

const useCases = [
  {
    title: 'Independent Salons',
    desc: 'Manage customers, appointments and daily operations from one place.',
    image: '/images/feature-appointments.png',
  },
  {
    title: 'Growing Salons',
    desc: 'Get better visibility into customers, staff and revenue.',
    image: '/images/feature-marketing.png',
  },
  {
    title: 'Multi-Branch Salons',
    desc: 'Manage multiple locations and compare performance.',
    image: '/images/feature-profiles.png',
  },
];

const faqItems = [
  { q: 'What is Swalook?', a: 'Swalook is salon management software with a built-in CRM that helps you manage your salon, understand your customers and take action.' },
  { q: 'How does Swalook help bring customers back?', a: 'Swalook uses your CRM data to find customers who are due for a visit, at risk or dormant, and helps you reach them through WhatsApp.' },
  { q: 'Can Swalook help me get new customers?', a: 'Yes. Swalook connects your CRM with Google and Meta so your customer information can help guide your acquisition efforts.' },
  { q: 'Do I need to be good with technology to use Swalook?', a: 'No. Swalook finds the customers who need attention. You review what is happening and click to confirm the action.' },
  { q: 'Does Swalook work for multi-branch salons?', a: 'Yes. You can manage multiple locations and compare how each branch is performing.' },
  { q: 'Can I see Swalook before deciding?', a: 'Yes. Book a demo and we\'ll show you how Swalook can help you manage your customers, simplify daily work and grow your business.' },
];

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`${styles.sectionHeading} ${align === 'left' ? styles.sectionHeadingLeft : ''}`}>
      <AnimatedSection>
        {eyebrow ? <span className="section-label">{eyebrow}</span> : null}
        <h2 className="section-title">{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </AnimatedSection>
    </div>
  );
}


function InfoCard({ icon, title, desc }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function FAQItem({ question, answer, id, open, onToggle }) {
  const buttonId = `faq-question-${id}`;
  const panelId = `faq-answer-${id}`;

  return (
    <div className={styles.faqItem}>
      <button
        type="button"
        id={buttonId}
        className={styles.faqQuestion}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{question}</span>
        <FiPlus className={`${styles.faqIcon} ${open ? styles.faqIconOpen : ''}`} />
      </button>
      <div
        id={panelId}
        className={`${styles.faqAnswer} ${open ? styles.faqAnswerOpen : ''}`}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <div className={styles.faqAnswerInner}>{answer}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true">
          <span className={styles.heroOrbOne} />
          <span className={styles.heroOrbTwo} />
          <span className={styles.heroGrid} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <AnimatedSection className={styles.heroCopy} direction="left">
              <h1 className={styles.heroTitle}>
                Salon Management Software That Helps You Grow
              </h1>
              <div className={styles.heroDescGroup}>
                <p className={styles.heroDesc}>
                  Running a salon is more than appointments and billing.
                </p>  
                <p className={styles.heroDesc}>
                  Swalook helps you get new customers, bring old customers back, understand your customers, and manage your salon automatically - All in one place.                
                </p>
                <p className={styles.heroDesc}>
                  Running a salon is more than appointments and billing.
                </p>
              </div>

              <div className={styles.heroActions}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Book a Demo <FiArrowRight />
                </Link>
                <Link href="#how-it-works" className="btn btn-outline btn-lg">
                  See How It Works
                </Link>
              </div>

              <div className={styles.heroTrustStrip}>
                {heroHighlights.map((item) => (
                  <div key={item} className={styles.heroTrustItem}>
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className={styles.heroVisualWrap} direction="right">
              <div className={styles.heroVisual}>
                <div className={styles.heroVisualFrame}>
                  <div className={styles.heroDeviceBar}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.heroDeviceBody}>
                    <div className={styles.heroDeviceHeader}>
                      <div>
                        <p className={styles.visualKicker}>Swalook CRM</p>
                        <h3>Customers who need attention</h3>
                      </div>
                      <span className={styles.visualStatus}>Today</span>
                    </div>

                    <div className={styles.heroMetricRow}>
                      <div className={styles.heroMetric}>
                        <span><FiCalendar /></span>
                        <p>Due for a visit</p>
                      </div>
                      <div className={styles.heroMetric}>
                        <span><FiAlertCircle /></span>
                        <p>At risk</p>
                      </div>
                      <div className={styles.heroMetric}>
                        <span><FiMoon /></span>
                        <p>Dormant</p>
                      </div>
                    </div>

                    <div className={styles.heroPanel}>
                      <div className={styles.panelHeader}>
                        <h4>Review. Click. Confirm.</h4>
                        <span>WhatsApp follow-ups</span>
                      </div>
                      <div className={styles.panelList}>
                        <div>
                          <FiCheckCircle />
                          <span>Customers found from your CRM</span>
                        </div>
                        <div>
                          <FiCheckCircle />
                          <span>Follow-up messages ready to review</span>
                        </div>
                        <div>
                          <FiCheckCircle />
                          <span>Confirm and send on WhatsApp</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.routeSection}>
        <div className={styles.sectionShell}>
          <SectionHeading
            eyebrow="The Customer Problem"
            title="Getting Customers Is Hard. Losing Them Is Easier."
          />
          <AnimatedSection>
            <div className={styles.problemCopy}>
              <p>You spend money and time getting a customer into your salon.</p>
              <p>Then they leave.</p>
              <p>Some come back. Some don&apos;t.</p>
              <p>Some become regular customers. Some disappear after one visit.</p>
              <p>Most salon owners don&apos;t have the time to keep track of all of this manually.</p>
              <p className={styles.problemCopyLead}>
                Swalook helps you keep track of what is happening with your customers and gives you the tools to act.
              </p>
            </div>
          </AnimatedSection>
          <StaggerContainer className={styles.whyGrid}>
            {customerTypes.map((item) => (
              <StaggerItem key={item.title}>
                <InfoCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="how-it-works" className={styles.aboutSection}>
        <div className={styles.sectionShell}>
          <div className={styles.aboutGrid}>
            <AnimatedSection direction="left">
              <div className={styles.aboutImage}>
                <Image
                  src="/images/feature-profiles.png"
                  alt="Swalook salon CRM customer profile with visit history"
                  width={600}
                  height={600}
                  className={styles.aboutImg}
                  priority={false}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className={styles.aboutContent}>
                <span className="section-label">Salon CRM</span>
                <h2>Your Salon CRM Should Do More Than Store Customer Details</h2>
                <p>A customer name and phone number are not enough.</p>
                <p>
                  Your salon CRM should tell you about the customer&apos;s visits, services, spending and history.
                  Swalook brings this information together in one place.
                </p>
                <div className={styles.heroTrustStrip}>
                  {customerProfileFields.map((field) => (
                    <div key={field} className={styles.heroTrustItem}>
                      {field}
                    </div>
                  ))}
                </div>
                <p className={styles.aboutHighlight}>Know your customers before deciding what to do next.</p>
                <div className={styles.aboutActions}>
                  <Link href="/contact" className="btn btn-primary">
                    Book a Demo
                  </Link>
                  <Link href="/salon-crm-features" className="btn btn-outline">
                    Explore Salon CRM
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.provideSection}>
        <div className={styles.sectionShell}>
          <SectionHeading
            eyebrow="Follow-Ups"
            title="Stop Trying to Remember Who Needs a Follow-Up"
            subtitle="You probably have customers who are due for their next visit. You probably also have customers who haven't visited in months. The problem is finding them. Swalook uses your CRM data to identify these customers and helps you reach them through WhatsApp."
          />
          <StaggerContainer className={styles.whyGrid}>
            {followUpCards.map((item) => (
              <StaggerItem key={item.title}>
                <InfoCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2}>
            <div className={styles.sectionNote}>
              <strong className={styles.sectionNoteTitle}>Review. Click. Confirm.</strong>
              <p>You don&apos;t have to become a technology expert.</p>
              <Link href="/whatsapp-marketing" className="btn btn-outline">
                See WhatsApp Automation <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.sectionShell}>
          <SectionHeading
            eyebrow="Why Swalook"
            title="Why Salon Owners Choose Swalook"
          />
          <StaggerContainer className={styles.whyGrid}>
            {whyReasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <InfoCard {...reason} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.sectionShell}>
          <SectionHeading
            eyebrow="Features"
            title="Everything You Need to Run and Grow Your Salon"
          />
          <StaggerContainer className={styles.servicesGrid}>
            {featureGroups.map((feature) => (
              <StaggerItem key={feature.title}>
                <Link href={feature.link} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <span className={styles.serviceLink}>Learn More <FiArrowRight /></span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.mobileAppSection}>
        <div className={styles.sectionShell}>
          <SectionHeading
            eyebrow="Customer Retention"
            title="Turn More First-Time Customers Into Repeat Customers"
            subtitle="Getting a new customer is only the first step. The next question is simple: Will they come back?"
            align="left"
          />

          <div className={styles.splitGrid}>
            <AnimatedSection direction="left">
              <div className={styles.splitMedia}>
                <Image
                  src="/images/feature-marketing.png"
                  alt="Swalook customer retention and follow-up dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className={styles.splitMediaImage}
                />
              </div>
            </AnimatedSection>

            <StaggerContainer className={styles.featureList}>
              {retentionItems.map((item) => (
                <StaggerItem key={item.title}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureItemIcon}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <AnimatedSection delay={0.2}>
            <p className={styles.sectionNote}>
              Swalook helps you identify customers who are due, at risk or inactive so you can take action at the right time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.sectionShell}>
          <SectionHeading
            eyebrow="No-Shows"
            title="Reduce No-Shows and Keep Your Calendar Full"
            subtitle="Missed appointments mean empty slots and lost revenue. Use automated reminders and confirmations to reduce avoidable no-shows and keep customers informed about their appointments."
          />

          <div className={styles.splitGrid}>
            <StaggerContainer className={styles.testimonialGrid}>
              {noShowItems.map((item) => (
                <StaggerItem key={item.title}>
                  <div className={styles.testimonialCard}>
                    <div className={styles.testimonialIcon}>{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection direction="right">
              <div className={styles.splitMedia}>
                <Image
                  src="/images/feature-appointments.png"
                  alt="Appointment reminder and confirmation workflow visual for Swalook"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className={styles.splitMediaImage}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.featuresOverview}>
        <div className={styles.sectionShell}>
          <SectionHeading
            eyebrow="Who It's For"
            title="Built for Salons That Want to Grow"
          />
          <div className={styles.featureRows}>
            {useCases.map((item, i) => (
              <div key={item.title} className={`${styles.featureRow} ${i % 2 !== 0 ? styles.featureRowReverse : ''}`}>
                <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={styles.featureImageBox}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className={styles.featureImage}
                      priority={i === 0}
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection direction={i % 2 === 0 ? 'right' : 'left'}>
                  <div className={styles.featureTextBox}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.sectionShell}>
          <AnimatedSection>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIntro}>
                <span className="section-label">Get more customers. Understand their value. Bring them back.</span>
                <h2>Ready to Know Your Salon Better?</h2>
                <p>
                  See how Swalook can help you manage your salon, understand your customers, bring them back and find new ones.
                </p>
              </div>

              <div className={styles.ctaGrid}>
                <div className={styles.ctaBenefit}>
                  <FiUserPlus />
                  <div>
                    <h3>Get more customers</h3>
                    <p>Use CRM data and Google/Meta to support customer acquisition.</p>
                  </div>
                </div>
                <div className={styles.ctaBenefit}>
                  <FiRepeat />
                  <div>
                    <h3>Bring customers back</h3>
                    <p>Use CRM data and WhatsApp to follow up with customers who are due, at risk or dormant.</p>
                  </div>
                </div>
                <div className={styles.ctaBenefit}>
                  <FiStar />
                  <div>
                    <h3>Know which customers matter</h3>
                    <p>Use customer, appointment and billing data to understand customer value.</p>
                  </div>
                </div>
              </div>

              <div className={styles.ctaActions}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Book a Demo <FiArrowRight />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.faqPreview}>
        <div className={styles.sectionShell}>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <div className={styles.faqList}>
            {faqItems.map((item, i) => (
              <AnimatedSection key={item.q} delay={i * 0.05}>
                <FAQItem
                  id={i}
                  question={item.q}
                  answer={item.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </AnimatedSection>
            ))}
            <div className={styles.faqMoreLink}>
              <Link href="/faq" className="btn btn-outline">
                More Questions <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

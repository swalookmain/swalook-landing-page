import Image from 'next/image';
import Link from 'next/link';
import { TrackedButton, TrackedAnchor } from './TrackedButton';
import styles from './page.module.css';

const path = '/salon-membership-software';
const title = 'Salon Membership Software for Plans and Renewals | Swalook';
const description = 'Create salon membership plans, manage benefits, track usage and renewals, and keep every membership connected to customer CRM and billing data.';

export const metadata = {
  title,
  description,
  alternates: { canonical: `https://swalook.in${path}` },
  openGraph: { title, description, url: `https://swalook.in${path}`, siteName: 'Swalook', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title, description },
};

const faqs = [
  { q: "How does salon membership software work?", a: "Salon membership software allows you to create flexible membership plans where customers pay a recurring fee or upfront amount for specific benefits, services, or discounts, helping you build predictable revenue." },
  { q: "Can I connect membership plans to my existing salon CRM?", a: "Yes, Swalook connects membership details directly with your customer profile, visits, and billing activity, giving your team a complete view of the customer's relationship with your salon." },
  { q: "What types of membership plans can I create?", a: "You can create service memberships, discount memberships, prepaid value memberships, visit packages, tiered memberships, and even family or group memberships to suit your salon's needs." },
  { q: "Is it possible to track membership usage and renewals?", a: "Absolutely. You can track the full lifecycle of a membership, including plan usage, remaining benefits, and upcoming renewals, directly from the customer record." },
  { q: "What is the difference between a membership and a loyalty program?", a: "A membership requires a defined commitment (like an upfront payment or subscription) for guaranteed benefits, while a loyalty program rewards past behavior over time. Both can be used together effectively." },
  { q: "Can I use membership data for customer communication?", a: "Yes, because membership data is linked to the CRM, you can send targeted, timely communications for upcoming renewals, unused benefits, or special member-only offers." },
  { q: "Does Swalook provide reporting for membership programs?", a: "Yes, Swalook offers comprehensive reporting so you can track active memberships, revenue generated, utilization rates, and overall program health to measure your success." }
];

export default function SalonMembershipSoftwarePage() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Turn Regular Customers Into Members</h1>
        <p>Create flexible membership plans, give customers clear benefits and manage every membership from the same system you use for customer profiles, visits and billing.</p>
        <div className={styles.heroButtons}>
          <TrackedButton href="/contact" className={styles.btnPrimary} eventName="book_demo_click" eventParams={{ page_path: path, section: 'hero', link_destination: '/contact' }}>
            Book a Demo
          </TrackedButton>
          <TrackedAnchor href="#lifecycle" className={styles.btnSecondary} eventName="membership_how_it_works_click" eventParams={{ page_path: path, section: 'hero' }}>
            See How Membership Works
          </TrackedAnchor>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image src="/images/membership-dashboard.png" alt="Swalook membership dashboard showing active members and membership status" width={1200} height={675} className={styles.heroImage} priority />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Give Customers a Clear Reason to Return</h2>
        <div className={styles.sectionIntro}>
          <p>A membership turns an occasional visit into an ongoing relationship. Customers receive benefits they understand and can use. Your salon gains a structured way to encourage repeat visits, plan future revenue and recognise its most committed customers.</p>
          <p style={{ marginTop: '16px' }}>Swalook keeps the membership connected to the customer record. Your team can see the plan, status, benefits, usage and renewal information without maintaining a separate spreadsheet or switching between systems.</p>
        </div>
        
        <div className={styles.benchmark}>
          <h3>Membership Growth Across the Salon Industry</h3>
          <p>Industry benchmark, not a Swalook customer result: Zenoti&apos;s 2026 Salon Benchmark Report found that North American salons with membership programmes grew revenue and retained existing guests at four times the rate of salons without memberships. Full service salons recorded 36 percent year over year growth in membership sales. Results depend on pricing, services, customer demand and how the programme is operated.</p>
          <p style={{ fontSize: '0.85rem' }}>
            <a href="https://www.zenoti.com/2026-beauty-and-wellness-benchmark-report-salon-edition-ungated" target="_blank" rel="noopener noreferrer">Source: Zenoti 2026 Beauty and Wellness Benchmark Report, Salon Edition</a>
          </p>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--bg-soft)' }}>
        <h2>Create Memberships That Fit Your Salon</h2>
        <p className={styles.sectionIntro}>Choose the structure, price, validity period and benefits that suit your salon. Swalook helps your team sell the plan, connect it to the customer and track it through its lifecycle.</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Service membership</h3>
            <p>The member receives one or more specified services during each membership period. Example: One haircut or one grooming service each month.</p>
          </div>
          <div className={styles.card}>
            <h3>Discount membership</h3>
            <p>The member receives an agreed discount on eligible services or products. Example: Ten percent off selected services for twelve months.</p>
          </div>
          <div className={styles.card}>
            <h3>Prepaid value membership</h3>
            <p>The customer pays in advance and uses the stored membership value over time. Example: Pay ₹12,000 and use the value against eligible salon services.</p>
          </div>
          <div className={styles.card}>
            <h3>Visit or package membership</h3>
            <p>The plan includes a defined number of visits or services within a period. Example: Six hair spa sessions valid for six months.</p>
          </div>
          <div className={styles.card}>
            <h3>Tiered membership</h3>
            <p>Different levels provide different benefits, limits or service access. Example: Silver, Gold and Platinum plans.</p>
          </div>
          <div className={styles.card}>
            <h3>Family or group membership</h3>
            <p>Approved benefits can be shared across linked customers where the salon permits it. Example: A family plan covering up to four named members.</p>
          </div>
        </div>
      </section>

      <section id="lifecycle" className={`${styles.section} ${styles.lifecycle}`}>
        <h2>Manage the Full Membership Lifecycle</h2>
        <div className={styles.steps}>
          {['Create', 'Sell', 'Activate', 'Apply', 'Track', 'Renew'].map((step, i) => (
            <div key={step} className={styles.step}>
              <span className={styles.stepNum}>{i + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Keep Every Membership Connected to the Customer CRM</h2>
        <p className={styles.sectionIntro}>Membership information is most useful when it sits beside the customer&apos;s actual salon history. Swalook connects membership details with the customer profile, visits and billing activity so the team can understand both the plan and the relationship behind it.</p>
        <div className={styles.list}>
          <ul>
            <li>View active memberships directly on the customer profile</li>
            <li>Apply membership benefits or discounts smoothly during checkout</li>
            <li>Track which services have been redeemed and what benefits remain</li>
            <li>Monitor visit frequency and spending history alongside membership usage</li>
            <li>Identify when a membership is due for renewal before the customer visits</li>
          </ul>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--bg-section-alt)' }}>
        <h2>Membership and Loyalty Serve Different Purposes</h2>
        <p className={styles.sectionIntro}>Membership creates a defined commitment. Loyalty rewards behaviour over time. A salon can use either approach or combine them when the rules and customer value are clear.</p>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Membership</th>
                <th>Loyalty Program</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Commitment</strong></td>
                <td>Upfront payment or recurring fee</td>
                <td>Free to join, rewards based on visits or spend</td>
              </tr>
              <tr>
                <td><strong>Benefits</strong></td>
                <td>Guaranteed, immediate benefits or services</td>
                <td>Earned over time (points or rewards)</td>
              </tr>
              <tr>
                <td><strong>Revenue</strong></td>
                <td>Predictable, recurring revenue</td>
                <td>Encourages repeat visits and higher spend</td>
              </tr>
              <tr>
                <td><strong>Focus</strong></td>
                <td>Retention through structured plans</td>
                <td>Retention through continuous engagement</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            Used together, membership gives customers an immediate reason to stay connected while loyalty recognises their continued engagement. <Link href="/salon-loyalty-program-software" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Learn more about loyalty programs.</Link>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Use Membership Data in Customer Communication</h2>
        <p className={styles.sectionIntro}>Membership should not depend on the front desk remembering every date and benefit. Use the information already connected to the customer to support timely, relevant communication.</p>
        <div className={styles.list}>
          <ul>
            <li>Send a welcome message outlining the membership benefits</li>
            <li>Notify customers when new benefits or services become available</li>
            <li>Remind members of unused benefits before they expire</li>
            <li>Send renewal notices in advance of the membership end date</li>
            <li>Offer membership upgrades or renewals based on their usage history</li>
            <li>Target non-members with promotional offers to join a plan</li>
          </ul>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--bg-soft)' }}>
        <h2>See What Is Happening Across Your Memberships</h2>
        <p className={styles.sectionIntro}>Give salon owners and managers a practical view of the programme. Track the health of the membership base, plan usage and renewal activity from information connected to the customer record.</p>
        
        <div className={styles.grid} style={{ marginBottom: '48px' }}>
          <div className={styles.card}>
            <h3>Membership Reports answer:</h3>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <li>How many active memberships do we have?</li>
              <li>Which membership plans are the most popular?</li>
              <li>What is the revenue generated from memberships this month?</li>
              <li>How often are members using their benefits?</li>
              <li>Which memberships are due for renewal soon?</li>
              <li>What is our membership retention rate?</li>
            </ul>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <h3 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '1.5rem', color: 'var(--text-heading)' }}>Possible Business Outcomes</h3>
          <p style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--text-secondary)' }}>These are outcomes a salon can measure. They are not guaranteed results and should not be presented with a percentage or monetary improvement unless Swalook has supporting customer evidence.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Outcome</th>
                <th>How to Measure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Increased Visit Frequency</td>
                <td>Track average visits per month for members vs non-members</td>
              </tr>
              <tr>
                <td>Predictable Cash Flow</td>
                <td>Monitor recurring revenue from active memberships</td>
              </tr>
              <tr>
                <td>Higher Customer Retention</td>
                <td>Compare retention rates of members versus non-members</td>
              </tr>
              <tr>
                <td>Greater Service Utilisation</td>
                <td>Track the redemption rate of membership benefits</td>
              </tr>
              <tr>
                <td>Improved Upselling</td>
                <td>Measure additional spending by members beyond their plan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqs.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />
      </section>

      <section className={`${styles.section} ${styles.cta}`}>
        <h2>Build a Membership Programme Around the Customers You Already Know</h2>
        <p className={styles.sectionIntro} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          Create plans, manage member benefits, track activity and prepare renewals from the same platform that connects your customer, visit and billing data.
        </p>
        <TrackedButton href="/contact" className={styles.btnPrimary} style={{ background: 'var(--bg-white)', color: 'var(--primary)' }} eventName="book_demo_click" eventParams={{ page_path: path, section: 'footer_cta', link_destination: '/contact' }}>
          Book a Demo
        </TrackedButton>
      </section>
    </>
  );
}

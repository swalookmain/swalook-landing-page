'use client';
import Link from 'next/link';
import styles from '@/components/PolicyPage.module.css';

export default function CancellationPolicy() {
  return (
    <>
      {/* Branded Hero */}
      <section className={styles.policyHero}>
        <div className={styles.policyHeroContent}>
          <div className={styles.policyHeroBreadcrumb}>
            <Link href="/">Home</Link><span>/</span><span>Cancellation & Refund Policy</span>
          </div>
          <h1 className={styles.policyHeroTitle}>
            Cancellation & <span className={styles.policyHeroAccent}>Refund Policy</span>
          </h1>
          <p>Last updated: June 23, 2026</p>
        </div>
      </section>

      <div className={styles.policyPage}>
        <div className={styles.policyContainer}>
          <div className={styles.policyContent}>

            <p>
              This Cancellation & Refund Policy applies to all subscriptions and services provided by 
              <strong> SWALOOK GLOBAL PRIVATE LIMITED</strong> (&ldquo;Swalook,&rdquo; &ldquo;we,&rdquo; 
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Since Swalook is a digital SaaS platform and does 
              not sell physical goods, this policy covers subscription cancellations, refunds, and service 
              discontinuation.
            </p>

            <h2>1. Subscription Cancellation by You</h2>
            <ul>
              <li>You may cancel your Swalook subscription at any time through your account dashboard or by emailing <a href="mailto:info@swalook.in">info@swalook.in</a>.</li>
              <li>Cancellation takes effect at the end of your current billing cycle (monthly or annual). You will retain full access to the Service until the end of the paid period.</li>
              <li>No partial refunds are provided for unused days within a billing cycle, except as specified in Section 5 (Cooling-Off Period) or Section 7 (Service Downtime).</li>
            </ul>

            <h2>2. Refunds</h2>
            <ul>
              <li><strong>Monthly Subscriptions:</strong> No refunds for partial months. You may use the Service until the end of the paid month.</li>
              <li><strong>Annual Subscriptions:</strong> If you cancel within the first 14 days of your annual term, you are eligible for a pro-rata refund of the unused portion, minus a 10% processing fee. After 14 days, no refund is provided for annual plans, but access continues until the end of the billing period.</li>
              <li><strong>Add-on Services:</strong> One-time setup fees, onboarding fees, or add-on purchases are non-refundable once delivered.</li>
            </ul>

            <h2>3. Free Trial</h2>
            <ul>
              <li>If you are on a free trial, no payment is required. You may cancel at any time before the trial ends.</li>
              <li>If you do not cancel before the trial ends, you will be automatically converted to a paid subscription. You may cancel within 7 days of the first paid invoice for a full refund (cooling-off period).</li>
            </ul>

            <h2>4. Cancellation by Swalook</h2>
            <ul>
              <li>We reserve the right to suspend or terminate your account if you violate our <Link href="/terms-conditions">Terms & Conditions</Link>, fail to pay fees, or engage in fraudulent/illegal activity.</li>
              <li>In such cases, no refund will be provided for the remaining subscription period.</li>
              <li>We will provide written notice and a 7-day cure period where feasible before termination for breach.</li>
            </ul>

            <h2>5. Cooling-Off Period (New Subscribers)</h2>
            <p>
              In compliance with Indian consumer protection laws, new subscribers who purchase a paid plan for 
              the first time are entitled to a <strong>7-day cooling-off period</strong>. If you cancel within 
              7 days of your first payment, you will receive a full refund, no questions asked.
            </p>

            <h2>6. Refund Processing</h2>
            <ul>
              <li>Approved refunds will be processed within 7–10 business days.</li>
              <li>Refunds will be issued to the original payment method used during purchase.</li>
              <li>Refunds are processed in Indian Rupees (INR). Any currency conversion charges are non-refundable.</li>
            </ul>

            <h2>7. Service Downtime Refunds</h2>
            <ul>
              <li>If the Service experiences downtime exceeding 24 continuous hours due to our infrastructure failure (excluding scheduled maintenance), you may request a service credit equal to 5% of your monthly fee for each additional 24-hour period of downtime.</li>
              <li>Service credits are applied to future invoices and are not paid out as cash refunds.</li>
              <li>This does not apply to downtime caused by force majeure, third-party services, or your own internet connectivity issues.</li>
            </ul>

            <h2>8. Data Export After Cancellation</h2>
            <ul>
              <li>Upon cancellation, your access ends at the conclusion of the current billing period.</li>
              <li>You may request a data export of your Customer Data (appointments, client list, invoices, etc.) within 30 days of cancellation by emailing <a href="mailto:info@swalook.in">info@swalook.in</a>.</li>
              <li>After 90 days from cancellation, all your data will be permanently deleted from our systems unless retention is required by law.</li>
            </ul>

            <h2>9. Chargebacks and Disputes</h2>
            <p>
              If you initiate a chargeback or payment dispute with your bank or payment provider without first 
              contacting us to resolve the issue, your account will be immediately suspended. We will work with 
              you to resolve the dispute before reinstating access.
            </p>

            <h2>10. Contact Us</h2>
            <p>For cancellation requests, refund inquiries, or questions about this policy:</p>
            <ul>
              <li>Email: <a href="mailto:info@swalook.in">info@swalook.in</a></li>
              <li>Website: <a href="https://swalook.in">https://swalook.in</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

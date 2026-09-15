'use client';
import Link from 'next/link';
import styles from '@/components/PolicyPage.module.css';

export default function ShippingPolicy() {
  return (
    <>
      {/* Branded Hero */}
      <section className={styles.policyHero}>
        <div className={styles.policyHeroContent}>
          <div className={styles.policyHeroBreadcrumb}>
            <Link href="/">Home</Link><span>/</span><span>Shipping Policy</span>
          </div>
          <h1 className={styles.policyHeroTitle}>
            Shipping <span className={styles.policyHeroAccent}>Policy</span>
          </h1>
          <p>Last updated: June 23, 2026</p>
        </div>
      </section>

      <div className={styles.policyPage}>
        <div className={styles.policyContainer}>
          <div className={styles.policyContent}>

            <h2>1. No Physical Goods</h2>
            <p>
              Swalook is a Software-as-a-Service (SaaS) platform for salon and beauty business management. 
              We do not manufacture, store, or ship any physical goods. All services provided by Swalook are 
              delivered electronically via the internet through our website and mobile application.
            </p>

            <h2>2. Service Delivery</h2>
            <p>
              Upon successful registration and payment, you will receive immediate access to the Swalook 
              platform. Service delivery includes:
            </p>
            <ul>
              <li>Account activation and dashboard access within minutes of registration.</li>
              <li>Access to all features included in your selected subscription plan.</li>
              <li>Email confirmation with account details and next steps.</li>
              <li>Ongoing access during your active subscription period.</li>
            </ul>

            <h2>3. Access and Availability</h2>
            <ul>
              <li>The Service is delivered digitally — no physical installation or media is required.</li>
              <li>You can access the Service from any device with an internet connection and a modern web browser.</li>
              <li>Mobile access is available through our mobile application (downloadable from app stores).</li>
            </ul>

            <h2>4. Delivery Timeline</h2>
            <p>
              Since Swalook is a digital service, delivery is instantaneous upon subscription confirmation and 
              payment verification. There are no shipping charges, delivery delays, or logistics involved.
            </p>
            <ul>
              <li><strong>Self-serve signup:</strong> Access granted immediately after payment confirmation.</li>
              <li><strong>Demo-to-subscription:</strong> Access granted within 1 business hour of payment.</li>
              <li><strong>Enterprise onboarding:</strong> Timeline agreed upon during contract signing.</li>
            </ul>

            <h2>5. Taxes and Duties</h2>
            <p>
              As a digital service provider, applicable taxes (including GST) are applied at the point of sale 
              based on your billing address and the service location. No customs duties, import taxes, or shipping 
              fees apply since no physical goods are involved.
            </p>

            <h2>6. Contact Us</h2>
            <p>If you have any questions about this Shipping Policy:</p>
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

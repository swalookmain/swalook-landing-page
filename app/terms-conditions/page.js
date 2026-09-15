'use client';
import Link from 'next/link';
import styles from '@/components/PolicyPage.module.css';

export default function TermsConditions() {
  return (
    <>
      {/* Branded Hero */}
      <section className={styles.policyHero}>
        <div className={styles.policyHeroContent}>
          <div className={styles.policyHeroBreadcrumb}>
            <Link href="/">Home</Link><span>/</span><span>Terms & Conditions</span>
          </div>
          <h1 className={styles.policyHeroTitle}>
            Terms & <span className={styles.policyHeroAccent}>Conditions</span>
          </h1>
          <p>Last updated: June 23, 2026</p>
        </div>
      </section>

      <div className={styles.policyPage}>
        <div className={styles.policyContainer}>
          <div className={styles.policyContent}>

            <p>
              These Terms & Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the Swalook 
              platform, website, and mobile application (collectively, the &ldquo;Service&rdquo;) provided by 
              <strong> SWALOOK GLOBAL PRIVATE LIMITED</strong> (&ldquo;Swalook,&rdquo; &ldquo;we,&rdquo; 
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By registering for, accessing, or using the Service, 
              you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>

            <h2>1. Definitions</h2>
            <ul>
              <li><strong>&ldquo;Account&rdquo;</strong> means the registered account created by you to access the Service.</li>
              <li><strong>&ldquo;User,&rdquo; &ldquo;You,&rdquo; &ldquo;Your&rdquo;</strong> means the salon, spa, beauty business, or individual that registers for and uses the Service.</li>
              <li><strong>&ldquo;Customer Data&rdquo;</strong> means any data, information, or content you upload, store, or process using the Service, including client information, staff records, and business data.</li>
              <li><strong>&ldquo;Subscription Term&rdquo;</strong> means the period during which you have paid for access to the Service, as specified in your chosen plan.</li>
              <li><strong>&ldquo;Personal Data&rdquo;</strong> has the meaning assigned under the Digital Personal Data Protection Act, 2023.</li>
            </ul>

            <h2>2. Eligibility and Registration</h2>
            <ul>
              <li>You must be at least 18 years of age to use the Service.</li>
              <li>You represent that you are a legally operating business entity or an individual authorized to enter into this agreement.</li>
              <li>You agree to provide accurate, current, and complete registration information and keep it updated.</li>
              <li>You are responsible for all activity under your Account. Notify us immediately at <a href="mailto:info@swalook.in">info@swalook.in</a> if you suspect unauthorized use.</li>
            </ul>

            <h2>3. Subscription and Billing</h2>
            <ul>
              <li><strong>Plans:</strong> The Service is offered on a subscription basis. Details of available plans, pricing, and features are available on our website and may be updated from time to time.</li>
              <li><strong>Payment Terms:</strong> Subscription fees are billed in advance on a monthly or annual basis, as selected during registration. All fees are non-refundable except as expressly stated in our Cancellation & Refund Policy.</li>
              <li><strong>Taxes:</strong> You are responsible for all applicable taxes, including GST. If we are required to collect GST, it will be added to your invoice.</li>
              <li><strong>Price Changes:</strong> We may change pricing for future Subscription Terms with 30 days&rsquo; prior notice. Price changes will not affect your current Term.</li>
              <li><strong>Late Payment:</strong> If payment is not received by the due date, we may suspend access to the Service after a 7-day grace period.</li>
            </ul>

            <h2>4. Service Availability and SLA</h2>
            <ul>
              <li>We aim for 99.5% uptime, excluding scheduled maintenance (notified at least 24 hours in advance) and force majeure events.</li>
              <li>The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not guarantee that the Service will be uninterrupted, error-free, or secure from unauthorized third-party access.</li>
              <li>We reserve the right to temporarily suspend the Service for maintenance, security updates, or emergency fixes.</li>
            </ul>

            <h2>5. Your Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use the Service only for lawful business purposes and in compliance with all applicable laws (including the DPDP Act 2023 and IT Act, 2000).</li>
              <li>Obtain all necessary consents from your customers and staff whose personal data you store or process using the Service. You are the Data Fiduciary for such data.</li>
              <li>Not misuse the Service by introducing malware, attempting unauthorized access, or interfering with the operation of the platform.</li>
              <li>Not reverse-engineer, decompile, or disassemble the Service.</li>
              <li>Not use the Service to send spam, fraudulent communications, or unsolicited marketing messages.</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <ul>
              <li><strong>Our IP:</strong> The Service, including its code, design, logos, trademarks, and underlying technology, is the exclusive property of Swalook. You may not copy, modify, distribute, or create derivative works without our written permission.</li>
              <li><strong>Your IP:</strong> You retain all rights to your Customer Data. You grant us a limited license to access, use, and process your Customer Data solely to provide the Service to you.</li>
              <li><strong>Feedback:</strong> Any suggestions or feedback you provide may be used by us without obligation or compensation.</li>
            </ul>

            <h2>7. Data Protection and Privacy</h2>
            <ul>
              <li>Our collection and processing of your personal data is governed by our <Link href="/privacy-policy">Privacy Policy</Link>.</li>
              <li>We act as a Data Processor for the Customer Data you store. You are the Data Fiduciary and are responsible for ensuring that you have a lawful basis to collect and process such data.</li>
              <li>We implement reasonable security measures as described in our Privacy Policy but are not liable for data breaches caused by your failure to maintain Account security.</li>
              <li>We will notify you within 72 hours of discovering a data breach affecting your Customer Data.</li>
            </ul>

            <h2>8. Confidentiality</h2>
            <p>
              Each party may have access to confidential information of the other. Neither party will disclose the 
              other&rsquo;s confidential information without prior written consent, except as required by law. This 
              obligation survives termination of these Terms for 3 years.
            </p>

            <h2>9. Limitation of Liability</h2>
            <ul>
              <li>To the maximum extent permitted by Indian law, Swalook&rsquo;s total liability for any claim arising out of these Terms shall not exceed the total fees paid by you in the 12 months preceding the claim.</li>
              <li>Swalook shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost revenue, or loss of data.</li>
              <li>This limitation does not apply to liability arising from gross negligence, fraud, or willful misconduct.</li>
            </ul>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold Swalook harmless from any claims, damages, losses, or expenses 
              (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the Service in violation of these Terms.</li>
              <li>Your violation of any applicable law or regulation.</li>
              <li>Any dispute between you and your customers or staff arising out of data you store on the Service.</li>
            </ul>

            <h2>11. Termination</h2>
            <ul>
              <li><strong>By You:</strong> You may terminate your Account at any time via the dashboard or by emailing <a href="mailto:info@swalook.in">info@swalook.in</a>. Termination takes effect at the end of your current billing cycle.</li>
              <li><strong>By Us:</strong> We may suspend or terminate your access if you breach these Terms, fail to pay fees, or if we suspect fraudulent/illegal activity. We will notify you and provide 7 days to remedy the breach where possible.</li>
              <li><strong>Effect:</strong> Upon termination, your access to the Service ceases. We will provide an export of your Customer Data within 30 days of request. After 90 days, your data will be permanently deleted unless retention is required by law.</li>
            </ul>

            <h2>12. Force Majeure</h2>
            <p>
              Neither party shall be liable for delays or failures in performance resulting from events beyond 
              reasonable control, including acts of God, natural disasters, war, terrorism, government actions, 
              internet disruptions, or pandemics.
            </p>

            <h2>13. Governing Law and Dispute Resolution</h2>
            <ul>
              <li><strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India.</li>
              <li><strong>Jurisdiction:</strong> Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh.</li>
              <li><strong>Arbitration:</strong> In the event of a dispute, the parties shall first attempt to resolve it amicably within 30 days. If unresolved, the dispute shall be referred to a sole arbitrator appointed by mutual consent, in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in Noida, Uttar Pradesh, and the language shall be English.</li>
            </ul>

            <h2>14. Modifications to Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be notified via email or through 
              the Service at least 30 days in advance. Continued use of the Service after changes take effect 
              constitutes your acceptance of the updated Terms.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These Terms, together with the Privacy Policy, Cancellation & Refund Policy, and any order forms 
              you sign, constitute the entire agreement between you and Swalook regarding the Service.
            </p>

            <h2>16. Contact Us</h2>
            <p>For any questions regarding these Terms:</p>
            <ul>
              <li>Email: <a href="mailto:legal@swalook.in">legal@swalook.in</a></li>
              <li>Support: <a href="mailto:info@swalook.in">info@swalook.in</a></li>
              <li>Address: SWALOOK GLOBAL PRIVATE LIMITED, Aishwaryam, Gaur City-2, Greater Noida West, Sector 16C, Noida, Gautam Buddha Nagar, Uttar Pradesh — 201301</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

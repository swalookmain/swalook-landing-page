'use client';

import Link from 'next/link';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  const crmLinks = [
    { label: 'CRM Features', href: '/salon-crm-features' },
    { label: 'Appointment Scheduling', href: '/salon-appointment-scheduling-software' },
    { label: 'Dashboard Software', href: '/salon-dashboard-software' },
    { label: 'Marketing Templates', href: '/salon-marketing-templates' },
    { label: 'Analytics Software', href: '/salon-analytics-software' },
    { label: 'Inventory Management', href: '/salon-inventory-management-software' },
    { label: 'Mobile Apps', href: '/mobile-app' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/salon-crm-features' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Careers', href: '/careers' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/people/SwaLook/100082780576167/', label: 'Facebook' },
    { icon: <FaXTwitter />, href: 'https://twitter.com/home', label: 'Twitter' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/channel/UCQj9_wk87-iDb9h9TdxjHYg', label: 'YouTube' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/swalook/', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/swalook_official/', label: 'Instagram' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>Swalook</Link>
            <p className={styles.footerTagline}>
              Explore the potential of your business with Swalook CRM Solution. 
              Streamline your salon operations and elevate customer experience.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CRM Features */}
          <div className={styles.footerColumn}>
            <h4>CRM Features</h4>
            {crmLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <div className={styles.contactItem}>
              <FiPhone className={styles.contactIcon} />
              <a href="tel:+919870103761">+91 98701 03761</a>
            </div>
            <div className={styles.contactItem}>
              <FiMail className={styles.contactIcon} />
              <a href="mailto:info@swalook.in">info@swalook.in</a>
            </div>
            <div className={styles.contactItem}>
              <FiMapPin className={styles.contactIcon} />
              <span>Greater Noida (West), Uttar Pradesh, 201009</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Swalook Global Pvt. Ltd. All rights reserved.
          </p>
          <div className={styles.policyLinks}>
            <Link href="/terms-conditions" className={styles.policyLink}>Terms & Conditions</Link>
            <Link href="/privacy-policy" className={styles.policyLink}>Privacy Policy</Link>
            <Link href="/cancellation-policy" className={styles.policyLink}>Cancellation Policy</Link>
            <Link href="/shipping-policy" className={styles.policyLink}>Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

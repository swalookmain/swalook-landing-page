'use client';

import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  const linkColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Swalook CRM', href: '/salon-crm-features' },
        { label: 'Mobile App', href: '/mobile-app' },
      ],
    },
    {
      title: 'Growth',
      links: [
        { label: 'Customer Acquisition', href: '/customer-acquisition' },
        { label: 'Customer Retention', href: '/customer-retention' },
        { label: 'WhatsApp Marketing', href: '/whatsapp-marketing' },
        { label: 'Salon Marketing', href: '/salon-marketing-templates' },
        { label: 'Inquiry Management', href: '/salon-inquiry-management' },
        { label: 'Multi-Branch', href: '/multi-branch-salon-software' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blogs' },
        { label: 'FAQs', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-conditions' },
        { label: 'Cancellation Policy', href: '/cancellation-policy' },
        { label: 'Shipping Policy', href: '/shipping-policy' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/people/SwaLook/100082780576167/', label: 'Facebook' },
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
              The CRM Built to Grow Your Salon
            </p>
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

          {linkColumns.map((column) => (
            <div key={column.title} className={styles.footerColumn}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <Link key={link.label} href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Swalook Global Pvt. Ltd. All rights reserved.
          </p>
          <p className={styles.copyright}>
            Manage your salon. Understand your customers. Grow your business.
          </p>
        </div>
      </div>
    </footer>
  );
}

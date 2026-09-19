'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronDown } from 'react-icons/fi';
import styles from './Navbar.module.css';

// Swalook CRM web app (swalook-frontend-new) — its root redirects to /auth/login.
const LOGIN_URL = 'https://v2.swalookcrm.in/';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    {
      label: 'Product',
      href: '/salon-crm-features',
      dropdown: [
        { label: 'Salon CRM', href: '/salon-crm-features' },
        { label: 'Mobile App', href: '/mobile-app' },
      ],
    },
    {
      label: 'Solutions',
      href: '/customer-retention',
      dropdown: [
        { label: 'Customer Acquisition', href: '/customer-acquisition' },
        { label: 'Customer Retention', href: '/customer-retention' },
        { label: 'WhatsApp Marketing', href: '/whatsapp-marketing' },
        { label: 'Salon Marketing', href: '/salon-marketing-templates' },
        { label: 'Inquiry Management', href: '/salon-inquiry-management' },
        { label: 'Multi-Branch', href: '/multi-branch-salon-software' },
      ],
    },
    {
      label: 'Resources',
      href: '/blogs',
      dropdown: [
        { label: 'Blog', href: '/blogs' },
        { label: 'FAQs', href: '/faq' },
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ];

  const isActive = (href) => pathname === href;

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            Swalook
            <span className={styles.logoSub}>Revenue Generation Engine for Salons</span>
          </Link>

          {/* Desktop Nav */}
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.activeLink : ''}`}
                >
                  {item.label}
                  {item.dropdown && <FiChevronDown className={styles.dropdownIcon} />}
                </Link>
                {item.dropdown && (
                  <div className={styles.dropdown}>
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} href={sub.href} className={styles.dropdownLink}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={LOGIN_URL} className={styles.loginLink}>
              Login
            </a>
            <Link href="/contact" className={styles.ctaButton}>
              Book a Demo
            </Link>
          </div>

          {/* Mobile: Book a Demo stays visible next to the menu toggle */}
          <div className={styles.mobileBar}>
            <Link href="/contact" className={styles.mobileBarCta}>
              Book a Demo
            </Link>
            <button
              type="button"
              className={`${styles.menuToggle} ${mobileOpen ? styles.menuOpen : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-menu"
            >
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayActive : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        id="mobile-navigation-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        {navItems.map((item) => (
          <div key={item.label}>
            <Link href={item.href} className={styles.mobileNavLink}>
              {item.label}
            </Link>
            {item.dropdown && (
              <div className={styles.mobileDropdown}>
                {item.dropdown.map((sub) => (
                  <Link key={sub.label} href={sub.href} className={styles.mobileDropdownLink}>
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href={LOGIN_URL} className={styles.mobileNavLink}>
          Login
        </a>
        <Link href="/contact" className={styles.mobileCta}>
          Book a Demo
        </Link>
      </div>
    </>
  );
}

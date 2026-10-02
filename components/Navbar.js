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
  const [forceCloseKey, setForceCloseKey] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    if (typeof document !== 'undefined') {
      document.activeElement?.blur();
      const details = document.querySelectorAll('details');
      details.forEach(d => d.removeAttribute('open'));
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    {
      label: 'Customer Management',
      href: '/salon-crm-features',
      dropdown: [
        { label: 'Salon CRM', href: '/salon-crm-features' },
        { label: 'Customer Retention', href: '/customer-retention' },
        { label: 'Membership', href: '/salon-membership-software' },
        { label: 'Loyalty', href: '/salon-loyalty-program-software' },
        { label: 'Inquiry Management', href: '/salon-inquiry-management' },
      ],
    },
    {
      label: 'Daily Operations',
      href: '/salon-appointment-scheduling-software',
      dropdown: [
        { label: 'Appointments', href: '/salon-appointment-scheduling-software' },
        { label: 'Billing and POS', href: '/salon-invoice-software' },
        { label: 'Inventory', href: '/salon-inventory-management-software' },
        { label: 'Staff and Attendance', href: '/salon-staff-attendance-software' },
        { label: 'Expenses and Purchasing', href: '/salon-expense-management-software' },
        { label: 'Analytics', href: '/salon-analytics-software' },
        { label: 'Multi Branch', href: '/multi-branch-salon-software' },
      ],
    },
    {
      label: 'Growth and Engagement',
      href: '/customer-acquisition',
      dropdown: [
        { label: 'Customer Acquisition', href: '/customer-acquisition' },
        { label: 'WhatsApp Marketing', href: '/whatsapp-marketing' },
        { label: 'Salon Marketing', href: '/salon-marketing' },
      ],
    },
    {
      label: 'Product Access',
      href: '/mobile-app',
      dropdown: [
        { label: 'Mobile App', href: '/mobile-app' },
        { label: 'Login', href: LOGIN_URL, isExternal: true },
        { label: 'Book a Demo', href: '/contact' },
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
              <div 
                key={item.label} 
                className={`${styles.navItem} ${forceCloseKey === item.label ? styles.forceClose : ''}`}
                onMouseLeave={() => setForceCloseKey(null)}
                onMouseEnter={() => setForceCloseKey(null)}
              >
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
                      sub.isExternal ? (
                        <a key={sub.label} href={sub.href} className={`${styles.dropdownLink} ${isActive(sub.href) ? styles.activeDropdownLink : ""}`} onClick={() => { document.activeElement?.blur(); setForceCloseKey(item.label); }}>
                          {sub.label}
                        </a>
                      ) : (
                        <Link key={sub.label} href={sub.href} className={`${styles.dropdownLink} ${isActive(sub.href) ? styles.activeDropdownLink : ""}`} onClick={() => { document.activeElement?.blur(); setForceCloseKey(item.label); }}>
                          {sub.label}
                        </Link>
                      )
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
          <div key={item.label} className={styles.mobileNavItem}>
            {item.dropdown ? (
              <details className={styles.mobileDetails}>
                <summary className={styles.mobileNavLink}>
                  {item.label}
                  <FiChevronDown className={styles.dropdownIcon} style={{ marginLeft: 'auto' }} />
                </summary>
                <div className={styles.mobileDropdown}>
                  {item.dropdown.map((sub) => (
                    sub.isExternal ? (
                      <a key={sub.label} href={sub.href} className={`${styles.mobileDropdownLink} ${isActive(sub.href) ? styles.activeDropdownLink : ""}`} onClick={() => { document.activeElement?.blur(); const d = document.querySelectorAll('details'); d.forEach(el => el.removeAttribute('open')); }}>
                        {sub.label}
                      </a>
                    ) : (
                      <Link key={sub.label} href={sub.href} className={`${styles.mobileDropdownLink} ${isActive(sub.href) ? styles.activeDropdownLink : ""}`} onClick={() => { document.activeElement?.blur(); const d = document.querySelectorAll('details'); d.forEach(el => el.removeAttribute('open')); }}>
                        {sub.label}
                      </Link>
                    )
                  ))}
                </div>
              </details>
            ) : (
              <Link href={item.href} className={styles.mobileNavLink}>
                {item.label}
              </Link>
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

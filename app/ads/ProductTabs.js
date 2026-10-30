'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import { FiCalendar, FiCheck, FiFileText, FiUsers } from 'react-icons/fi';
import { CRM_GROUPS } from './adsConfig';
import { EASE, TiltStage, useMounted } from './adsMotion';
import styles from './Ads.module.css';

const TABS = [
  {
    id: 'crm',
    label: 'CRM',
    icon: FiUsers,
    titleId: 'crm-title',
    title: 'Salon CRM Software That Helps You Know Your Customers Better',
    paragraphs: [
      'A customer’s name and phone number are only the beginning. With salon CRM software, keep useful details such as visit history, services taken, last visit and recorded spending together in one customer profile.',
      'Swalook helps you identify customers who are due for a visit, becoming inactive or have not visited for a while. You can review the customers who need attention and follow up through WhatsApp, instead of manually searching through old lists.',
    ],
    cta: 'See How Swalook Helps Bring Customers Back',
    image: '/images/crm-customers.png',
    alt: 'Salon CRM software in Swalook showing customer profiles, visit history and customer status.',
    points: true,
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: FiFileText,
    titleId: 'billing-title',
    title: 'Salon Billing Software That Keeps Service and Payment Records Together',
    paragraphs: [
      'Make customer billing part of an organised daily workflow. This salon billing software keeps bills, services and payment details easier to find instead of searching through separate records.',
      'Your billing information can also help you understand which services customers choose and how their spending changes over time. Ask us to walk you through the billing and POS options available for your salon.',
    ],
    cta: 'See Billing in a Demo',
    image: '/images/crm-invoices.png',
    alt: 'Salon billing software screen in Swalook showing a customer bill, services and payment details.',
    points: false,
  },
  {
    id: 'appointments',
    label: 'Appointments',
    icon: FiCalendar,
    titleId: 'appointments-title',
    title: 'Salon Appointment Software to Keep Your Day Organised',
    paragraphs: [
      'Use salon appointment software to see bookings and customer visits in one place. Manage appointments, check staff availability and make changes when a customer needs to reschedule.',
      'Use the available reminder and confirmation workflows to help customers remember their appointments. Your team gets a clearer view of the day, and customers know what to expect.',
    ],
    cta: 'See Appointment Management in a Demo',
    image: '/images/crm-appointments.png',
    alt: 'Swalook salon appointment calendar showing daily bookings and staff availability.',
    points: false,
  },
];

export default function ProductTabs() {
  const [active, setActive] = useState(0);
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const tab = TABS[active];
  const Icon = tab.icon;

  const onKeyDown = useCallback((event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    setActive((prev) => {
      if (event.key === 'ArrowRight') return (prev + 1) % TABS.length;
      return (prev - 1 + TABS.length) % TABS.length;
    });
  }, []);

  return (
    <div className={styles.productTabs}>
      <LayoutGroup>
        <div className={styles.tabList} role="tablist" aria-label="Product areas" onKeyDown={onKeyDown}>
          {TABS.map((item, index) => {
            const TabIcon = item.icon;
            const selected = index === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`product-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`product-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                className={selected ? styles.tabOn : styles.tab}
                onClick={() => setActive(index)}
              >
                {selected && !prefersReducedMotion ? (
                  <motion.span
                    layoutId="ads-tab-pill"
                    className={styles.tabPill}
                    aria-hidden="true"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                ) : null}
                <TabIcon aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={tab.id}
          id={`product-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`product-tab-${tab.id}`}
          className={styles.tabPanel}
          initial={mounted && !prefersReducedMotion ? { opacity: 0, y: 10 } : false}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <div className={styles.tabCopy}>
            <p className={styles.eyebrow}>
              <Icon aria-hidden="true" /> {tab.label}
            </p>
            <h2 id={tab.titleId}>{tab.title}</h2>
            {tab.paragraphs.map((text) => (
              <p key={text.slice(0, 32)}>{text}</p>
            ))}
            <a href="#demo" className={styles.btnGhost}>
              {tab.cta}
            </a>
          </div>

          <div className={styles.tabVisual}>
            <TiltStage className={styles.productStage}>
              <div className={styles.shotFrame}>
                <Image
                  src={tab.image}
                  alt={tab.alt}
                  width={1600}
                  height={880}
                  className={styles.shot}
                />
              </div>
            </TiltStage>
            {tab.points ? (
              <div className={styles.crmPoints}>
                <p className={styles.groupLabel}>Know who needs attention</p>
                <ul className={styles.pointGrid}>
                  {CRM_GROUPS.map((item) => (
                    <li key={item}>
                      <span className={styles.pointIcon} aria-hidden="true">
                        <FiCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import {
  FiPhone,
  FiCalendar,
  FiUsers,
  FiPackage,
  FiBarChart2,
  FiGlobe,
  FiCheck,
  FiArrowRight,
  FiPlayCircle,
  FiClipboard,
  FiEye,
  FiStar,
  FiRepeat,
  FiLayers,
  FiGitBranch,
  FiChevronDown,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import BrandLogo from '@/components/BrandLogo';
import AdsLeadForm from './AdsLeadForm';
import CrmWalkthrough from './CrmWalkthrough';
import ProductTabs from './ProductTabs';
import {
  AdsReveal,
  AdsStagger,
  AdsStaggerItem,
  EASE,
  HeroParallax,
  ScrollProgress,
  TimelineFill,
  useHeaderScrolled,
  useNavSpy,
} from './adsMotion';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  CONTACT_EMAIL,
  buildWhatsAppHref,
  PROBLEMS,
  MORE_FEATURES,
  HOW_STEPS,
  AUDIENCE,
  PROOF_CARDS,
  FAQS,
} from './adsConfig';
import styles from './Ads.module.css';

const TRUST_PILLS = [
  'Customer CRM',
  'Appointments',
  'Billing',
  'Inventory',
  'Staff',
  'WhatsApp Follow-Ups',
];

const PROBLEM_ICONS = [
  <FiUsers key="p1" />,
  <FiBarChart2 key="p2" />,
  <FiPackage key="p3" />,
  <FiCalendar key="p4" />,
  <FiGlobe key="p5" />,
];

const STEP_ICONS = [
  <FiClipboard key="s1" />,
  <FiEye key="s2" />,
  <FiCheck key="s3" />,
];

const PROOF_ICONS = [
  <FiUsers key="pr1" />,
  <FiRepeat key="pr2" />,
  <FiLayers key="pr3" />,
  <FiGitBranch key="pr4" />,
];

const FEATURE_THUMBS = [
  'featureThumbScene',
  'featureThumbTop',
  'featureThumbTop',
  'featureThumbTop',
  'featureThumbTop',
  'featureThumbMid',
  'featureThumbTop',
  'featureThumbTop',
];

const NAV_SECTIONS = [
  { id: 'walkthrough', href: '#walkthrough', label: 'See it' },
  { id: 'how', href: '#how', label: 'How it works' },
  { id: 'faq', href: '#faq', label: 'FAQ' },
];

const NAV_IDS = NAV_SECTIONS.map((item) => item.id);

const HERO_CHIPS = ['Customer CRM', 'Appointments', 'Billing', 'Inventory'];

function focusHeroForm(event) {
  const field = document.getElementById('hero-name');
  const desktop = window.matchMedia('(min-width: 981px)').matches;
  if (!desktop || !field) return;
  event.preventDefault();
  field.focus();
}

function AdsFaq() {
  const [open, setOpen] = useState(null);

  return (
    <div className={styles.faqList}>
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `ads-faq-q-${i}`;
        const panelId = `ads-faq-a-${i}`;
        return (
          <div
            key={item.q}
            className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
          >
            <button
              type="button"
              id={buttonId}
              className={styles.faqQuestion}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <FiChevronDown aria-hidden="true" className={styles.faqChevron} />
            </button>
            <div
              className={styles.faqPanel}
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
            >
              <div className={styles.faqBody}>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AdsLandingPage() {
  const waHref = buildWhatsAppHref();
  const scrolled = useHeaderScrolled();
  const navActive = useNavSpy(NAV_IDS);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={styles.page}>
      <header className={`${styles.topBar} ${scrolled ? styles.topBarScrolled : ''}`}>
        <ScrollProgress className={styles.scrollProgress} />
        <BrandLogo asLink={false} />
        <LayoutGroup>
          <nav className={styles.topNav} aria-label="On this page">
            {NAV_SECTIONS.map((item) => {
              const on = navActive === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={on ? styles.topNavOn : undefined}
                  aria-current={on ? 'true' : undefined}
                >
                  {item.label}
                  {on ? (
                    prefersReducedMotion ? (
                      <span className={styles.topNavInk} aria-hidden="true" />
                    ) : (
                      <motion.span
                        layoutId="ads-nav-ink"
                        className={styles.topNavInk}
                        aria-hidden="true"
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    )
                  ) : null}
                </a>
              );
            })}
          </nav>
        </LayoutGroup>
        <div className={styles.topActions}>
          <a href={PHONE_TEL} className={styles.topLink} aria-label={`Call ${PHONE_DISPLAY}`}>
            <FiPhone aria-hidden="true" />
            <span className={styles.topLinkFull}>{PHONE_DISPLAY}</span>
            <span className={styles.topLinkShort}>Call</span>
          </a>
          <a
            href={waHref}
            className={`${styles.topLink} ${styles.whatsappLink}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
            <span className={styles.topLinkFull}>WhatsApp</span>
            <span className={styles.topLinkShort}>Chat</span>
          </a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroBackdrop} aria-hidden="true">
          <HeroParallax className={styles.heroParallax}>
            <span className={styles.mesh} />
            <span className={styles.orbOne} />
            <span className={styles.orbTwo} />
          </HeroParallax>
        </div>
        <div className={`${styles.wrap} ${styles.heroWrap}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <AdsReveal>
                <p className={styles.eyebrow}>
                  <span className={styles.pulse} aria-hidden="true" />
                  For salons that want to grow, not just stay busy
                </p>
              </AdsReveal>
              <AdsReveal delay={0.08}>
                <h1 id="hero-title">
                  <span className={styles.heroKicker}>Salon Management Software That Helps You</span>
                  <span className={styles.heroHighlight}>Bring Customers Back</span>
                </h1>
              </AdsReveal>
              <AdsReveal delay={0.16}>
                <p className={styles.lede}>
                  Running a salon means handling customers, appointments, billing, staff and stock, often
                  all at once — Swalook salon management software brings these everyday activities together
                  with a customer CRM, so you can understand who visits, who has stopped coming and what
                  needs your attention.
                </p>
              </AdsReveal>
              <AdsStagger
                className={styles.heroProof}
                staggerDelay={0.04}
                delay={0.32}
                aria-label="What Swalook covers"
              >
                {HERO_CHIPS.map((item) => (
                  <AdsStaggerItem key={item}>{item}</AdsStaggerItem>
                ))}
              </AdsStagger>
              <AdsReveal delay={0.24}>
                <div className={styles.heroActions}>
                  <a href="#demo" className={styles.btnPrimary} onClick={focusHeroForm}>
                    Book a Free Demo <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
                <p className={styles.reassurance}>
                  See how Swalook would work for your salon before you make a decision.
                </p>
              </AdsReveal>
            </div>

            <div id="demo" className={styles.heroForm}>
              <AdsReveal delay={0.12} direction="right" fromScale={0.98}>
                <AdsLeadForm formId="hero" compact heading="Let’s Talk About Your Salon" />
                <div className={styles.formAltLinks}>
                  <a href={PHONE_TEL}>
                    <FiPhone aria-hidden="true" /> Call {PHONE_DISPLAY}
                  </a>
                  <a href={waHref} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp aria-hidden="true" /> WhatsApp Us
                  </a>
                </div>
              </AdsReveal>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trust} aria-label="Built for salon teams">
        <div className={styles.wrap}>
          <p className={styles.trustLine}>
            Built for Independent Salons, Growing Businesses and Multi-Branch Salon Teams
          </p>
        </div>
        <div className={styles.marquee}>
          <ul className={styles.marqueeTrack}>
            {[...TRUST_PILLS, ...TRUST_PILLS].map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTight}`} aria-labelledby="problems-title">
        <div className={styles.wrap}>
          <AdsReveal className={styles.sectionHead}>
            <p className={styles.eyebrow}>Salon owners know this</p>
            <h2 id="problems-title">The Everyday Problems Salon Owners Know</h2>
            <p>
              A salon can be full of customers and still leave the owner wondering what is really
              happening behind the counter.
            </p>
          </AdsReveal>
          <AdsStagger className={styles.problemGrid} staggerDelay={0.06}>
            {PROBLEMS.map((item, i) => (
              <AdsStaggerItem key={item.title}>
                <article className={`${styles.problemCard} ${styles[`problemTint${i}`]}`}>
                  <div className={styles.cardIcon}>{PROBLEM_ICONS[i]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </AdsStaggerItem>
            ))}
          </AdsStagger>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt} ${styles.sectionTight}`} id="walkthrough" aria-labelledby="meet-title">
        <div className={styles.wrap}>
          <AdsReveal className={styles.sectionHead}>
            <p className={styles.eyebrow}>
              <FiPlayCircle aria-hidden="true" /> Meet Swalook
            </p>
            <h2 id="meet-title">Your Salon Runs Better When the Information Comes Together</h2>
            <p>
              Swalook salon management software connects the daily work of your salon with the customer
              information behind it. Manage appointments, billing, customer history, staff, inventory and
              business activity from one platform.
            </p>
            <p>
              The CRM helps you see who is visiting, what services they take, how much they spend and who
              may need a follow-up. Instead of treating every customer the same, you can decide what
              action makes sense for each group.
            </p>
          </AdsReveal>
          <div id="screens" className={styles.screensAnchor}>
            <CrmWalkthrough />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTight}`} aria-label="Billing, CRM and appointments">
        <div className={styles.wrap}>
          <AdsReveal>
            <ProductTabs />
          </AdsReveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt} ${styles.sectionTight}`} aria-labelledby="more-title">
        <div className={styles.wrap}>
          <AdsReveal className={styles.sectionHead}>
            <p className={styles.eyebrow}>Around the salon</p>
            <h2 id="more-title">More of Your Salon, Connected</h2>
          </AdsReveal>
          <AdsStagger className={styles.featureBento} staggerDelay={0.05}>
            {MORE_FEATURES.map((item, i) => {
              const crop = styles[FEATURE_THUMBS[i]] || '';
              return (
                <AdsStaggerItem key={item.title} className={i < 2 ? styles.featureWide : undefined}>
                  <article className={styles.featureCard}>
                    <div className={`${styles.featureThumb} ${crop}`}>
                      <Image
                        src={item.image}
                        alt={item.alt || item.title}
                        fill
                        sizes="(max-width: 720px) 100vw, (max-width: 899px) 50vw, 33vw"
                      />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                </AdsStaggerItem>
              );
            })}
          </AdsStagger>
          <div className={styles.centerCta}>
            <a href="#demo" className={styles.btnGhost}>
              Explore Swalook in a Free Demo
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTight}`} id="how" aria-labelledby="how-title">
        <div className={styles.wrap}>
          <AdsReveal className={styles.sectionHead}>
            <p className={styles.eyebrow}>Three steps</p>
            <h2 id="how-title">How It Works</h2>
          </AdsReveal>
          <div className={styles.timeline}>
            <TimelineFill className={styles.timelineFill} />
            <ol className={styles.steps}>
              {HOW_STEPS.map((step, i) => (
                <li key={step.num} className={styles.step}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.cardIcon}>{STEP_ICONS[i]}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt} ${styles.sectionTight}`} id="who" aria-labelledby="who-title">
        <div className={styles.wrap}>
          <AdsReveal className={styles.sectionHead}>
            <p className={styles.eyebrow}>Built for</p>
            <h2 id="who-title">Who Is Swalook For?</h2>
            <p>
              Swalook is built for salon businesses that want to manage customers and daily operations
              with less manual chasing.
            </p>
          </AdsReveal>
          <AdsStagger className={styles.audience} staggerDelay={0.04}>
            {AUDIENCE.map((item) => (
              <AdsStaggerItem key={item}>
                <span className={styles.audienceChip}>{item}</span>
              </AdsStaggerItem>
            ))}
          </AdsStagger>
          <p className={styles.centerNote}>
            Whether you are managing one location or several, book a demo and tell us how your salon
            works today.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTight}`} aria-labelledby="proof-title">
        <div className={styles.wrap}>
          <AdsReveal className={styles.sectionHead}>
            <p className={styles.eyebrow}>No made-up quotes</p>
            <h2 id="proof-title">A Better Way to Run the Salon</h2>
            <p>
              Instead of made-up customer quotes, this is what you can actually see in the product.
            </p>
          </AdsReveal>
          <AdsStagger className={styles.proofGrid} staggerDelay={0.05}>
            {PROOF_CARDS.map((item, i) => (
              <AdsStaggerItem key={item.title}>
                <article className={styles.proofTile}>
                  <div className={styles.cardIcon}>{PROOF_ICONS[i] || <FiStar />}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </AdsStaggerItem>
            ))}
          </AdsStagger>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt} ${styles.sectionTight}`} id="faq" aria-labelledby="faq-title">
        <div className={styles.wrap}>
          <div className={styles.faqLayout}>
            <div className={styles.faqIntro}>
              <AdsReveal>
                <p className={styles.eyebrow}>Before you book</p>
                <h2 id="faq-title">Frequently Asked Questions</h2>
                <p>Quick answers before you book a demo.</p>
                <a href="#demo" className={`${styles.btnGhost} ${styles.faqCta}`} onClick={focusHeroForm}>
                  Book a Free Demo <FiArrowRight aria-hidden="true" />
                </a>
              </AdsReveal>
            </div>
            <AdsFaq />
          </div>
        </div>
      </section>

      <section className={styles.final} aria-labelledby="final-title">
        <div className={styles.finalBackdrop} aria-hidden="true">
          <span className={styles.finalOrb} />
        </div>
        <div className={`${styles.wrap} ${styles.finalWrap}`}>
          <div className={styles.finalGrid}>
            <AdsReveal className={styles.finalCopy}>
              <h2 id="final-title">Your Salon Is Busy. Now Get a Clearer Picture of the Business.</h2>
              <p>
                See how Swalook can help you manage customers, bring old customers back, organise daily
                work and understand what is happening across your salon.
              </p>
              <p className={styles.finalLine}>Book your salon management software demo today.</p>
              <div className={styles.finalContacts}>
                <a href={PHONE_TEL} className={styles.contactChip}>
                  <FiPhone aria-hidden="true" /> Call: {PHONE_DISPLAY}
                </a>
                <a
                  href={waHref}
                  className={`${styles.contactChip} ${styles.contactChipWa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp aria-hidden="true" /> WhatsApp
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactChip}>
                  General enquiries: {CONTACT_EMAIL}
                </a>
              </div>
            </AdsReveal>
            <div id="demo-bottom" className={styles.bottomFormPad}>
              <AdsLeadForm formId="footer" heading="Let’s Talk About Your Salon" />
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.foot}>
        <div className={styles.wrap}>
          <BrandLogo asLink={false} />
          <p>Manage your salon. Understand your customers. Grow your business.</p>
          <p className={styles.footMeta}>
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true"> · </span>
            <a href="/terms-conditions">Terms and Conditions</a>
          </p>
        </div>
      </footer>

      <div className={styles.stickyBar}>
        <a href={PHONE_TEL} className={styles.stickyCall}>
          <FiPhone aria-hidden="true" /> Call
        </a>
        <a
          href={waHref}
          className={styles.stickyWa}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

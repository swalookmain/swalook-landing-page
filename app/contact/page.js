'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiUserPlus, FiRepeat, FiStar, FiCalendar, FiRefreshCw, FiCheck } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import contactStyles from './Contact.module.css';
import formStyles from '@/components/FormSection.module.css';
import { validateField, submitForm } from '@/lib/formHelpers';

// Fields checked on blur/submit. city, branches and currentSoftware are optional free text.
const VALIDATED_FIELDS = ['name', 'salonName', 'mobile', 'email', 'message'];

const initialForm = {
  name: '',
  salonName: '',
  mobile: '',
  email: '',
  city: '',
  branches: '',
  currentSoftware: '',
  message: '',
};

const HERO = {
  label: 'Book a Demo',
  title: 'See Swalook',
  highlight: 'in Action',
  description:
    "Tell us about your salon and we'll show you how Swalook can help you manage your customers, simplify daily work and grow your business.",
};

function DemoInfo() {
  return (
    <div className={formStyles.formInfo}>
      <h2>Tell Us About Your Salon</h2>
      <p>Fill in a few details. Our team will get in touch to set up your demo.</p>
      <div className={formStyles.infoBullets}>
        <div className={formStyles.infoBullet}>
          <FiUserPlus className={formStyles.infoBulletIcon} />
          <span>Get more customers: see how Google and Meta work with your CRM.</span>
        </div>
        <div className={formStyles.infoBullet}>
          <FiRepeat className={formStyles.infoBulletIcon} />
          <span>Bring customers back: follow up on WhatsApp with customers who are due, at risk or dormant.</span>
        </div>
        <div className={formStyles.infoBullet}>
          <FiStar className={formStyles.infoBulletIcon} />
          <span>Know which customers matter: see visits, services and spending for each customer.</span>
        </div>
        <div className={formStyles.infoBullet}>
          <FiCalendar className={formStyles.infoBulletIcon} />
          <span>Run daily work: appointments, billing, staff and inventory in one place.</span>
        </div>
      </div>
    </div>
  );
}

const CONTACT_CARDS = [
  { icon: <FiMail />, title: 'Email', value: 'info@swalook.in', href: 'mailto:info@swalook.in' },
  { icon: <FiMail />, title: 'Sales', value: 'sales@swalook.in', href: 'mailto:sales@swalook.in' },
  { icon: <FiPhone />, title: 'Phone', value: '+91 98701 03761', href: 'tel:+919870103761' },
];

// The whole card opens the mail app / dialer. "Copy" is there for visitors whose computer has
// no default email app set up, where a mailto: link does nothing.
function ContactCard({ icon, title, value, href }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      // Older browsers / blocked clipboard API: fall back to a temporary textarea.
      const area = document.createElement('textarea');
      area.value = value;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      ok = document.execCommand('copy');
      area.remove();
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={contactStyles.contactCard}>
      <div className={contactStyles.cardIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>
        <a className={`${contactStyles.contactLink} ${contactStyles.cardLink}`} href={href}>{value}</a>
      </p>
      <button type="button" className={contactStyles.copyBtn} onClick={copy} aria-label={`Copy ${value}`}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState('');

  // The thank-you view is much shorter than the form, which leaves the visitor looking at the
  // footer. Once it has rendered, bring the confirmation itself onto the screen.
  const successRef = useRef(null);
  useEffect(() => {
    if (status === 'success') successRef.current?.scrollIntoView({ block: 'center', behavior: 'instant' });
  }, [status]);

  const handleChange = useCallback((field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
    }
  }, [touched]);

  const handleBlur = useCallback((field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: validateField(field, form[field]) }));
  }, [form]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    let hasError = false;
    const allTouched = {};
    for (const field of VALIDATED_FIELDS) {
      const err = validateField(field, form[field]);
      newErrors[field] = err;
      allTouched[field] = true;
      if (err) hasError = true;
    }
    setErrors(newErrors);
    setTouched(allTouched);

    if (hasError) return;

    setStatus('submitting');
    setSubmitError('');

    try {
      await submitForm('/api/contact', form);
      setStatus('success');
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }, [form]);

  const fieldClass = (field) => (errors[field] && touched[field] ? formStyles.fieldError : '');
  const fieldError = (field) =>
    errors[field] && touched[field] ? <span className={formStyles.errorText}>{errors[field]}</span> : null;

  if (status === 'success') {
    const firstName = form.name.trim().split(/\s+/)[0];
    return (
      <>
        <PageHero {...HERO} />
        <section className={formStyles.formSection}>
          <div ref={successRef} className={contactStyles.successCard} role="status">
            <div className={contactStyles.successIcon}><FiCheck /></div>
            <h2>Thank you, {firstName}!</h2>
            <p className={contactStyles.successLead}>
              We have your demo request for <strong>{form.salonName.trim()}</strong>. Our team will call you
              on <strong>{form.mobile.trim()}</strong> to fix a time that works for you.
            </p>

            <div className={contactStyles.nextSteps}>
              <h3>What happens next</h3>
              <ol>
                <li>We call you to learn about your salon.</li>
                <li>We fix a demo time that suits you.</li>
                <li>We show you how Swalook can help you get more customers and bring them back.</li>
              </ol>
            </div>

            <div className={contactStyles.successActions}>
              <Link href="/" className="btn btn-primary">Go to Home</Link>
              <Link href="/salon-crm-features" className="btn btn-outline">Explore Salon CRM</Link>
            </div>

            <p className={contactStyles.successNote}>
              Need to talk sooner? Call <a href="tel:+919870103761">+91 98701 03761</a>
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero {...HERO} />

      {/* Demo Form */}
      <section className={`${formStyles.formSection} ${formStyles.tealAccent} ${contactStyles.demoSection}`}>
        <div className={contactStyles.demoLayout}>
          <AnimatedSection direction="left">
            <DemoInfo />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <form className={`${formStyles.contactForm} ${contactStyles.demoForm}`} onSubmit={handleSubmit} noValidate aria-label="Book a demo">
              <div className={contactStyles.fieldRow}>
                <div className={formStyles.formGroup}>
                  <label htmlFor="demo-name">Name *</label>
                  <input
                    id="demo-name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={fieldClass('name')}
                    aria-invalid={Boolean(errors.name && touched.name)}
                  />
                  {fieldError('name')}
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="demo-salon-name">Salon Name *</label>
                  <input
                    id="demo-salon-name"
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="Your salon's name"
                    value={form.salonName}
                    onChange={e => handleChange('salonName', e.target.value)}
                    onBlur={() => handleBlur('salonName')}
                    className={fieldClass('salonName')}
                    aria-invalid={Boolean(errors.salonName && touched.salonName)}
                  />
                  {fieldError('salonName')}
                </div>
              </div>
              <div className={contactStyles.fieldRow}>
                <div className={formStyles.formGroup}>
                  <label htmlFor="demo-mobile">Phone Number *</label>
                  <input
                    id="demo-mobile"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    placeholder="+91 XXXXX XXXXX"
                    value={form.mobile}
                    onChange={e => handleChange('mobile', e.target.value)}
                    onBlur={() => handleBlur('mobile')}
                    className={fieldClass('mobile')}
                    aria-invalid={Boolean(errors.mobile && touched.mobile)}
                  />
                  {fieldError('mobile')}
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="demo-email">Email *</label>
                  <input
                    id="demo-email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={fieldClass('email')}
                    aria-invalid={Boolean(errors.email && touched.email)}
                  />
                  {fieldError('email')}
                </div>
              </div>
              <div className={contactStyles.fieldRow}>
                <div className={formStyles.formGroup}>
                  <label htmlFor="demo-city">City</label>
                  <input
                    id="demo-city"
                    type="text"
                    autoComplete="address-level2"
                    maxLength={80}
                    placeholder="Your city"
                    value={form.city}
                    onChange={e => handleChange('city', e.target.value)}
                  />
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="demo-branches">Number of Branches</label>
                  <input
                    id="demo-branches"
                    type="text"
                    inputMode="numeric"
                    maxLength={20}
                    placeholder="e.g. 1"
                    value={form.branches}
                    onChange={e => handleChange('branches', e.target.value)}
                  />
                </div>
              </div>
              <div className={formStyles.formGroup}>
                <label htmlFor="demo-current-software">Current Software</label>
                <input
                  id="demo-current-software"
                  type="text"
                  maxLength={160}
                  placeholder="What you use today, if anything"
                  value={form.currentSoftware}
                  onChange={e => handleChange('currentSoftware', e.target.value)}
                />
              </div>
              <div className={formStyles.formGroup}>
                <label htmlFor="demo-message">Message</label>
                <textarea
                  id="demo-message"
                  rows={3}
                  maxLength={2000}
                  placeholder="Anything you'd like us to know or show you"
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={fieldClass('message')}
                  aria-invalid={Boolean(errors.message && touched.message)}
                />
                {fieldError('message')}
              </div>
              {submitError && <p className={formStyles.errorText} role="alert" style={{ marginBottom: 12 }}>{submitError}</p>}
              <button
                type="submit"
                className={`${formStyles.submitBtn} ${status === 'submitting' ? formStyles.submitBtnLoading : ''}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <><FiRefreshCw className={formStyles.spinner} /> Booking...</>
                ) : 'Book My Demo'}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className={contactStyles.contactCards}>
        <StaggerContainer className={contactStyles.cardsGrid}>
          {CONTACT_CARDS.map((card) => (
            <StaggerItem key={card.title}>
              <ContactCard {...card} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}

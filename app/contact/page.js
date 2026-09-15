'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiCheckCircle, FiCalendar, FiCreditCard, FiRefreshCw, FiCheck } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import contactStyles from './Contact.module.css';
import formStyles from '@/components/FormSection.module.css';
import { validateField, submitForm } from '@/lib/formHelpers';

const FIELDS = ['fullName', 'mobile', 'email', 'businessName', 'message'];

const initialForm = { fullName: '', mobile: '', email: '', businessName: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState('');

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
    for (const field of FIELDS) {
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

  if (status === 'success') {
    return (
      <>
        <PageHero
          label="Contact Us"
          title="Ready to Grow Your Beauty Business?"
          highlight="Contact Swalook Today!"
          description="Talk to us about retention, marketing, no-shows, and salon growth."
        />
        <section className={formStyles.formSection}>
          <div className={formStyles.formGrid}>
            <AnimatedSection direction="left">
              <div className={formStyles.formInfo}>
                <h2>Get In Touch with Us!</h2>
                <p>Tell us about your beauty business and our team will get back to you soon.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className={formStyles.successState}>
                <div className={formStyles.successIcon}><FiCheck /></div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll be in touch within 24 hours.</p>
                <Link href="/" className="btn btn-primary">Go to Home</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Ready to Grow Your Beauty Business?"
        highlight="Contact Swalook Today!"
        description="Talk to us about retention, marketing, no-shows, and salon growth."
      />

      {/* Contact Cards */}
      <section className={contactStyles.contactCards}>
        <StaggerContainer className={contactStyles.cardsGrid}>
          <StaggerItem>
            <div className={contactStyles.contactCard}>
              <div className={contactStyles.cardIcon}><FiMail /></div>
              <h3>Email</h3>
              <p><a className={contactStyles.contactLink} href="mailto:info@swalook.in">info@swalook.in</a></p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className={contactStyles.contactCard}>
              <div className={contactStyles.cardIcon}><FiMail /></div>
              <h3>Sales</h3>
              <p><a className={contactStyles.contactLink} href="mailto:sales@swalook.in">sales@swalook.in</a></p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className={contactStyles.contactCard}>
              <div className={contactStyles.cardIcon}><FiPhone /></div>
              <h3>Phone</h3>
              <p><a className={contactStyles.contactLink} href="tel:+919870103761">+91 98701 03761</a></p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Form Section */}
      <section className={formStyles.formSection}>
        <div className={formStyles.formGrid}>
          <AnimatedSection direction="left">
            <div className={formStyles.formInfo}>
              <h2>Get In Touch with Us!</h2>
              <p>Tell us about your beauty business and our team will get back to you soon.</p>
              <div className={formStyles.infoBullets}>
                <div className={formStyles.infoBullet}>
                  <FiCheckCircle className={formStyles.infoBulletIcon} />
                  <span>Learn how Swalook can help improve retention and repeat visits.</span>
                </div>
                <div className={formStyles.infoBullet}>
                  <FiCalendar className={formStyles.infoBulletIcon} />
                  <span>See how reminders and follow-ups can reduce no-shows.</span>
                </div>
                <div className={formStyles.infoBullet}>
                  <FiCreditCard className={formStyles.infoBulletIcon} />
                  <span>Explore tools for billing, marketing, staff, and branch tracking.</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <form className={formStyles.contactForm} onSubmit={handleSubmit} noValidate>
              <div className={formStyles.formGroup}>
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={e => handleChange('fullName', e.target.value)}
                  onBlur={() => handleBlur('fullName')}
                  className={errors.fullName && touched.fullName ? formStyles.fieldError : ''}
                />
                {errors.fullName && touched.fullName && <span className={formStyles.errorText}>{errors.fullName}</span>}
              </div>
              <div className={formStyles.formGroup}>
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.mobile}
                  onChange={e => handleChange('mobile', e.target.value)}
                  onBlur={() => handleBlur('mobile')}
                  className={errors.mobile && touched.mobile ? formStyles.fieldError : ''}
                />
                {errors.mobile && touched.mobile && <span className={formStyles.errorText}>{errors.mobile}</span>}
              </div>
              <div className={formStyles.formGroup}>
                <label>Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={errors.email && touched.email ? formStyles.fieldError : ''}
                />
                {errors.email && touched.email && <span className={formStyles.errorText}>{errors.email}</span>}
              </div>
              <div className={formStyles.formGroup}>
                <label>Business Name *</label>
                <input
                  type="text"
                  placeholder="Your business name"
                  value={form.businessName}
                  onChange={e => handleChange('businessName', e.target.value)}
                  onBlur={() => handleBlur('businessName')}
                  className={errors.businessName && touched.businessName ? formStyles.fieldError : ''}
                />
                {errors.businessName && touched.businessName && <span className={formStyles.errorText}>{errors.businessName}</span>}
              </div>
              <div className={formStyles.formGroup}>
                <label>Message</label>
                <textarea
                  placeholder="Tell us what you need help with..."
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={errors.message && touched.message ? formStyles.fieldError : ''}
                />
                {errors.message && touched.message && <span className={formStyles.errorText}>{errors.message}</span>}
              </div>
              {submitError && <p className={formStyles.errorText} style={{ marginBottom: 12 }}>{submitError}</p>}
              <button
                type="submit"
                className={`${formStyles.submitBtn} ${status === 'submitting' ? formStyles.submitBtnLoading : ''}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <><FiRefreshCw className={formStyles.spinner} /> Sending...</>
                ) : 'Send Message'}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className={formStyles.newsletter}>
        <AnimatedSection>
          <div className={formStyles.newsletterContent}>
            <h2>Subscribe for Newsletter!</h2>
            <p>
              Stay updated with product updates, salon growth tips, and feature releases from Swalook.
            </p>
            <form className={formStyles.newsletterForm} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

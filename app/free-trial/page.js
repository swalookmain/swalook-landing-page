'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { FiCheckCircle, FiRefreshCw, FiCheck } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '@/components/FormSection.module.css';
import { validateField, submitForm } from '@/lib/formHelpers';
import { gtagEvent } from '@/lib/analytics';

const FIELDS = ['name', 'salonName', 'phone', 'email', 'city'];
const FIELDS_OPTIONAL = ['businessType'];

const initialForm = { name: '', salonName: '', phone: '', email: '', city: '', businessType: '' };

export default function FreeTrialPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const handleChange = useCallback((field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
    }
  }, [touched]);

  const handleBlur = useCallback((field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    if (!FIELDS_OPTIONAL.includes(field)) {
      setErrors(prev => ({ ...prev, [field]: validateField(field, form[field]) }));
    }
  }, [form]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

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
      await submitForm('/api/free-trial', form);
      gtagEvent('start_trial', {
        page_path: '/free-trial',
        form_name: 'free_trial',
        method: 'free_trial_form',
      });
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
          label="Free Trial"
          title="Try Swalook Before You Decide"
          highlight="Start using Swalook to improve retention, reduce no-shows, and manage growth."
        />
        <section className={`${styles.formSection} ${styles.purpleAccent}`}>
          <div className={styles.formGrid}>
            <AnimatedSection direction="left">
              <div className={styles.formInfo}>
                <h2>Try Swalook Before You Decide</h2>
                <p>Experience the tools that help beauty businesses grow.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className={styles.successState}>
                <div className={styles.successIcon}><FiCheck /></div>
                <h3>Welcome to Swalook!</h3>
                <p>Your free trial request has been received. Check your email for next steps.</p>
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
        label="Free Trial"
        title="Try Swalook Before You Decide"
        highlight="Start using Swalook to improve retention, reduce no-shows, and manage growth."
        description="Explore the platform with a free trial and see how Swalook fits your salon workflow."
      />

      <section className={`${styles.formSection} ${styles.purpleAccent}`}>
        <div className={styles.formGrid}>
          <AnimatedSection direction="left">
            <div className={styles.formInfo}>
              <h2>Try Swalook Before You Decide</h2>
              <p>
                Experience the tools that help beauty businesses grow with better customer retention, smarter marketing,
                and simpler operations.
              </p>
              <div className={styles.infoBullets}>
                <div className={styles.infoBullet}>
                  <FiCheckCircle className={styles.infoBulletIcon} />
                  <span>See how automation saves time on follow-ups and reminders.</span>
                </div>
                <div className={styles.infoBullet}>
                  <FiCheckCircle className={styles.infoBulletIcon} />
                  <span>Test the tools for appointments, marketing, and reporting.</span>
                </div>
                <div className={styles.infoBullet}>
                  <FiCheckCircle className={styles.infoBulletIcon} />
                  <span>Discover how Swalook can support your business growth.</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
              <div className={styles.formGroup}>
                <label>Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={errors.name && touched.name ? styles.fieldError : ''}
                />
                {errors.name && touched.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>
              <div className={styles.formGroup}>
                <label>Salon Name *</label>
                <input
                  type="text"
                  placeholder="Salon name"
                  value={form.salonName}
                  onChange={e => handleChange('salonName', e.target.value)}
                  onBlur={() => handleBlur('salonName')}
                  className={errors.salonName && touched.salonName ? styles.fieldError : ''}
                />
                {errors.salonName && touched.salonName && <span className={styles.errorText}>{errors.salonName}</span>}
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  className={errors.phone && touched.phone ? styles.fieldError : ''}
                />
                {errors.phone && touched.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>
              <div className={styles.formGroup}>
                <label>Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={errors.email && touched.email ? styles.fieldError : ''}
                />
                {errors.email && touched.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
              <div className={styles.formGroup}>
                <label>City *</label>
                <input
                  type="text"
                  placeholder="Your city"
                  value={form.city}
                  onChange={e => handleChange('city', e.target.value)}
                  onBlur={() => handleBlur('city')}
                  className={errors.city && touched.city ? styles.fieldError : ''}
                />
                {errors.city && touched.city && <span className={styles.errorText}>{errors.city}</span>}
              </div>
              <div className={styles.formGroup}>
                <label>Business Type</label>
                <input type="text" placeholder="Salon, spa, studio, clinic" value={form.businessType} onChange={e => handleChange('businessType', e.target.value)} />
              </div>
              {submitError && <p className={styles.errorText} style={{ marginBottom: 12 }}>{submitError}</p>}
              <button
                type="submit"
                className={`${styles.submitBtn} ${status === 'submitting' ? styles.submitBtnLoading : ''}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <><FiRefreshCw className={styles.spinner} /> Starting...</>
                ) : 'Start Free Trial'}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

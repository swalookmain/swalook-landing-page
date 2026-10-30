'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { FiPhone, FiCheck, FiRefreshCw } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { validateField, submitForm } from '@/lib/formHelpers';
import {
  AW_CONVERSIONS,
  gtagAdsConversion,
  gtagEvent,
  gtagSetUserData,
  toIndiaE164,
} from '@/lib/analytics';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  BRANCH_OPTIONS,
  PRIORITY_OPTIONS,
  buildWhatsAppHref,
  mergeAttributionFromUrl,
} from './adsConfig';
import styles from './Ads.module.css';

const REQUIRED = ['name', 'salonName', 'mobile'];

const initialForm = {
  name: '',
  salonName: '',
  mobile: '',
  email: '',
  city: '',
  branches: '',
  priority: '',
  company_website: '',
};

export default function AdsLeadForm({
  formId = 'hero',
  heading = 'Let’s Talk About Your Salon',
  compact = false,
}) {
  const [form, setForm] = useState(initialForm);
  const [attribution, setAttribution] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const formLoadedAtRef = useRef(Date.now());
  const nameRef = useRef(null);
  const salonRef = useRef(null);
  const mobileRef = useRef(null);
  const cityRef = useRef(null);

  useEffect(() => {
    formLoadedAtRef.current = Date.now();
    setAttribution(mergeAttributionFromUrl());
  }, []);

  const handleChange = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateOptional(field, value) }));
    }
  }, [touched]);

  const handleBlur = useCallback((field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateOptional(field, form[field]) }));
  }, [form]);

  const focusFirstInvalid = useCallback((fieldErrors) => {
    const map = {
      name: nameRef,
      salonName: salonRef,
      mobile: mobileRef,
      city: cityRef,
    };
    for (const field of ['name', 'salonName', 'mobile', 'city']) {
      if (fieldErrors[field]) {
        map[field]?.current?.focus();
        break;
      }
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const newErrors = {};
    const allTouched = {};
    let hasError = false;

    for (const field of REQUIRED) {
      const err = validateOptional(field, form[field]);
      newErrors[field] = err;
      allTouched[field] = true;
      if (err) hasError = true;
    }

    const cityErr = validateOptional('city', form.city);
    if (cityErr) {
      newErrors.city = cityErr;
      allTouched.city = true;
      hasError = true;
    }

    const emailErr = validateOptional('email', form.email);
    if (emailErr) {
      newErrors.email = emailErr;
      allTouched.email = true;
      hasError = true;
    }

    setErrors(newErrors);
    setTouched(allTouched);
    if (hasError) {
      focusFirstInvalid(newErrors);
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    const payload = {
      ...form,
      ...attribution,
      formLoadedAt: formLoadedAtRef.current,
      landingPage: typeof window !== 'undefined' ? window.location.href.split('#')[0] : '/ads',
      formId,
    };

    try {
      await submitForm('/api/ads-lead', payload, { timeoutMs: 15000 });

      gtagEvent('generate_lead', {
        page_path: '/ads',
        form_name: 'ads_inquiry',
        method: 'ads_form',
        form_id: formId,
      });

      const phoneNumber = toIndiaE164(form.mobile);
      const email = form.email.trim() || undefined;
      gtagSetUserData({ phoneNumber, email });
      gtagAdsConversion(AW_CONVERSIONS.demoForm);
      gtagEvent('ads_form_submit', {
        page_path: '/ads',
        form_name: 'ads_inquiry',
        form_id: formId,
      });

      setStatus('success');
    } catch (err) {
      const message = err.message || 'Something went wrong. Please try again.';
      setSubmitError(message);
      setStatus('error');
      gtagEvent('ads_form_error', {
        page_path: '/ads',
        form_name: 'ads_inquiry',
        form_id: formId,
        error_message: message.slice(0, 120),
      });
    }
  }, [form, attribution, focusFirstInvalid, formId]);

  const fieldClass = (field) => (errors[field] && touched[field] ? styles.fieldError : '');
  const fieldError = (field) =>
    errors[field] && touched[field] ? (
      <span className={styles.errorText} id={`${formId}-${field}-error`}>
        {errors[field]}
      </span>
    ) : null;

  const waHref = buildWhatsAppHref(
    status === 'error' || status === 'success'
      ? { name: form.name.trim(), salonName: form.salonName.trim(), mobile: form.mobile.trim() }
      : {},
  );

  if (status === 'success') {
    return (
      <div className={`${styles.formCard} ${styles.successCard}`} role="status" aria-live="polite">
        <div className={styles.successIcon}>
          <FiCheck />
        </div>
        <h2>Thank you, {form.name.trim().split(/\s+/)[0]}!</h2>
        <p>
          We have your request for <strong>{form.salonName.trim()}</strong>. Our team will call
          you on <strong>{form.mobile.trim()}</strong> shortly.
        </p>
        <p className={styles.note}>Prefer to talk now?</p>
        <div className={styles.successActions}>
          <a href={PHONE_TEL} className={styles.successBtnPrimary}>
            <FiPhone aria-hidden="true" /> Call {PHONE_DISPLAY}
          </a>
          <a
            href={waHref}
            className={styles.successBtnWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp us
          </a>
        </div>
        <p className={styles.note}>Mon–Sat, 10am–7pm IST</p>
      </div>
    );
  }

  return (
        <div className={`${styles.formCard} ${compact ? styles.formCompact : ''}`}>
      <h2 className={styles.formHeading}>{heading}</h2>
      <p className={styles.formIntro}>
        Tell us about your salon. We’ll call you to set a free demo.
      </p>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Ads demo form"
      >
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor={`${formId}-company-website`}>Company website</label>
          <input
            id={`${formId}-company-website`}
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={form.company_website}
            onChange={(e) => handleChange('company_website', e.target.value)}
          />
        </div>

        <div className={styles.formGrid}>
          <div className={`${styles.formGroup} ${fieldClass('name')}`}>
            <label htmlFor={`${formId}-name`}>Your Name *</label>
            <input
              ref={nameRef}
              id={`${formId}-name`}
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              placeholder="Your name"
              aria-invalid={Boolean(errors.name && touched.name)}
              aria-describedby={errors.name && touched.name ? `${formId}-name-error` : undefined}
            />
            {fieldError('name')}
          </div>

          <div className={`${styles.formGroup} ${fieldClass('salonName')}`}>
            <label htmlFor={`${formId}-salon`}>Salon Name *</label>
            <input
              ref={salonRef}
              id={`${formId}-salon`}
              name="salonName"
              type="text"
              autoComplete="organization"
              value={form.salonName}
              onChange={(e) => handleChange('salonName', e.target.value)}
              onBlur={() => handleBlur('salonName')}
              placeholder="Your salon name"
              aria-invalid={Boolean(errors.salonName && touched.salonName)}
              aria-describedby={errors.salonName && touched.salonName ? `${formId}-salonName-error` : undefined}
            />
            {fieldError('salonName')}
          </div>

          <div className={`${styles.formGroup} ${fieldClass('mobile')}`}>
            <label htmlFor={`${formId}-mobile`}>Mobile Number *</label>
            <input
              ref={mobileRef}
              id={`${formId}-mobile`}
              name="mobile"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.mobile}
              onChange={(e) => handleChange('mobile', e.target.value)}
              onBlur={() => handleBlur('mobile')}
              placeholder="10-digit mobile number"
              aria-invalid={Boolean(errors.mobile && touched.mobile)}
              aria-describedby={errors.mobile && touched.mobile ? `${formId}-mobile-error` : undefined}
            />
            {fieldError('mobile')}
          </div>

          <div className={`${styles.formGroup} ${fieldClass('email')}`}>
            <label htmlFor={`${formId}-email`}>Email (optional)</label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email && touched.email)}
              aria-describedby={errors.email && touched.email ? `${formId}-email-error` : undefined}
            />
            {fieldError('email')}
          </div>

          <div className={`${styles.formGroup} ${fieldClass('city')}`}>
            <label htmlFor={`${formId}-city`}>City (optional)</label>
            <input
              ref={cityRef}
              id={`${formId}-city`}
              name="city"
              type="text"
              autoComplete="address-level2"
              value={form.city}
              onChange={(e) => handleChange('city', e.target.value)}
              onBlur={() => handleBlur('city')}
              placeholder="e.g. Noida"
              aria-invalid={Boolean(errors.city && touched.city)}
              aria-describedby={errors.city && touched.city ? `${formId}-city-error` : undefined}
            />
            {fieldError('city')}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor={`${formId}-branches`}>Number of Branches (optional)</label>
            <select
              id={`${formId}-branches`}
              name="branches"
              value={form.branches}
              onChange={(e) => handleChange('branches', e.target.value)}
            >
              {BRANCH_OPTIONS.map((option) => (
                <option key={option.value || 'none'} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
            <label htmlFor={`${formId}-priority`}>What would you most like to manage better? (optional)</label>
            <select
              id={`${formId}-priority`}
              name="priority"
              value={form.priority}
              onChange={(e) => handleChange('priority', e.target.value)}
            >
              {PRIORITY_OPTIONS.map((option) => (
                <option key={option.value || 'none'} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div aria-live="polite">
          {submitError ? (
            <div className={styles.submitErrorBox}>
              <p className={styles.submitError}>{submitError}</p>
              <a
                href={waHref}
                className={styles.errorWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" /> Message us on WhatsApp instead
              </a>
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <FiRefreshCw aria-hidden="true" className={styles.spin} />
              Submitting…
            </>
          ) : (
            'Book a Free Demo'
          )}
        </button>

        <p className={styles.note}>No spam. We only use your number to schedule the demo call.</p>
      </form>
    </div>
  );
}

function validateOptional(field, value) {
  if (field === 'email') {
    const trimmed = (value || '').trim();
    if (!trimmed) return '';
    return validateField('email', trimmed);
  }
  return validateField(field, value);
}

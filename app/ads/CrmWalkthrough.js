'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiPause, FiPlay } from 'react-icons/fi';
import { TiltStage } from './adsMotion';
import styles from './Ads.module.css';

const SLIDES = [
  {
    src: '/images/crm-customers.png',
    alt: 'Salon CRM software in Swalook showing customer profiles, visit history and customer status.',
    title: 'Customer CRM',
    caption: 'See who is new, active or at risk — then follow up.',
  },
  {
    src: '/images/crm-invoices.png',
    alt: 'Salon billing software screen in Swalook showing a customer bill, services and payment details.',
    title: 'Billing',
    caption: 'Bills, services and payments in one place.',
  },
  {
    src: '/images/crm-appointments.png',
    alt: 'Swalook salon appointment calendar showing daily bookings and staff availability.',
    title: 'Appointments',
    caption: 'Bookings and the day’s calendar in one view.',
  },
  {
    src: '/images/crm-inventory.png',
    alt: 'Swalook inventory screen showing stock levels, product list and status.',
    title: 'Inventory',
    caption: 'In stock, low or expired — without a separate register.',
  },
  {
    src: '/images/crm-attendance.png',
    alt: 'Swalook staff attendance screen showing present, absent and team overview.',
    title: 'Staff',
    caption: 'Attendance next to the rest of the day’s work.',
  },
];

const SLIDE_MS = 9000;
const TOTAL_MS = SLIDES.length * SLIDE_MS;

function formatTime(ms) {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function CrmWalkthrough() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef(Date.now());
  const elapsedRef = useRef(0);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion.current) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    startedAt.current = Date.now() - elapsedRef.current;
    let frame;

    const tick = () => {
      const next = (Date.now() - startedAt.current) % TOTAL_MS;
      elapsedRef.current = next;
      setElapsed(next);
      setIndex(Math.min(SLIDES.length - 1, Math.floor(next / SLIDE_MS)));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  const toggle = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const jumpTo = useCallback((i) => {
    const next = i * SLIDE_MS;
    elapsedRef.current = next;
    startedAt.current = Date.now() - next;
    setElapsed(next);
    setIndex(i);
  }, []);

  const slide = SLIDES[index];

  return (
    <figure className={`${styles.player} ${styles.productStage}`}>
      <TiltStage>
        <div className={styles.playerStage}>
          {SLIDES.map((item, i) => (
            <Image
              key={item.title}
              src={item.src}
              alt={item.alt}
              width={1600}
              height={880}
              className={`${styles.playerShot} ${i === index ? styles.playerShotOn : styles.playerShotOff}`}
              priority={i === 0}
            />
          ))}
          <button
            type="button"
            className={styles.playerToggle}
            onClick={toggle}
            aria-label={playing ? 'Pause walkthrough' : 'Play walkthrough'}
          >
            {playing ? <FiPause /> : <FiPlay />}
          </button>
        </div>
      </TiltStage>
      <figcaption className={styles.playerCaption}>
        <div>
          <strong>{slide.title}</strong>
          <p>{slide.caption}</p>
        </div>
        <span className={styles.playerTime}>
          {formatTime(elapsed)} / {formatTime(TOTAL_MS)}
        </span>
      </figcaption>
      <div
        className={styles.playerBar}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round((elapsed / TOTAL_MS) * 100)}
      >
        <span style={{ width: `${(elapsed / TOTAL_MS) * 100}%` }} />
      </div>
      <p className={styles.playerClipLabel}>This clip</p>
      <div className={styles.playerDots} aria-label="Walkthrough scenes">
        {SLIDES.map((item, i) => (
          <button
            key={item.title}
            type="button"
            aria-pressed={i === index}
            aria-label={`Show ${item.title} clip`}
            className={i === index ? styles.playerDotOn : styles.playerDot}
            onClick={() => jumpTo(i)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </figure>
  );
}

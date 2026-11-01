'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export function useHeaderScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

function useOnceInView(ref, { threshold = 0.12 } = {}) {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion) {
      setVisible(true);
      return undefined;
    }

    let seen = false;
    const show = () => {
      if (seen) return;
      seen = true;
      setVisible(true);
    };

    const isRevealed = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight;
    };

    if (isRevealed()) {
      show();
      return undefined;
    }

    setVisible(false);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px' }
    );
    io.observe(node);

    const onScroll = () => {
      if (isRevealed()) {
        show();
        io.disconnect();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [prefersReducedMotion, threshold]);

  return prefersReducedMotion || visible;
}

const OFFSETS = {
  up: { y: 16, x: 0 },
  down: { y: -16, x: 0 },
  left: { x: 16, y: 0 },
  right: { x: -16, y: 0 },
  none: { x: 0, y: 0 },
};

export function AdsReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  fromScale = 1,
}) {
  const ref = useRef(null);
  const visible = useOnceInView(ref);
  const { x, y } = OFFSETS[direction] || OFFSETS.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      data-inview={visible ? '' : undefined}
      initial={false}
      animate={visible ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x, y, scale: fromScale }}
      transition={{ duration: 0.45, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function AdsStagger({ children, className = '', staggerDelay = 0.06, delay = 0, ...rest }) {
  const ref = useRef(null);
  const visible = useOnceInView(ref, { threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={visible ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: delay },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function AdsStaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={false}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress({ className }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();

  if (!mounted || prefersReducedMotion) {
    return <div className={className} aria-hidden="true" />;
  }

  return (
    <motion.div
      className={className}
      style={{ scaleX, transformOrigin: '0% 50%' }}
      aria-hidden="true"
    />
  );
}

export function TiltStage({ children, className }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (event) => {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const px = (event.clientX - box.left) / box.width - 0.5;
    const py = (event.clientY - box.top) / box.height - 0.5;
    setTilt({ x: py * -4, y: px * 4 });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.18s ease-out',
            }
      }
    >
      {children}
    </div>
  );
}

export function useNavSpy(ids, offset = 112) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}

export function HeroParallax({ children, className }) {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();
  const [desktop, setDesktop] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 14]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 981px)');
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  if (!mounted || prefersReducedMotion || !desktop) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

export function TimelineFill({ className }) {
  const ref = useRef(null);
  const visible = useOnceInView(ref, { threshold: 0.35 });
  const [vertical, setVertical] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 980px)');
    const sync = () => setVertical(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return undefined;
    parent.toggleAttribute('data-inview', visible);
    return undefined;
  }, [visible]);

  return (
    <motion.span
      ref={ref}
      className={className}
      aria-hidden="true"
      initial={false}
      animate={
        vertical
          ? { scaleY: visible ? 1 : 0, scaleX: 1 }
          : { scaleX: visible ? 1 : 0, scaleY: 1 }
      }
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
    />
  );
}

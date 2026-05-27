import type { Variants } from 'framer-motion';

export const cardContactAnimated: Variants = {
  offscreen: { x: -400, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.7 },
  },
};

export const inputAnimated: Variants = {
  offscreen: { x: -300, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.7 },
  },
};

export const textIndexAnimated: Variants = {
  offscreen: { x: 200, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, type: 'tween' },
  },
};

export const languageBarAnimated: Variants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.6, duration: 2 },
  },
};

export const textLanguageAnimated: Variants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 2 },
  },
};

export const cardLanguageAnimated: Variants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.5 },
  },
};

export const cardProjectAnimated: Variants = {
  offscreen: { y: 400, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.5 },
  },
};

// === NEW VARIANTS FOR REDESIGN ===

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

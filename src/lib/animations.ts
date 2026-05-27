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

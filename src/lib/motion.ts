'use client';

import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

/**
 * Returns the provided variants or identity (no-animation) variants
 * when the user prefers reduced motion.
 */
export function useMotionVariants(variants: Variants): Variants {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return {
      offscreen: { opacity: 1 },
      onscreen: { opacity: 1 },
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }

  return variants;
}

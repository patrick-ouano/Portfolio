import type { Transition, Variants } from "motion/react";

type Easing = [number, number, number, number];

export const EASE_OUT: Easing = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: Easing = [0.65, 0, 0.35, 1];

export const DURATION = {
  fast: 0.35,
  base: 0.7,
  slow: 1.1,
} as const;

export const VIEWPORT = { once: true, margin: "-12% 0px" } as const;

export const transitions = {
  reveal: { duration: DURATION.base, ease: EASE_OUT },
  page: { duration: DURATION.fast, ease: EASE_OUT },
  mask: { duration: DURATION.slow, ease: EASE_OUT },
} satisfies Record<string, Transition>;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const maskLine: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%" },
};

export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function staggerParent(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

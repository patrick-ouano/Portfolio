"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUp, staggerParent, transitions, VIEWPORT } from "@/lib/motion";

export function Stagger({
  children,
  stagger = 0.08,
  delayChildren = 0,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={staggerParent(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={transitions.reveal}
    >
      {children}
    </motion.div>
  );
}

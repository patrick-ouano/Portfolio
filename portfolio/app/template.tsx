"use client";

import { motion, useReducedMotion } from "motion/react";
import { pageEnter, transitions } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <motion.div
      variants={pageEnter}
      initial="hidden"
      animate="visible"
      transition={transitions.page}
    >
      {children}
    </motion.div>
  );
}

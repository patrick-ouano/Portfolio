"use client";

import { motion, useReducedMotion } from "motion/react";
import { maskLine, staggerParent, transitions } from "@/lib/motion";
import { cn } from "@/lib/cn";

/**
 * Reveals each line from behind its own clipping box. Lines are passed as
 * strings so every line gets its own overflow container.
 */
/** A line is either plain text or text with its own styling. */
export type MaskLine = string | { text: string; className?: string };

const read = (line: MaskLine) =>
  typeof line === "string" ? { text: line, className: undefined } : line;

export function MaskLines({
  lines,
  className,
  lineClassName,
  delayChildren = 0,
}: {
  lines: MaskLine[];
  className?: string;
  lineClassName?: string;
  delayChildren?: number;
}) {
  const reduced = useReducedMotion();
  const resolved = lines.map(read);

  if (reduced) {
    return (
      <span className={className}>
        {resolved.map((line) => (
          <span
            key={line.text}
            className={cn("block", lineClassName, line.className)}
          >
            {line.text}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      variants={staggerParent(0.1, delayChildren)}
      initial="hidden"
      animate="visible"
    >
      {resolved.map((line) => (
        <span key={line.text} className="block overflow-hidden pb-[0.16em]">
          <motion.span
            className={cn("block", lineClassName, line.className)}
            variants={maskLine}
            transition={transitions.mask}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

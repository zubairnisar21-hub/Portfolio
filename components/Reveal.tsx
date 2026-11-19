"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-cyan-300" />
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.7rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-muted sm:text-base">{description}</p>
      )}
    </Reveal>
  );
}

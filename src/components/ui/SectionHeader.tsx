"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "left" | "center";
  isInView?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "left",
  isInView = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="orange-dot" />
        <span
          className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {eyebrow}
        </span>
        {align === "center" && <span className="orange-dot" />}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
        className="font-bold leading-none"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 5vw, 5rem)",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
        {accent && (
          <>
            <br />
            <span className="text-gradient-orange">{accent}</span>
          </>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`mt-4 text-base text-offwhite-DEFAULT/50 leading-relaxed ${
            align === "center" ? "max-w-xl mx-auto" : "max-w-lg"
          }`}
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

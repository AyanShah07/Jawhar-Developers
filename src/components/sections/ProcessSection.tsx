"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We begin with deep-dive consultations to understand your goals, constraints, and aspirations. Our team conducts site analysis, feasibility studies, and stakeholder interviews.",
    deliverables: ["Site Analysis", "Feasibility Study", "Budget Framework", "Timeline Estimate"],
    duration: "2–4 weeks",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Planning",
    subtitle: "Strategic Blueprint",
    description:
      "Comprehensive project planning using BIM workflows, AI-powered scheduling, and risk assessment modeling to establish a bulletproof roadmap.",
    deliverables: ["BIM Model", "Risk Assessment", "Resource Plan", "Procurement Strategy"],
    duration: "3–6 weeks",
    icon: "📐",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Architectural Excellence",
    description:
      "Our award-winning design team creates architectural concepts balancing aesthetics, functionality, sustainability, and engineering precision.",
    deliverables: ["Concept Designs", "3D Renders", "Structural Plans", "MEP Drawings"],
    duration: "4–12 weeks",
    icon: "✏️",
  },
  {
    number: "04",
    title: "Construction",
    subtitle: "Precision Execution",
    description:
      "Ground-breaking to topping-out managed with real-time drone monitoring, smart sensors, AI analytics, and our experienced site management teams.",
    deliverables: ["Daily Reports", "Live Progress Tracking", "Safety Audits", "Quality Checks"],
    duration: "Varies",
    icon: "🏗️",
  },
  {
    number: "05",
    title: "Quality Assurance",
    subtitle: "Zero Compromise Standards",
    description:
      "Rigorous multi-stage quality auditing, materials testing, structural inspections, and independent certification before any handover.",
    deliverables: ["QA Reports", "Third-Party Audit", "Defect Rectification", "Compliance Docs"],
    duration: "2–6 weeks",
    icon: "✅",
  },
  {
    number: "06",
    title: "Delivery",
    subtitle: "Exceeding Expectations",
    description:
      "A white-glove project handover with complete documentation, training, aftercare program, and 24-month structural warranty.",
    deliverables: ["As-Built Drawings", "O&M Manuals", "Warranty Package", "Aftercare Plan"],
    duration: "1–2 weeks",
    icon: "🏆",
  },
];

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 lg:mb-32 ${
        !isEven ? "lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1" : ""
      }`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="flex items-center gap-4 mb-5">
          <span
            className="text-7xl font-bold text-offwhite-DEFAULT/5"
            style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.05em" }}
          >
            {step.number}
          </span>
          <div>
            <span
              className="text-xs tracking-[0.2em] uppercase text-orange-DEFAULT"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Step {step.number}
            </span>
            <h3
              className="text-2xl lg:text-3xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}
            >
              {step.title}
            </h3>
          </div>
        </div>

        <p
          className="text-sm font-semibold text-orange-DEFAULT mb-3"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {step.subtitle}
        </p>

        <p
          className="text-base text-offwhite-DEFAULT/50 leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {step.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {step.deliverables.map((d) => (
            <span key={d} className="tag-pill">{d}</span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="orange-dot" />
          <span
            className="text-xs text-offwhite-DEFAULT/40"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Typical Duration: {step.duration}
          </span>
        </div>
      </motion.div>

      {/* Visual card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
        className="bento-card p-8 relative overflow-hidden"
      >
        {/* Blueprint grid background */}
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="relative z-10">
          <div className="text-5xl mb-6">{step.icon}</div>

          {/* Mini timeline */}
          <div className="space-y-3">
            {step.deliverables.map((d, di) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + di * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full border border-orange-DEFAULT/40 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 bg-orange-DEFAULT rounded-full" />
                </div>
                <p
                  className="text-sm text-offwhite-DEFAULT/70"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {d}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8 pt-6 border-t border-white/6">
            <div className="flex justify-between mb-2">
              <span
                className="text-xs text-offwhite-DEFAULT/40"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Phase Completion
              </span>
              <span
                className="text-xs text-orange-DEFAULT"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {Math.round(((index + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className="h-1 bg-white/6 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${((index + 1) / steps.length) * 100}%` } : {}}
                transition={{ delay: 0.5, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="h-full bg-gradient-to-r from-orange-DEFAULT to-orange-light rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProcessSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-36 bg-[#0F1115] overflow-hidden">
      {/* Decorative left border line */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 flex justify-center" style={{ width: "1px" }}>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="orange-dot" />
            <span
              className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              How We Work
            </span>
            <span className="orange-dot" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="text-5xl lg:text-7xl font-bold leading-none mb-6"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Our <span className="text-gradient-orange">Process.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base text-offwhite-DEFAULT/50 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            A proven six-phase methodology refined over 27 years to deliver
            exceptional projects on time, within budget, and beyond expectations.
          </motion.p>
        </div>

        {/* Steps */}
        {steps.map((step, i) => (
          <ProcessStep key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}

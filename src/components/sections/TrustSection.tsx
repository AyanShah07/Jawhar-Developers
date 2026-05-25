"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  "Goldman Sachs", "Apple", "Tesla", "Bloomberg", "Citigroup",
  "JPMorgan", "Microsoft", "Amazon", "Google", "Meta",
  "BlackRock", "Verizon", "Boeing", "ExxonMobil", "Chevron",
];

const stats = [
  { value: 850, suffix: "+", label: "Projects Completed", description: "Across 6 continents" },
  { value: 27, suffix: "yrs", label: "Years Experience", description: "Industry expertise" },
  { value: 42, suffix: "", label: "Cities Served", description: "Global footprint" },
  { value: 99.8, suffix: "%", label: "Safety Compliance", description: "Zero major incidents" },
  { value: 4.2, suffix: "B", label: "Project Value", description: "Total USD delivered" },
  { value: 12, suffix: "K+", label: "Skilled Workforce", description: "Expert professionals" },
];

function AnimatedNumber({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function TrustSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#0F1115] overflow-hidden">
      {/* Logo Marquee */}
      <div className="py-12 border-y border-white/6 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0F1115] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0F1115] to-transparent z-10" />

        <p
          className="text-center text-[10px] tracking-[0.3em] uppercase text-offwhite-DEFAULT/30 mb-6"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Trusted by World-Class Organizations
        </p>

        <div className="marquee-container">
          <div className="marquee-track">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex items-center mx-8 lg:mx-14"
              >
                <span
                  className="text-sm font-bold tracking-widest uppercase text-offwhite-DEFAULT/20 hover:text-offwhite-DEFAULT/50 transition-colors duration-300 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-syne)", letterSpacing: "0.12em" }}
                >
                  {client}
                </span>
                <span className="ml-8 lg:ml-14 w-1 h-1 bg-orange-DEFAULT/30 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div
        ref={sectionRef}
        className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="orange-dot" />
          <span
            className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            By The Numbers
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="lg:w-80 shrink-0"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold leading-none mb-6"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Our Impact
              <br />
              <span className="text-gradient-orange">In Numbers.</span>
            </h2>
            <p
              className="text-sm text-offwhite-DEFAULT/50 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Decades of precision engineering and architectural innovation
              reflected in the projects we&apos;ve delivered worldwide.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="bg-[#0F1115] hover:bg-[#1A1E25] transition-colors duration-300 p-8 group cursor-default"
              >
                <div
                  className="text-4xl lg:text-5xl font-bold text-orange-DEFAULT mb-2 group-hover:scale-105 transition-transform duration-300 origin-left"
                  style={{
                    fontFamily: "var(--font-syne)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <p
                  className="text-sm font-semibold text-offwhite-DEFAULT/80 mb-1"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-xs text-offwhite-DEFAULT/40"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

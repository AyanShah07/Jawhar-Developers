"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const values = [
  "Architectural Excellence — Every project is a landmark",
  "Precision Engineering — Zero-tolerance quality standards",
  "Sustainable Building — LEED-certified processes",
  "On-Time Delivery — 94% schedule adherence",
  "Safety First — 99.8% compliance record",
  "Client Partnership — Your vision, our expertise",
];

const milestones = [
  { year: "1998", event: "Founded in New York by Marcus Webb" },
  { year: "2005", event: "First $100M project — Hudson Plaza" },
  { year: "2011", event: "International expansion to Dubai & London" },
  { year: "2016", event: "ENR Top 50 Contractor recognition" },
  { year: "2020", event: "AI & BIM technology division launched" },
  { year: "2025", event: "$4.2B+ in project value delivered" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-[#080A0D] overflow-hidden">
      {/* Teal accent glow — inspired by City Construct */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00BFA6]/4 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Top tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-16"
        >
          <span className="orange-dot" />
          <span className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Our Story
          </span>
        </motion.div>

        {/* --- Main Grid: Magazine split layout (City Construct + DNOIN) --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left: Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            {/* Large image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
                alt="APEX construction team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/60 to-transparent" />
            </div>

            {/* Floating small image — inspired by City Construct */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 w-52 h-40 rounded-xl overflow-hidden border-4 border-[#080A0D] shadow-luxury"
            >
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80"
                alt="APEX project"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Founder badge — C5C inspired */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-6 -right-4 glass rounded-2xl p-5 w-52"
            >
              <p className="text-xs text-offwhite-DEFAULT/40 mb-1" style={{ fontFamily: "var(--font-dm-mono)" }}>Founder & CEO</p>
              <p className="text-base font-bold mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>Marcus Webb</p>
              <p className="text-xs text-offwhite-DEFAULT/50" style={{ fontFamily: "var(--font-dm-sans)" }}>27 years building legacies</p>
              {/* Signature style */}
              <p className="text-orange-DEFAULT mt-2 text-lg italic" style={{ fontFamily: "Georgia, serif", opacity: 0.7 }}>Marcus Webb</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            <h2
              className="text-5xl lg:text-6xl font-bold leading-none mb-8"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              We Don't Just
              <br />
              Build — We
              <br />
              <span className="text-gradient-orange">Create Legacies.</span>
            </h2>

            <p className="text-base text-offwhite-DEFAULT/60 leading-relaxed mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Founded in 1998 by Marcus Webb, APEX Construction was built on a single conviction: that every structure we build should outlast trends, withstand time, and enrich the communities it serves.
            </p>
            <p className="text-base text-offwhite-DEFAULT/60 leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
              From a 12-person firm in a Brooklyn warehouse to a 12,000-strong global force delivering billion-dollar landmarks — our growth has been driven by an obsession with precision and a relentless commitment to our clients.
            </p>

            {/* Values checklist */}
            <div className="space-y-3 mb-10">
              {values.map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-orange-DEFAULT mt-0.5 shrink-0" />
                  <span className="text-sm text-offwhite-DEFAULT/70" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {v}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 btn-border-orange px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Our Full Story <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Timeline — DNOIN editorial style */}
        <div className="border-t border-white/6 pt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl font-bold mb-12"
            style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}
          >
            Our Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-3 left-0 right-0 h-px bg-white/8 hidden lg:block" />

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="relative"
                >
                  {/* Dot on line */}
                  <div className="hidden lg:flex items-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-orange-DEFAULT border-2 border-[#080A0D] relative z-10" />
                  </div>

                  <p className="text-orange-DEFAULT font-bold text-sm mb-1" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {m.year}
                  </p>
                  <p className="text-xs text-offwhite-DEFAULT/50 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {m.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

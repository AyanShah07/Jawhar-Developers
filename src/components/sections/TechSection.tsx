"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Cpu, Radio, BarChart2, Scan, Leaf, Layers3, ArrowUpRight } from "lucide-react";

const technologies = [
  {
    icon: Layers3,
    title: "BIM Workflows",
    description: "Full 3D Building Information Modeling with clash detection, 4D construction sequencing, and facility management handover.",
    stat: "40% fewer RFIs",
  },
  {
    icon: Radio,
    title: "Drone Surveying",
    description: "Weekly aerial progress monitoring with photogrammetry, volumetric calculations, and automated progress reports.",
    stat: "10x faster surveys",
  },
  {
    icon: Scan,
    title: "Smart Site Monitoring",
    description: "IoT sensor networks tracking structural movement, environmental conditions, and safety compliance in real time.",
    stat: "24/7 visibility",
  },
  {
    icon: BarChart2,
    title: "AI Construction Analytics",
    description: "Machine learning models predicting delays, optimizing resource allocation, and flagging budget risks before they materialize.",
    stat: "25% cost savings",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "Certified low-carbon materials, recycled content tracking, and full lifecycle environmental impact reporting.",
    stat: "60% LEED certified",
  },
  {
    icon: Cpu,
    title: "Digital Twin Platform",
    description: "Real-time digital replicas of every active site for remote stakeholder access, virtual walk-throughs, and change management.",
    stat: "Live data sync",
  },
];

export default function TechSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-[#0A0C10]">
      {/* Dark grid overlay — BR Construction industrial feel */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00BFA6]/4 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header: Bold BR Construction style */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <span className="orange-dot" />
              <span className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Innovation & Technology
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="text-5xl lg:text-7xl font-bold leading-none"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.04em" }}
            >
              BUILDING
              <br />
              <span className="text-gradient-orange">SMARTER.</span>
              <br />
              BUILDING
              <br />
              BETTER.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="text-base text-offwhite-DEFAULT/50 leading-relaxed mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
              APEX has invested $48M in proprietary construction technology — from AI-powered project analytics to a fleet of autonomous survey drones. We don&apos;t adopt technology for show; we integrate it where it delivers measurable results.
            </p>

            {/* Dashboard mini-preview */}
            <div className="glass rounded-xl p-4 border border-white/8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-offwhite-DEFAULT/40 uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>Live Site Dashboard</span>
                <span className="flex items-center gap-1.5 text-[10px] text-[#00BFA6]" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  <span className="w-1.5 h-1.5 bg-[#00BFA6] rounded-full animate-pulse inline-block" />
                  LIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Active Sites", val: "47" },
                  { label: "Workers Online", val: "2,840" },
                  { label: "Safety Score", val: "99.8%" },
                ].map(item => (
                  <div key={item.label} className="bg-white/4 rounded-lg px-3 py-2">
                    <p className="text-lg font-bold text-orange-DEFAULT" style={{ fontFamily: "var(--font-syne)" }}>{item.val}</p>
                    <p className="text-[9px] text-offwhite-DEFAULT/30 uppercase tracking-widest mt-0.5" style={{ fontFamily: "var(--font-dm-mono)" }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology cards — City Construct service grid style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/6 hover:border-[#00BFA6]/30 bg-[#0F1115] transition-all duration-400 p-7 cursor-default"
              >
                {/* Teal glow on hover — City Construct feel */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFA6]/0 to-transparent group-hover:via-[#00BFA6]/40 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#00BFA6]/0 to-transparent group-hover:from-[#00BFA6]/4 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/6 group-hover:bg-[#00BFA6]/10 flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon size={18} className="text-[#00BFA6]" />
                  </div>

                  <h3 className="text-base font-bold mb-3" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.01em" }}>
                    {tech.title}
                  </h3>

                  <p className="text-sm text-offwhite-DEFAULT/50 leading-relaxed mb-5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {tech.description}
                  </p>

                  <div className="pt-4 border-t border-white/6 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00BFA6]" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {tech.stat}
                    </span>
                    <ArrowUpRight size={14} className="text-offwhite-DEFAULT/20 group-hover:text-[#00BFA6] transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Large image panel — DNOIN editorial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-12 relative h-64 lg:h-80 rounded-2xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1590739293931-a4c0e4972cf9?w=1600&q=80"
            alt="APEX smart construction site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10]/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 lg:px-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#00BFA6] mb-3" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Technology Investment
              </p>
              <p className="text-3xl lg:text-5xl font-bold" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}>
                $48M invested in
                <br />
                <span style={{ color: "#00BFA6" }}>proprietary tech</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Cpu,
  Leaf,
  Users,
  Bot,
  Zap,
  Award,
  Globe,
  Clock,
  TrendingUp,
} from "lucide-react";

const bentoItems = [
  {
    icon: Shield,
    title: "Industry-Leading Safety",
    description:
      "99.8% safety compliance rate. OSHA 30-certified workforce, AI-powered hazard detection, and daily safety briefings across every site.",
    size: "large",
    accent: true,
    stats: "Zero major incidents in 7 years",
    tags: ["OSHA 30", "ISO 45001"],
  },
  {
    icon: Cpu,
    title: "BIM & Smart Construction",
    description:
      "Full Building Information Modeling workflows with clash detection, 4D scheduling, and real-time site monitoring.",
    size: "medium",
    stats: "40% fewer design conflicts",
    tags: ["BIM", "4D"],
  },
  {
    icon: Leaf,
    title: "Sustainable Building",
    description:
      "LEED-certified projects, net-zero construction targets, and responsible material sourcing.",
    size: "medium",
    stats: "60% LEED-certified portfolio",
    tags: ["LEED", "Net Zero"],
  },
  {
    icon: Users,
    title: "12,000+ Expert Team",
    description:
      "Licensed engineers, master craftspeople, and certified project managers across every discipline.",
    size: "small",
    stats: "Avg 14 yrs experience",
    tags: [],
  },
  {
    icon: Bot,
    title: "AI-Assisted Planning",
    description:
      "Machine learning-powered resource optimization, predictive analytics, and intelligent scheduling.",
    size: "small",
    stats: "25% cost efficiency gains",
    tags: [],
  },
  {
    icon: Award,
    title: "50+ Industry Awards",
    description:
      "ENR Top 50, AGC Constructor of the Year, and Architectural Excellence across multiple categories.",
    size: "medium",
    stats: "Recognized globally",
    tags: ["ENR Top 50", "AGC"],
  },
  {
    icon: Globe,
    title: "42 Cities Worldwide",
    description:
      "International footprint with local expertise, ensuring regulatory compliance and cultural alignment.",
    size: "small",
    stats: "6 continents served",
    tags: [],
  },
  {
    icon: Clock,
    title: "94% On-Time Delivery",
    description:
      "Industry-leading schedule adherence through predictive planning and agile site management.",
    size: "small",
    stats: "vs. 67% industry avg",
    tags: [],
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused Delivery",
    description:
      "Value engineering and life-cycle cost analysis to maximize your investment return over 30+ years.",
    size: "medium",
    stats: "Avg 23% cost savings",
    tags: ["Value Eng."],
  },
  {
    icon: Zap,
    title: "Drone & Smart Site Tech",
    description:
      "Aerial surveying, progress tracking, and automated quality inspection using cutting-edge UAV technology.",
    size: "small",
    stats: "Weekly drone surveys",
    tags: [],
  },
];

function BentoCard({
  item,
  index,
}: {
  item: (typeof bentoItems)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = item.icon;

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-2",
    small: "",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`bento-card p-6 lg:p-7 relative overflow-hidden group ${sizeClasses[item.size as keyof typeof sizeClasses]} ${
        item.accent ? "border-orange-DEFAULT/20" : ""
      }`}
    >
      {/* Accent glow */}
      {item.accent && (
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-DEFAULT/10 rounded-full blur-2xl group-hover:bg-orange-DEFAULT/20 transition-colors duration-500" />
      )}

      <div className="relative z-10 h-full flex flex-col">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
            item.accent
              ? "bg-orange-DEFAULT text-black"
              : "bg-white/6 text-orange-DEFAULT group-hover:bg-orange-DEFAULT group-hover:text-black"
          }`}
        >
          <Icon size={18} />
        </div>

        <h3
          className={`font-bold mb-3 ${
            item.size === "large" ? "text-2xl" : "text-base"
          }`}
          style={{
            fontFamily: "var(--font-syne)",
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </h3>

        <p
          className={`text-offwhite-DEFAULT/50 leading-relaxed flex-1 ${
            item.size === "large" ? "text-base" : "text-sm"
          }`}
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {item.description}
        </p>

        <div className="mt-5 pt-4 border-t border-white/6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span
              className="text-xs text-orange-DEFAULT font-semibold"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {item.stats}
            </span>
            <div className="flex gap-1.5">
              {item.tags.map((tag) => (
                <span key={tag} className="tag-pill text-[9px] py-0.5">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyUsSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-36 bg-[#080A0D] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-DEFAULT/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
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
              Our Advantage
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
            Why Choose
            <br />
            <span className="text-gradient-orange">APEX?</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {bentoItems.map((item, i) => (
            <BentoCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Home,
  Factory,
  Wrench,
  PenTool,
  Layers,
  BarChart3,
  Ruler,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "World-class office towers, retail complexes, hotels, and mixed-use developments built to exceed expectations.",
    projects: "340+",
    value: "$1.8B+",
    tags: ["High-Rise", "Mixed-Use", "Retail", "Hospitality"],
    gradient: "from-orange-DEFAULT/10 to-transparent",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description:
      "Bespoke luxury residences, premium condominiums, and thoughtfully designed communities.",
    projects: "220+",
    value: "$900M+",
    tags: ["Luxury Homes", "Condos", "Communities"],
    gradient: "from-teal-DEFAULT/10 to-transparent",
  },
  {
    icon: Factory,
    title: "Industrial Infrastructure",
    description:
      "Advanced manufacturing facilities, logistics hubs, and industrial parks engineered for operational excellence.",
    projects: "95+",
    value: "$600M+",
    tags: ["Manufacturing", "Logistics", "Energy"],
    gradient: "from-orange-DEFAULT/10 to-transparent",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description:
      "Transformative renovations that breathe new life into existing structures while preserving architectural integrity.",
    projects: "180+",
    value: "$400M+",
    tags: ["Historic", "Commercial", "Residential"],
    gradient: "from-gold-DEFAULT/10 to-transparent",
  },
  {
    icon: PenTool,
    title: "Architecture & Planning",
    description:
      "Visionary architectural design and comprehensive urban planning that shapes the built environment.",
    projects: "150+",
    value: "$200M+",
    tags: ["Design", "Urban Planning", "Concept"],
    gradient: "from-teal-DEFAULT/10 to-transparent",
  },
  {
    icon: Layers,
    title: "Interior Build Solutions",
    description:
      "Premium interior fit-outs and build solutions for corporate, hospitality, and luxury residential spaces.",
    projects: "270+",
    value: "$350M+",
    tags: ["Corporate", "Hospitality", "Luxury"],
    gradient: "from-orange-DEFAULT/10 to-transparent",
  },
  {
    icon: BarChart3,
    title: "Project Management",
    description:
      "End-to-end project management leveraging AI-powered analytics, BIM workflows, and agile methodologies.",
    projects: "500+",
    value: "$3B+",
    tags: ["BIM", "Agile", "AI-Assisted"],
    gradient: "from-gold-DEFAULT/10 to-transparent",
  },
  {
    icon: Ruler,
    title: "Civil Engineering",
    description:
      "Infrastructure engineering for roads, bridges, utilities, and large-scale civil projects.",
    projects: "75+",
    value: "$800M+",
    tags: ["Roads", "Bridges", "Utilities"],
    gradient: "from-teal-DEFAULT/10 to-transparent",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.1,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="service-card p-7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="flex items-center justify-between mb-6">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-400 ${
            isHovered
              ? "bg-orange-DEFAULT text-black"
              : "bg-white/6 text-orange-DEFAULT"
          }`}
        >
          <Icon size={20} />
        </div>
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-orange-DEFAULT"
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold leading-tight mb-3 group-hover:text-orange-DEFAULT transition-colors"
        style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.01em" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-offwhite-DEFAULT/50 leading-relaxed mb-5"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {service.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex justify-between pt-5 border-t border-white/6">
        <div>
          <p
            className="text-xl font-bold text-orange-DEFAULT"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {service.projects}
          </p>
          <p
            className="text-[10px] text-offwhite-DEFAULT/40 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Projects
          </p>
        </div>
        <div className="text-right">
          <p
            className="text-xl font-bold text-offwhite-DEFAULT/80"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {service.value}
          </p>
          <p
            className="text-[10px] text-offwhite-DEFAULT/40 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Value
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-36 bg-[#0F1115] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-orange-DEFAULT/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <span className="orange-dot" />
              <span
                className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                What We Build
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="text-5xl lg:text-7xl font-bold leading-none"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Our
              <br />
              <span className="text-gradient-orange">Services.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:max-w-sm"
          >
            <p
              className="text-base text-offwhite-DEFAULT/50 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Eight specialized divisions, one unified vision: to deliver
              construction excellence at every scale and complexity.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 btn-border-orange px-6 py-3 rounded-full text-sm font-semibold"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Explore All Services <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

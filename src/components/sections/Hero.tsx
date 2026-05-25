"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, ChevronDown } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
  "https://images.unsplash.com/photo-1590739293931-a4c0e4972cf9?w=1920&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
];

const headlines = [
  "Building Tomorrow's",
  "Engineering Spaces",
  "Constructing the",
];
const headlineAccents = ["Landmarks.", "That Inspire.", "Future."];

const stats = [
  { value: "850+", label: "Projects Delivered" },
  { value: "27", label: "Years Experience" },
  { value: "42", label: "Cities Served" },
  { value: "99.8%", label: "Safety Record" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentHeadline, setCurrentHeadline] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const headlineTimer = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => {
      clearInterval(imgTimer);
      clearInterval(headlineTimer);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Images */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt="Construction project"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/90 via-[#0F1115]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/60 via-transparent to-[#0F1115]/30" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden="true" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-end min-h-[80vh]">
          {/* Left: Main Content */}
          <div className="flex flex-col justify-end pb-12">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="orange-dot animate-pulse" />
              <span
                className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/60"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Est. 1998 · Premium Construction
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadline}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(3rem, 7vw, 6.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {headlines[currentHeadline]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentHeadline + "-accent"}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.05,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="block text-gradient-orange leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(3rem, 7vw, 6.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {headlineAccents[currentHeadline]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base lg:text-lg text-offwhite-DEFAULT/60 leading-relaxed max-w-lg mb-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              From iconic skyscrapers to bespoke residences — we engineer spaces
              that define cities, inspire communities, and stand the test of
              time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 btn-orange-glow px-8 py-4 rounded-full text-base font-bold"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Start Your Project
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-2 glass px-8 py-4 rounded-full text-base font-semibold text-offwhite-DEFAULT/80 hover:text-offwhite-DEFAULT transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <Play size={16} className="text-orange-DEFAULT" />
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black/40 backdrop-blur-sm px-4 py-5 text-center"
                >
                  <p
                    className="text-2xl lg:text-3xl font-bold text-orange-DEFAULT leading-none mb-1"
                    style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[10px] text-offwhite-DEFAULT/40 uppercase tracking-widest leading-tight"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating cards */}
          <div className="hidden lg:flex flex-col gap-4 justify-end pb-12">
            {/* Featured project card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="glass rounded-2xl p-5 self-end w-80"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="tag-pill mb-2 inline-block">Active Project</span>
                  <h3
                    className="text-lg font-bold leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Nexus Tower
                    <br />
                    Manhattan, NY
                  </h3>
                </div>
                <div className="w-10 h-10 bg-orange-DEFAULT/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-DEFAULT rounded-full animate-pulse" />
                </div>
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
                  alt="Nexus Tower"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between text-xs text-offwhite-DEFAULT/50">
                <span style={{ fontFamily: "var(--font-dm-mono)" }}>Progress: 73%</span>
                <span style={{ fontFamily: "var(--font-dm-mono)" }}>$2.4B Value</span>
              </div>
              <div className="mt-2 h-1 bg-white/10 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "73%" }}
                  transition={{ delay: 1.2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                  className="h-full bg-orange-DEFAULT rounded-full"
                />
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.19, 1, 0.22, 1] }}
              className="glass rounded-2xl p-5 self-start w-72"
            >
              <p
                className="text-xs text-offwhite-DEFAULT/40 uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Certified & Trusted
              </p>
              <div className="grid grid-cols-3 gap-2">
                {["ISO 9001", "LEED Gold", "OSHA 30", "AGC", "ENR Top 50", "AAA Rated"].map(
                  (badge) => (
                    <div
                      key={badge}
                      className="bg-white/5 rounded-lg px-2 py-2 text-center"
                    >
                      <span
                        className="text-[10px] font-semibold text-offwhite-DEFAULT/70"
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        {badge}
                      </span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Image indicators */}
      <div className="absolute bottom-28 right-6 lg:right-12 flex flex-col gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-1 rounded-full transition-all duration-500 ${
              i === currentImage ? "h-8 bg-orange-DEFAULT" : "h-2 bg-white/20"
            }`}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase text-offwhite-DEFAULT/30"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-orange-DEFAULT" />
        </motion.div>
      </motion.div>
    </section>
  );
}

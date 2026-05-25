"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Whitfield",
    role: "CEO, Whitfield Capital Group",
    company: "Commercial Real Estate",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    rating: 5,
    quote:
      "APEX delivered our $2.4B tower project 3 weeks ahead of schedule and 8% under budget. The level of precision engineering and project management is simply unmatched in the industry. They've been our exclusive construction partner for 12 years.",
    project: "Nexus Tower, NYC",
    projectValue: "$2.4B",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Head of Development, Meridian Group",
    company: "Hospitality & Leisure",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: 5,
    quote:
      "The Meridian Hotel project was incredibly complex — historic preservation, modern hospitality requirements, and a compressed timeline. APEX navigated every challenge with expertise and elegance. The result exceeded our most ambitious vision.",
    project: "Meridian Hotel, Chicago",
    projectValue: "$580M",
  },
  {
    name: "Robert Asante",
    role: "Director of Infrastructure",
    company: "Texas Energy Partners",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    quote:
      "APEX transformed our entire industrial footprint with the Solaris Hub. Their use of AI-assisted planning and real-time monitoring meant we had full visibility throughout a 28-month build. Exceptional safety record, zero incidents.",
    project: "Solaris Industrial Hub, Houston",
    projectValue: "$820M",
  },
  {
    name: "Isabella Rousseau",
    role: "Owner",
    company: "Private Client",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    rating: 5,
    quote:
      "Our Parkview Estate is nothing short of a masterpiece. APEX's attention to detail in the stonework, the custom millwork, and the invisible integration of smart home technology — truly world-class craftsmanship.",
    project: "Parkview Estate, Beverly Hills",
    projectValue: "$28M",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const prev = () => {
    setIsAutoplay(false);
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const next = () => {
    setIsAutoplay(false);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="relative py-24 lg:py-36 bg-[#0F1115] overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-DEFAULT/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-DEFAULT/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
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
              Client Stories
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="text-5xl lg:text-7xl font-bold leading-none"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              What Our
              <br />
              <span className="text-gradient-orange">Clients Say.</span>
            </motion.h2>

            {/* Nav */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-offwhite-DEFAULT/60 hover:text-orange-DEFAULT hover:border-orange-DEFAULT/30 transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <span
                className="text-sm text-offwhite-DEFAULT/30"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                onClick={next}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-offwhite-DEFAULT/60 hover:text-orange-DEFAULT hover:border-orange-DEFAULT/30 transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Main quote */}
            <div className="lg:col-span-2 bento-card p-10 relative overflow-hidden">
              <div className="absolute top-6 right-8">
                <Quote size={60} className="text-orange-DEFAULT/8" />
              </div>

              <div className="flex gap-1 mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-orange-DEFAULT text-orange-DEFAULT" />
                ))}
              </div>

              <blockquote
                className="text-xl lg:text-2xl text-offwhite-DEFAULT/80 leading-relaxed mb-10 font-light"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-orange-DEFAULT/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p
                    className="font-bold text-offwhite-DEFAULT"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm text-offwhite-DEFAULT/50"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Project info + dots */}
            <div className="flex flex-col gap-5">
              <div className="bento-card p-8 flex-1">
                <p
                  className="text-xs tracking-[0.2em] uppercase text-orange-DEFAULT mb-4"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Project Reference
                </p>
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {testimonial.project}
                </h4>
                <p
                  className="text-3xl font-bold text-gradient-orange"
                  style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
                >
                  {testimonial.projectValue}
                </p>
                <p
                  className="text-xs text-offwhite-DEFAULT/40 mt-1"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Project Value
                </p>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsAutoplay(false);
                      setCurrent(i);
                    }}
                    className={`h-1 rounded-full transition-all duration-400 ${
                      i === current ? "w-10 bg-orange-DEFAULT" : "w-4 bg-white/20"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Other testimonials preview */}
              <div className="bento-card p-5 space-y-4">
                <p
                  className="text-xs tracking-widest uppercase text-offwhite-DEFAULT/30"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  More Reviews
                </p>
                {testimonials
                  .filter((_, i) => i !== current)
                  .slice(0, 2)
                  .map((t) => (
                    <button
                      key={t.name}
                      onClick={() => {
                        setIsAutoplay(false);
                        setCurrent(testimonials.indexOf(t));
                      }}
                      className="flex items-center gap-3 text-left w-full group"
                    >
                      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-sm font-semibold text-offwhite-DEFAULT/60 group-hover:text-offwhite-DEFAULT truncate transition-colors"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-xs text-offwhite-DEFAULT/30 truncate"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {t.company}
                        </p>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

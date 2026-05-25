"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-24 lg:py-0 overflow-hidden min-h-[70vh] flex items-center">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
          alt="Construction site"
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/95 via-[#0F1115]/80 to-[#0F1115]/60" />
        <div className="absolute inset-0 bg-[#0F1115]/30" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-8"
            >
              <span className="orange-dot animate-pulse" />
              <span
                className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Let&apos;s Build Together
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="leading-none mb-8"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Ready to Build
              <br />
              <span className="text-gradient-orange">Something</span>
              <br />
              Extraordinary?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-base text-offwhite-DEFAULT/50 leading-relaxed max-w-md mb-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Whether it&apos;s a $10M renovation or a $2B landmark tower — our
              team is ready to bring your vision to life with uncompromising
              precision and artistry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 btn-orange-glow px-8 py-4 rounded-full text-base font-bold"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Start Your Project
                <ArrowUpRight size={18} />
              </Link>
              <a
                href="tel:+12125550100"
                className="flex items-center gap-2 glass px-8 py-4 rounded-full text-base font-semibold text-offwhite-DEFAULT/80 hover:text-offwhite-DEFAULT transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <Phone size={16} className="text-orange-DEFAULT" />
                Call Us Now
              </a>
            </motion.div>
          </div>

          {/* Right: Floating contact card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="glass rounded-2xl p-8 border border-white/8">
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Quick Project Inquiry
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-xs text-offwhite-DEFAULT/40 mb-1.5 block uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="input-luxury w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs text-offwhite-DEFAULT/40 mb-1.5 block uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="input-luxury w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs text-offwhite-DEFAULT/40 mb-1.5 block uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-luxury w-full px-4 py-3 rounded-xl text-sm"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    className="text-xs text-offwhite-DEFAULT/40 mb-1.5 block uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Project Type
                  </label>
                  <select className="input-luxury w-full px-4 py-3 rounded-xl text-sm bg-white/4">
                    <option value="">Select type...</option>
                    <option>Commercial Construction</option>
                    <option>Residential Project</option>
                    <option>Industrial Infrastructure</option>
                    <option>Renovation & Remodeling</option>
                    <option>Architecture & Planning</option>
                  </select>
                </div>

                <div>
                  <label
                    className="text-xs text-offwhite-DEFAULT/40 mb-1.5 block uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Budget Range
                  </label>
                  <select className="input-luxury w-full px-4 py-3 rounded-xl text-sm bg-white/4">
                    <option value="">Select budget...</option>
                    <option>Under $5M</option>
                    <option>$5M – $50M</option>
                    <option>$50M – $200M</option>
                    <option>$200M – $1B</option>
                    <option>$1B+</option>
                  </select>
                </div>

                <div>
                  <label
                    className="text-xs text-offwhite-DEFAULT/40 mb-1.5 block uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="input-luxury w-full px-4 py-3 rounded-xl text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button className="btn-orange-glow w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 relative z-10">
                  Send Inquiry
                  <ArrowUpRight size={18} />
                </button>

                <p
                  className="text-center text-xs text-offwhite-DEFAULT/30"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Response within 24 hours · All inquiries are confidential
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

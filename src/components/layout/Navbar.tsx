"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Commercial Construction", href: "/services#commercial" },
      { label: "Residential Projects", href: "/services#residential" },
      { label: "Industrial Infrastructure", href: "/services#industrial" },
      { label: "Architecture & Planning", href: "/services#architecture" },
      { label: "Interior Build Solutions", href: "/services#interior" },
      { label: "Project Management", href: "/services#management" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    submenu: null,
  },
  {
    label: "About",
    href: "/about",
    submenu: null,
  },
  {
    label: "Blog",
    href: "/blog",
    submenu: null,
  },
  {
    label: "Careers",
    href: "/careers",
    submenu: null,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleMouseEnterLink = (label: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setActiveSubmenu(label);
  };

  const handleMouseLeaveLink = () => {
    submenuTimeout.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  return (
    <>
      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-dark shadow-luxury"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-orange-DEFAULT rounded-sm" />
                <div className="absolute inset-1 border border-white/20 rounded-sm" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black" />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-display text-lg font-800 tracking-tight text-offwhite-DEFAULT leading-none"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}
                >
                  APEX
                </span>
                <span
                  className="text-[10px] tracking-[0.2em] text-offwhite-DEFAULT/40 uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Construction
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnterLink(link.label)}
                  onMouseLeave={handleMouseLeaveLink}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-offwhite-DEFAULT/70 hover:text-offwhite-DEFAULT transition-colors duration-300 hover-underline py-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${activeSubmenu === link.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
                        onMouseEnter={() =>
                          handleMouseEnterLink(link.label)
                        }
                        onMouseLeave={handleMouseLeaveLink}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass-dark rounded-xl overflow-hidden shadow-luxury"
                      >
                        <div className="p-2">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-offwhite-DEFAULT/70 hover:text-offwhite-DEFAULT hover:bg-white/5 transition-all duration-200 group"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {sub.label}
                              <ArrowUpRight
                                size={14}
                                className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-DEFAULT"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 btn-orange-glow px-5 py-2.5 rounded-full text-sm font-semibold relative z-10"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
              >
                Get a Quote
                <ArrowUpRight size={15} />
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center glass rounded-lg text-offwhite-DEFAULT/80 hover:text-offwhite-DEFAULT transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 mobile-nav-overlay flex flex-col pt-24 px-6 pb-12"
          >
            <nav className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-between py-5 border-b border-white/6 text-2xl font-bold text-offwhite-DEFAULT/90 hover:text-offwhite-DEFAULT transition-colors"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    {link.label}
                    <ArrowUpRight size={20} className="text-orange-DEFAULT" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="pt-8"
            >
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 btn-orange-glow w-full py-4 rounded-2xl text-base font-bold"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Get a Quote <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

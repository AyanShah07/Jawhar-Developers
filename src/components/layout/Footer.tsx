"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Commercial Construction", href: "/services#commercial" },
    { label: "Residential Projects", href: "/services#residential" },
    { label: "Industrial Infrastructure", href: "/services#industrial" },
    { label: "Architecture & Planning", href: "/services#architecture" },
    { label: "Interior Build", href: "/services#interior" },
    { label: "Project Management", href: "/services#management" },
  ],
  company: [
    { label: "About APEX", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Case Studies", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Blog & News", href: "/blog" },
    { label: "Safety & Compliance", href: "/safety" },
  ],
  contact: [
    { label: "Get a Quote", href: "/contact" },
    { label: "Project Estimator", href: "/contact#estimator" },
    { label: "Partnerships", href: "/contact#partnerships" },
    { label: "Media Inquiries", href: "/contact#media" },
  ],
};

const offices = [
  { city: "New York", address: "One World Trade Center, NY 10007" },
  { city: "Los Angeles", address: "550 S Hope St, LA 90071" },
  { city: "Chicago", address: "Willis Tower, Chicago 60606" },
  { city: "Dubai", address: "DIFC, Dubai, UAE" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080A0D] border-t border-white/5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-DEFAULT/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top CTA strip */}
        <div className="border-b border-white/8 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p
                className="text-xs tracking-[0.2em] text-orange-DEFAULT uppercase mb-3"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Ready to Build?
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold leading-none"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                Let&apos;s Create Something
                <br />
                <span className="text-gradient-orange">Extraordinary.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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
                className="flex items-center gap-2 btn-border-orange px-8 py-4 rounded-full text-base font-semibold"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 py-20">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="group flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-orange-DEFAULT rounded-sm" />
                <div className="absolute inset-1 border border-white/20 rounded-sm" />
              </div>
              <span
                className="font-display text-lg font-800 tracking-tight"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                APEX Construction
              </span>
            </Link>
            <p
              className="text-sm text-offwhite-DEFAULT/50 leading-relaxed mb-8 max-w-xs"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Engineering tomorrow&apos;s landmarks with precision, innovation,
              and architectural excellence since 1998.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="tel:+12125550100"
                className="flex items-center gap-3 text-sm text-offwhite-DEFAULT/50 hover:text-orange-DEFAULT transition-colors group"
              >
                <Phone size={14} className="text-orange-DEFAULT" />
                <span style={{ fontFamily: "var(--font-dm-mono)" }}>
                  +1 212 555 0100
                </span>
              </a>
              <a
                href="mailto:hello@apexconstruction.com"
                className="flex items-center gap-3 text-sm text-offwhite-DEFAULT/50 hover:text-orange-DEFAULT transition-colors"
              >
                <Mail size={14} className="text-orange-DEFAULT" />
                <span style={{ fontFamily: "var(--font-dm-mono)" }}>
                  hello@apexconstruction.com
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-offwhite-DEFAULT/50 hover:text-orange-DEFAULT hover:border-orange-DEFAULT/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-2 lg:col-start-6">
            <h4
              className="text-xs tracking-[0.15em] uppercase text-offwhite-DEFAULT/40 mb-5"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-offwhite-DEFAULT/60 hover:text-offwhite-DEFAULT transition-colors duration-200 hover-underline"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 lg:col-span-2">
            <h4
              className="text-xs tracking-[0.15em] uppercase text-offwhite-DEFAULT/40 mb-5"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-offwhite-DEFAULT/60 hover:text-offwhite-DEFAULT transition-colors duration-200 hover-underline"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="col-span-2 lg:col-span-2">
            <h4
              className="text-xs tracking-[0.15em] uppercase text-offwhite-DEFAULT/40 mb-5"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Offices
            </h4>
            <div className="flex flex-col gap-5">
              {offices.map((office) => (
                <div key={office.city} className="flex gap-2.5">
                  <MapPin size={14} className="text-orange-DEFAULT mt-0.5 shrink-0" />
                  <div>
                    <p
                      className="text-sm font-semibold text-offwhite-DEFAULT/80 mb-0.5"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {office.city}
                    </p>
                    <p
                      className="text-xs text-offwhite-DEFAULT/40 leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/6 py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p
                className="text-sm font-semibold text-offwhite-DEFAULT/80 mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Stay Updated
              </p>
              <p
                className="text-xs text-offwhite-DEFAULT/40"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Industry insights, project launches, and company news.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input-luxury flex-1 lg:w-72 px-5 py-3 rounded-full text-sm"
                aria-label="Email for newsletter"
              />
              <button className="btn-orange-glow px-6 py-3 rounded-full text-sm font-bold shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-offwhite-DEFAULT/30"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            © 2025 APEX Construction LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-offwhite-DEFAULT/30 hover:text-offwhite-DEFAULT/60 transition-colors"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — APEX Construction",
  description: "Get in touch with APEX Construction for your next project. Request a quote, schedule a consultation, or visit one of our offices.",
};

const offices = [
  { city: "New York (HQ)", address: "One World Trade Center, Suite 8500\nNew York, NY 10007", phone: "+1 212 555 0100", email: "ny@apexconstruction.com" },
  { city: "Los Angeles", address: "550 S Hope Street, Floor 22\nLos Angeles, CA 90071", phone: "+1 310 555 0200", email: "la@apexconstruction.com" },
  { city: "Chicago", address: "Willis Tower, Suite 4100\nChicago, IL 60606", phone: "+1 312 555 0300", email: "chi@apexconstruction.com" },
  { city: "Dubai", address: "Gate District, DIFC\nDubai, UAE", phone: "+971 4 555 0400", email: "dubai@apexconstruction.com" },
];

export default function ContactPage() {
  return (
    <div className="bg-[#0F1115] min-h-screen pt-20">
      {/* Header */}
      <section className="pt-24 pb-16 max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>Let&apos;s Talk</p>
        <h1 className="text-6xl lg:text-9xl font-bold leading-none mb-6" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.04em" }}>
          Contact<br /><span className="text-gradient-orange">Us.</span>
        </h1>
        <p className="text-base text-offwhite-DEFAULT/50 max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Whether you have a project in mind or just want to explore what&apos;s possible — we&apos;d love to hear from you.
        </p>
      </section>

      {/* Main content */}
      <section className="pb-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Form — spans 3 cols */}
          <div className="lg:col-span-3 bento-card p-8 lg:p-10">
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-syne)" }}>Project Inquiry</h2>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>First Name *</label>
                  <input type="text" className="input-luxury w-full px-4 py-3 rounded-xl text-sm" placeholder="John" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>Last Name *</label>
                  <input type="text" className="input-luxury w-full px-4 py-3 rounded-xl text-sm" placeholder="Smith" />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>Company</label>
                <input type="text" className="input-luxury w-full px-4 py-3 rounded-xl text-sm" placeholder="Your Company Name" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>Email *</label>
                  <input type="email" className="input-luxury w-full px-4 py-3 rounded-xl text-sm" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>Phone</label>
                  <input type="tel" className="input-luxury w-full px-4 py-3 rounded-xl text-sm" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>Project Type *</label>
                  <select className="input-luxury w-full px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <option value="">Select type...</option>
                    <option>Commercial Construction</option>
                    <option>Residential Project</option>
                    <option>Industrial Infrastructure</option>
                    <option>Renovation & Remodeling</option>
                    <option>Architecture & Planning</option>
                    <option>Project Management</option>
                    <option>Civil Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>Budget Range *</label>
                  <select className="input-luxury w-full px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <option value="">Select range...</option>
                    <option>Under $5M</option>
                    <option>$5M – $50M</option>
                    <option>$50M – $200M</option>
                    <option>$200M – $1B</option>
                    <option>$1B+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>Project Location</label>
                <input type="text" className="input-luxury w-full px-4 py-3 rounded-xl text-sm" placeholder="City, State / Country" />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>Project Details *</label>
                <textarea rows={5} className="input-luxury w-full px-4 py-3 rounded-xl text-sm resize-none" placeholder="Tell us about your project — scope, timeline, specific requirements..." />
              </div>

              {/* How did you hear */}
              <div>
                <label className="text-xs uppercase tracking-widest text-offwhite-DEFAULT/40 block mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>How Did You Hear About Us?</label>
                <select className="input-luxury w-full px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <option value="">Select...</option>
                  <option>Referral</option>
                  <option>Google Search</option>
                  <option>LinkedIn</option>
                  <option>Industry Event</option>
                  <option>Publication / Press</option>
                  <option>Other</option>
                </select>
              </div>

              <button className="btn-orange-glow w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 relative z-10 mt-2" style={{ fontFamily: "var(--font-syne)" }}>
                Submit Inquiry
                <ArrowUpRight size={18} />
              </button>
              <p className="text-center text-xs text-offwhite-DEFAULT/30" style={{ fontFamily: "var(--font-dm-sans)" }}>
                We respond within 24 hours · All inquiries are strictly confidential
              </p>
            </div>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Direct contact */}
            <div className="bento-card p-7">
              <h3 className="text-base font-bold mb-5" style={{ fontFamily: "var(--font-syne)" }}>Direct Contact</h3>
              <div className="space-y-4">
                <a href="tel:+12125550100" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-orange-DEFAULT/10 rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-orange-DEFAULT" />
                  </div>
                  <div>
                    <p className="text-xs text-offwhite-DEFAULT/40 mb-0.5" style={{ fontFamily: "var(--font-dm-mono)" }}>Phone</p>
                    <p className="text-sm font-semibold group-hover:text-orange-DEFAULT transition-colors" style={{ fontFamily: "var(--font-dm-mono)" }}>+1 212 555 0100</p>
                  </div>
                </a>
                <a href="mailto:hello@apexconstruction.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-orange-DEFAULT/10 rounded-lg flex items-center justify-center">
                    <Mail size={14} className="text-orange-DEFAULT" />
                  </div>
                  <div>
                    <p className="text-xs text-offwhite-DEFAULT/40 mb-0.5" style={{ fontFamily: "var(--font-dm-mono)" }}>Email</p>
                    <p className="text-sm font-semibold group-hover:text-orange-DEFAULT transition-colors" style={{ fontFamily: "var(--font-dm-mono)" }}>hello@apexconstruction.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-orange-DEFAULT/10 rounded-lg flex items-center justify-center">
                    <Clock size={14} className="text-orange-DEFAULT" />
                  </div>
                  <div>
                    <p className="text-xs text-offwhite-DEFAULT/40 mb-0.5" style={{ fontFamily: "var(--font-dm-mono)" }}>Response Time</p>
                    <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-dm-sans)" }}>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="bento-card p-7">
              <h3 className="text-base font-bold mb-5" style={{ fontFamily: "var(--font-syne)" }}>Our Offices</h3>
              <div className="space-y-5">
                {offices.map((office) => (
                  <div key={office.city} className="border-b border-white/6 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-start gap-2 mb-1">
                      <MapPin size={12} className="text-orange-DEFAULT mt-0.5 shrink-0" />
                      <p className="text-sm font-bold" style={{ fontFamily: "var(--font-syne)" }}>{office.city}</p>
                    </div>
                    <p className="text-xs text-offwhite-DEFAULT/40 pl-5 whitespace-pre-line leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{office.address}</p>
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-xs text-offwhite-DEFAULT/50 hover:text-orange-DEFAULT transition-colors pl-5 block mt-1" style={{ fontFamily: "var(--font-dm-mono)" }}>{office.phone}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="bento-card p-7">
              <h3 className="text-base font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: "View Our Portfolio", href: "/projects" },
                  { label: "Explore Services", href: "/services" },
                  { label: "Career Opportunities", href: "/careers" },
                  { label: "Safety & Compliance", href: "#" },
                ].map(link => (
                  <Link key={link.label} href={link.href} className="flex items-center justify-between py-2 text-sm text-offwhite-DEFAULT/50 hover:text-offwhite-DEFAULT transition-colors border-b border-white/4 last:border-0 group">
                    <span style={{ fontFamily: "var(--font-dm-sans)" }}>{link.label}</span>
                    <ArrowUpRight size={13} className="text-orange-DEFAULT opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

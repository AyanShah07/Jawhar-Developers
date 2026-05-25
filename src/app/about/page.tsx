import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Users, Award, Globe, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About APEX Construction — 27 Years of Building Excellence",
  description: "Learn about APEX Construction's story, values, leadership team, and our mission to engineer tomorrow's landmarks.",
};

const team = [
  {
    name: "Marcus Webb",
    role: "Founder & CEO",
    experience: "32 years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Architect by training, builder by passion. Marcus founded APEX in 1998 with a vision to combine architectural elegance with engineering precision.",
  },
  {
    name: "Elena Vasquez",
    role: "Chief Operating Officer",
    experience: "24 years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Former McKinsey partner, Elena transformed APEX's operational excellence, driving the 94% on-time delivery rate.",
  },
  {
    name: "David Park",
    role: "Chief Technology Officer",
    experience: "18 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Tech visionary who built APEX's proprietary BIM and AI analytics platforms from the ground up.",
  },
  {
    name: "Amara Okafor",
    role: "Head of Architecture",
    experience: "20 years",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    bio: "Award-winning architect whose portfolio spans from Lagos to London. Three-time AIA Excellence award winner.",
  },
];

const awards = [
  { year: "2024", award: "ENR Top 50 Global Contractor" },
  { year: "2023", award: "AGC Constructor of the Year" },
  { year: "2023", award: "AIA Architectural Excellence Award" },
  { year: "2022", award: "LEED Partner of the Year" },
  { year: "2021", award: "Fast Company Most Innovative Company" },
  { year: "2020", award: "Safety Innovation Award — OSHA" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0F1115] min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="APEX team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/70 to-[#0F1115]/30" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-20 pt-32">
          <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
            About Us
          </p>
          <h1
            className="text-5xl lg:text-8xl font-bold leading-none"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.04em" }}
          >
            We Build
            <br />
            <span className="text-gradient-orange">Legacies.</span>
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { icon: Globe, label: "Our Mission", text: "To deliver world-class construction that exceeds client expectations, enriches communities, and stands as architectural landmarks for generations." },
            { icon: TrendingUp, label: "Our Vision", text: "To be the most trusted construction partner on earth — synonymous with precision, innovation, and enduring quality across every market we serve." },
            { icon: Award, label: "Our Values", text: "Excellence without compromise. Safety as a non-negotiable. Sustainability as responsibility. Partnership as philosophy." },
          ].map(({ icon: Icon, label, text }) => (
            <div key={label} className="bento-card p-8">
              <div className="w-10 h-10 bg-orange-DEFAULT/10 rounded-lg flex items-center justify-center mb-5">
                <Icon size={18} className="text-orange-DEFAULT" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-syne)" }}>{label}</h3>
              <p className="text-sm text-offwhite-DEFAULT/50 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#080A0D]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="orange-dot" />
            <span className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50" style={{ fontFamily: "var(--font-dm-mono)" }}>Leadership</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold leading-none mb-16" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            The Team Behind <span className="text-gradient-orange">APEX.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative h-72 rounded-2xl overflow-hidden mb-5">
                  <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <span className="tag-pill">{member.experience}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>{member.name}</h3>
                <p className="text-sm text-orange-DEFAULT mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>{member.role}</p>
                <p className="text-xs text-offwhite-DEFAULT/40 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="orange-dot" />
              <span className="text-xs tracking-[0.25em] uppercase text-offwhite-DEFAULT/50" style={{ fontFamily: "var(--font-dm-mono)" }}>Recognition</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-none mb-6" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              50+ Industry <span className="text-gradient-orange">Awards.</span>
            </h2>
            <p className="text-base text-offwhite-DEFAULT/50 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Industry recognition across safety, sustainability, innovation, and architectural excellence — from ENR to the American Institute of Architects.
            </p>
          </div>

          <div className="space-y-4">
            {awards.map((a) => (
              <div key={a.award} className="flex items-center gap-4 p-4 rounded-xl border border-white/6 hover:border-orange-DEFAULT/20 transition-colors">
                <span className="text-sm font-bold text-orange-DEFAULT w-10 shrink-0" style={{ fontFamily: "var(--font-dm-mono)" }}>{a.year}</span>
                <span className="text-sm text-offwhite-DEFAULT/70" style={{ fontFamily: "var(--font-dm-sans)" }}>{a.award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080A0D] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}>
            Ready to Build with <span className="text-gradient-orange">APEX?</span>
          </h2>
          <p className="text-offwhite-DEFAULT/50 mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Let's start a conversation about your next landmark project.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 btn-orange-glow px-8 py-4 rounded-full text-base font-bold" style={{ fontFamily: "var(--font-syne)" }}>
            Get in Touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowUpRight, Users, Award, TrendingUp, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join APEX Construction",
  description: "Build your career with APEX Construction. Explore open positions across engineering, architecture, project management, and more.",
};

const jobs = [
  { title: "Senior Project Manager", dept: "Project Management", location: "New York, NY", type: "Full-time", level: "Senior", posted: "2 days ago" },
  { title: "BIM Coordinator", dept: "Technology", location: "Chicago, IL", type: "Full-time", level: "Mid-level", posted: "1 week ago" },
  { title: "Structural Engineer", dept: "Engineering", location: "Los Angeles, CA", type: "Full-time", level: "Mid-level", posted: "3 days ago" },
  { title: "Architect — Commercial", dept: "Architecture", location: "New York, NY", type: "Full-time", level: "Senior", posted: "5 days ago" },
  { title: "Site Safety Manager", dept: "Safety & Compliance", location: "Houston, TX", type: "Full-time", level: "Mid-level", posted: "1 week ago" },
  { title: "Construction Estimator", dept: "Pre-Construction", location: "Remote", type: "Full-time", level: "Senior", posted: "2 days ago" },
  { title: "MEP Engineer", dept: "Engineering", location: "Dubai, UAE", type: "Full-time", level: "Mid-level", posted: "4 days ago" },
  { title: "Interior Design Lead", dept: "Architecture", location: "Miami, FL", type: "Full-time", level: "Senior", posted: "6 days ago" },
];

const perks = [
  { icon: TrendingUp, title: "Career Growth", desc: "Clear advancement paths with mentorship, training, and leadership programs." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision. Mental health support included." },
  { icon: Award, title: "Performance Bonuses", desc: "Project completion bonuses and annual performance incentives." },
  { icon: Users, title: "Global Mobility", desc: "Opportunities to work across our 42-city global network." },
];

export default function CareersPage() {
  return (
    <div className="bg-[#0F1115] min-h-screen pt-20">
      {/* Hero — BR Construction bold people focus */}
      <section className="relative pt-24 pb-20 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>Join Our Team</p>
            <h1 className="text-5xl lg:text-8xl font-bold leading-none mb-8" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.04em" }}>
              BUILD YOUR<br />
              <span className="text-gradient-orange">CAREER.</span><br />
              BUILD THE<br />
              FUTURE.
            </h1>
            <p className="text-base text-offwhite-DEFAULT/50 leading-relaxed mb-8 max-w-md" style={{ fontFamily: "var(--font-dm-sans)" }}>
               APEX is where the world&apos;s best construction professionals come to do the most ambitious work of their careers. 12,000+ team members. 42 cities. Zero limits.
            </p>
            <div className="flex gap-4">
              <a href="#openings" className="flex items-center gap-2 btn-orange-glow px-7 py-3.5 rounded-full text-sm font-bold" style={{ fontFamily: "var(--font-syne)" }}>
                View Openings <ArrowUpRight size={15} />
              </a>
              <Link href="/about" className="flex items-center gap-2 btn-border-orange px-7 py-3.5 rounded-full text-sm font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
                Our Culture
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bento-card p-6 col-span-2">
              <p className="text-4xl font-bold text-orange-DEFAULT mb-1" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.04em" }}>12,000+</p>
              <p className="text-sm text-offwhite-DEFAULT/50" style={{ fontFamily: "var(--font-dm-sans)" }}>Team members across 42 cities</p>
            </div>
            {[
              { val: "94%", label: "Employee retention rate" },
              { val: "4.8★", label: "Glassdoor rating" },
              { val: "68%", label: "Promoted internally" },
              { val: "32", label: "Avg age of team" },
            ].map(item => (
              <div key={item.label} className="bento-card p-5">
                <p className="text-2xl font-bold text-orange-DEFAULT" style={{ fontFamily: "var(--font-syne)" }}>{item.val}</p>
                <p className="text-xs text-offwhite-DEFAULT/40 mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-[#080A0D]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}>
            Why Work at <span className="text-gradient-orange">APEX?</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bento-card p-6">
                <div className="w-10 h-10 bg-orange-DEFAULT/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={16} className="text-orange-DEFAULT" />
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>{title}</h3>
                <p className="text-xs text-offwhite-DEFAULT/50 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}>
            Open Positions <span className="text-orange-DEFAULT">({jobs.length})</span>
          </h2>
          <select className="input-luxury px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.04)" }}>
            <option>All Departments</option>
            <option>Engineering</option>
            <option>Architecture</option>
            <option>Project Management</option>
            <option>Technology</option>
            <option>Safety & Compliance</option>
          </select>
        </div>

        <div className="space-y-3">
          {jobs.map((job) => (
            <div key={job.title} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-white/6 hover:border-orange-DEFAULT/30 bg-[#1A1E25]/50 hover:bg-[#1A1E25] transition-all duration-300 cursor-pointer">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-base font-bold group-hover:text-orange-DEFAULT transition-colors" style={{ fontFamily: "var(--font-syne)" }}>{job.title}</h3>
                  <span className="tag-pill">{job.level}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-offwhite-DEFAULT/40">
                  <span style={{ fontFamily: "var(--font-dm-mono)" }}>{job.dept}</span>
                  <span className="flex items-center gap-1"><MapPin size={10} className="text-orange-DEFAULT" />{job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={10} className="text-orange-DEFAULT" />{job.type}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-offwhite-DEFAULT/30" style={{ fontFamily: "var(--font-dm-mono)" }}>{job.posted}</span>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-offwhite-DEFAULT/60 hover:border-orange-DEFAULT hover:text-orange-DEFAULT transition-all" style={{ fontFamily: "var(--font-syne)" }}>
                  Apply <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, Home, Factory, Wrench, PenTool, Layers, BarChart3, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — APEX Construction",
  description: "Eight specialized construction divisions delivering commercial, residential, industrial, and architectural projects worldwide.",
};

const services = [
  {
    id: "commercial",
    icon: Building2,
    number: "01",
    title: "Commercial Construction",
    description: "World-class office towers, retail complexes, mixed-use developments, and hospitality projects. We manage full-cycle delivery from site preparation to handover.",
    features: ["High-rise towers", "Office campuses", "Retail & mixed-use", "Hotels & resorts", "Medical facilities", "Educational buildings"],
    projects: "340+",
    color: "orange",
  },
  {
    id: "residential",
    icon: Home,
    number: "02",
    title: "Residential Projects",
    description: "Bespoke luxury residences and premium multi-family developments. From custom homes to condominium towers, we deliver living spaces of distinction.",
    features: ["Luxury villas & estates", "Condominium towers", "Planned communities", "Affordable housing", "Smart home integration", "Waterfront developments"],
    projects: "220+",
    color: "teal",
  },
  {
    id: "industrial",
    icon: Factory,
    number: "03",
    title: "Industrial Infrastructure",
    description: "Advanced manufacturing facilities, logistics hubs, data centres, and energy infrastructure engineered for operational excellence.",
    features: ["Manufacturing plants", "Distribution centres", "Data centres", "Energy facilities", "Cold storage", "Automotive plants"],
    projects: "95+",
    color: "orange",
  },
  {
    id: "renovation",
    icon: Wrench,
    number: "04",
    title: "Renovation & Remodeling",
    description: "Transformative renovations breathing new life into commercial, industrial, and residential spaces while preserving architectural integrity.",
    features: ["Commercial refurbishment", "Historic preservation", "Tenant fit-out", "Seismic retrofitting", "Facade renovation", "MEP upgrades"],
    projects: "180+",
    color: "gold",
  },
  {
    id: "architecture",
    icon: PenTool,
    number: "05",
    title: "Architecture & Planning",
    description: "Visionary architectural design and comprehensive urban planning. Our award-winning studio creates spaces that balance beauty, function, and sustainability.",
    features: ["Concept design", "Schematic design", "Design development", "Urban master planning", "Landscape design", "Interior architecture"],
    projects: "150+",
    color: "teal",
  },
  {
    id: "interior",
    icon: Layers,
    number: "06",
    title: "Interior Build Solutions",
    description: "Premium interior fit-outs for corporate, hospitality, healthcare, and luxury residential. Every space crafted to the highest international standards.",
    features: ["Corporate fit-out", "Hospitality interiors", "Luxury residential", "Retail fit-out", "Healthcare environments", "F&B spaces"],
    projects: "270+",
    color: "orange",
  },
  {
    id: "management",
    icon: BarChart3,
    number: "07",
    title: "Project Management",
    description: "End-to-end programme and project management leveraging AI analytics, BIM workflows, and agile construction methodologies.",
    features: ["Programme management", "Cost management", "Risk advisory", "BIM coordination", "Procurement strategy", "Commissioning"],
    projects: "500+",
    color: "gold",
  },
  {
    id: "civil",
    icon: Ruler,
    number: "08",
    title: "Civil Engineering",
    description: "Comprehensive civil infrastructure engineering for transportation, utilities, earthworks, and large-scale civil projects.",
    features: ["Road & highway", "Bridge structures", "Water & wastewater", "Earthworks & grading", "Site utilities", "Stormwater management"],
    projects: "75+",
    color: "teal",
  },
];

const accentMap: Record<string, string> = {
  orange: "text-orange-DEFAULT border-orange-DEFAULT/20 bg-orange-DEFAULT/5",
  teal: "text-[#00BFA6] border-[#00BFA6]/20 bg-[#00BFA6]/5",
  gold: "text-[#D9A441] border-[#D9A441]/20 bg-[#D9A441]/5",
};
const dotMap: Record<string, string> = {
  orange: "bg-orange-DEFAULT",
  teal: "bg-[#00BFA6]",
  gold: "bg-[#D9A441]",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#0F1115] min-h-screen pt-20">
      {/* Hero */}
      <section className="pt-24 pb-16 max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>What We Build</p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h1 className="text-6xl lg:text-9xl font-bold leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.04em" }}>
            Our<br /><span className="text-gradient-orange">Services.</span>
          </h1>
          <p className="lg:max-w-sm text-base text-offwhite-DEFAULT/50 leading-relaxed lg:pb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Eight specialized divisions delivering construction excellence at every scale — from luxury residences to billion-dollar infrastructure.
          </p>
        </div>
      </section>

      {/* Quick nav — City Construct style */}
      <section className="border-y border-white/6 overflow-x-auto">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex gap-0">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-5 py-4 text-xs font-semibold text-offwhite-DEFAULT/40 hover:text-offwhite-DEFAULT border-r border-white/6 whitespace-nowrap transition-colors hover:bg-white/3" style={{ fontFamily: "var(--font-syne)" }}>
                {s.number} {s.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6">
        {services.map((service) => {
          const Icon = service.icon;
          const accent = accentMap[service.color];
          const dot = dotMap[service.color];
          return (
            <div
              id={service.id}
              key={service.id}
              className="group grid lg:grid-cols-12 gap-8 p-8 rounded-2xl border border-white/6 hover:border-white/12 bg-[#1A1E25]/50 transition-all duration-400 hover:bg-[#1A1E25]"
            >
              {/* Number + Icon */}
              <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                <span className="text-4xl font-bold text-offwhite-DEFAULT/10" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.05em" }}>{service.number}</span>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${accent}`}>
                  <Icon size={16} />
                </div>
              </div>

              {/* Title + Description */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-bold mb-4 group-hover:text-orange-DEFAULT transition-colors" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}>
                  {service.title}
                </h2>
                <p className="text-sm text-offwhite-DEFAULT/50 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="lg:col-span-5">
                <p className="text-xs tracking-widest uppercase text-offwhite-DEFAULT/30 mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>Capabilities</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
                      <span className="text-xs text-offwhite-DEFAULT/60" style={{ fontFamily: "var(--font-dm-sans)" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-DEFAULT" style={{ fontFamily: "var(--font-syne)" }}>{service.projects}</p>
                  <p className="text-xs text-offwhite-DEFAULT/30 uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>Projects</p>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 text-sm font-semibold text-offwhite-DEFAULT/50 hover:text-orange-DEFAULT transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Get Quote <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#080A0D] text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>Ready to Start?</p>
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}>
            Tell Us About <span className="text-gradient-orange">Your Project.</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-2 btn-orange-glow px-8 py-4 rounded-full text-base font-bold" style={{ fontFamily: "var(--font-syne)" }}>
            Request a Quote <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

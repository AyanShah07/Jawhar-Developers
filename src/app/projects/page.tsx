import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — APEX Construction Portfolio",
  description: "Explore APEX Construction's portfolio of landmark commercial, residential, and industrial projects worldwide.",
};

const projects = [
  { id: 1, title: "Nexus Tower", category: "Commercial", location: "Manhattan, NY", year: "2024", budget: "$2.4B", area: "1.2M sq ft", status: "In Progress", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80", featured: true },
  { id: 2, title: "Azure Residences", category: "Residential", location: "Miami Beach, FL", year: "2024", budget: "$340M", area: "280K sq ft", status: "Completed", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80", featured: false },
  { id: 3, title: "Solaris Industrial Hub", category: "Industrial", location: "Houston, TX", year: "2023", budget: "$820M", area: "4.5M sq ft", status: "Completed", image: "https://images.unsplash.com/photo-1590739293931-a4c0e4972cf9?w=900&q=80", featured: true },
  { id: 4, title: "The Meridian Hotel", category: "Commercial", location: "Chicago, IL", year: "2023", budget: "$580M", area: "650K sq ft", status: "Completed", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80", featured: false },
  { id: 5, title: "Parkview Estate", category: "Residential", location: "Beverly Hills, CA", year: "2024", budget: "$28M", area: "22K sq ft", status: "Completed", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80", featured: false },
  { id: 6, title: "Heritage Quarter", category: "Renovation", location: "Boston, MA", year: "2023", budget: "$160M", area: "380K sq ft", status: "Completed", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=900&q=80", featured: false },
  { id: 7, title: "Vertex Campus", category: "Commercial", location: "Austin, TX", year: "2024", budget: "$440M", area: "850K sq ft", status: "In Progress", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", featured: true },
  { id: 8, title: "Pearl Marina Residences", category: "Residential", location: "Dubai, UAE", year: "2023", budget: "$680M", area: "1.1M sq ft", status: "Completed", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80", featured: false },
  { id: 9, title: "Meridian Data Center", category: "Industrial", location: "Northern Virginia", year: "2024", budget: "$290M", area: "320K sq ft", status: "In Progress", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80", featured: false },
];

const statusColor: Record<string, string> = {
  "Completed": "bg-[#00BFA6]/20 text-[#00BFA6] border-[#00BFA6]/30",
  "In Progress": "bg-orange-DEFAULT/20 text-orange-DEFAULT border-orange-DEFAULT/30",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#0F1115] min-h-screen pt-20">
      {/* Page Header */}
      <section className="pt-24 pb-12 max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>Portfolio</p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <h1 className="text-6xl lg:text-9xl font-bold leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.04em" }}>
            Our<br /><span className="text-gradient-orange">Work.</span>
          </h1>
          <div className="lg:max-w-sm lg:pb-4">
            <p className="text-base text-offwhite-DEFAULT/50 leading-relaxed mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              850+ projects across 42 cities. Each one a story of precision, partnership, and architectural ambition.
            </p>
            <div className="flex gap-6">
              <div>
                <p className="text-2xl font-bold text-orange-DEFAULT" style={{ fontFamily: "var(--font-syne)" }}>850+</p>
                <p className="text-xs text-offwhite-DEFAULT/30 uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>Total Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-DEFAULT" style={{ fontFamily: "var(--font-syne)" }}>$4.2B+</p>
                <p className="text-xs text-offwhite-DEFAULT/30 uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>Project Value</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2">
          {["All Projects", "Commercial", "Residential", "Industrial", "Renovation"].map((cat, i) => (
            <button key={cat} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${i === 0 ? "bg-orange-DEFAULT text-black" : "glass text-offwhite-DEFAULT/60 hover:text-offwhite-DEFAULT"}`} style={{ fontFamily: "var(--font-syne)" }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects — DNOIN editorial masonry grid */}
      <section className="pb-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Featured row */}
        <div className="grid lg:grid-cols-3 gap-5 mb-5">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className={`group cursor-pointer relative overflow-hidden rounded-2xl border border-white/6 hover:border-orange-DEFAULT/30 transition-all duration-400 bg-[#1A1E25] ${project.id === 1 ? "lg:col-span-2" : ""}`}>
              <div className={`relative overflow-hidden ${project.id === 1 ? "h-96" : "h-72"}`}>
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E25]/90 via-[#1A1E25]/20 to-transparent" />

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-orange-DEFAULT rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} className="text-black" />
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <span className={`inline-block text-[10px] px-3 py-1 rounded-full border mb-2 ${statusColor[project.status]}`} style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {project.status}
                  </span>
                  <h3 className={`font-bold leading-tight mb-1 ${project.id === 1 ? "text-3xl" : "text-xl"}`} style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}>
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-orange-DEFAULT" />
                      <span className="text-xs text-offwhite-DEFAULT/50" style={{ fontFamily: "var(--font-dm-sans)" }}>{project.location}</span>
                    </div>
                    <span className="text-sm font-bold text-orange-DEFAULT" style={{ fontFamily: "var(--font-syne)" }}>{project.budget}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.id} className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/6 hover:border-orange-DEFAULT/30 transition-all duration-400 bg-[#1A1E25]">
              <div className="relative h-52 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E25] to-transparent opacity-60" />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border ${statusColor[project.status]}`} style={{ fontFamily: "var(--font-dm-mono)" }}>{project.status}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold group-hover:text-orange-DEFAULT transition-colors" style={{ fontFamily: "var(--font-syne)" }}>{project.title}</h3>
                  <ArrowUpRight size={15} className="text-offwhite-DEFAULT/20 group-hover:text-orange-DEFAULT transition-colors mt-0.5" />
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  <MapPin size={10} className="text-orange-DEFAULT" />
                  <span className="text-xs text-offwhite-DEFAULT/40" style={{ fontFamily: "var(--font-dm-sans)" }}>{project.location}</span>
                </div>
                <div className="flex gap-4 pt-3 border-t border-white/6">
                  <div>
                    <p className="text-sm font-bold text-orange-DEFAULT" style={{ fontFamily: "var(--font-syne)" }}>{project.budget}</p>
                    <p className="text-[9px] text-offwhite-DEFAULT/30 uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>Budget</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-offwhite-DEFAULT/70" style={{ fontFamily: "var(--font-syne)" }}>{project.area}</p>
                    <p className="text-[9px] text-offwhite-DEFAULT/30 uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>Area</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-offwhite-DEFAULT/70" style={{ fontFamily: "var(--font-syne)" }}>{project.year}</p>
                    <p className="text-[9px] text-offwhite-DEFAULT/30 uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>Year</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

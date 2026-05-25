"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, DollarSign, X } from "lucide-react";

const categories = ["All", "Commercial", "Residential", "Industrial", "Renovation"];

const projects = [
  {
    id: 1,
    title: "Nexus Tower",
    category: "Commercial",
    location: "Manhattan, New York",
    year: "2024",
    budget: "$2.4B",
    area: "1.2M sq ft",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    story: "A 96-story supertall mixed-use tower redefining the New York skyline with sustainable design principles and cutting-edge engineering.",
    tags: ["High-Rise", "Mixed-Use", "LEED Platinum"],
  },
  {
    id: 2,
    title: "Azure Residences",
    category: "Residential",
    location: "Miami Beach, Florida",
    year: "2024",
    budget: "$340M",
    area: "280K sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    story: "Ultra-luxury beachfront residences with private pools, smart-home integration, and bespoke finishes curated by world-renowned designers.",
    tags: ["Luxury", "Waterfront", "Smart Home"],
  },
  {
    id: 3,
    title: "Solaris Industrial Hub",
    category: "Industrial",
    location: "Houston, Texas",
    year: "2023",
    budget: "$820M",
    area: "4.5M sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1590739293931-a4c0e4972cf9?w=800&q=80",
    story: "A next-generation industrial campus integrating renewable energy, automated logistics, and sustainable manufacturing at scale.",
    tags: ["Industrial", "Sustainable", "Automation"],
  },
  {
    id: 4,
    title: "The Meridian Hotel",
    category: "Commercial",
    location: "Chicago, Illinois",
    year: "2023",
    budget: "$580M",
    area: "650K sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    story: "A 5-star urban resort seamlessly integrated into Chicago's historic architectural fabric with contemporary flair.",
    tags: ["Hospitality", "Historic", "5-Star"],
  },
  {
    id: 5,
    title: "Parkview Estate",
    category: "Residential",
    location: "Beverly Hills, California",
    year: "2024",
    budget: "$28M",
    area: "22K sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    story: "An architectural masterpiece perched above Beverly Hills with panoramic views, infinity pool, and bespoke Italian stone interiors.",
    tags: ["Luxury Villa", "Bespoke", "Views"],
  },
  {
    id: 6,
    title: "Heritage Quarter",
    category: "Renovation",
    location: "Boston, Massachusetts",
    year: "2023",
    budget: "$160M",
    area: "380K sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
    story: "Transformative adaptive reuse of a 19th-century warehouse district into a vibrant mixed-use cultural quarter.",
    tags: ["Adaptive Reuse", "Historic", "Cultural"],
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        className="relative bg-[#1A1E25] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72 lg:h-96">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E25] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-offwhite-DEFAULT hover:text-orange-DEFAULT transition-colors"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-6 left-8">
            <span
              className={`inline-block mb-2 text-xs px-3 py-1 rounded-full ${
                project.status === "Completed"
                  ? "bg-teal-DEFAULT/20 text-teal-DEFAULT"
                  : "bg-orange-DEFAULT/20 text-orange-DEFAULT"
              }`}
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {project.status}
            </span>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-white/6">
            {[
              { icon: MapPin, label: "Location", value: project.location },
              { icon: Calendar, label: "Year", value: project.year },
              { icon: DollarSign, label: "Budget", value: project.budget },
              { icon: ArrowUpRight, label: "Area", value: project.area },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon size={12} className="text-orange-DEFAULT" />
                  <span
                    className="text-[10px] uppercase tracking-widest text-offwhite-DEFAULT/40"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {label}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-base text-offwhite-DEFAULT/60 leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {project.story}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-24 lg:py-36 bg-[#0A0C10] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row gap-12 items-end mb-12">
          <div className="flex-1">
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
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="text-5xl lg:text-7xl font-bold leading-none"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              Featured
              <br />
              <span className="text-gradient-orange">Projects.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 btn-border-orange px-6 py-3 rounded-full text-sm font-semibold"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              View All Projects <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-orange-DEFAULT text-black"
                  : "glass text-offwhite-DEFAULT/60 hover:text-offwhite-DEFAULT"
              }`}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#1A1E25] border border-white/6 hover:border-orange-DEFAULT/30 transition-all duration-400">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E25]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-orange-DEFAULT rounded-full flex items-center justify-center">
                        <ArrowUpRight size={20} className="text-black" />
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`text-[10px] px-3 py-1.5 rounded-full font-semibold ${
                          project.status === "Completed"
                            ? "bg-[#00BFA6]/20 text-[#00BFA6] border border-[#00BFA6]/30"
                            : "bg-orange-DEFAULT/20 text-orange-DEFAULT border border-orange-DEFAULT/30"
                        }`}
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3
                          className="text-lg font-bold group-hover:text-orange-DEFAULT transition-colors"
                          style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.01em" }}
                        >
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin size={11} className="text-orange-DEFAULT" />
                          <span
                            className="text-xs text-offwhite-DEFAULT/40"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {project.location}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-offwhite-DEFAULT/20 group-hover:text-orange-DEFAULT transition-colors mt-0.5"
                      />
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/6">
                      <div>
                        <p
                          className="text-base font-bold text-orange-DEFAULT"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {project.budget}
                        </p>
                        <p
                          className="text-[10px] text-offwhite-DEFAULT/30 uppercase tracking-widest"
                          style={{ fontFamily: "var(--font-dm-mono)" }}
                        >
                          Budget
                        </p>
                      </div>
                      <div className="w-px bg-white/6" />
                      <div>
                        <p
                          className="text-base font-bold text-offwhite-DEFAULT/80"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {project.area}
                        </p>
                        <p
                          className="text-[10px] text-offwhite-DEFAULT/30 uppercase tracking-widest"
                          style={{ fontFamily: "var(--font-dm-mono)" }}
                        >
                          Area
                        </p>
                      </div>
                      <div className="w-px bg-white/6" />
                      <div>
                        <p
                          className="text-base font-bold text-offwhite-DEFAULT/80"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {project.year}
                        </p>
                        <p
                          className="text-[10px] text-offwhite-DEFAULT/30 uppercase tracking-widest"
                          style={{ fontFamily: "var(--font-dm-mono)" }}
                        >
                          Year
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

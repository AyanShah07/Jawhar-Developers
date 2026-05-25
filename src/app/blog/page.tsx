import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & News — APEX Construction",
  description: "Industry insights, project launches, technology news, and thought leadership from APEX Construction.",
};

const posts = [
  { slug: "future-of-bim", category: "Technology", title: "The Future of BIM: How AI is Transforming Construction Planning", excerpt: "Building Information Modeling is no longer just about 3D models. With AI integration, BIM is becoming a predictive powerhouse that reduces project risks by up to 40%.", author: "David Park", date: "May 20, 2025", readTime: "8 min read", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", featured: true },
  { slug: "sustainable-construction", category: "Sustainability", title: "Net Zero Construction: APEX's Commitment to Carbon-Neutral Building", excerpt: "How we're achieving carbon neutrality across our project portfolio through material innovation, renewable energy, and smarter logistics.", author: "Amara Okafor", date: "May 15, 2025", readTime: "6 min read", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", featured: false },
  { slug: "nexus-tower-update", category: "Projects", title: "Nexus Tower Update: Topping Out at 72 Floors", excerpt: "The $2.4B Nexus Tower milestone reached as structural steel reaches floor 72. On track for 2026 completion.", author: "Marcus Webb", date: "May 10, 2025", readTime: "4 min read", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", featured: false },
  { slug: "drone-surveying", category: "Technology", title: "How APEX Uses Drones to Cut Survey Time by 90%", excerpt: "Our autonomous UAV fleet captures weekly photogrammetry data across 47 active sites, enabling real-time progress tracking from any device.", author: "David Park", date: "May 5, 2025", readTime: "5 min read", image: "https://images.unsplash.com/photo-1590739293931-a4c0e4972cf9?w=800&q=80", featured: false },
  { slug: "luxury-residential-trends", category: "Design", title: "2025 Luxury Residential Trends: What's Driving High-Net-Worth Development", excerpt: "From biophilic design integration to smart home ecosystems — the forces shaping the premium residential market in 2025.", author: "Amara Okafor", date: "Apr 28, 2025", readTime: "7 min read", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", featured: false },
  { slug: "safety-innovation", category: "Safety", title: "Zero Major Incidents: The Technology Behind APEX's Safety Record", excerpt: "Seven years, zero major incidents across 400+ sites. How AI hazard detection, IoT wearables, and a culture of accountability makes it possible.", author: "Elena Vasquez", date: "Apr 20, 2025", readTime: "9 min read", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", featured: false },
];

const catColors: Record<string, string> = {
  Technology: "bg-[#00BFA6]/10 text-[#00BFA6] border-[#00BFA6]/20",
  Sustainability: "bg-green-500/10 text-green-400 border-green-500/20",
  Projects: "bg-orange-DEFAULT/10 text-orange-DEFAULT border-orange-DEFAULT/20",
  Design: "bg-[#D9A441]/10 text-[#D9A441] border-[#D9A441]/20",
  Safety: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="bg-[#0F1115] min-h-screen pt-20">
      {/* Header */}
      <section className="pt-24 pb-12 max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>Knowledge Hub</p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 className="text-5xl lg:text-8xl font-bold leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.04em" }}>
            Blog &<br /><span className="text-gradient-orange">Insights.</span>
          </h1>
          <p className="text-base text-offwhite-DEFAULT/50 max-w-sm lg:pb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Industry intelligence, project stories, and thought leadership from the APEX team.
          </p>
        </div>
      </section>

      <section className="pb-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Featured post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="group block mb-10">
            <div className="grid lg:grid-cols-2 gap-8 p-0 rounded-2xl overflow-hidden border border-white/6 hover:border-orange-DEFAULT/30 bg-[#1A1E25] transition-all duration-400">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1E25]/20 lg:block hidden" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[10px] px-3 py-1 rounded-full border ${catColors[featured.category] || "tag-pill"}`} style={{ fontFamily: "var(--font-dm-mono)" }}>{featured.category}</span>
                  <span className="text-[10px] tag-pill">Featured</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4 group-hover:text-orange-DEFAULT transition-colors" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}>
                  {featured.title}
                </h2>
                <p className="text-sm text-offwhite-DEFAULT/50 leading-relaxed mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-offwhite-DEFAULT/40">
                    <span style={{ fontFamily: "var(--font-dm-sans)" }}>{featured.author}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Calendar size={10} />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{featured.readTime}</span>
                  </div>
                  <ArrowUpRight size={18} className="text-orange-DEFAULT" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden border border-white/6 hover:border-orange-DEFAULT/30 bg-[#1A1E25] transition-all duration-400">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border ${catColors[post.category] || "tag-pill"}`} style={{ fontFamily: "var(--font-dm-mono)" }}>{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold leading-snug mb-3 group-hover:text-orange-DEFAULT transition-colors" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.01em" }}>
                  {post.title}
                </h3>
                <p className="text-xs text-offwhite-DEFAULT/50 leading-relaxed mb-4 line-clamp-2" style={{ fontFamily: "var(--font-dm-sans)" }}>{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/6">
                  <div className="flex items-center gap-2 text-[10px] text-offwhite-DEFAULT/30" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-offwhite-DEFAULT/20 group-hover:text-orange-DEFAULT transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

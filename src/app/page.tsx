import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TechSection from "@/components/sections/TechSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsShowcase />
      <ProcessSection />
      <WhyUsSection />
      <TechSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

import { Footer } from "@/app/components/layout/Footer";
import { Header } from "@/app/components/layout/Header";
import { ParallaxBackdrop } from "@/app/components/layout/ParallaxBackdrop";
import { AboutSection } from "@/app/components/sections/AboutSection";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { EducationSection } from "@/app/components/sections/EducationSection";
import { ExperienceSection } from "@/app/components/sections/ExperienceSection";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <ParallaxBackdrop />
      <Header />
      <main className="relative z-10 flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

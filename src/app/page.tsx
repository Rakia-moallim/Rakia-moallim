import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CurrentlyLearningSection from "@/components/CurrentlyLearningSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CurrentlyLearningSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

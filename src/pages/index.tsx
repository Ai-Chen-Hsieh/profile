import { useEffect } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import EducationSection from "@/components/EducationSection";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("section-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".section-hidden").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Index = () => {
  useScrollReveal();

  return (
    <div
      className="web3-bg min-h-screen text-white antialiased relative"
      style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}
    >
      <Navbar />
      <ScrollToTop />
      <ProfileHeader />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Index;

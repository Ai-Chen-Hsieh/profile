import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import EducationSection from "@/components/EducationSection";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
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

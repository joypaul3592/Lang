import {
  Navigation,
  HeroSection,
  BrandShowcase,
  ContactSection,
} from "@/components/landing";
import AboutSection from "@/components/landing/AboutSection";
import BuildBrand from "@/components/landing/BuildBrand";
import Footer from "@/components/landing/Footer";
import MissionVisionSection from "@/components/landing/MissionVisionSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";

export default function Home() {
  return (
    <div className="grain">
      <Navigation />
      <HeroSection />
      <BuildBrand />
      <BrandShowcase />
      <AboutSection />
      <MissionVisionSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

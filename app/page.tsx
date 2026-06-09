import {
  Navigation,
  HeroSection,
  ScrollStory,
  BrandShowcase,
  PhilosophySection,
  NewsletterSection,
  ContactSection,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="grain">
      <Navigation />
      <HeroSection />
      <ScrollStory />
      <BrandShowcase />
      <PhilosophySection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
}

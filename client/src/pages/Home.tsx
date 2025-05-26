import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-apple antialiased overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

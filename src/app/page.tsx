import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FoodGallery from "@/components/FoodGallery";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FoodGallery />
      <WhyChooseUs />
      <LocationSection />
      <ContactSection />
    </>
  );
}

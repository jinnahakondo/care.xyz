import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import OurServices from "@/components/home/OurServicesSection";
import TrustedSection from "@/components/home/TrustedSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <HowItWorksSection />
      <TrustedSection />
    </div>
  );
}

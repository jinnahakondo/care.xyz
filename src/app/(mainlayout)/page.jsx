import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import OurServices from "@/components/home/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <HowItWorks />
    </div>
  );
}

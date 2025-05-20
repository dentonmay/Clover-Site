import HeroSection from "./components/HeroSection";
import ContactUs from "./components/ContactUs";
import MarketsAndServices from "./components/MarketsAndServices";
import AlarmSection from "./components/AlarmSection";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main>
      <HeroSection 
        imageUrl="/tech-background.jpg" 
        title="Professional Technology Solutions" 
        description="Explore the lastest and greatest solutions here" 
        buttonText="Our Services" 
        buttonLink="/services"
      />

      {/* Markets Served and Services */}

      <MarketsAndServices />

      { /* Alarm.com Link Section */}

      <AlarmSection />
      
      {/* Contact Us Section Below Hero */}
      <ContactUs />
    </main>
  );
}

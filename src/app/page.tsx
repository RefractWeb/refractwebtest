"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { WorkSection } from "@/components/WorkSection";
import { Footer } from "@/components/Footer";
import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ImpactSection />
        <WorkSection />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;

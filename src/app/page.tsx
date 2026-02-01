"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { WorkSection } from "@/components/WorkSection";
import { BuildEnvironmentSection } from "@/components/BuildEnvironmentSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen overflow-x-hidden">
        <HeroSection />
        <ImpactSection />
        <WorkSection />
        <BuildEnvironmentSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </ReactLenis>
  );
};

export default App;

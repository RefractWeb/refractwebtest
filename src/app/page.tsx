"use client";

import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { BentoSection } from "@/components/BentoSection";
import { WorkSection } from "@/components/WorkSection";
import { BuildEnvironmentSection } from "@/components/BuildEnvironmentSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";

const App = () => {
  return (
    <SmoothContainer>
      <div className="min-h-screen overflow-x-hidden">
        <HeroSection />
        <BentoSection />
        <WorkSection />
        <ImpactSection />
        <BuildEnvironmentSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </SmoothContainer>
  );
};

export default App;

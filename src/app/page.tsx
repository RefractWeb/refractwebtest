"use client";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { BentoSection } from "@/components/BentoSection";
import { WorkSection } from "@/components/WorkSection";
import { BuildEnvironmentSection } from "@/components/BuildEnvironmentSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";
import SVGPreloader from "@/components/SVGPreloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothContainer>
      <SVGPreloader onCompleteAction={() => setLoading(false)} />
      <div className="min-h-screen overflow-x-clip">
        <HeroSection isStarted={!loading} />
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

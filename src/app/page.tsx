"use client";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { BentoSection } from "@/components/BentoSection";
import { WorkSection } from "@/components/WorkSection";
import { BuildEnvironmentSection } from "@/components/BuildEnvironmentSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import SVGPreloader from "@/components/SVGPreloader";

let hasLoaded = false;

const App = () => {
  const [loading, setLoading] = useState(!hasLoaded);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(!hasLoaded);

  return (
    <>
      {isPreloaderVisible && (
        <SVGPreloader
          onCompleteAction={() => {
            setLoading(false);
            // Delay unmounting to let the exit animation finish
            // Animation duration is 1s, onCompleteAction triggers at 0.6s
            setTimeout(() => {
              setIsPreloaderVisible(false);
              hasLoaded = true;
            }, 500);
          }}
        />
      )}
      <div className="min-h-screen overflow-x-clip">
        <HeroSection isStarted={!loading} />
        <BentoSection />
        <WorkSection />
        <ImpactSection />
        <BuildEnvironmentSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default App;

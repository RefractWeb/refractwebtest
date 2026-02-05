"use client";

import Teams from "@/components/about/Teams";
import About from "@/components/about/About";
import CoreCap from "@/components/about/CoreCap";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";
import AnimatedTextDemo from "@/components/ui/animated-text-demo";

export default function AboutPage() {
  return (
    <SmoothContainer>
      <main className="min-h-screen relative overflow-hidden">
        <Teams />
        <About />
        <CoreCap />
        <CTASection />
      </main>
    </SmoothContainer>
  );
}

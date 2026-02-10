"use client";

import Teams from "@/components/about/Teams";
import About from "@/components/about/About";
import CoreCap from "@/components/about/CoreCap";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";

export default function AboutPage() {
  return (
    <SmoothContainer>
      <main className="min-h-screen relative overflow-x-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-2%] -left-[15%] w-[50vw] h-[50vw] rounded-full bg-[#253a7a] opacity-30 blur-[500px]" />
          <div className="absolute top-[-8%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-[#B05D41]/30 blur-[500px]" />
        </div>
        <Teams />
        <About />

      </main>
      <CoreCap />
      <CTASection />
    </SmoothContainer>
  );
}

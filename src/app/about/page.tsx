"use client";

import Teams from "@/components/about/Teams";
import About from "@/components/about/About";
import CoreCap from "@/components/about/CoreCap";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";

export default function AboutPage() {
  return (
    <SmoothContainer>
      <main className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px]" />
          <div className="absolute top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[250px]" />
        </div>
        <Teams />
        <About />
        <CoreCap />
        <CTASection />
      </main>
    </SmoothContainer>
  );
}

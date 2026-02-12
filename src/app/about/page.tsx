"use client";

import Teams from "@/components/about/Teams";
import About from "@/components/about/About";
import CoreCap from "@/components/about/CoreCap";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";

export default function AboutPage() {
  return (
    <SmoothContainer>
      <main className="relative overflow-x-clip">
        <Teams />
        <About />
        <CoreCap />
        <CTASection />
      </main>
    </SmoothContainer>
  );
}

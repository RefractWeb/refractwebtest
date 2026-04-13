"use client";

import Teams from "@/components/about/Teams";
import About from "@/components/about/About";
import CoreCap from "@/components/about/CoreCap";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <main className="relative overflow-x-clip">
      <Teams />
      <About />
      <CoreCap />
      <CTASection />
    </main>
  );
}

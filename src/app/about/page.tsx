"use client";

import Teams from "@/components/about/Teams";
import About from "@/components/about/About";
import CoreCap from "@/components/about/CoreCap";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Teams />
      <About />
      <CoreCap />
      <CTASection />
    </main>
  );
}

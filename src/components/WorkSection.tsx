"use client";

import { AnimatedText } from "./ui/animated-text";
import ActionButtons from "./ActionButtons";
import { WorkCarousel, type WorkCarouselItem } from "./WorkCarousel";
import Work1 from "@/assets/works/Landing page 1.jpg";
import Work2 from "@/assets/works/Landing page 2.jpg";
import Work3 from "@/assets/works/Landing page 3.jpg";
import Work4 from "@/assets/works/Landing page 4.jpg";

const works: WorkCarouselItem[] = [
  {
    title: "PROJECT AETHER",
    category: "VISUAL ENGINEERING",
    description: "Zero-latency WebGL rendering for immersive luxury commerce.",
    image: Work1,
  },
  {
    title: "PROJECT SENTINEL",
    category: "SYSTEM ARCHITECTURE",
    description:
      "Trustless biometric authentication protocols with fluid user experience.",
    image: Work2,
  },
  {
    title: "PROJECT CORTEX",
    category: "INTELLIGENT INTERFACES",
    description:
      "Adaptive dashboard logic designed to visualize complex AI outputs.",
    image: Work3,
  },
  {
    title: "PROJECT FLUX",
    category: "IDENTITY SYSTEMS",
    description:
      "A molecular design system engineered for infinite digital scale.",
    image: Work4,
  },
];

export const WorkSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4 md:mb-16 space-y-4">
          <AnimatedText
            useScrollTrigger={true}
            animationType="wordReveal"
            stagger={0.07}
            className="text-4xl lg:text-5xl font-bold tracking-tight mx-auto"
          >
            Selected work
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.2}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Redefining the standard. We sharpen clarity, elevate design, and
            build digital identities that perform at the highest level.
          </AnimatedText>
          <ActionButtons className="pt-4 justify-center" />
        </div>

        <WorkCarousel
          items={works}
          slideClassName="w-[85vw] md:w-[60vw] lg:w-[32.5rem]"
        />
      </div>
    </section>
  );
};

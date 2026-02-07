"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "./ui/animated-text";
import Work1 from "@/assets/works/Landing page 1.jpg";
import Work2 from "@/assets/works/Landing page 2.jpg";
import Work3 from "@/assets/works/Landing page 3.jpg";
import Work4 from "@/assets/works/Landing page 4.jpg";
import ActionButtons from "./ActionButtons";

const works = [
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const progress = (scrollLeft / scrollWidth) * 100;
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const displayProgress = Math.max(scrollProgress, 10);
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-grad mx-auto"
          >
            Selected work
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.1}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Redefining the standard. We sharpen clarity, elevate design, and
            build digital identities that perform at the highest level.
          </AnimatedText>
          <ActionButtons className="pt-4 justify-center" />
        </div>

        <div className="relative pb-10">
          {/* Progress indicator */}
          <div
            className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out shadow-[0_0_12px_var(--primary)] z-10 rounded-2xl"
            style={{
              width: `${displayProgress}%`,
              height: `4px`,
            }}
          />

          <div
            ref={scrollRef}
            className="flex flex-col lg:flex-row gap-6 overflow-x-auto pb-12 snap-x"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {works.map((work, index) => (
              <div
                key={index}
                className="min-w-[85vw] lg:min-w-130 snap-center group bg-linear-to-br from-card via-background to-card rounded-2xl"
              >
                <div className="h-100 relative overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    placeholder="blur"
                    loading="lazy"
                    className="object-cover object-left translate-x-10 transition-transform duration-700 group-hover:scale-105 rounded-bl-2xl"
                    fill
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-bold text-xl lg:text-2xl group-hover:text-gray-300 transition-colors">
                      {work.title}
                    </h4>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest pt-1">
                      {work.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

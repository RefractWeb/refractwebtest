"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedText } from "./ui/animated-text";
import Work1 from "@/assets/works/Landing page 1.jpg";
import Work2 from "@/assets/works/Landing page 2.jpg";
import Work3 from "@/assets/works/Landing page 3.jpg";
import Work4 from "@/assets/works/Landing page 4.jpg";
import ActionButtons from "./ActionButtons";
import { SmoothCarousel } from "./SmoothCarousel";

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
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            className="text-4xl lg:text-5xl font-bold tracking-tight mx-auto"
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

        <SmoothCarousel slideClassName="w-[85vw] md:w-[60vw] lg:w-[32.5rem]">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="h-full group bg-linear-to-br from-card via-card/70 to-card rounded-2xl border"
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="h-60 md:h-76 relative overflow-hidden rounded-t-2xl">
                <Image
                  src={work.image}
                  alt={work.title}
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover object-left translate-x-4 md:translate-x-6 transition-transform duration-700 group-hover:scale-105 rounded-bl-2xl select-none pointer-events-none bg-background"
                  fill
                  draggable={false}
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex flex-col-reverse md:flex-row justify-between items-start mb-4">
                  <h4 className="text-white font-bold text-base md:text-xl lg:text-2xl group-hover:text-gray-300 transition-colors">
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
            </motion.div>
          ))}
        </SmoothCarousel>
      </div>
    </section>
  );
};

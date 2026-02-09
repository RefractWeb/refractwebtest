"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type PanInfo,
} from "motion/react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const smoothX = useSpring(x, {
    damping: 40,
    stiffness: 200,
    mass: 0.8,
  });

  const progress = useTransform(smoothX, (latest) => {
    if (dragConstraint === 0) return 10;
    return Math.max(10, (Math.abs(latest) / Math.abs(dragConstraint)) * 100);
  });

  const [displayProgress, setDisplayProgress] = useState(10);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      setDisplayProgress(v);
    });
    return unsubscribe;
  }, [progress]);

  const calcConstraints = useCallback(() => {
    if (!containerRef.current) return;
    const scrollWidth = containerRef.current.scrollWidth;
    const clientWidth = containerRef.current.clientWidth;
    setDragConstraint(-(scrollWidth - clientWidth));
  }, []);

  useEffect(() => {
    calcConstraints();
    window.addEventListener("resize", calcConstraints);
    return () => window.removeEventListener("resize", calcConstraints);
  }, [calcConstraints]);

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

        <div className="relative pb-10 overflow-hidden">
          {/* Progress indicator */}
          <motion.div
            className="absolute bottom-0 left-0 bg-primary z-10 rounded-2xl shadow-[0_0_12px_var(--primary)]"
            style={{
              width: `${displayProgress}%`,
              height: 4,
            }}
          />

          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{
              left: dragConstraint,
              right: 0,
            }}
            dragElastic={0.1}
            dragTransition={{
              bounceStiffness: 300,
              bounceDamping: 40,
              power: 0.3,
              timeConstant: 400,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_: PointerEvent, info: PanInfo) => {
              setTimeout(() => setIsDragging(false), 150);
            }}
            style={{ x: smoothX }}
            className="flex gap-6 pb-12 cursor-grab active:cursor-grabbing select-none"
          >
            {works.map((work, index) => (
              <motion.div
                key={index}
                className="min-w-[85vw] lg:min-w-130 group bg-linear-to-br from-card via-background to-card rounded-2xl"
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="h-100 relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={work.image}
                    alt={work.title}
                    placeholder="blur"
                    loading="lazy"
                    className="object-cover object-left translate-x-10 transition-transform duration-700 group-hover:scale-105 rounded-bl-2xl select-none pointer-events-none"
                    fill
                    draggable={false}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// Award assets
import awwwardsHonors from "@/assets/awards/AWWWARDS HONORS.png";
import bestInnovation from "@/assets/awards/BEST INNOVATION.png";
import bestUi from "@/assets/awards/BEST UI DESIGN.png";
import bestUx from "@/assets/awards/BEST UX DESIGN.png";
import specialKudos from "@/assets/awards/SPCIAL KUDOS.png";
import AnimatedText from "./ui/animated-text";
import { Button } from "./ui/button";

interface Award {
  id: number;
  image: typeof awwwardsHonors;
  category: string;
  title: string;
  subtitle: string;
  issuer: string;
  date: string;
  href: string;
  accentColor: string;
  bgColor: string;
}

const awards: Award[] = [
  {
    id: 1,
    image: awwwardsHonors,
    category: "Awwwards",
    title: "Honors",
    subtitle:
      "Recognized by Awwwards with Honors among the world’s top digital work.",
    issuer: "Awwwards",
    date: "Mar 1, 2026",
    href: "https://www.awwwards.com/sites/refractweb",
    accentColor: "#E08060",
    bgColor: "rgba(224, 128, 96, 0.08)",
  },
  {
    id: 2,
    image: bestUi,
    category: "CSSDA",
    title: "Best UI Design",
    subtitle:
      "Recognized by CSSDA for excellence in interface design and digital craft",
    issuer: "CSS Design Awards",
    date: "Feb 20, 2026",
    href: "https://cssdesignawards.com/sites/refractweb/48905",
    accentColor: "#3A5CC9",
    bgColor: "rgba(58, 92, 201, 0.08)",
  },
  {
    id: 3,
    image: bestUx,
    category: "CSSDA",
    title: "Best UX Design",
    subtitle:
      "Recognized by CSSDA for best-in-class UX that delivers clarity, flow, and impact",
    issuer: "CSS Design Awards",
    date: "Feb 20, 2026",
    href: "https://cssdesignawards.com/sites/refractweb/48905",
    accentColor: "#B05A3A",
    bgColor: "rgba(176, 90, 58, 0.08)",
  },
  {
    id: 4,
    image: bestInnovation,
    category: "CSSDA",
    title: "Best Innovation",
    subtitle:
      "Recognized by CSSDA for innovation at the intersection of design and technology",
    issuer: "CSS Design Awards",
    date: "Feb 20, 2026",
    href: "https://cssdesignawards.com/sites/refractweb/48905",
    accentColor: "#5055CC",
    bgColor: "rgba(80, 85, 204, 0.08)",
  },
  {
    id: 5,
    image: specialKudos,
    category: "CSSDA",
    title: "Special Kudos",
    subtitle:
      "Top-tier recognition from CSSDA for exceptional work across UI, UX, and innovation",
    issuer: "CSS Design Awards",
    date: "Feb 20, 2026",
    href: "https://cssdesignawards.com/sites/refractweb/48905",
    accentColor: "#888888",
    bgColor: "rgba(136, 136, 136, 0.08)",
  },
];

const INTERVAL_MS = 3200;

export const AwardsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  //   const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-220, 0, 220], [-9, 0, 9]);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % awards.length);
  }, []);

  const retreat = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + awards.length) % awards.length);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isInView) return;
    intervalRef.current = setInterval(advance, INTERVAL_MS);
  }, [advance, isInView]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      startInterval();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, startInterval]);

  const active = awards[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 px-6">
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none blur-gpu"
        aria-hidden
      >
        <div
          className="absolute top-[-15%] left-[5%] w-[45vw] h-[45vw] rounded-full opacity-20 blur-[200px]"
          style={{ background: "#3150aa" }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] w-[40vw] h-[40vw] rounded-full opacity-20 blur-[200px]"
          style={{ background: "#d6795a" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        {/* <div className="mb-14 md:mb-20">
          <AnimatedText
            animationType="slideUp"
            delay={0.2}
            useScrollTrigger
            className="text-xs uppercase scale-80 md:scale-100 tracking-[0.35em] text-muted-foreground/70 mb-3 text-center"
          >
            World&apos;s Most Prestigious
          </AnimatedText>
          <AnimatedText
            animationType="wordReveal"
            stagger={0.08}
            useScrollTrigger
            className="text-4xl lg:text-5xl font-bold tracking-tight text-grad leading-[1.1] text-center w-full"
          >
            Awards & Honors
          </AnimatedText>
        </div> */}

        {/* Main layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-20 xl:gap-32 items-center"
          //   onMouseEnter={() => setIsHovered(true)}
          //   onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left — stacked thumbnails */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-75 h-98 md:w-110 md:h-150">
              {awards.map((award, i) => {
                const offset = i - activeIndex;
                const normalised =
                  ((offset % awards.length) + awards.length) % awards.length;
                // 0 = active, 1 = next, 2 = after-next, n-1 = previous (bottom of stack)
                const stackPos =
                  normalised <= Math.floor(awards.length / 2)
                    ? normalised
                    : normalised - awards.length;
                const isActive = i === activeIndex;
                const zIndex = awards.length - Math.abs(stackPos);
                const yShift = stackPos * -14;
                const rotDeg = stackPos * 3.5;
                const scale = isActive ? 1 : 1 - Math.abs(stackPos) * 0.04;
                const opacity = isActive
                  ? 1
                  : Math.max(0.35, 1 - Math.abs(stackPos) * 0.2);
                const isDraggableCard = isActive;

                return (
                  <motion.button
                    key={award.id}
                    type="button"
                    aria-label={`View ${award.title}`}
                    onClick={() => setActiveIndex(i)}
                    drag={isDraggableCard ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    dragSnapToOrigin
                    onDragStart={() => {
                      if (intervalRef.current)
                        clearInterval(intervalRef.current);
                    }}
                    onDragEnd={(_, info) => {
                      if (!isDraggableCard) return;

                      const swipeDistance = info.offset.x;
                      const swipeVelocity = info.velocity.x;
                      const swipePower =
                        Math.abs(swipeDistance) + Math.abs(swipeVelocity) * 0.2;
                      const crossedThreshold = swipePower > 145;

                      dragX.set(0);

                      if (crossedThreshold) {
                        if (swipeDistance < 0) {
                          advance();
                        } else {
                          retreat();
                        }
                      }

                      startInterval();
                    }}
                    className={`absolute inset-0 rounded-3xl overflow-hidden ${
                      isDraggableCard
                        ? "cursor-grab active:cursor-grabbing"
                        : "cursor-pointer"
                    }`}
                    animate={{
                      y: yShift,
                      rotate: rotDeg,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                    }}
                    style={{
                      x: isDraggableCard ? dragX : 0,
                      rotate: isDraggableCard ? dragRotate : undefined,
                      boxShadow: isActive
                        ? `0 24px 60px -8px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)`
                        : "0 8px 24px -4px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover"
                      sizes="400px"
                      draggable={false}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Center — vertical divider (desktop only) */}
          <div className="hidden lg:block w-px self-stretch bg-linear-to-b from-transparent via-border to-transparent" />

          {/* Right — award details */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-4"
              >
                {/* Issuer badge */}
                <div className="inline-flex items-center gap-2.5">
                  <span
                    className="inline-block size-2 rounded-full"
                    style={{ background: active.accentColor }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.3em]"
                    style={{ color: active.accentColor }}
                  >
                    {active.issuer}
                  </span>
                  <span className="text-xs text-muted-foreground/60 tracking-[0.15em] uppercase">
                    · {active.date}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <AnimatedText
                    animationType="wordReveal"
                    stagger={0.08}
                    delay={0.01}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] w-full"
                  >
                    {active.title}
                  </AnimatedText>
                  <AnimatedText
                    animationType="blurIn"
                    splitType="words"
                    delay={0.1}
                    stagger={0.045}
                    className="mt-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    {active.subtitle}
                  </AnimatedText>
                </div>

                {/* Visit link */}
                <a href={active.href} target="_blank" rel="noopener noreferrer">
                  <Button size={"lg"}>
                    Visit
                    <ArrowUpRight className="size-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Award navigation"
            >
              {awards.map((award, i) => (
                <button
                  key={award.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to ${award.title}`}
                  onClick={() => {
                    setActiveIndex(i);
                    startInterval();
                  }}
                  className="relative h-1 rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
                  style={{
                    width: i === activeIndex ? 50 : 26,
                    background:
                      i === activeIndex
                        ? "transparent"
                        : "rgba(255,255,255,0.15)",
                  }}
                >
                  {i === activeIndex && (
                    <motion.span
                      key={activeIndex}
                      className="absolute inset-0 rounded-full"
                      style={{ background: active.accentColor }}
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: INTERVAL_MS / 1000,
                        ease: "linear",
                      }}
                    />
                  )}
                </button>
              ))}

              {/* Counter */}
              <span className="ml-2 text-[11px] text-muted-foreground/50 tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(awards.length).padStart(2, "0")}
              </span>
            </div>

            {/* All award labels strip */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
              {awards.map((award, i) => (
                <button
                  key={award.id}
                  type="button"
                  onClick={() => {
                    setActiveIndex(i);
                    startInterval();
                  }}
                  className="group relative text-left rounded-xl px-3 py-2.5 transition-all duration-300 cursor-pointer"
                  style={{
                    background:
                      i === activeIndex
                        ? award.bgColor
                        : "rgba(255,255,255,0.03)",
                    border:
                      i === activeIndex
                        ? `1px solid ${award.accentColor}25`
                        : "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span
                    className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5"
                    style={{
                      color:
                        i === activeIndex
                          ? award.accentColor
                          : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {award.category}
                  </span>
                  <span
                    className="block text-xs font-semibold leading-tight transition-colors"
                    style={{
                      color:
                        i === activeIndex
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {award.title}
                  </span>
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

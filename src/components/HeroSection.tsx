"use client";
import AnimatedLogoCloud from "./LogoCloud";
import { AnimatedText } from "./ui/animated-text";
import ActionButtons from "./ActionButtons";
import { AnimatedChip } from "./AnimatedChip";
import { motion } from "motion/react";
import { ShimmerBulgeText } from "./ui/shimmer-bulge-text";

export const HeroSection = ({ isStarted = true }: { isStarted?: boolean }) => {
  return (
    <div className="relative md:min-h-dvh flex flex-col">
      {/* Background Elements */}
      <div className="absolute hidden md:block inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur" />
        <div className="absolute top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[250px] transform-gpu-blur" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 container px-4 md:pl-6 pt-20 md:pt-16 grow flex-col-reverse flex md:flex-row items-center mx-auto">
        <div className="w-full lg:w-1/2 text-left space-y-5 md:space-y-8 pl-4 lg:pl-10">
          <motion.div
            className="z-10 flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          >
            <span className="inline-flex cursor-pointer bg-neutral-900/30 backdrop-blur-sm border border-muted/40 hover:scale-101 active:scale-99 transition-all duration-500 hover:translate-x-3 rounded-full items-center gap-1  pl-2 pr-4 py-1 -mb-2 md:-mb-3 ">
              <div className="relative size-4">
                <span className="size-2 rounded-full bg-primary2 shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <span className="size-2 blur rounded-full bg-primary2 shrink-0 animate-pulse absolute top-1 left-1" />
              </div>
              <ShimmerBulgeText
                shouldAnimate={isStarted}
                duration={0.35}
                each={0.04}
                scale={1.2}
                endColor="#f59768"
                glowColor="rgba(245, 151, 104, 0.5)"
                repeatDelay={3.5}
              >
                {"2 more Q2 spots available"}
              </ShimmerBulgeText>
            </span>
          </motion.div>
          <AnimatedText
            animationType="wordReveal"
            stagger={0.08}
            shouldAnimate={isStarted}
            className="hero-text font-bold tracking-tight text-balance leading-[1.18]"
          >
            Defining <br /> Digital Identity
          </AnimatedText>
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            shouldAnimate={isStarted}
            delay={0.4}
            className="text-base md:text-lg lg:text-xl max-w-md leading-tight -mt-2 md:-mt-3 pr-2 text-pretty"
          >
            We merge the precision of code with the power of design,
            orchestrating a single identity that signals authority everywhere.
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <ActionButtons />
          </motion.div>
        </div>

        <AnimatedChip
          containerClassName="w-full md:w-1/2 isolate perspective-[1000px] min-h-[40vh]"
          className="xl:-translate-x-12"
          isStarted={isStarted}
        />
      </main>
      <AnimatedLogoCloud className="lg:-translate-y-12" />
    </div>
  );
};

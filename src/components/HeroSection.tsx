"use client";
import AnimatedLogoCloud from "./LogoCloud";
import { AnimatedText } from "./ui/animated-text";
import ActionButtons from "./ActionButtons";
import { AnimatedChip } from "./AnimatedChip";
import { motion } from "motion/react";

export const HeroSection = ({ isStarted = true }: { isStarted?: boolean }) => {
  return (
    <div className="relative md:min-h-screen flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px]" />
        <div className="absolute top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[250px]" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 container px-6 pt-20 md:pt-16 grow flex-col-reverse flex md:flex-row items-center mx-auto">
        <div className="w-full lg:w-1/2 text-left space-y-8 pl-4 lg:pl-10">
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            shouldAnimate={isStarted}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Defining <br /> Digital Identity
          </AnimatedText>
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            shouldAnimate={isStarted}
            className="text-base md:text-lg lg:text-xl max-w-md leading-tight"
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
          className="md:-translate-x-12"
          isStarted={isStarted}
        />
      </main>
      <AnimatedLogoCloud />
    </div>
  );
};

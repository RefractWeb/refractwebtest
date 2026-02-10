"use client";
import AnimatedLogoCloud from "./LogoCloud";
import { AnimatedText } from "./ui/animated-text";
import ActionButtons from "./ActionButtons";
import { AnimatedChip } from "./AnimatedChip";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#253a7a] opacity-30 blur-[500px]" />
        <div className="absolute top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#B05D41]/35 blur-[250px]" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 container px-6 pt-16 grow flex flex-col lg:flex-row items-center mx-auto">
        <div className="w-full lg:w-1/2 text-left space-y-8 pl-4 lg:pl-10">
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            Defining <br /> Digital Identity
          </AnimatedText>
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            delay={0.2}
            className="text-base lg:text-lg max-w-sm leading-tight"
          >
            We merge the precision of code with the power of design,
            orchestrating a single identity that signals authority everywhere.
          </AnimatedText>
          <ActionButtons />
        </div>

        <AnimatedChip
          containerClassName="w-full lg:w-1/2 flex justify-center lg:justify-end relative isolate perspective-[1000px]"
          className="-translate-x-12"
        />
      </main>
      <AnimatedLogoCloud />
    </div>
  );
};

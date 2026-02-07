"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { Button } from "./ui/button";
import { AnimatedText } from "./ui/animated-text";
import ActionButtons from "./ActionButtons";

export const CTASection = () => {
  const { rotateX, rotateY } = useMouseTilt();

  return (
    <section className="py-24 mb-100 px-6 bg-background flex justify-center relative">
      <div className="container max-w-6xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] text-grad"
          >
            Ready for <br />
            what's next?
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.1}
            className="text-muted-foreground text-xl max-w-md"
          >
            Let's discuss your vision and see if we are the right fit.
          </AnimatedText>
          <ActionButtons />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative isolate">
          <div className="absolute inset-0">
            {/* <div className="absolute h-2 bg-white z-10 w-200 bottom-20 -right-86 mix-blend-color blur-[1px] rotate-25"></div> */}
            <div className="absolute h-2 rounded-full bg-linear-to-r to-white via-white rotate-25 z-10 w-300 mix-blend-soft-light blur-[2px] -left-211"></div>
            <div className="absolute w-300 h-100 rotate-25 -top-80 -right-4 overflow-hidden">
              <div className="absolute size-100 rounded-full bg-primary2 z-10 -bottom-80 left-1/2 -translate-x-1/2 blur-[130px]"></div>
            </div>

            <div className="absolute h-2 rounded-full bg-white rotate-25 top-99 z-10 w-300 mix-blend-soft-light blur-[2px]"></div>
            <div className="absolute w-250 h-100 rotate-25 top-94 left-0 overflow-hidden">
              <div className="absolute size-100 rounded-full bg-[#4661BE] z-10 -top-90 left-1/2 -translate-x-1/2 blur-[130px]"></div>
            </div>
          </div>
          <motion.img
            className="w-full max-w-md lg:max-w-full h-auto object-contain brightness-120 saturate-110 drop-shadow-2xl z-30"
            src="/chip.png"
            alt="Refract Web Services Chip"
            loading="lazy"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </div>
    </section>
  );
};

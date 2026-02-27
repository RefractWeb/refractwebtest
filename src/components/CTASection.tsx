"use client";

import { AnimatedText } from "./ui/animated-text";
import ActionButtons from "./ActionButtons";
import { AnimatedChip } from "./AnimatedChip";

export const CTASection = () => {
  return (
    <section className="pt-16 md:py-24 md:mb-20 px-6 flex justify-center relative">
      <div className="container max-w-6xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full md:w-1/2 space-y-5 md:space-y-6">
          <AnimatedText
            useScrollTrigger={true}
            animationType="wordReveal"
            stagger={0.07}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2]"
          >
            Ready for <br />
            what's next?
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.1}
            className="text-muted-foreground text-lg md:text-xl max-w-xs"
          >
            Let's discuss your vision and see if we are the right fit.
          </AnimatedText>
          <ActionButtons />
        </div>

        <div className="w-full h-full md:w-1/2 flex justify-center md:justify-end relative isolate md:mb-10 mb-20">
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div
              className="absolute inset-0 origin-center translate-x-60 -translate-y-10"
              style={{ transform: "rotate(25deg)" }}
            >
              {/* Top light streak */}
              <div className="absolute h-[0.5%] rounded-full bg-linear-to-r to-white via-white z-10 w-[200%] mix-blend-soft-light blur-[2px] right-[90%] top-[80%] transform-gpu-blur"></div>
              {/* Top glow */}
              <div className="absolute w-[200%] h-full -top-[20%] right-[75%] overflow-hidden">
                <div className="absolute w-60 sm:w-[42%] aspect-square rounded-full bg-primary2 z-10 -bottom-[65%] left-1/2 -translate-x-1/2 blur-[120px] blur-min"></div>
              </div>

              {/* Bottom light streak */}
              <div className="absolute h-[0.5%] rounded-full bg-linear-to-l to-white via-white z-10 w-[200%] mix-blend-soft-light blur-[2px] top-[80%] -left-[10%] transform-gpu-blur"></div>
              {/* Bottom glow */}
              <div className="absolute w-[200%] sm:w-[150%] sm:h-[70%] h-full top-[80%] sm:left-[10%] overflow-hidden">
                <div className="absolute w-48 sm:w-[42%] aspect-square rounded-full bg-[#4661BE] z-10 -top-[60%] left-26 sm:left-1/2 sm:-translate-x-1/2 sm:-top-[75%] blur-[120px] blur-min"></div>
              </div>
            </div>
          </div>
          <AnimatedChip className="z-20 scale-120" />
        </div>
      </div>
    </section>
  );
};

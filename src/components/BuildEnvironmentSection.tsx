"use client";

import { HolographicWall } from "./holographicwall";
import { Button } from "./ui/button";
import { AnimatedText } from "./ui/animated-text";

export const BuildEnvironmentSection = () => {
  return (
    <section className="py-12 px-4 md:py-24 md:px-6 flex justify-center relative! overflow-hidden">
      <div className="container max-w-6xl relative">
        <div className="w-full bg-[#0D101A] rounded-3xl relative overflow-hidden grid md:grid-cols-2 grid-cols-1 justify-between pt-10 md:pt-0 ">
          {/* Background noise/texture */}
          {/* <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")",
            }}
          /> */}

          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[12%] size-60 rounded-full bg-[#3150aa] opacity-80 blur-[80px]" />
            <div className="absolute top-[-10%] left-[2%] size-50 rounded-full bg-[#3150aa] blur-[90px] opacity-90" />
            <div className="absolute bottom-[-10%] left-[1%] size-55 rounded-full bg-[#c46241] opacity-90 blur-[70px]" />
          </div>
          {/* Left Content */}
          <div className="relative flex flex-col justify-center z-10 max-w-lg space-y-6 px-10 py-36 items-center text-center md:items-start md:text-left md:pl-12 md:pr-0">
            <AnimatedText
              useScrollTrigger={true}
              animationType="slideUp"
              splitType="lines"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
            >
              The build environment.
            </AnimatedText>
            <AnimatedText
              useScrollTrigger={true}
              animationType="slideUp"
              splitType="lines"
              delay={0.1}
              className="max-w-sm"
            >
              A proven stack for speed and scale. We leverage these tools to
              ensure reliability and uncompromising polish.
            </AnimatedText>
            <div className="pt-4">
              <Button>Start a project</Button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="relative z-10 gap-4 w-full bg-transparent pb-8 md:pb-0 flex items-center justify-center">
            <HolographicWall />
          </div>
        </div>
      </div>
    </section>
  );
};

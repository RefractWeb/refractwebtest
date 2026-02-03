"use client";

import { Button } from "./ui/button";

export const BuildEnvironmentSection = () => {
  return (
    <section className="py-24 px-6 bg-background flex justify-center">
      <div className="container max-w-6xl relative">
        <div className="w-full bg-[#0D101A] rounded-3xl relative overflow-hidden grid grid-cols-2 justify-between gap-12">
          {/* Background noise/texture */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Left Content */}
          <div className="relative flex items-start flex-col justify-center  pl-12 pr-0 z-10 max-w-lg space-y-6 ">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-grad">
              The build environment.
            </h2>
            <p className="text-grad max-w-sm">
              A proven stack for speed and scale. We leverage these tools to
              ensure reliability and uncompromising polish.
            </p>
            <div className="pt-4">
              <Button>Start a project</Button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="relative z-10 gap-4 bg-black w-full">
            <img src={"/logos.png"} alt="" className="size-full object-cover" />
            <img
              src={"/Rectangle.png"}
              alt=""
              className="size-full object-cover absolute z-2 inset-0"
            />
          </div>

          {/* Ambient glows inside container */}
          <div className="absolute bottom-0 left-10 w-50 h-50 bg-blue-500/10 blur-[100px]" />
          <div className="absolute top-0 -left-20 w-100 h-100 bg-primary/30 blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

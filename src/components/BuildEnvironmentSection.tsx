"use client";

import { Cloud, Command } from "lucide-react";
import { Button } from "./ui/button";

const GlassToolCard = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="bg-white/5 backdrop-blur-xl border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group aspect-square">
    <div className="text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
      {label}
    </span>
  </div>
);

export const BuildEnvironmentSection = () => {
  return (
    <section className="py-24 px-6 bg-background flex justify-center">
      <div className="container max-w-6xl relative">
        <div className="w-full bg-linear-to-br from-secondary2 via-background to-primary rounded-[40px] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Background noise/texture */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Left Content */}
          <div className="relative z-10 max-w-lg space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              The build environment.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A proven stack for speed and scale. We leverage these tools to
              ensure reliability and uncompromising polish.
            </p>
            <div className="pt-4">
              <Button>Start a project</Button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <GlassToolCard icon={<Cloud className="w-10 h-10" />} label="aws" />
            <GlassToolCard
              icon={<span className="text-3xl font-bold">N</span>}
              label="Next.js"
            />
            <GlassToolCard
              icon={<Command className="w-10 h-10" />}
              label="Blender"
            />
            <GlassToolCard
              icon={
                <div className="font-bold text-3xl tracking-tighter border-2 border-current rounded-lg px-1">
                  Ps
                </div>
              }
              label="Photoshop"
            />
          </div>

          {/* Ambient glows inside container */}
          <div className="absolute top-0 right-0 w-100 h-100 bg-blue-500/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-100 h-100 bg-orange-500/10 blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

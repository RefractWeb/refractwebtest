"use client";

import Image from "next/image";
import { AnimatedText } from "./ui/animated-text";
import img1 from "@/assets/works/Landing page 1.jpg";
import ActionButtons from "./ActionButtons";
import BarAnim from "./BarAnim";
import ChartAnim from "./ChartAnim";
import { useSafari } from "@/hooks/useSafari";
import { cn } from "@/lib/utils";

export const ImpactSection = () => {
  const isSafari = useSafari();
  return (
    <section className="relative py-24 px-6">
      <div className={cn(isSafari ? "hidden md:block" : "")}>
        <div className="absolute top-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-50 blur-[220px] blur-gpu" />
        <div className="absolute top-[-14%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-50 blur-[250px] blur-gpu" />

        <div className="absolute bottom-[-30%] right-[15%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-50 blur-[220px] blur-gpu" />
        <div className="absolute bottom-[-34%] -right-[20%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-50 blur-[250px] blur-gpu" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-center mx-auto"
          >
            Impact at scale
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.1}
            className="text-lg"
          >
            Design is subjective. Performance is not.
          </AnimatedText>
          <ActionButtons className="pt-4 justify-center" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Revenue Supported */}
          <div
            className="relative group bg-linear-to-br from-[#121420] to-[#0A0A0A] rounded-3xl p-8 overflow-hidden"
            style={{
              boxShadow: "0 0 18px rgba(0,0,0, 0.45)",
            }}
          >
            <div className="absolute -top-10 right-[2%] w-30 h-30 rounded-full bg-[#dd7857] opacity-60 blur-3xl hidden md:block blur-gpu" />
            <div className="absolute top-[-30%] left-[10%] w-90 h-90 rounded-full bg-[#3150aa] opacity-60 blur-[100px] blur-gpu" />
            <div className="absolute bottom-[-30%] -left-[20%] w-80 h-80 rounded-full bg-[#d6795a] opacity-50 blur-[100px] blur-gpu" />
            <div className="relative z-10 flex flex-col justify-between h-80 md:min-h-72">
              <div className="flex flex-col gap-3">
                <h3 className="text-grad text-lg mb-2 md:mb-6">
                  Revenue Supported
                </h3>
                <div className="text-6xl font-medium tracking-tighter text-grad">
                  $100M+
                </div>
                <div className="max-w-xs">
                  <p className="text-grad text-sm leading-relaxed">
                    Systems backing nine-figure revenue. When performance is
                    non-negotiable, we deliver.
                  </p>
                </div>
              </div>
            </div>

            {/* Histogram Visual */}
            <div className="absolute -bottom-10 md:-bottom-2 right-1">
              <BarAnim />
            </div>
          </div>

          {/* Card 2: Assets Deployed */}
          <div
            className="relative group bg-linear-to-bl from-[#15192b] to-[#0A0A0A]  rounded-3xl p-8 overflow-hidden"
            style={{
              boxShadow: "0 0 18px rgba(0,0,0, 0.45)",
            }}
          >
            <div className="absolute -top-10 right-[2%] w-30 h-30 rounded-full bg-[#dd7857] opacity-60 blur-3xl hidden md:block blur-gpu" />
            <div className="absolute top-[-30%] left-[10%] w-90 h-90 rounded-full bg-[#3150aa] opacity-60 blur-[100px] blur-gpu" />
            <div className="absolute bottom-[-30%] -left-[20%] w-80 h-80 rounded-full bg-[#d6795a] opacity-50 blur-[100px] blur-gpu" />
            <div className="relative z-10 flex flex-col justify-between h-80 md:min-h-72">
              <div className="flex flex-col h-full gap-3 relative z-10">
                <h3 className="text-grad text-lg mb-2 md:mb-6">
                  Assets Deployed
                </h3>
                <div className="text-6xl font-medium tracking-tighter text-grad">
                  100+
                </div>
                <div className="max-w-xs">
                  <p className="text-grad text-sm leading-relaxed">
                    Production-ready assets for every channel. Ship campaigns
                    and launches with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-2 rounded-lg overflow-hidden absolute md:-right-50 md:top-26 right-6 -bottom-8 w-5/6 md:w-3/4 -rotate-6 hover:-rotate-3 hover:scale-110 transition-all duration-500 cursor-pointer z-30">
              <Image
                src={img1}
                width={400}
                loading="lazy"
                placeholder="blur"
                alt="works illustration"
                draggable={false}
                className="object-cover object-left size-full rounded-md pointer-events-none"
              />
            </div>
          </div>

          {/* Card 3: Enterprise DNA (Full Width) */}
          <div
            className="relative group md:col-span-2 bg-linear-to-r from-[#0d0d14] to-[#0A0A0A] rounded-3xl p-8 overflow-hidden h-100"
            style={{
              boxShadow: "0 0 18px rgba(0,0,0, 0.45)",
            }}
          >
            <div className="absolute -top-10 right-[2%] w-30 h-30 rounded-full bg-[#dd7857] opacity-60 blur-3xl hidden md:block blur-gpu" />
            <div className="absolute top-[-30%] left-[10%] w-90 h-90 rounded-full bg-[#3150aa] opacity-60 blur-[100px] blur-gpu" />
            <div className="absolute bottom-[-20%] -left-[10%] w-80 h-80 rounded-full bg-[#d6795a] opacity-50 blur-[100px] blur-gpu" />
            <div className="flex flex-col h-full gap-3 relative z-10">
              <h3 className="text-grad text-lg mb-2 md:mb-6">Enterprise DNA</h3>
              <div className="text-6xl font-medium tracking-tighter text-grad px-1">
                $2.65B
              </div>
              <p className="text-grad text-sm leading-relaxed max-w-xs">
                Applying the architectural standards of a multi-billion dollar
                valuation to your brand.
              </p>
            </div>
            <ChartAnim />
          </div>
        </div>
      </div>
    </section>
  );
};

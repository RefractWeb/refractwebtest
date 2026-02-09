"use client";

import Image from "next/image";
import { AnimatedText } from "./ui/animated-text";
import img1 from "@/assets/works/Landing page 1.jpg";
import img2 from "@/assets/impact2.png";
import img3 from "@/assets/impact3.svg";
import ActionButtons from "./ActionButtons";
import BarAnim from "./BarAnim";
import ChartAnim from "./ChartAnim";

export const ImpactSection = () => {
  return (
    <section className="relative py-24 px-6">
      {/* Background glow for this section */}
      <div className="absolute top-[30%] right-0 w-[40vw] h-[40vw] bg-[#1E2E5E] opacity-20 blur-[150px] pointer-events-none" />

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
            className="text-muted-foreground text-lg"
          >
            Design is subjective. Performance is{" "}
            <span className="text-white font-medium">not.</span>
          </AnimatedText>
          <ActionButtons className="pt-4 justify-center" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Revenue Supported */}
          <div className="relative group bg-linear-to-br from-[#121420] to-[#0A0A0A] border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-white/10 transition-colors">
            <div className="relative z-10 h-full flex flex-col justify-between min-h-72">
              <div className="flex flex-col gap-3">
                <h3 className="text-muted-foreground text-lg mb-2">
                  Revenue Supported
                </h3>
                <div className="text-6xl font-medium tracking-tighter line">
                  $100M+
                </div>
                <div className="max-w-xs">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Systems backing nine-figure revenue. When performance is
                    non-negotiable, we deliver.
                  </p>
                </div>
              </div>
            </div>

            {/* Histogram Visual */}
            <div className="absolute -bottom-2 right-1">
              <BarAnim />
            </div>
          </div>

          {/* Card 2: Assets Deployed */}
          <div className="relative group bg-linear-to-bl from-[#15192b] to-[#0A0A0A] border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-white/10 transition-colors">
            <div className="relative z-10 h-full flex flex-col justify-between min-h-72">
              <div className="flex flex-col h-full gap-3 relative z-10">
                <h3 className="text-muted-foreground text-lg mb-2">
                  Assets Deployed
                </h3>
                <div className="text-6xl font-medium tracking-tighter line">
                  100+
                </div>
                <div className="max-w-xs">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Production-ready assets for every channel. Ship campaigns
                    and launches with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-2 rounded-lg overflow-hidden absolute -right-50 top-26 w-3/4 -rotate-6 hover:-rotate-3 hover:scale-110 transition-all duration-500 cursor-pointer z-30">
              <Image
                src={img1}
                width={400}
                loading="lazy"
                placeholder="blur"
                alt="works illustration"
                className="object-contain size-full rounded-md"
              />
            </div>
          </div>

          {/* Card 3: Enterprise DNA (Full Width) */}
          <div className="relative group md:col-span-2 bg-linear-to-r from-[#0d0d14] to-[#0A0A0A] border border-white/5 rounded-2xl p-8 overflow-hidden h-90 hover:border-white/10 transition-colors">
            <div className="flex flex-col h-full gap-3 relative z-10">
              <h3 className="text-muted-foreground text-lg mb-2">
                Enterprise DNA
              </h3>
              <div className="text-6xl font-medium tracking-tighter line px-1">
                $2.65B
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Applying the architectural standards of a multi-billion dollar
                valuation to{" "}
                <span className="text-white font-medium">your brand.</span>
              </p>
            </div>
            <ChartAnim />
          </div>
        </div>
      </div>
    </section>
  );
};

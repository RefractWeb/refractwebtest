"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import img1 from "@/assets/impact1.png";
import img2 from "@/assets/impact2.png";
import img3 from "@/assets/impact3.svg";

export const ImpactSection = () => {
  return (
    <section className="relative py-24 px-6">
      {/* Background glow for this section */}
      <div className="absolute top-[30%] right-0 w-[40vw] h-[40vw] bg-[#1E2E5E] opacity-20 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-center mx-auto text-grad">
            Impact at scale
          </h2>
          <p className="text-[#919191] text-lg">
            Design is subjective. Performance is{" "}
            <span className="text-white font-medium">not.</span>
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <Button>Work with us</Button>
            <Button
              variant="link"
              className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Explore our services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Revenue Supported */}
          <div className="relative group bg-linear-to-br from-[#121420] to-[#0A0A0A] border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-colors">
            <div className="relative z-10 h-full flex flex-col justify-between min-h-72">
              <div>
                <h3 className="text-gray-400 text-lg mb-2">
                  Revenue Supported
                </h3>
                <div className="text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
                  $100M+
                </div>
              </div>
              <div className="max-w-xs mt-auto">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Systems backing nine-figure revenue. When performance is
                  non-negotiable, we deliver.
                </p>
              </div>
            </div>

            {/* Histogram Visual */}
            <div className="absolute bottom-0 right-0 w-2/5 h-1/2">
              <Image src={img2} alt="" className="object-cover size-full" />
            </div>
          </div>

          {/* Card 2: Assets Deployed */}
          <div className="relative group bg-linear-to-bl from-[#15192b] to-[#0A0A0A] border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-colors">
            <div className="relative z-10 h-full flex flex-col justify-between min-h-72">
              <div>
                <h3 className="text-gray-400 text-lg mb-2">Assets Deployed</h3>
                <div className="text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
                  100+
                </div>
              </div>
              <div className="max-w-xs mt-auto">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Production-ready assets for every channel. Ship campaigns and
                  launches with confidence.
                </p>
              </div>
            </div>

            <Image
              src={img1}
              alt=""
              className="object-contain size-full absolute -right-36 top-20"
            />
          </div>

          {/* Card 3: Enterprise DNA (Full Width) */}
          <div className="relative group md:col-span-2 bg-linear-to-r from-[#0d0d14] to-[#0A0A0A] border border-white/5 rounded-3xl p-8 overflow-hidden min-h-84 hover:border-white/10 transition-colors">
            <div className="relative z-10 grid md:grid-cols-2 h-full">
              <div className="flex flex-col justify-between h-full space-y-8">
                <div>
                  <h3 className="text-gray-400 text-lg mb-2">Enterprise DNA</h3>
                  <div className="text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
                    $2.65B
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  Applying the architectural standards of a multi-billion dollar
                  valuation to{" "}
                  <span className="text-white font-medium">your brand.</span>
                </p>
              </div>
            </div>

            {/* Sine Wave Visual */}
            <Image
              src={img3}
              alt=""
              className="object-contain size-full absolute -right-50 top-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

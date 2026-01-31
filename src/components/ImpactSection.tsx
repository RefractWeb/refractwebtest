"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export const ImpactSection = () => {
  return (
    <section className="relative py-24 px-6 bg-[#080808]">
      {/* Background glow for this section */}
      <div className="absolute top-[30%] right-0 w-[40vw] h-[40vw] bg-[#1E2E5E] opacity-20 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Impact at{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              scale.
            </span>
          </h2>
          <p className="text-[#919191] text-lg">
            Design is subjective. Performance is{" "}
            <span className="text-white font-medium">not.</span>
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <button className="px-6 py-2.5 rounded-full bg-linear-to-r from-[#B05D41] to-[#F59768] text-white text-sm font-medium shadow-[0_0_20px_rgba(176,93,65,0.4)] hover:scale-105 transition-transform">
              Work with us
            </button>
            <button className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              Explore our services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Revenue Supported */}
          <div className="relative group bg-linear-to-br from-[#121420] to-[#0A0A0A] border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-colors">
            <div className="relative z-10 h-full flex flex-col justify-between min-h-75">
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
            <div className="absolute bottom-0 right-0 w-2/3 h-1/2 flex items-end justify-end gap-2 px-8 pb-8 opacity-60">
              {[40, 60, 30, 80, 50, 90, 45, 70, 35, 65, 85].map((h, i) => (
                <div
                  key={i}
                  className="w-3 rounded-t-sm bg-linear-to-t from-[#B05D41]/20 to-[#F59768] shadow-[0_0_10px_rgba(245,151,104,0.3)] transition-all duration-700 ease-in-out"
                  style={{ height: `${h}%`, opacity: 0.5 + i / 20 }}
                />
              ))}
            </div>
          </div>

          {/* Card 2: Assets Deployed */}
          <div className="relative group bg-linear-to-bl from-[#15192b] to-[#0A0A0A] border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-colors">
            <div className="relative z-10 h-full flex flex-col justify-between min-h-75">
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

            {/* Floating UI Card Visual */}
            <div className="absolute top-1/2 -right-5 w-64 h-48 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl transform -rotate-12 translate-x-10 translate-y-[-20%] group-hover:-rotate-8 transition-transform duration-500">
              <div className="p-4 space-y-3">
                <div className="w-8 h-2 bg-gray-600 rounded-full" />
                <div className="space-y-1">
                  <div className="text-white text-lg font-bold leading-tight">
                    Clear story.
                  </div>
                  <div className="text-white text-lg font-bold leading-tight">
                    Sharp design.
                  </div>
                  <div className="text-[#F59768] text-lg font-bold leading-tight">
                    Built to perform.
                  </div>
                </div>
                <div className="pt-4 flex gap-2">
                  <div className="w-20 h-6 rounded-full bg-[#B05D41]" />
                  <div className="w-12 h-6 rounded-full bg-white/10" />
                </div>
              </div>
              {/* Glow under card */}
              <div className="absolute inset-0 bg-blue-500/10 blur-xl -z-10" />
            </div>
          </div>

          {/* Card 3: Enterprise DNA (Full Width) */}
          <div className="relative group md:col-span-2 bg-linear-to-r from-[#0d0d14] to-[#0A0A0A] border border-white/5 rounded-3xl p-8 overflow-hidden min-h-75 hover:border-white/10 transition-colors">
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
            <div className="absolute inset-0 z-0 flex items-end">
              <svg
                className="w-full h-full"
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,300 L0,250 Q250,250 350,150 T700,100 T1000,50 L1000,300 Z"
                  fill="url(#gradientFill)"
                  opacity="0.1"
                />
                <path
                  d="M0,250 Q250,250 350,150 T700,100 T1000,50"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="8"
                  className="drop-shadow-[0_0_15px_rgba(245,151,104,0.5)]"
                />
                <circle
                  cx="700"
                  cy="100"
                  r="8"
                  fill="#0A0A0A"
                  stroke="#F59768"
                  strokeWidth="4"
                />
                <defs>
                  <linearGradient id="gradientFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#F59768" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#F59768" stopOpacity="0" />
                    <stop offset="40%" stopColor="#F59768" />
                    <stop offset="100%" stopColor="#white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

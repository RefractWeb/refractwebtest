"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Triangle,
  Activity,
  Zap,
  Hexagon,
  Box,
} from "lucide-react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-[#1E2E5E]/20 via-[#050505] to-[#050505]" />
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#B05D41] opacity-20 blur-[120px]"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          }}
        />
        <div
          className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-[#F59768] opacity-10 blur-[100px]"
          style={{
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to right, transparent, black 60%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 container mx-auto px-6 pt-12 lg:pt-32 grow flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-left space-y-8 pl-4 lg:pl-12">
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/60 block drop-shadow-sm">
              Defining
            </span>
            <span className="text-white block drop-shadow-lg">
              Digital Identity
            </span>
          </h1>
          <p className="text-[#919191] text-lg lg:text-xl max-w-lg font-light leading-relaxed">
            We merge the precision of code with the power of design,
            orchestrating a single identity that signals authority everywhere.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-linear-to-b from-[#F59768] to-[#B05D41] text-white font-medium text-sm shadow-[0_4px_30px_rgba(245,151,104,0.3)] hover:shadow-[0_4px_40px_rgba(245,151,104,0.5)] transition-all hover:-translate-y-0.5 border-t border-white/20">
              Work with us
            </button>
            <button className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
              Explore our services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end relative perspective-1000">
          <div
            className="relative w-75 h-75 lg:w-100 lg:h-100 transition-transform duration-200 ease-out"
            style={{
              transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg) translateZ(20px)`,
            }}
          >
            <div className="absolute inset-0 bg-[#F59768] rounded-[40px] opacity-10 blur-[80px] animate-pulse" />
            <div className="relative w-full h-full bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[40px] border border-white/5 shadow-2xl overflow-hidden group">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute top-10 left-0 w-full h-px bg-linear-to-r from-transparent via-[#B05D41] to-transparent opacity-50" />
              <div className="absolute bottom-10 left-0 w-full h-px bg-linear-to-r from-transparent via-[#B05D41] to-transparent opacity-50" />
              <div className="absolute left-10 top-0 h-full w-px bg-linear-to-b from-transparent via-[#B05D41] to-transparent opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-linear-to-br from-[#2a2a2a] to-black border border-[#B05D41]/30 shadow-[0_0_30px_rgba(176,93,65,0.2)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="text-4xl font-bold text-[#B05D41]">R</span>
                </div>
              </div>
              <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-[#333] border border-[#B05D41]" />
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#333] border border-[#B05D41]" />
              <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-[#333] border border-[#B05D41]" />
              <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-[#333] border border-[#B05D41]" />
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-4 bg-[#B05D41] rounded-l-sm opacity-60"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Logo Strip */}
      <div className="relative z-10 w-full mt-auto py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 group cursor-default">
              <Triangle className="fill-white text-white w-5 h-5" />
              <span className="text-lg font-semibold tracking-tight">
                Vercel
              </span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-lg font-semibold">React</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-xl font-black tracking-tighter">GSAP</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Activity className="w-5 h-5" />
              <span className="text-lg font-medium">blender</span>
            </div>
            <div className="flex items-center gap-1 group cursor-default">
              <span className="text-lg font-medium">Figma</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-lg font-bold">aws</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Zap className="w-5 h-5" />
              <span className="text-lg font-bold lowercase">hotjar</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Hexagon className="w-5 h-5" />
              <span className="text-lg font-bold uppercase tracking-wider">
                Hostinger
              </span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Box className="w-5 h-5" />
              <span className="text-lg font-medium">Notion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

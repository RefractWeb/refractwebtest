"use client";
import { useState, useEffect } from "react";
import { motion, useSpring } from "motion/react";
import {
  ArrowRight,
  Triangle,
  Activity,
  Zap,
  Hexagon,
  Box,
} from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { stiffness: 90, damping: 30, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      setMousePosition({ x, y });

      rotateX.set(y * -15); // Tilt up/down based on mouse Y
      rotateY.set(x * 15); // Tilt left/right based on mouse X
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rotateX, rotateY]);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-[#1E2E5E]/40 via-[#050505] to-[#050505]" />
        <div
          className="absolute top-[-10%] left-[1%] w-[50vw] h-[50vw] rounded-full bg-[#B05D41] opacity-20 blur-[120px]"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          }}
        />
        {/* <div
          className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-[#F59768] opacity-10 blur-[100px]"
          style={{
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
          }}
        /> */}
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
      <main className="relative z-10 container px-6 pt-12 lg:pt-32 grow flex flex-col lg:flex-row items-center mx-auto">
        <div className="w-full lg:w-1/2 text-left space-y-8 pl-4 lg:pl-10">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-grad">
            Defining <br /> Digital Identity
          </h1>
          <p className="text-base lg:text-lg max-w-sm leading-tight">
            We merge the precision of code with the power of design,
            orchestrating a single identity that signals authority everywhere.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Button size={"lg"}>Work With Us</Button>
            <button className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
              Explore our services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative isolate perspective-[1000px]">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain brightness-120 saturate-110 -translate-x-14 -translate-y-10 drop-shadow-2xl scale-125"
            src="/chip.webm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          />
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

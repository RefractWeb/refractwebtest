"use client";

import { ArrowRight } from "lucide-react";
import { motion, useSpring } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export const CTASection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | undefined>(null);
  const springConfig = { stiffness: 90, damping: 30, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    rotateX.set(mousePosition.y * -15);
    rotateY.set(mousePosition.x * 15);
  }, [mousePosition, rotateX, rotateY]);

  return (
    <section className="py-24 px-6 bg-background flex justify-center relative overflow-hidden">
      {/* Diagonal Light Streak Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-[-20%] w-[140%] h-full bg-linear-to-b from-transparent via-primary/10 to-transparent transform -skew-x-12 pointer-events-none" />
        <div className="absolute top-0 left-[-20%] w-[140%] h-px bg-linear-to-r from-transparent via-primary2 to-transparent transform -skew-x-12 translate-y-75 opacity-50 blur-sm pointer-events-none" />
      </div>

      <div className="container max-w-6xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] text-grad">
            Ready for <br />
            what's next?
          </h2>
          <p className="text-muted-foreground text-xl max-w-md">
            Let's discuss your vision and see if we are the right fit.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <Button>Start the conversation</Button>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary2 transition-colors duration-200 group"
            >
              Explore our services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative isolate">
          <motion.img
            className="w-full max-w-md lg:max-w-full h-auto object-contain brightness-120 saturate-110 drop-shadow-2xl"
            src="/chip.png"
            alt="Refract Web Services Chip"
            loading="lazy"
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
      </div>
    </section>
  );
};

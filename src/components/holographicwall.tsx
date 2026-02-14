"use client";

import { motion } from "framer-motion";
import { MouseEvent, TouchEvent, useEffect, useRef, useState } from "react";
import LightMorphWrapper from "./ui/lightmorph-wrapper";
import Image from "next/image";

type HolographicWallProps = {
  rows?: number;
  cols?: number;
  intensity?: number;
  radius?: number;
};

// Gradient combinations
const GRADIENT_COMBINATIONS = [
  { gradient1: "bg-orange-700", gradient2: "bg-yellow-800", switchGrad: false },
  { gradient1: "bg-purple-800", gradient2: "bg-pink-700", switchGrad: true },
  { gradient1: "bg-cyan-800", gradient2: "bg-blue-700", switchGrad: false },
  { gradient1: "bg-indigo-900", gradient2: "bg-purple-700", switchGrad: true },
  { gradient1: "bg-orange-800", gradient2: "bg-amber-700", switchGrad: false },
  { gradient1: "bg-purple-900", gradient2: "bg-violet-700", switchGrad: true },
  { gradient1: "bg-teal-900", gradient2: "bg-cyan-700", switchGrad: false },
  { gradient1: "bg-purple-900", gradient2: "bg-pink-700", switchGrad: true },
  { gradient1: "bg-teal-950", gradient2: "bg-emerald-800", switchGrad: false },
  { gradient1: "bg-slate-950", gradient2: "bg-teal-800", switchGrad: true },
  { gradient1: "bg-yellow-900", gradient2: "bg-orange-800", switchGrad: false },
  { gradient1: "bg-orange-950", gradient2: "bg-red-800", switchGrad: true },
];

// Technology icons
const TECH_ICONS = [
  { name: "AWS", path: "/icons/1.svg" },
  { name: "vercel", path: "/icons/6.svg" },
  { name: "Figma", path: "/icons/3.svg" },
  { name: "Blender", path: "/icons/5.svg" },
  { name: "After Effects", path: "/icons/ae.svg" },
  { name: "NextJS", path: "/icons/4.svg" },
  { name: "React", path: "/icons/react.svg" },
  { name: "GSAP", path: "/icons/gsap.svg" },
  { name: "Typescript", path: "/icons/ts.svg" },
  { name: "Hotjar", path: "/icons/Hotjar.svg" },
  { name: "AdobeCreativeCloud", path: "/icons/adobe-cloud.svg" },
  { name: "Notion", path: "/icons/notion.svg" },
];

export function HolographicWall({
  rows = 3,
  cols = 4,
  intensity = 1,
  radius = 200,
}: HolographicWallProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // 1. Start with null so we can detect if the user has moved the mouse yet
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // 2. Mandatory center initialization and mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: rect.width / 2,
          y: rect.height / 2,
        });
      }
      setIsMobile(window.innerWidth < 768);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setMousePosition({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
    setIsHovering(true);
  };

  const currentCols = isMobile ? 3 : cols;
  const currentRows = isMobile ? 3 : rows;
  const totalCells = currentRows * currentCols;

  const GridContent = ({ opacity = 1 }) => (
    <div
      className="grid gap-2 md:gap-3 max-w-5xl mx-auto"
      style={{
        gridTemplateColumns: `repeat(${currentCols}, minmax(0, 1fr))`,
        opacity: opacity,
      }}
    >
      {Array.from({ length: totalCells }).map((_, index) => {
        const gradient =
          GRADIENT_COMBINATIONS[index % GRADIENT_COMBINATIONS.length];
        const icon = TECH_ICONS[index % TECH_ICONS.length];

        return (
          <div key={index} className="relative">
            <LightMorphWrapper
              gardient1={gradient.gradient1}
              gradient2={gradient.gradient2}
              inerContainerClass="h-26 md:h-30"
              containerClass="w-full"
              blurOnGradients="blur-xl"
              switchGrad={gradient.switchGrad}
            >
              <div className="relative z-20 size-12 md:size-14 flex items-center justify-center">
                <Image
                  src={icon.path}
                  alt={icon.name}
                  width={56}
                  loading="lazy"
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
            </LightMorphWrapper>
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      className="relative w-full py-4 overflow-hidden"
    >
      {/* LAYER 1: Base */}
      <div className="relative pointer-events-none grayscale">
        <GridContent opacity={0} />
      </div>

      {/* LAYER 2: Masked Reveal */}
      {mousePosition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            "--x": `${mousePosition.x}px`,
            "--y": `${mousePosition.y}px`,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: isHovering ? 0 : 1,
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 p-4 pointer-events-none"
          style={{
            maskImage: `radial-gradient(
              ${radius}px circle at var(--x) var(--y),
              black 0%,
              transparent 100%
            )`,
            WebkitMaskImage: `radial-gradient(
              ${radius}px circle at var(--x) var(--y),
              black 0%,
              transparent 100%
            )`,
          }}
        >
          <GridContent opacity={intensity} />
        </motion.div>
      )}
    </div>
  );
}

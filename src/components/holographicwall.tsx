"use client";

import { motion } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";
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
  { name: "Next.js", path: "/icons/1.svg" },
  { name: "React", path: "/icons/2.svg" },
  { name: "TypeScript", path: "/icons/3.svg" },
  { name: "Tailwind", path: "/icons/4.svg" },
  { name: "Node.js", path: "/icons/5.svg" },
  { name: "AWS", path: "/icons/6.svg" },
]

export function HolographicWall({
  rows = 3,
  cols = 4,
  intensity = 0.8,
  radius = 250,
}: HolographicWallProps) {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>({ x: 500, y: 250 }); // Start with spotlight visible in center
  const [cells, setCells] = useState<
    Array<{
      x: number;
      y: number;
      gradient: (typeof GRADIENT_COMBINATIONS)[0];
      icon: (typeof TECH_ICONS)[0];
      index: number;
    }>
  >([]);
  const [initialRevealComplete, setInitialRevealComplete] = useState(false);

  useEffect(() => {
    // Calculate cell positions after component mounts
    const updateCellPositions = () => {
      const container = document.getElementById("grid-container");
      if (!container) return;

      const newCells: typeof cells = [];
      const cellElements = container.querySelectorAll("[data-cell-index]");

      cellElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        newCells.push({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
          gradient: GRADIENT_COMBINATIONS[index % GRADIENT_COMBINATIONS.length],
          icon: TECH_ICONS[index % TECH_ICONS.length],
          index,
        });
      });

      setCells(newCells);

      // Set spotlight at actual center of container
      const containerRect = container.getBoundingClientRect();
      const gridRect = container
        .querySelector(".grid")
        ?.getBoundingClientRect();

      if (gridRect) {
        const relativeX =
          gridRect.left - containerRect.left + gridRect.width / 2;
        const relativeY =
          gridRect.top - containerRect.top + gridRect.height / 2;

        setMousePosition({
          x: relativeX,
          y: relativeY,
        });
      } else {
        setMousePosition({
          x: containerRect.width / 2,
          y: containerRect.height / 2,
        });
      }

      setTimeout(() => {
        setInitialRevealComplete(true);
      }, 1500);
    };

    const timer = setTimeout(updateCellPositions, 200);

    window.addEventListener("resize", updateCellPositions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateCellPositions);
    };
  }, [rows, cols]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!initialRevealComplete) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (!initialRevealComplete) return;
    setMousePosition(null);
  };

  const totalCells = rows * cols;

  return (
    <div
      id="grid-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full p-4 overflow-hidden"
    >
      <div
        className="grid gap-2 md:gap-3 max-w-5xl mx-auto relative"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: totalCells }).map((_, index) => {
          const gradientIndex = index % GRADIENT_COMBINATIONS.length;
          const iconIndex = index % TECH_ICONS.length;
          const gradient = GRADIENT_COMBINATIONS[gradientIndex];
          const icon = TECH_ICONS[iconIndex];

          const cell = cells[index];
          const distance =
            mousePosition && cell
              ? Math.sqrt(
                  Math.pow(cell.x - mousePosition.x, 2) +
                    Math.pow(cell.y - mousePosition.y, 2),
                )
              : Infinity;

          const cellIntensity =
            mousePosition && distance < radius
              ? Math.max(0, 1 - distance / radius) * intensity
              : 0;

          const isRevealed = mousePosition && distance < radius;

          return (
            <motion.div
              key={index}
              data-cell-index={index}
              initial={{ opacity: 0.05 }}
              animate={{
                opacity: isRevealed ? 0.05 + cellIntensity * 0.95 : 0.05,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="relative"
            >
              <LightMorphWrapper
                gardient1={gradient.gradient1}
                gradient2={gradient.gradient2}
                blurOnGradients="blur-[22px]"
                inerContainerClass="h-[100px] w-[100px] md:h-[115px] md:w-[115px]"
                containerClass="w-full"
                switchGrad={gradient.switchGrad}
              >
                <div className="relative z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white/90">
                  <Image
                    src={icon.path}
                    alt={icon.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                 
                </div>
              </LightMorphWrapper>
            </motion.div>
          );
        })}
      </div>

      {mousePosition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <div
            className="absolute"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              width: `${radius * 3}px`,
              height: `${radius * 3}px`,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, rgba(13,16,23,1) 90%)",

              filter: "blur(60px)",
              pointerEvents: "none",
              position: "absolute",
            }}
          />
        </motion.div>
      )}
    </div>
  );
}

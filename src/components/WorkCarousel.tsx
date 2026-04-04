"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SmoothCarousel } from "./SmoothCarousel";
import type { StaticImageData } from "next/image";

export type WorkCarouselItem = {
  title: string;
  category: string;
  description: string;
  image: StaticImageData;
};

interface WorkCarouselProps {
  items: WorkCarouselItem[];
  slideClassName?: string;
  className?: string;
}

export function WorkCarousel({
  items,
  slideClassName = "w-[85vw] md:w-[60vw] lg:w-[32.5rem]",
  className = "",
}: WorkCarouselProps) {
  return (
    <SmoothCarousel className={className} slideClassName={slideClassName}>
      {items.map((work, index) => (
        <motion.div
          key={`${work.title}-${index}`}
          className="h-full group bg-linear-to-br from-card via-card/70 to-card rounded-2xl border"
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <div className="h-52 md:h-76 relative overflow-hidden rounded-t-2xl">
            <Image
              src={work.image}
              alt={work.title}
              placeholder="blur"
              loading="lazy"
              className="object-cover object-left translate-x-4 md:translate-x-6 transition-transform duration-700 group-hover:scale-105 rounded-bl-2xl select-none pointer-events-none bg-background"
              fill
              draggable={false}
            />
          </div>
          <div className="p-6 lg:p-8">
            <div className="flex flex-col-reverse md:flex-row justify-between items-start mb-4">
              <h4 className="text-white font-bold text-base md:text-xl lg:text-2xl group-hover:text-gray-300 transition-colors">
                {work.title}
              </h4>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest pt-1">
                {work.category}
              </span>
            </div>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed line-clamp-2">
              {work.description}
            </p>
          </div>
        </motion.div>
      ))}
    </SmoothCarousel>
  );
}

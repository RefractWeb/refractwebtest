"use client";

import { motion } from "motion/react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { SmoothCarousel } from "./SmoothCarousel";
import { cn } from "@/lib/utils";

export type WorkCarouselItem = {
  title: string;
  category: string;
  description: string;
  image: StaticImageData;
  video?: string;
  href?: string;
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
          <CarouselCard work={work} />
        </motion.div>
      ))}
    </SmoothCarousel>
  );
}

function CarouselCard({ work }: { work: WorkCarouselItem }) {
  const content = (
    <>
      <div className="h-52 md:h-76 relative overflow-hidden rounded-t-2xl group">
        <Image
          src={work.image}
          alt={work.title}
          placeholder="blur"
          loading="lazy"
          className={cn(
            "object-cover object-left translate-x-4 md:translate-x-6 transition-all duration-500 rounded-bl-2xl select-none pointer-events-none bg-background",
            work.video
              ? "group-hover:opacity-0"
              : "opacity-100 group-hover:scale-105",
          )}
          fill
          draggable={false}
        />
        {work.video && (
          <video
            src={work.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 size-full object-cover translate-x-4 md:translate-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"
          />
        )}
      </div>
      <div className="p-6 lg:p-8 flex flex-col items-start h-full">
        <div className="flex flex-col-reverse md:flex-row justify-center items-start mb-4">
          <h4 className="font-semibold text-grad text-base md:text-xl lg:text-2xl group-hover:text-gray-300 transition-colors">
            {work.title}
          </h4>
          {/* <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest pt-1">
            {work.category}
          </span> */}
        </div>
        <p className="text-muted-foreground text-sm lg:text-base line-clamp-2">
          {work.description}
        </p>
      </div>
    </>
  );

  if (work.href) {
    return (
      <Link
        href={work.href}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary2"
      >
        {content}
      </Link>
    );
  }

  return content;
}

"use client";

import { motion } from "motion/react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { SmoothCarousel } from "./SmoothCarousel";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import imgbg from "@/assets/bg.svg";

export type WorkCarouselItem = {
  title: string;
  category: string;
  description: string;
  image?: StaticImageData;
  video?: string;
  href?: string;
  isCtaCard?: boolean;
  newTab?: boolean;
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
  if (work.isCtaCard) {
    return (
      <Link
        href={work.href || "#"}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary2"
      >
        <div className="h-full rounded-2xl border transition-all duration-300 p-8 flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
          <div
            className="absolute inset-0 mask-radial-at-top-right mask-radial-to-40% opacity-70 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
              backgroundSize: "45px 45px",
            }}
          />
          <Image
            src={imgbg}
            alt="background"
            className="absolute inset-0 size-full object-cover pointer-events-none scale-150"
          />
          <div className="absolute pointer-events-none top-[-10%] right-[30%] size-32 rounded-full bg-[#3150aa] opacity-45 blur-[60px] transform-gpu-blur" />
          <div className="absolute pointer-events-none top-[-14%] right-[-5%] size-40 rounded-full bg-[#d6795a] opacity-45 blur-[60px] transform-gpu-blur" />
          <div className="space-y-4 relative z-10">
            <p className="text-muted-foreground text-base lg:text-lg max-w-xs mx-auto">
              {work.description}
            </p>
            <h4 className="font-semibold text-grad text-2xl lg:text-3xl group-hover:text-gray-300 transition-colors capitalize">
              {work.title}
            </h4>
          </div>
          <Button size={"lg"}>{work.category}</Button>
        </div>
      </Link>
    );
  }

  const content = (
    <>
      <div className="h-52 md:h-76 relative overflow-hidden rounded-t-2xl group">
        <Image
          src={work.image!}
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
        target={work.newTab ? "_blank" : undefined}
        rel={work.newTab ? "noopener noreferrer" : undefined}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary2"
      >
        {content}
      </Link>
    );
  }

  return content;
}
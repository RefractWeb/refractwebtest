"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EmblaCarouselType } from "embla-carousel";
import { cn } from "../lib/utils";

// --- Utility Hooks (Inlined for simplicity) ---

const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const useScrollProgress = (emblaApi: EmblaCarouselType | undefined) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
    return () => {
      emblaApi
        .off("reInit", onScroll)
        .off("scroll", onScroll)
        .off("slideFocus", onScroll);
    };
  }, [emblaApi, onScroll]);

  return scrollProgress;
};

// --- Main Component ---

interface SmoothCarouselProps {
  children: React.ReactNode;
  className?: string;
  slideClassName?: string;
}

export function SmoothCarousel({
  children,
  className = "",
  slideClassName = "",
}: SmoothCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const scrollProgress = useScrollProgress(emblaApi);

  // Convert children to array to map over them
  const slides = React.Children.toArray(children);

  return (
    <div className={`w-full py-10 ${className} mask-x-from-97%`}>
      <div className="flex flex-col gap-6">
        {/* Carousel Container */}
        <div
          className="overflow-hidden w-full relative z-10 flex cursor-grab"
          ref={emblaRef}
        >
          <div className="flex gap-6 w-full">
            {/* Left spacing */}
            <div className="shrink-0 w-[5vw]" />

            {slides.map((child, index) => (
              <div
                key={index}
                className={cn(
                  "flex-none select-none w-[85vw] md:w-[40vw]",
                  slideClassName,
                )}
              >
                {child}
              </div>
            ))}

            {/* Right spacing */}
            <div className="shrink-0 w-[5vw]" />
          </div>
        </div>

        {/* Controls */}
        <div className="w-full flex items-center px-[5vw]">
          <div className="flex justify-between items-center w-full">
            {/* Progress Bar */}
            <div
              className="rounded-full bg-secondary relative h-1.5 w-32 md:w-[50vw] overflow-hidden ml-6"
              role="progressbar"
              aria-label="Carousel progress"
              aria-valuenow={Math.round(scrollProgress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="bg-primary absolute w-full top-0 bottom-0 -left-full rounded-full transition-all duration-150 ease-out"
                style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-linear-to-br from-background to-card border hover:brightness-125 transition-all active:scale-97 disabled:opacity-50 disabled:cursor-not-allowed text-secondary-foreground"
                type="button"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-linear-to-br from-background to-card border hover:brightness-125 transition-all active:scale-97 disabled:opacity-50 disabled:cursor-not-allowed text-secondary-foreground"
                type="button"
                aria-label="Next slide"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

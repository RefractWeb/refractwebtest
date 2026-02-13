"use client";
import type { HTMLAttributes } from "react";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import FastMarquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  wrap,
  useAnimationFrame,
} from "motion/react";
import React, { useRef, useEffect, useState } from "react";

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn("relative w-full overflow-hidden", className)}
    {...(props as any)}
  />
);

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  direction = "right",
  ...props
}: MarqueeContentProps) => (
  <FastMarquee
    autoFill={autoFill}
    loop={loop}
    pauseOnHover={pauseOnHover}
    direction={direction}
    {...(props as any)}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn("mx-2 shrink-0 object-contain py-4", className)}
    {...(props as any)}
  />
);

export interface DraggableMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  gap?: number;
}

export const DraggableMarquee = ({
  children,
  speed = 1,
  direction = "right",
  className,
  gap = 0,
}: DraggableMarqueeProps) => {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothX = useSpring(baseX, {
    damping: 50,
    stiffness: 400,
    restDelta: 0.001,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      const dirMult = direction === "right" ? 1 : -1;
      let moveBy = dirMult * speed * (delta / 20);

      if (isHovering) {
        moveBy *= 0.5;
      }

      baseX.set(baseX.get() + moveBy);
    }
  });

  const x = useTransform(smoothX, (v) => {
    if (contentWidth === 0) return 0;
    return wrap(-contentWidth, 0, v);
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden cursor-grab active:cursor-grabbing w-full mask-x-from-95%",
        className,
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={(_, info) => {
          baseX.set(baseX.get() + info.delta.x);
        }}
        className="flex shrink-0 whitespace-nowrap transform-gpu will-change-transform"
      >
        <div
          ref={contentRef}
          className="flex shrink-0"
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
        <div
          className="flex shrink-0"
          style={{ gap: `${gap}px`, marginLeft: `${gap}px` }}
        >
          {children}
        </div>
        <div
          className="flex shrink-0"
          style={{ gap: `${gap}px`, marginLeft: `${gap}px` }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

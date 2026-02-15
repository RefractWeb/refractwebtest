"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, SplitText);

interface ShimmerBulgeTextProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  each?: number;
  scale?: number;
  glowColor?: string;
  endColor?: string;
  repeatDelay?: number;
  shouldAnimate?: boolean;
}

export const ShimmerBulgeText = ({
  children,
  className,
  duration = 0.35,
  each = 0.04,
  scale = 1.18,
  glowColor = "rgba(245, 151, 104, 0.6)",
  endColor = "#f59768",
  repeatDelay = 3.5,
  shouldAnimate = true,
}: ShimmerBulgeTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!baseRef.current || !glowRef.current || !shouldAnimate) return;

      const baseSplit = SplitText.create(baseRef.current, {
        type: "words,chars",
      });
      const glowSplit = SplitText.create(glowRef.current, {
        type: "words,chars",
      });

      baseSplit.words.forEach((word, i) => {
        const el = word as HTMLElement;
        if (i < baseSplit.words.length - 1) el.style.marginRight = "0.25em";
      });

      glowSplit.words.forEach((word, i) => {
        const el = word as HTMLElement;
        if (i < glowSplit.words.length - 1) el.style.marginRight = "0.25em";
      });

      baseSplit.chars.forEach((char) => {
        const el = char as HTMLElement;
        el.style.display = "inline-block";
        el.style.willChange = "transform";
      });

      glowSplit.chars.forEach((char) => {
        const el = char as HTMLElement;
        el.style.display = "inline-block";
        el.style.willChange = "transform, opacity";
        el.style.opacity = "0";
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay,
        defaults: { ease: "sine.inOut" },
      });

      tl.to(baseSplit.chars, {
        scale,
        duration,
        stagger: {
          each,
          repeat: 1,
          yoyo: true,
        },
      });

      tl.to(
        glowSplit.chars,
        {
          scale,
          opacity: 1,
          textShadow: `0 0 8px ${glowColor}, 0 0 20px ${glowColor}`,
          duration,
          stagger: {
            each,
            repeat: 1,
            yoyo: true,
          },
        },
        0,
      );

      return () => {
        tl.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [
        shouldAnimate,
        duration,
        each,
        scale,
        glowColor,
        endColor,
        repeatDelay,
      ],
    },
  );

  return (
    <span
      ref={containerRef}
      className={cn(
        "relative inline-flex items-center text-xs md:text-sm",
        className,
      )}
    >
      <span ref={baseRef} className="inline-flex items-center whitespace-pre">
        {children}
      </span>
      <span
        ref={glowRef}
        aria-hidden
        className="absolute inset-0 inline-flex items-center whitespace-pre"
        style={{ color: endColor }}
      >
        {children}
      </span>
    </span>
  );
};

export default ShimmerBulgeText;

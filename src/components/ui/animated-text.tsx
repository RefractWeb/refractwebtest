"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSafari } from "@/hooks/useSafari";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export interface AnimatedTextOptions {
  splitType?: "chars" | "words" | "lines" | "words,lines" | "chars,words,lines";
  maskType?: "chars" | "words" | "lines" | false;
  duration?: number;
  ease?: string;
  stagger?:
    | number
    | {
        amount?: number;
        from?: "start" | "center" | "end" | "edges" | "random";
        each?: number;
      };
  animationType?:
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "fadeIn"
    | "scaleIn"
    | "rotateIn"
    | "blurIn"
    | "skewIn"
    | "tiltIn"
    | "wordReveal"
    | "custom";
  customAnimation?: (
    instance: SplitText,
  ) => gsap.core.Tween | gsap.core.Timeline;
  delay?: number;
  useScrollTrigger?: boolean;
  scrollTriggerConfig?: {
    trigger?: string;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  };
  className?: string;
  children: ReactNode;
  onAnimationComplete?: () => void;
  shouldAnimate?: boolean;
}

// Basic animation defaults
// const defaultDuration = 0.6;
// const defaultEase = "expo.out";

export const AnimatedText = ({
  splitType = "lines",
  maskType = "lines",
  duration = 1,
  ease = "expo.out",
  stagger = 0.14,
  animationType = "slideUp",
  customAnimation,
  delay = 0,
  useScrollTrigger = false,
  scrollTriggerConfig = {},
  className = "",
  children,
  onAnimationComplete,
  shouldAnimate = true,
}: AnimatedTextOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.1 });
  const isSafari = useSafari();

  // For wordReveal, split into words+lines so we can animate words within line masks
  const isWordReveal = animationType === "wordReveal";
  const effectiveSplitType = isWordReveal ? "words,lines" : splitType;
  const effectiveMaskType = isWordReveal ? "lines" : maskType;

  // Helper to determine animation targets
  const getTargets = (instance: SplitText) => {
    if (isWordReveal) return instance.words;
    if (effectiveSplitType.includes("chars") && instance.chars.length > 0)
      return instance.chars;
    if (effectiveSplitType.includes("words") && instance.words.length > 0)
      return instance.words;
    return instance.lines;
  };

  // Use GSAP's useGSAP hook for proper cleanup and scoping
  useGSAP(
    () => {
      if (!textRef.current) return;

      // Only run if we're not using scroll trigger and we're in view,
      // OR if we ARE using scroll trigger (it will handle its own visibility)
      if (!shouldAnimate) return;
      if (!useScrollTrigger && !inView) return;

      // Set initial opacity for the text container
      gsap.set(textRef.current, { opacity: 1 });

      // Create SplitText with autoSplit and onSplit callback
      SplitText.create(textRef.current, {
        type: effectiveSplitType,
        // For wordReveal: no classes on lines/words — gradient applied via JS per-word
        // positioned to span the full line width for a continuous per-line gradient
        linesClass:
          !isWordReveal && effectiveMaskType === "lines" ? "line" : undefined,
        wordsClass:
          !isWordReveal && effectiveMaskType === "words" ? "word" : undefined,
        charsClass: effectiveMaskType === "chars" ? "char" : undefined,
        mask: effectiveMaskType === false ? undefined : effectiveMaskType,
        autoSplit: true,
        onSplit: (instance) => {
          const targets = getTargets(instance);

          if (isWordReveal) {
            for (const w of instance.words) {
              const word = w as HTMLElement;
              const line = word.parentElement;
              if (!line) continue;
              const lineWidth = line.offsetWidth;
              Object.assign(word.style, {
                backgroundImage: `linear-gradient(to bottom right, var(--foreground) 10%, oklch(0.72 0.00 0 / 0.9) 60%, var(--foreground) 90%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundSize: `${lineWidth}px 100%`,
                backgroundPosition: `-${word.offsetLeft}px 0`,
              });
            }
          }

          // Prepare ScrollTrigger config if enabled
          let scrollTrigger: any = null;
          if (useScrollTrigger) {
            scrollTrigger = {
              trigger: containerRef.current,
              start: "clamp(top 85%)",
              end: "clamp(bottom 15%)",
              scrub: false,
              markers: false,
              ...scrollTriggerConfig,
            };
          }

          let animation: gsap.core.Tween | gsap.core.Timeline;

          if (customAnimation) {
            animation = customAnimation(instance);
          } else {
            // Get preset and apply with optional scrollTrigger
            const config: any = {
              duration,
              stagger,
              ease,
              delay,
              scrollTrigger,
              onComplete: onAnimationComplete,
            };

            // Map animation type to GSAP vars
            switch (animationType) {
              case "slideUp":
                config.yPercent = 100;
                break;
              case "slideDown":
                config.yPercent = -100;
                break;
              case "slideLeft":
                config.xPercent = -100;
                break;
              case "slideRight":
                config.xPercent = 100;
                break;
              case "scaleIn":
                config.scale = 0;
                break;
              case "rotateIn":
                config.rotate = -20;
                config.opacity = 0;
                break;
              case "blurIn":
                // Skip blur effect in Safari
                if (!isSafari) {
                  config.filter = "blur(12px)";
                }
                config.yPercent = 30;
                config.opacity = 0;
                break;
              case "skewIn":
                config.skewY = 7;
                config.yPercent = 100;
                config.opacity = 0;
                break;
              case "tiltIn":
                config.rotateX = -90;
                config.transformOrigin = "50% 0%";
                config.opacity = 0;
                // Add perspective for 3D effect
                gsap.set(targets, { transformPerspective: 1000 });
                break;
              case "wordReveal":
                // Each word slides up within its line's overflow-hidden mask
                config.yPercent = 115;
                config.opacity = 0;
                break;
              case "fadeIn":
                config.opacity = 0;
                break;
              default:
                config.yPercent = 100;
            }

            // Always ensure opacity starts at 0 for reveals unless explicitly handled
            if (!config.hasOwnProperty("opacity")) config.opacity = 0;

            animation = gsap.from(targets, config);
          }

          // Returning the animation ensures GSAP kills it when re-splitting
          return animation;
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [
        inView,
        splitType,
        maskType,
        duration,
        ease,
        stagger,
        animationType,
        delay,
        useScrollTrigger,
        children,
        shouldAnimate,
        animationType,
      ],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={containerRef} className={className}>
      <div ref={textRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedText;

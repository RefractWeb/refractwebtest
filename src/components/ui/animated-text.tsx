"use client";

import type { ReactNode } from "react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
}

const animationPresets = {
  slideUp: (
    targets: any,
    stagger: number | object,
    duration: number,
    ease: string,
  ) => {
    return gsap.from(targets, {
      duration,
      yPercent: 100,
      opacity: 0,
      stagger,
      ease,
    });
  },

  slideDown: (
    targets: any,
    stagger: number | object,
    duration: number,
    ease: string,
  ) => {
    return gsap.from(targets, {
      duration,
      yPercent: -100,
      opacity: 0,
      stagger,
      ease,
    });
  },

  slideLeft: (
    targets: any,
    stagger: number | object,
    duration: number,
    ease: string,
  ) => {
    return gsap.from(targets, {
      duration,
      xPercent: -100,
      opacity: 0,
      stagger,
      ease,
    });
  },

  slideRight: (
    targets: any,
    stagger: number | object,
    duration: number,
    ease: string,
  ) => {
    return gsap.from(targets, {
      duration,
      xPercent: 100,
      opacity: 0,
      stagger,
      ease,
    });
  },

  fadeIn: (
    targets: any,
    stagger: number | object,
    duration: number,
    ease: string,
  ) => {
    return gsap.from(targets, {
      duration,
      opacity: 0,
      stagger,
      ease,
    });
  },

  scaleIn: (
    targets: any,
    stagger: number | object,
    duration: number,
    ease: string,
  ) => {
    return gsap.from(targets, {
      duration,
      scale: 0,
      opacity: 0,
      stagger,
      ease,
    });
  },

  rotateIn: (
    targets: any,
    stagger: number | object,
    duration: number,
    ease: string,
  ) => {
    return gsap.from(targets, {
      duration,
      rotate: -20,
      opacity: 0,
      stagger,
      ease,
    });
  },
};

export const AnimatedText = ({
  splitType = "lines",
  maskType = "lines",
  duration = 0.6,
  ease = "expo.out",
  stagger = 0.1,
  animationType = "slideUp",
  customAnimation,
  delay = 0,
  useScrollTrigger = false,
  scrollTriggerConfig = {},
  className = "",
  children,
  onAnimationComplete,
}: AnimatedTextOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.1 });
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle responsiveness (autoSplit behavior)
  useEffect(() => {
    if (typeof window === "undefined") return;

    setWindowWidth(window.innerWidth);

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Helper to determine animation targets
  const getTargets = (instance: SplitText) => {
    if (splitType.includes("chars") && instance.chars.length > 0)
      return instance.chars;
    if (splitType.includes("words") && instance.words.length > 0)
      return instance.words;
    return instance.lines;
  };

  // Use GSAP's useGSAP hook for proper cleanup and scoping
  useGSAP(
    () => {
      if (!textRef.current) return;

      // Only run if we're not using scroll trigger and we're in view,
      // OR if we ARE using scroll trigger (it will handle its own visibility)
      if (!useScrollTrigger && !inView) return;

      // Ensure fonts are loaded so SplitText calculates positions correctly
      document.fonts.ready.then(() => {
        if (!textRef.current || !containerRef.current) return;

        // Set initial opacity
        gsap.set(textRef.current, { opacity: 1 });

        // Create SplitText with autoSplit and onSplit callback
        SplitText.create(textRef.current, {
          type: splitType,
          linesClass: maskType === "lines" ? "line" : undefined,
          wordsClass: maskType === "words" ? "word" : undefined,
          charsClass: maskType === "chars" ? "char" : undefined,
          mask: maskType || undefined,
          autoSplit: true,
          onSplit: (instance) => {
            const targets = getTargets(instance);
            let animation: gsap.core.Tween | gsap.core.Timeline;

            if (customAnimation) {
              animation = customAnimation(instance);
            } else if (animationType in animationPresets) {
              const preset =
                animationPresets[
                  animationType as keyof typeof animationPresets
                ];
              animation = preset(targets, stagger, duration, ease);
            } else {
              animation = gsap.from(targets, {
                duration,
                yPercent: 100,
                opacity: 0,
                stagger,
                ease,
              });
            }

            // Add delay
            if (delay > 0 && animation) {
              animation.delay(delay);
            }

            // Add completion callback
            if (onAnimationComplete && animation) {
              animation.eventCallback("onComplete", onAnimationComplete);
            }

            // Add ScrollTrigger if enabled
            if (useScrollTrigger) {
              const defaultScrollConfig = {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: false,
                markers: false,
              };

              const mergedConfig = {
                ...defaultScrollConfig,
                ...scrollTriggerConfig,
              };

              // Set initial state for targets
              const fromVars = {
                yPercent: animationType.includes("slide")
                  ? animationType === "slideUp"
                    ? 100
                    : animationType === "slideDown"
                      ? -100
                      : 0
                  : 0,
                xPercent:
                  animationType === "slideRight"
                    ? 100
                    : animationType === "slideLeft"
                      ? -100
                      : 0,
                opacity: 0,
                scale: animationType === "scaleIn" ? 0 : 1,
                rotate: animationType === "rotateIn" ? -20 : 0,
              };

              // Set initial hidden state
              gsap.set(targets, fromVars);

              // Create animation with ScrollTrigger using fromTo for proper scrub behavior
              return gsap.to(targets, {
                duration,
                yPercent: 0,
                xPercent: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
                stagger,
                scrollTrigger: mergedConfig,
              });
            }

            return animation;
          },
        });
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
        windowWidth, // Re-run effect (re-split) when window resizes
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

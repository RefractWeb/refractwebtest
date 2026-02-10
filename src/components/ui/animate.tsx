"use client";

import { ReactNode } from "react";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "blurInLeft"
  | "blurInRight"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown"
  | "rotateIn"
  | "flipIn";

interface AnimateProps {
  /**
   * The content to animate
   */
  children: ReactNode;
  /**
   * The animation preset to use
   */
  animation?: AnimationVariant;
  /**
   * The class name to be applied to the component
   */
  className?: string;
  /**
   * The delay before the animation starts (in seconds)
   */
  delay?: number;
  /**
   * The duration of the animation (in seconds)
   */
  duration?: number;
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean;
  /**
   * Whether to animate only once
   */
  once?: boolean;
  /**
   * Custom motion variants
   */
  variants?: Variants;
  /**
   * Amount of the element that must be visible before animation triggers (0-1)
   */
  viewportAmount?: number;
}

const animationVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 40 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  blurInDown: {
    hidden: { opacity: 0, filter: "blur(10px)", y: -40 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  blurInLeft: {
    hidden: { opacity: 0, filter: "blur(10px)", x: -40 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  blurInRight: {
    hidden: { opacity: 0, filter: "blur(10px)", x: 40 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  slideUp: {
    hidden: { y: 60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  slideDown: {
    hidden: { y: -60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  slideLeft: {
    hidden: { x: 60, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  slideRight: {
    hidden: { x: -60, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  scaleUp: {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  scaleDown: {
    hidden: { scale: 1.2, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  rotateIn: {
    hidden: { rotate: -10, opacity: 0, scale: 0.9 },
    show: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
  flipIn: {
    hidden: { rotateX: -90, opacity: 0 },
    show: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  },
};

export function Animate({
  children,
  animation = "fadeInUp",
  className,
  delay = 0,
  duration,
  startOnView = true,
  once = true,
  variants,
  viewportAmount = 0.2,
}: AnimateProps) {
  const selectedVariants = variants || animationVariants[animation];

  // Apply custom duration and delay
  const finalVariants: Variants = {
    hidden: selectedVariants.hidden,
    show: {
      ...selectedVariants.show,
      transition: {
        ...(typeof selectedVariants.show === 'object' && selectedVariants.show !== null && 'transition' in selectedVariants.show
          ? selectedVariants.show.transition
          : {}),
        ...(duration && { duration }),
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={startOnView ? "show" : undefined}
      animate={startOnView ? undefined : "show"}
      variants={finalVariants}
      viewport={{ once, amount: viewportAmount }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
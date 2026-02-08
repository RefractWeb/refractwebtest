import * as React from "react";
import { motion } from "motion/react";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  // Visual tuning
  strokeWidth?: number;
  baseOpacity?: number;
  glowOpacity?: number;
  durationSec?: number;
};

export function AnimatedLogoStroke({
  className,
  style,
  strokeWidth = 1,
  baseOpacity = 0.08,
  glowOpacity = 1,
  durationSec = 6,
}: Props) {
  const d =
    "M80.7941 212.914L165.961 214.35C179.311 214.35 198.517 215.142 208.529 213.119C245.711 205.585 253.118 183.951 253.118 165.981C253.118 144.845 233.239 110.517 202.381 110.4L165.112 110.253L114.199 110.077L0.311799 1.69526e-05H202.206C267.903 -0.0292979 329.941 37.9627 350.64 95.3612C382.757 184.508 367.093 269.843 260.438 315.076L382.757 446.172H243.808L115.019 316.249V446.172H0.106861V274.24C0.106861 248.883 -6.33407 212.914 80.7941 212.914Z";

  return (
    <svg
      className={className}
      style={style}
      width="383"
      height="447"
      viewBox="0 0 383 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* White -> transparent along the stroke */}
        <linearGradient
          id="sweepGradient"
          x1="0"
          y1="0"
          x2="383"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="35%" stopColor="white" stopOpacity="0.15" />
          <stop offset="55%" stopColor="white" stopOpacity="1" />
          <stop offset="75%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Soft glow */}
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path d={d} fill="gray" opacity={0.1} />

      {/* Faint outline */}
      <path
        d={d}
        fill="none"
        stroke="white"
        strokeWidth={strokeWidth}
        opacity={baseOpacity}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Moving bright segment: uses Motion path drawing controls */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#sweepGradient)"
        strokeWidth={strokeWidth}
        opacity={glowOpacity}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        filter="url(#softGlow)"
        initial={{ pathLength: 1, pathSpacing: 0.18, pathOffset: 0 }}
        animate={{ pathOffset: 1 }}
        transition={{ duration: durationSec, ease: "linear", repeat: Infinity }}
      />
    </svg>
  );
}

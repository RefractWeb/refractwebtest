"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BgGrad from "./ui/bg-grad";

export default function SVGPreloader() {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const pathData =
    "M80.7941 212.914L165.961 214.35C179.311 214.35 198.517 215.142 208.529 213.119C245.711 205.585 253.118 183.951 253.118 165.981C253.118 144.845 233.239 110.517 202.381 110.4L165.112 110.253L114.199 110.077L0.311799 1.69526e-05H202.206C267.903 -0.0292979 329.941 37.9627 350.64 95.3612C382.757 184.508 367.093 269.843 260.438 315.076L382.757 446.172H243.808L115.019 316.249V446.172H0.106861V274.24C0.106861 248.883 -6.33407 212.914 80.7941 212.914Z";

  const pathLength = 2250;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background z-100"
      animate={isComplete ? { y: "-130%", scale: 1.5 } : { y: 0, scale: 1 }}
      transition={{
        duration:1,
        ease: "circInOut",
        delay: isComplete ? 0 : 0,
      }}
    >
      <BgGrad />
      <motion.svg
        width="383"
        height="447"
        viewBox="0 0 383 447"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-1 size-80"
      >
        {/* Stroke animation - trace the path from 0 to complete */}
        <motion.path
          d={pathData}
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
        />

        {/* Fill animation - smooth transition to filled after stroke completes */}
        <motion.path
          d={pathData}
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            strokeWidth: 0,
          }}
          transition={{
            opacity: { duration: 1, delay: 2, ease: "easeInOut" },
            strokeWidth: { duration: 1, delay: 2 },
          }}
        />

        {/* Glow effect - pulses at the end */}
        <motion.path
          d={pathData}
          fill="white"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.2,
            delay: 2.5,
            times: [0, 0.2, 0.8, 1],
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

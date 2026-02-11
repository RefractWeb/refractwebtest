"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SVGPreloader({
  onCompleteAction,
}: {
  onCompleteAction?: () => void;
}) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onCompleteAction?.();
      }, 600);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onCompleteAction]);

  const pathData =
    "M5.35705 0L189.616 1.22261L249.009 1.13529C258.624 1.1366 288.457 1.16201 297.326 2.60687C325.148 7.13891 344.614 13.2976 369.015 27.3721C420.142 56.6232 455.256 107.272 470.265 164.23C475.459 183.596 475.889 202.377 475.622 222.292C475.14 257.6 462.328 291.415 444.614 321.948C425.975 353.778 400.825 376.263 369.015 394.941C363.742 398.095 349.998 405.134 344.249 406.672C382.355 444.517 426.215 487.821 463.695 526.285C480.712 543.601 500.121 559.956 515 578.725C466.727 577.754 418.408 579.233 370.076 578.725C342.606 578.438 315.64 577.845 288.202 578.725C278.296 566.082 260.646 551.618 249.061 539.997L198.234 488.903C188.074 478.625 178.157 467.468 167.122 458.292C167.814 474.48 167.579 492.487 167.601 508.741L167.122 576.118C141.006 575.916 114.894 576.027 88.7769 576.118C61.6824 575.988 27.2352 575.766 0.142709 576.118C-0.632834 530.309 2.03282 489.264 1.44627 443.168V384.513C1.25076 372.378 1.12477 361.723 1.44672 349.321C2.4067 312.362 33.4975 280.628 69.2117 271.602C82.8593 268.153 102.124 269.544 116.571 269.56L215.774 269.649C231.729 269.691 253.337 270.95 268.904 268.72C316.877 265.901 329.597 195.751 290.809 173.357C267.27 159.767 236.065 162.655 209.922 162.568C197.216 162.525 177.41 162.529 164.521 162.529C151.563 149.819 138.581 135.999 125.809 123.001L71.9671 68.9198C55.3881 52.4085 38.9205 35.7858 22.565 19.053C19.0594 15.4274 7.26528 3.62485 5.35705 0Z";

  const pathLength = 2786;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-linear-to-b from-primary/30 to-secondary3/50 via-black z-100 w-full bg-black"
      animate={isComplete ? { y: "-130%", scale: 1.5 } : { y: 0, scale: 1 }}
      transition={{
        duration: 1,
        ease: "circInOut",
        delay: isComplete ? 0 : 0,
      }}
    >
      <motion.svg
        width="515"
        height="579"
        viewBox="0 0 515 579"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-1 size-40 md:size-80"
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

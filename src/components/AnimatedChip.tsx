"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface AnimatedChipProps {
  className?: string;
  containerClassName?: string;
  loop?: boolean;
  isStarted?: boolean;
}

const VIDEO_SOURCES = {
  primary: [
    { src: "/safari/chip1.hevc.mov", type: "video/mp4; codecs=hvc1" },
    { src: "/chrome/chip1-vp9-chrome.webm", type: "video/webm" },
  ],
  secondary: [
    { src: "/safari/chip2.hevc.mov", type: "video/mp4; codecs=hvc1" },
    { src: "/chrome/chip2-vp9-chrome.webm", type: "video/webm" },
  ],
};

export const AnimatedChip = ({
  className,
  containerClassName,
  loop = false,
  isStarted = true,
}: AnimatedChipProps) => {
  const [showSecondary, setShowSecondary] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLVideoElement>(null);
  const secondaryRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  // const { rotateX, rotateY } = useMouseTilt();

  useEffect(() => {
    if (isStarted && isInView && primaryRef.current) {
      primaryRef.current.play().catch(console.error);
    }
  }, [isStarted, isInView]);

  const handlePrimaryEnded = () => {
    if (!loop) {
      setShowSecondary(true);
      secondaryRef.current?.play().catch(console.error);
    }
  };

  // const tiltStyle = {
  //   rotateX,
  //   rotateY,
  //   transformStyle: "preserve-3d" as const,
  // };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative -mb-12 -mt-6 sm:mb-0 sm:mt-0",
        containerClassName,
      )}
    >
      {/* Secondary Video */}
      <motion.video
        ref={secondaryRef}
        muted
        playsInline
        loop
        preload="auto"
        className={cn(
          "absolute inset-0 size-full object-contain brightness-110 saturate-110 -translate-y-10 drop-shadow-2xl scale-110",
          className,
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: showSecondary ? 1 : 0 }}
        transition={{ duration: 0 }}
        // style={tiltStyle}
      >
        {VIDEO_SOURCES.secondary.map((source, idx) => (
          <source key={idx} src={source.src} type={source.type} />
        ))}
      </motion.video>

      {/* Primary Video */}
      <motion.video
        ref={primaryRef}
        loop={loop}
        muted
        playsInline
        preload="auto"
        onEnded={handlePrimaryEnded}
        className={cn(
          "size-full object-contain brightness-110 saturate-110 -translate-y-10 drop-shadow-2xl scale-110 relative",
          className,
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showSecondary ? 0 : 1, scale: 1 }}
        transition={{ duration: 0 }}
        // style={tiltStyle}
      >
        {VIDEO_SOURCES.primary.map((source, idx) => (
          <source key={idx} src={source.src} type={source.type} />
        ))}
      </motion.video>
    </div>
  );
};

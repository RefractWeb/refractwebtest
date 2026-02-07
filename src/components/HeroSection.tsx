"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import AnimatedLogoCloud from "./LogoCloud";
import { AnimatedText } from "./ui/animated-text";
import ActionButtons from "./ActionButtons";

export const HeroSection = () => {
  const { rotateX, rotateY, mousePosition } = useMouseTilt();
  const [currentVideo, setCurrentVideo] = useState<"chip1" | "chip2">("chip1");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev === "chip1" ? "chip2" : "chip1"));
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-[#1E2E5E]/40 via-transparent to-transparent" />
        <div
          className="absolute top-[-10%] left-[1%] w-[50vw] h-[50vw] rounded-full bg-[#B05D41] opacity-20 blur-[120px]"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          }}
        />
        {/* <div
          className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-[#F59768] opacity-10 blur-[100px]"
          style={{
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
          }}
        /> */}
      </div>

      {/* Hero Content */}
      <main className="relative z-10 container px-6 pt-16 grow flex flex-col lg:flex-row items-center mx-auto">
        <div className="w-full lg:w-1/2 text-left space-y-8 pl-4 lg:pl-10">
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-grad"
          >
            Defining <br /> Digital Identity
          </AnimatedText>
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            delay={0.2}
            className="text-base lg:text-lg max-w-sm leading-tight"
          >
            We merge the precision of code with the power of design,
            orchestrating a single identity that signals authority everywhere.
          </AnimatedText>
          <ActionButtons />
        </div>

        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative isolate perspective-[1000px]">
          <motion.video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            key={currentVideo}
            className="w-full h-full object-contain brightness-120 saturate-110 -translate-x-14 -translate-y-10 drop-shadow-2xl scale-110"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <source
              src={`/safari/${currentVideo}.hevc.mov`}
              type="video/mp4; codecs=hvc1"
            />
            <source
              src={`/chrome/${currentVideo}-vp9-chrome.webm`}
              type="video/webm"
            />
            video not supported
          </motion.video>
        </div>
      </main>
      <AnimatedLogoCloud />
    </div>
  );
};

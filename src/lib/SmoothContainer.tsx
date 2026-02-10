"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerSync() {
  const rafRef = useRef<number | null>(null);

  useLenis(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      ScrollTrigger.update();
      rafRef.current = null;
    });
  });

  useEffect(() => {
    // Refresh ScrollTrigger after fonts and layout are ready
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("ScrollTrigger refreshed after initial load");
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return null;
}

export default function SmoothContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      className="max-w-screen overflow-x-hidden"
      options={{
        // Smoothness & feel
        lerp: 0.05, // Lower = smoother but slower (0.05-0.15 range)
        duration: 1.6, // Duration of scroll animation in seconds
        wheelMultiplier: 0.9, // Wheel scroll sensitivity (lower = slower)
        touchMultiplier: 1.5, // Touch scroll sensitivity

        // Performance optimizations
        syncTouch: false, // Don't sync touch - let native handle it for better mobile perf
        syncTouchLerp: 0.075, // If syncTouch is true, use this lerp value

        // Orientation
        orientation: "vertical",
        gestureOrientation: "vertical",

        // Auto-raf is handled by ReactLenis, but we can customize
        autoRaf: true,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}

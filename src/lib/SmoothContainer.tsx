"use client";
import { useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.ticker.lagSmoothing(0);

export default function SmoothContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);

    // Refresh after initial layout settles (fonts, images, etc.)
    const initTimeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    // Debounced resize refresh — prevents stale pin/trigger positions
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      gsap.ticker.remove(update);
      clearTimeout(initTimeout);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      className="max-w-screen overflow-x-hidden"
      options={{
        autoRaf: false,
        lerp: 0.05,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        syncTouch: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}

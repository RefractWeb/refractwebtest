"use client";

import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate width based on scroll progress (min 4px, max 16px)
  const width = 4 + (scrollProgress / 100) * 12;

  return (
    <>
      {/* Progress indicator on right side */}
      <div
        className="fixed right-0 top-0 bottom-0 z-50 pointer-events-none transition-all duration-300 ease-out"
        style={{
          width: `${width}px`,
          background: `linear-gradient(to bottom, var(--primary) ${scrollProgress}%, transparent ${scrollProgress}%)`,
        }}
      />

      {/* Optional: Top progress bar */}
      <div
        className="fixed top-0 left-0 h-1 z-50 bg-primary transition-all duration-300 ease-out shadow-[0_0_10px_var(--primary)]"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </>
  );
};

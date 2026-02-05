"use client";

import { useEffect } from "react";
import { useSpring } from "motion/react";
import { useMousePosition } from "./useMousePosition";

interface TiltConfig {
  stiffness?: number;
  damping?: number;
  mass?: number;
  maxRotation?: number;
}

export const useMouseTilt = (config: TiltConfig = {}) => {
  const { stiffness = 90, damping = 30, mass = 0.5, maxRotation = 15 } = config;

  const mousePosition = useMousePosition();

  const springConfig = { stiffness, damping, mass };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    rotateX.set(mousePosition.y * -maxRotation);
    rotateY.set(mousePosition.x * maxRotation);
  }, [mousePosition, rotateX, rotateY, maxRotation]);

  return { rotateX, rotateY, mousePosition };
};

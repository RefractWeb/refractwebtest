"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactLenis root>{children}</ReactLenis>;
}

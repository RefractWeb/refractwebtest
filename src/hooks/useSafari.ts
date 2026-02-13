"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if the user is on Safari browser
 * Returns true if Safari, false otherwise
 */
export function useSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(safari);
  }, []);

  return isSafari;
}

"use client";

import { useEffect } from "react";

export const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export const openCalendlyDialog = () => {
  if (window.Calendly) {
    window.Calendly.showPopupWidget(
      "https://calendly.com/d/ctmb-trz-z3c/introduction",
    );
  }
};

declare global {
  interface Window {
    Calendly: {
      showPopupWidget: (url: string) => void;
    };
  }
}

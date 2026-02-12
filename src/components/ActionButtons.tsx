"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LetterSwapForward from "./ui/LetterSwap";

const ActionButtons = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 md:gap-6 relative z-30",
        className,
      )}
    >
      <Link href="/contact">
        <Button size={"lg"}>Work With Us</Button>
      </Link>
      <Link
        href="/about#core-capabilities"
        onClick={(e) => {
          // If we're already on the /about page, force-scroll the target every click
          const targetId = "core-capabilities";
          const aboutPath = "/about";
          if (
            typeof window !== "undefined" &&
            window.location.pathname.startsWith(aboutPath)
          ) {
            e.preventDefault();
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              el.setAttribute("tabindex", "-1");
              (el as HTMLElement).focus();
              // ensure URL shows the fragment without adding a new history entry
              history.replaceState(null, "", `${aboutPath}#${targetId}`);
            }
          }
        }}
      >
        <Button variant={"ghost"} className="group">
          <LetterSwapForward
            staggerDuration={0}
            reverse={false}
            label="Explore our services"
          />
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;

"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-8 px-6 z-50 w-full flex justify-between items-start">
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex bg-linear-to-b from-white/5 to-white/10 backdrop-saturate-150 backdrop-brightness-110 backdrop-blur-lg border border-white/5 border-b-white/20 rounded-full p-2 items-center gap-8 shadow-xl shadow-black/10">
        <Link href="/">
          <div className="button">RefractWeb</div>
        </Link>
        <div className="flex items-center gap-8 px-4 text-sm font-medium text-muted-foreground">
          {["Home", "About", "Work"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-foreground transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="ml-auto">
        <Link href="/contact" className="hidden md:inline-flex">
          <Button>Work With Us</Button>
        </Link>
      </div>
    </nav>
  );
};

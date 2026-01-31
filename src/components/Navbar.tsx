"use client";

import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-8 px-6 z-50 w-full flex justify-between items-start">
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex bg-linear-to-b from-white/5 to-white/10 backdrop-saturate-150 backdrop-brightness-110 backdrop-blur-lg border border-white/5 border-b-white/20 rounded-full p-2 items-center gap-8 shadow-xl shadow-black/10">
        <div className="button">
          RefractWeb
        </div>
        <div className="flex items-center gap-8 px-4 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Work
          </a>
        </div>
      </div>
      <div className="ml-auto">
        <Button>Work With Us</Button>
      </div>
    </nav>
  );
};

"use client";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="relative z-50 w-full px-6 py-8 flex justify-between items-start">
      <div className="absolute left-1/2 -translate-x-1/2 top-8 hidden md:block">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 flex items-center gap-8 shadow-2xl shadow-black/50">
          <div className="bg-[#B05D41] text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(245,151,104,0.3)]">
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
      </div>
      <div className="ml-auto">
        <button className="group relative px-6 py-2.5 rounded-full bg-linear-to-r from-[#B05D41] to-[#9a4d33] text-white text-sm font-medium overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(176,93,65,0.4)] border border-white/10">
          <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
          Work With Us
        </button>
      </div>
    </nav>
  );
};

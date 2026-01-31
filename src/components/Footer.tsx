"use client";
import React from "react";
import { Twitter, Linkedin, Instagram, Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden">
      {/* Massive Background Text */}
      <div className="container mx-auto px-2 relative z-10">
        <div className="select-none pointer-events-none">
          <h1
            className="text-[12vw] leading-none font-bold text-center tracking-tighter"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
              color: "#B05D41",
              textShadow: "0 0 100px rgba(176,93,65,0.2)",
            }}
          >
            REFRACTWEB
          </h1>
        </div>
      </div>

      {/* Links & Info */}
      <div className="container mx-auto px-6 mt-20 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-500 font-bold mb-4 tracking-wider text-sm">
                WEBSITE
              </h3>
              <ul className="space-y-2 text-lg font-medium text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F59768] transition-colors"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F59768] transition-colors"
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F59768] transition-colors"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F59768] transition-colors"
                  >
                    WORK WITH US
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-right md:text-left">
            <div>
              <h3 className="text-gray-500 font-bold mb-4 tracking-wider text-sm">
                LEGAL
              </h3>
              <ul className="space-y-2 text-lg font-medium text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F59768] transition-colors"
                  >
                    TERMS OF SERVICE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F59768] transition-colors"
                  >
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F59768] transition-colors"
                  >
                    COOKIE POLICY
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-xs tracking-widest uppercase">
            copyright © 2026 RefractWeb. All rights reserved
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white hover:text-[#F59768] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F59768] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F59768] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F59768] transition-colors"
            >
              <Copyright className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Ambient Corner Glows for Footer */}
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#1E2E5E] opacity-10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#B05D41] opacity-5 blur-[150px] pointer-events-none" />
    </footer>
  );
};

"use client";

import { Twitter, Linkedin, Instagram, Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-linear-to-t from-black to-background pt-20 pb-10 overflow-hidden">
      <Image
        src={"/logo.svg"}
        alt="logo"
        className="absolute top-14 -left-24 opacity-4 size-150"
        width={600}
        height={200}
      />

      {/* Massive Background Text */}
      <div className="container mx-auto px-2 relative z-10">
        <div className="select-none">
          <h1
            className="leading-none font-bold text-center tracking-[-0.07em] bg-clip-text text-transparent bg-linear-to-b from-primary to-primary2 opacity-90 hover:opacity-100 transition-all cursor-pointer duration-500"
            style={{
              fontFamily: "'Helvetica', sans-serif",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)",
              textShadow:
                "0 0 100px rgba(176,93,65,0.2), 0 0 100px rgba(203, 104, 71, 0.2)",
              fontSize: "clamp(1.2rem, 13vw, 15rem)",
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
                  <Link href="/" className="hover:text-primary2 transition-all">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-primary2 transition-all"
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary2 transition-all"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    aria-label="Schedule an introduction"
                    className="hover:text-primary2 transition-all"
                  >
                    WORK WITH US
                  </Link>
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
                  <Link
                    href="/terms-of-service"
                    className="hover:text-primary2 transition-all"
                  >
                    TERMS OF SERVICE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-primary2 transition-all"
                  >
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="hover:text-primary2 transition-all"
                  >
                    COOKIE POLICY
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-xs tracking-widest uppercase">
            copyright © 2026 RefractWeb. All rights reserved
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/RefractWeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RefractWeb on X"
              className="hover:text-primary2 transition-all"
            >
              <Twitter className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/refractweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RefractWeb on LinkedIn"
              className="hover:text-primary2 transition-all"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="https://www.instagram.com/refractweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RefractWeb on Instagram"
              className="hover:text-primary2 transition-all"
            >
              <Instagram className="size-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Ambient Corner Glows for Footer */}
      <div className="absolute -bottom-60 right-40 w-125 h-125 bg-blue-700/15 opacity-100 blur-[150px] pointer-events-none" />
    </footer>
  );
};

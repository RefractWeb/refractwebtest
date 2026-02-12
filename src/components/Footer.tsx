"use client";

import { Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import text from "@/assets/footer.svg";
import LetterSwapForward from "./ui/LetterSwap";
const WEBSITE_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/#services" },
  { label: "ABOUT", href: "/about" },
  { label: "WORK WITH US", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "TERMS OF SERVICE", href: "/terms-of-service" },
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "COOKIE POLICY", href: "/cookie-policy" },
];

const SOCIAL_LINKS = [
  {
    href: "https://x.com/RefractWeb",
    icon: Twitter,
    label: "RefractWeb on X",
  },
  {
    href: "https://www.linkedin.com/company/refractweb",
    icon: Linkedin,
    label: "RefractWeb on LinkedIn",
  },
  {
    href: "https://www.instagram.com/refractweb",
    icon: Instagram,
    label: "RefractWeb on Instagram",
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-linear-to-t from-black py-20 overflow-hidden">
      <Image
        src={"/logo.svg"}
        alt="logo"
        className="absolute top-14 -left-24 opacity-3 size-160"
        width={600}
        height={200}
      />

      {/* Massive Background Text */}
      <div className="container mx-auto relative z-10">
        <Image
          src={text}
          alt="RefractWeb"
          className="w-[120vw] h-auto px-6 md:px-1 scale-110 mx-auto select-none pointer-events-none drop-shadow-2xl drop-shadow-primary/5"
          width={2000}
          height={400}
        />
      </div>

      {/* Links & Info */}
      <div className="container mx-auto px-6 mt-10 md:mt-20 relative z-20">
        <div className="flex flex-wrap flex-row justify-between items-start gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-500 font-bold select-none mb-4 tracking-wider text-xs md:text-sm">
                WEBSITE
              </h3>
              <ul className="space-y-2 text-sm md:text-lg font-medium text-gray-300 flex flex-col items-start">
                {WEBSITE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary2 transition-all"
                    >
                      <LetterSwapForward
                        staggerDuration={0}
                        reverse={false}
                        transition={{
                          duration: 0.4,
                        }}
                        label={link.label}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-right md:text-left">
            <div>
              <h3 className="text-gray-500 font-bold select-none mb-4 tracking-wider text-xs md:text-sm">
                LEGAL
              </h3>
              <ul className="space-y-2 text-sm md:text-lg font-medium text-gray-300 flex flex-col md:items-start items-end">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary2 transition-all"
                    >
                      <LetterSwapForward
                        staggerDuration={0}
                        reverse={false}
                        transition={{
                          duration: 0.4,
                        }}
                        label={link.label}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-xs tracking-widest uppercase">
            copyright © 2026 Pulse Partners AI LLC DBA RefractWeb. All rights
            reserved
          </div>

          <div className="flex items-center gap-10">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-primary2 transition-all"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Corner Glows for Footer */}
      <div className="absolute -bottom-65 right-40 size-125 bg-blue-700 opacity-20 blur-[150px] pointer-events-none" />
    </footer>
  );
};

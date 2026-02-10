"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Works",
    href: "/work",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav className="fixed top-8 px-6 z-50 w-full flex justify-between items-center">
      {/* Mobile Logo */}
      <Link href="/" className="md:hidden z-70 relative">
        <div className="button">RefractWeb</div>
      </Link>

      {/* Desktop Pill Menu */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex bg-linear-to-b from-white/5 to-white/10 backdrop-saturate-150 backdrop-brightness-110 backdrop-blur-lg border border-white/5 border-b-white/20 rounded-full p-2 items-center gap-8 shadow-xl shadow-black/10">
        <Link href="/">
          <div className="button">RefractWeb</div>
        </Link>
        <div className="flex items-center gap-8 px-4 text-sm font-medium text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-foreground transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Action Buttons & Hamburger */}
      <div className="ml-auto flex items-center gap-3 relative z-70">
        <Link href="/contact" className="hidden md:inline-flex">
          <Button>Work With Us</Button>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center size-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white transition-all active:scale-95 hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-3xl z-60 md:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-10 gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    damping: 20,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-6xl font-bold tracking-tighter text-muted-foreground hover:text-primary2 transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="p-10 mb-10"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full h-16 text-xl rounded-2xl shadow-2xl">
                  Work With Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import adamImg from "@/assets/adam.png";
import jakeImg from "@/assets/jake.png";
import { Member } from "./MemberCard";
import { AnimatedText } from "../ui/animated-text";
import ActionButtons from "../ActionButtons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const members: Member[] = [
  {
    name: "Adam Guarino",
    role: "Co-Founder and COO",
    bio: "Adam orchestrates creative strategy and production for high-growth organizations and enterprise partners. He bridges the gap between ambitious visual concepts and operational reality, driving projects from direction to delivery. Trusted to execute in high-stakes environments, he brings the structure required to turn digital initiatives into commercial impact.",
    email: "adam@refractweb.com",
    linkedin: "https://www.linkedin.com/in/adam-guarino/",
    img: adamImg,
  },
  {
    name: "Jake Young",
    role: "Co-Founder and CEO",
    bio: "Jake operates across major creative markets including San Diego and London, contributing to work built for global visibility and commercial impact. He works alongside creative and marketing teams to move projects from direction to delivery, supporting brand and campaign platforms where precision, judgment, and reliability matter.",
    email: "jake@refractweb.com",
    linkedin: "https://www.linkedin.com/in/jacob-young9/",
    img: jakeImg,
  },
];
export default function Teams() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = members.map((member) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = member.img.src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const items = itemRefs.current.filter((el) => el !== null);
    if (items.length === 0) return;

    // Set initial state immediately
    items.forEach((item) => {
      gsap.set(item, {
        scaleX: 0,
        rotate: 10,
        opacity: 0,
        transformOrigin: "center center",
      });
    });

    const ctx = gsap.context(() => {
      items.forEach((item, index) => {
        gsap.to(item, {
          scaleX: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.1 + index * 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
            markers: false,
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, [imagesLoaded]);

  return (
    <section className="py-32 md:py-40 px-6 relative">
      <div className="absolute hidden md:block inset-0 z-0 pointer-events-none">
        <div className="absolute pointer-events-none top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[200px] -z-10 transform-gpu-blur" />
        <div className="absolute pointer-events-none top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[230px] -z-10 transform-gpu-blur" />
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-6 mb-16">
          <AnimatedText
            animationType="wordReveal"
            stagger={0.065}
            className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.15]"
          >
            Working with those <br /> who set the standard
          </AnimatedText>
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            delay={0.4}
            className="text-xl"
          >
            Across media, technology, and high-visibility environments.
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <ActionButtons />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {members.flatMap((m, memberIndex) => {
            const baseIndex = memberIndex * 2;
            return [
              // Photo Card
              <div
                key={`${m.name}-photo`}
                ref={(el) => {
                  itemRefs.current[baseIndex] = el;
                }}
                className={cn(
                  m.gradientClass ??
                    "saturate-110 bg-linear-to-b to-[#f59566] from-[#0C112D]",
                  "flex flex-col rounded-2xl overflow-hidden group relative",
                )}
                style={{ willChange: "transform, opacity" }}
              >
                <Image
                  src={m.img}
                  alt={m.name}
                  draggable={false}
                  loading="eager"
                  className="object-cover mt-auto group-hover:scale-105 transition-all duration-700 brightness-110 select-none w-full"
                  preload
                />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-background via-background/60 backdrop-blur-2xl mask-t-from-20%" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {m.name}
                  </h3>
                  <p className="text-muted-foreground text-xs font-medium">
                    {m.role}
                  </p>
                </div>
              </div>,
              // Bio Card
              <div
                key={`${m.name}-bio`}
                ref={(el) => {
                  itemRefs.current[baseIndex + 1] = el;
                }}
                className="flex flex-col rounded-2xl p-6 justify-between relative backdrop-blur cursor-pointer overflow-clip group"
              >
                <div
                  className="absolute inset-0 size-full bg-neutral-800/50 group-hover:bg-neutral-800/70 transition-all duration-300 -z-10"
                  style={{
                    boxShadow:
                      "rgb(193 193 193 / 10%) -3px -4px 20px inset,rgb(0 0 0 / 30%) 6px 7px 20px inset",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                  }}
                />
                <div className="space-y-4">
                  <h3 className="text-xl xl:text-2xl font-bold tracking-tight mb-12 md:mb-62">
                    {m.name}
                  </h3>
                  <p className="text-foreground/90 text-xs xl:text-[12.5px] font-medium">
                    {m.bio}
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link
                    href={`mailto:${m.email}`}
                    className="text-foreground/90 hover:text-primary transition-colors duration-300"
                  >
                    <Mail className="size-4" />
                  </Link>
                  <Link
                    href={m.linkedin ?? "https://linkedin.com"}
                    className="text-foreground/90 hover:text-primary transition-colors duration-300"
                  >
                    <Linkedin className="size-4" />
                  </Link>
                </div>
              </div>,
            ];
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Monitor } from "lucide-react";

import webDevImg from "@/assets/works/Landing page 3.jpg";
import designImg from "@/assets/works/Landing page 2.jpg";
import brandImg from "@/assets/works/Landing page 1.jpg";

type CardData = {
  title: string;
  description: string;
  image: StaticImageData;
};

const CARDS: CardData[] = [
  {
    title: "Web Development",
    description:
      "Transform concepts into high-performance experiences. We engineer story-driven websites that turn your brand into a premium digital product. Every layout and interaction feels refined, fast, and distinct.",
    image: webDevImg,
  },
  {
    title: "Product Design",
    description:
      "Interfaces built with intent. Every interaction is crafted to feel elegant, fast, and emotionally engaging.",
    image: designImg,
  },
  {
    title: "Brand Identity",
    description:
      "We shape brands that feel iconic. Visual systems that scale across platforms while staying bold and timeless.",
    image: brandImg,
  },
];

export default function StackCards() {
  return (
    <div className="relative space-y-40">
      {CARDS.map((card, index) => {
        const topOffset = 120 + index * 80;

        return (
          <div
            key={index}
            className="sticky w-full max-w-6xl mx-auto"
            style={{ top: topOffset, zIndex: index }}
          >
            <div className="relative group">
              {/* glow */}
              <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-primary2/20 blur-[120px] opacity-60 transition-opacity" />

              {/* main card */}
              <div className="relative bg-[#0E111B] rounded-3xl p-10 md:p-16 overflow-hidden flex flex-col lg:flex-row gap-16 items-center shadow-2xl">
                {/* image side */}
                <div
                  className="w-full lg:w-3/5 relative aspect-video rounded-2xl overflow-hidden transition-all bg-[#1423547a]"
                  style={{
                    boxShadow: "#01030a6e 0px 6px 30px",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="group-hover:scale-105 transition-all duration-1000 object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* content side */}
                <div className="w-full lg:w-2/5 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-grad tracking-tight leading-tight">
                    {card.title}
                  </h3>

                  <Monitor className="size-5 text-muted-foreground" />

                  <p className="text-sm md:text-base text-grad leading-relaxed">
                    {card.description}
                  </p>

                  <Link
                    href="/work"
                    className="group/link flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="text-grad">See More</span>
                    <ArrowRight className="size-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
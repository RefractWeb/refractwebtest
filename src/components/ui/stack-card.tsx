"use client";

import Image from "next/image";
import { Code, Globe, Palette, Video } from "lucide-react";
import webDevImg from "@/assets/works/Landing page 3.jpg";
import img3d from "@/assets/3danim.png";
import marqueeImg1 from "@/assets/branding/1.svg";
import marqueeImg2 from "@/assets/branding/2.svg";
import marqueeImg3 from "@/assets/branding/3.svg";
import marqueeImg4 from "@/assets/branding/4.svg";
import { DraggableMarquee, Marquee, MarqueeItem } from "./marquee";
import { SeeMore } from "../BentoSection";
import dynamic from "next/dynamic";

const CodeEditorReplica = dynamic(() => import("../Codeblock"), {
  ssr: false,
});

const marqueeItems = [marqueeImg1, marqueeImg2, marqueeImg3, marqueeImg4];

type CapabilityCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: "webdev" | "branding" | "software" | "3d";
};

const CARDS: CapabilityCard[] = [
  {
    title: "Web Development",
    description:
      "Transform concepts into high-performance experiences. We engineer story-driven websites that turn your brand into a premium digital product. Every layout and interaction feels refined, fast, and distinct.",
    icon: <Globe className="size-5 text-foreground/70" />,
    visual: "webdev",
  },
  {
    title: "Branding",
    description:
      "We build strategic identities designed to secure a premium market position. Visual systems that scale across platforms while staying bold and timeless.",
    icon: <Palette className="size-5 text-foreground/70" />,
    visual: "branding",
  },
  {
    title: "Software / AI",
    description:
      "We replace manual processes with intelligent software tailored to your specific operations. Custom tools and AI solutions engineered to give you an edge.",
    icon: <Code className="size-5 text-foreground/70" />,
    visual: "software",
  },
  {
    title: "3D Animation",
    description:
      "We build cinematic 3D assets designed to give your brand a premium feel. Motion graphics and renders that elevate every touchpoint.",
    icon: <Video className="size-5 text-foreground/70" />,
    visual: "3d",
  },
];

function WebDevVisual() {
  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#1423547a]">
      <Image
        src={webDevImg}
        alt="Web Development"
        fill
        className="object-cover hover:scale-105 transition-all duration-700"
        placeholder="blur"
      />
    </div>
  );
}

function BrandingVisual() {
  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary2/10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 blur-[100px] size-80 bg-primary/40 rounded-full pointer-events-none" />
      <div className="w-full relative z-10">
        <Marquee>
          <DraggableMarquee speed={0.5} direction="right" gap={10}>
            {marqueeItems.map((item, index) => (
              <MarqueeItem key={index} className="w-fit rounded-md m-auto">
                <Image
                  src={item.src}
                  loading="lazy"
                  alt={`Branding ${index}`}
                  className="size-20 md:size-30 pointer-events-none"
                  width={150}
                  height={150}
                />
              </MarqueeItem>
            ))}
          </DraggableMarquee>
        </Marquee>
      </div>
    </div>
  );
}

function SoftwareVisual() {
  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden flex items-center justify-center">
      <div className="absolute bottom-0 left-1/2 blur-[100px] size-80 bg-secondary2/50 rounded-full pointer-events-none" />
      <div className="relative z-10 size-full translate-y-10 scale-80 md:scale-100 translate-x-9 md:-translate-x-18 rounded-2xl">
        <CodeEditorReplica />
      </div>
    </div>
  );
}

function ThreeDVisual() {
  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden flex items-center justify-center">
      <div className="absolute -bottom-20 -right-10 blur-[80px] size-80 bg-[#1E2E5E]/60 rounded-full pointer-events-none" />
      <Image
        src={img3d}
        alt="3D Animation"
        placeholder="blur"
        className="object-contain relative z-10 hover:scale-125 scale-110 transition-all duration-700 size-full"
      />
    </div>
  );
}

const VISUALS: Record<CapabilityCard["visual"], React.FC> = {
  webdev: WebDevVisual,
  branding: BrandingVisual,
  software: SoftwareVisual,
  "3d": ThreeDVisual,
};

export default function StackCards() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 bg-linear-to-r from-primary/20 to-primary2/20 blur-[120px] opacity-40 transition-opacity" />
      {CARDS.map((card, index) => {
        const topOffset = 120 + index * 60;
        const Visual = VISUALS[card.visual];
        return (
          <div
            key={index}
            className="sticky w-full max-w-6xl mx-auto flex flex-col mt-10"
            style={{ top: topOffset, zIndex: index }}
          >
            <div className="relative group">
              <div
                className="relative bg-[#0E111B] rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center"
                style={{
                  boxShadow: "#02071861 0px 2px 20px",
                }}
              >
                <div
                  className="w-full lg:w-3/5 relative aspect-4/3 md:aspect-video rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: "#01030a6e 0px 6px 30px",
                  }}
                >
                  <Visual />
                </div>

                <div className="w-full lg:w-2/5 space-y-4">
                  {card.icon}
                  <h3 className="text-2xl md:text-3xl font-semibold text-grad tracking-tight leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-grad leading-relaxed">
                    {card.description}
                  </p>
                  <SeeMore />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

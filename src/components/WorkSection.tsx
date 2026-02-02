"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

import Work1 from "@/assets/works/Landing page 1.jpg";
import Work2 from "@/assets/works/Landing page 2.jpg";
import Work3 from "@/assets/works/Landing page 3.jpg";
import Work4 from "@/assets/works/Landing page 4.jpg";

const works = [
  {
    title: "Ethereal Landscapes",
    category: "Digital Design",
    description:
      "Creating immersive digital environments that blend art and functionality for modern brands.",
    image: Work1,
  },
  {
    title: "Minimal Systems",
    category: "Web Architecture",
    description:
      "High-performance website built with a focus on speed, accessibility, and clean aesthetics.",
    image: Work2,
  },
  {
    title: "Neural Interfaces",
    category: "Product Design",
    description:
      "Next-generation user interfaces that bridge the gap between human intuition and machine logic.",
    image: Work3,
  },
  {
    title: "Fluid Identities",
    category: "Brand Strategy",
    description:
      "Dynamic brand identities that adapt and evolve across all digital and physical touchpoints.",
    image: Work4,
  },
];

export const WorkSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-grad mx-auto">
            Selected{" "}
            <span className="font-light text-muted-foreground">work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Redefining the standard. We sharpen clarity, elevate design, and
            build digital identities that perform at the highest level.
          </p>
          <div className="pt-6 flex items-center justify-center gap-6">
            <Button>Work with us</Button>
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Explore our services <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto pb-12 snap-x">
          {works.map((work, index) => (
            <div
              key={index}
              className="min-w-[85vw] lg:min-w-130 snap-center group bg-linear-to-br from-card via-background to-card rounded-2xl"
            >
              <div className="h-100 relative overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  className="object-cover object-left translate-x-10 transition-transform duration-700 group-hover:scale-105 rounded-bl-2xl"
                  fill
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-bold text-xl lg:text-2xl group-hover:text-gray-300 transition-colors">
                    {work.title}
                  </h4>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest pt-1">
                    {work.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed line-clamp-2">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import shaun from "@/assets/Shaun Olson.png";
import chasen from "@/assets/Chasen McNaughton.png";
import tanner from "@/assets/Tanner Balisky.png";
import Image from "next/image";

const testimonials = [
  {
    text: "RefractWeb has been instrumental in reducing our overhead in more than one area of our business. We are excited to continue to work with them to identify areas where AI can be leveraged to streamline processes and use our human resources in more valuable ways to move our business forward.",
    name: "Shaun Olson",
    role: "Cobe Construction Inc.",
    image: shaun,
  },
  {
    text: "Working with Refract Web was an exceptional experience from start to finish. They took the time to truly understand our brand and vision, translating it into a website that feels both polished and authentic to Milk and Cookies. Their attention to detail, creativity, and technical skill resulted in a site that not only looks incredible but performs seamlessly. We couldn’t be happier with the outcome and the partnership.",
    name: "Chasen McNaughton",
    role: "Milk & Cookies",
    image: chasen,
  },
  {
    text: "The architectural precision they brought to our platform was unmatched. They didn't just build a website; they built a scalable digital ecosystem that has grown with us flawlessly.",
    name: "Tanner Balisky",
    role: "Bad Birdie",
    image: tanner,
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-20 relative flex items-center justify-center overflow-hidden min-h-screen">
      <div className="container max-w-5xl px-6 relative z-10">
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          type="button"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-20 w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-white/10 transition-colors z-20 bg-linear-to-bl from-background to-card"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={nextTestimonial}
          type="button"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-20 w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-white/10 transition-colors z-20 bg-linear-to-br from-background to-card"
          aria-label="Next testimonial"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Content */}
        <div className="text-center space-y-12 transition-opacity duration-500 ease-in-out">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-grad">
            "{testimonials[activeIndex].text}"
          </p>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-linear-to-b from-background to-card rounded-full px-2 py-2 pr-6 border">
              <Image
                src={testimonials[activeIndex].image}
                loading="lazy"
                width={50}
                height={50}
                placeholder="blur"
                alt={testimonials[activeIndex].name}
                className="size-10 rounded-full object-cover grayscale border"
              />
              <div className="text-left inline-flex items-center gap-1">
                <div className="text-base font-medium text-foreground">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {" "}
                  - {testimonials[activeIndex].role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

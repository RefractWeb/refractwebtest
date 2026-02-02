"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "RefractWeb has been instrumental in reducing our overhead in more than one area of our business. We are excited to continue to work with them to identify areas where AI can be leveraged to streamline processes and use our human resources in more valuable ways to move our business forward.",
    name: "Shaun Olson",
    role: "pulse",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
  },
  {
    text: "The architectural precision they brought to our platform was unmatched. They didn't just build a website; they built a scalable digital ecosystem that has grown with us flawlessly.",
    name: "Elena Rodriguez",
    role: "Vanguard Tech",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
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
    <section className="py-32 bg-background relative flex items-center justify-center overflow-hidden">
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
            <div className="inline-flex items-center gap-3 bg-linear-to-b from-background to-card rounded-full px-2 py-2 pr-6 border-b border-border">
              <img
                src={testimonials[activeIndex].image}
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

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import shaun from "@/assets/Shaun Olson.png";
import chasen from "@/assets/Chasen McNaughton.png";
import tanner from "@/assets/Tanner Balisky.png";
import Image from "next/image";
import { AnimatedText } from "./ui/animated-text";
import { motion, AnimatePresence } from "motion/react";

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
    text: "I reached out with a vision, and Refract executed it perfectly. They were on time at every step, and their attention to detail was exactly what we were looking for. They took our ideas and turned them into a result that elevated the brand.",
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
    <section className="relative flex items-center justify-center py-16 md:py-24 md:min-h-200">
      <div className="absolute -top-10 left-100 w-30 h-30 rounded-full bg-[#dd7857] opacity-60 blur-[100px] z-10" />
      <div className="absolute top-[-30%] left-[5%] w-50 h-50 rounded-full bg-[#3150aa] opacity-60 blur-[120px] -z-10" />

      <div className="absolute -bottom-3 right-100 w-30 h-30 rounded-full bg-[#dd7857] opacity-60 blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-[5%] w-50 h-50 rounded-full bg-[#3150aa] opacity-60 blur-[120px] -z-10" />
      <div className="container max-w-5xl px-6 md:px-10 relative z-10">
        <div className="relative">
          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            type="button"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 lg:-translate-x-24 size-12 rounded-full border border-border items-center justify-center text-foreground hover:bg-white/10 active:scale-90 transition-all z-20 bg-linear-to-bl from-background to-card"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={nextTestimonial}
            type="button"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-24 size-12 rounded-full border border-border items-center justify-center text-foreground hover:bg-white/10 active:scale-90 transition-all z-20 bg-linear-to-br from-background to-card"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Content */}
          <div className="text-center space-y-10 md:space-y-14">
            <div className="min-h-100 flex items-center justify-center">
              <AnimatedText
                key={activeIndex}
                useScrollTrigger={false}
                animationType="skewIn"
                splitType="lines"
                className="text-lg md:text-3xl lg:text-4xl leading-relaxed font-light tracking-tight"
              >
                "{testimonials[activeIndex].text}"
              </AnimatedText>
            </div>

            <div className="flex flex-col items-center gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  layout
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="inline-flex items-center gap-3 bg-linear-to-b from-background to-card rounded-full px-2 py-2 md:py-2.5 pr-6 md:pr-8 border shadow-sm"
                >
                  <Image
                    src={testimonials[activeIndex].image}
                    loading="lazy"
                    width={50}
                    height={50}
                    placeholder="blur"
                    alt={testimonials[activeIndex].name}
                    className="md:size-12 size-10 rounded-full object-cover grayscale border border-white/10"
                  />
                  <div className="text-left flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-base md:text-lg font-semibold text-foreground leading-tight"
                    >
                      {testimonials[activeIndex].name}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: 0.1 }}
                      className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium"
                    >
                      {testimonials[activeIndex].role}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mobile Navigation Arrows */}
              <div className="flex md:hidden items-center gap-6">
                <button
                  onClick={prevTestimonial}
                  type="button"
                  className="size-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-white/10 active:scale-95 transition-all bg-linear-to-bl from-background to-card"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  type="button"
                  className="size-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-white/10 active:scale-95 transition-all bg-linear-to-br from-background to-card"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

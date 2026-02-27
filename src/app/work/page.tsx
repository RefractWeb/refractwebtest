"use client";
import {
  Marquee,
  MarqueeItem,
  DraggableMarquee,
} from "@/components/ui/marquee";
import Image from "next/image";
import project1 from "@/assets/works/Landing page 1.jpg";
import project2 from "@/assets/works/Landing page 2.jpg";
import project3 from "@/assets/works/Landing page 3.jpg";
import project4 from "@/assets/works/Landing page 4.jpg";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";
import { AnimatedText } from "@/components/ui/animated-text";
import ActionButtons from "@/components/ActionButtons";
import { motion } from "motion/react";

const projects = [project1, project2, project3, project4];

const page = () => {
  return (
    <SmoothContainer>
      <div className="overflow-hidden">
        <section className="md:py-32 pt-28 pb-16 px-6 relative">
          <div className="absolute hidden md:block inset-0 z-0 pointer-events-none">
            <div className="absolute pointer-events-none top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[200px] transform-gpu-blur" />
            <div className="absolute pointer-events-none top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[230px] transform-gpu-blur" />
            <div className="absolute pointer-events-none -bottom-40 left-[10%] size-150 rounded-full bg-[#d6795a] opacity-40 blur-[200px] blur-gpu" />

            <div className="absolute pointer-events-none bottom-[-10%] right-[10%] w-200 h-200 rounded-full bg-[#3150aa] opacity-30 blur-[170px] -z-10 blur-gpu" />
            <div className="absolute pointer-events-none bottom-[-14%] -right-[10%] w-200 h-200 rounded-full bg-[#d6795a] opacity-30 blur-[170px] -z-10 transform-gpu-blur" />
          </div>
          <div className="container mx-auto max-w-8xl">
            <div className="text-center space-y-4 mb-12 md:mb-24">
              <AnimatedText
                animationType="wordReveal"
                stagger={0.07}
                className="text-5xl md:text-6xl font-semibold tracking-tighter px-2"
              >
                Recent Works
              </AnimatedText>
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                delay={0.2}
                className="text-xl max-w-md mx-auto leading-relaxed"
              >
                Let’s discuss scope, timing, and fit.
              </AnimatedText>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              >
                <ActionButtons className="justify-center " />
              </motion.div>
            </div>

            <div className="relative group">
              <div className="flex items-center justify-center flex-col">
                <Marquee>
                  <DraggableMarquee speed={1.2} direction="right">
                    {projects.map((project, i) => (
                      <MarqueeItem key={i}>
                        <div className="p-2 md:p-3 rounded-2xl bg-linear-to-br from-white/5 to-gray-200/10 border border-white/10 backdrop-blur backdrop-saturate-180 backdrop-brightness-120 shadow-xl">
                          <Image
                            src={project}
                            alt={project + " " + i}
                            width={530}
                            height={300}
                            placeholder="blur"
                            loading="lazy"
                            className="object-cover rounded-xl shadow pointer-events-none w-75 xs:w-80 sm:w-100 md:w-120 lg:w-130 xl:w-140"
                          />
                        </div>
                      </MarqueeItem>
                    ))}
                  </DraggableMarquee>
                </Marquee>
                <Marquee>
                  <DraggableMarquee speed={2} direction="left">
                    {projects.map((project, i) => (
                      <MarqueeItem key={i}>
                        <div className="p-2 md:p-3 rounded-2xl bg-linear-to-br from-white/5 to-gray-200/10 border border-white/10 backdrop-blur backdrop-saturate-180 backdrop-brightness-120 shadow-xl">
                          <Image
                            src={project}
                            alt={project + " " + i}
                            width={530}
                            height={300}
                            placeholder="blur"
                            loading="lazy"
                            className="object-cover rounded-xl shadow pointer-events-none w-75 xs:w-80 sm:w-100 md:w-120 lg:w-130 xl:w-140"
                          />
                        </div>
                      </MarqueeItem>
                    ))}
                  </DraggableMarquee>
                </Marquee>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </div>
    </SmoothContainer>
  );
};

export default page;

"use client";

import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";
import { AnimatedText } from "@/components/ui/animated-text";
import ActionButtons from "@/components/ActionButtons";
import { WorkCarousel, type WorkCarouselItem } from "@/components/WorkCarousel";
import Work1 from "@/assets/works/Landing page 1.jpg";
import Work2 from "@/assets/works/Landing page 2.jpg";
import Work3 from "@/assets/works/Landing page 3.jpg";
import Work4 from "@/assets/works/Landing page 4.jpg";
import AwardsSection from "@/components/AwardsSection";

const works: WorkCarouselItem[] = [
  {
    title: "PROJECT AETHER",
    category: "VISUAL ENGINEERING",
    description: "Zero-latency WebGL rendering for immersive luxury commerce.",
    image: Work1,
  },
  {
    title: "PROJECT SENTINEL",
    category: "SYSTEM ARCHITECTURE",
    description:
      "Trustless biometric authentication protocols with fluid user experience.",
    image: Work2,
  },
  {
    title: "PROJECT CORTEX",
    category: "INTELLIGENT INTERFACES",
    description:
      "Adaptive dashboard logic designed to visualize complex AI outputs.",
    image: Work3,
  },
  {
    title: "PROJECT FLUX",
    category: "IDENTITY SYSTEMS",
    description:
      "A molecular design system engineered for infinite digital scale.",
    image: Work4,
  },
];

const page = () => {
  return (
    <SmoothContainer>
      <div className="overflow-hidden">
        <section className="md:py-32 pt-28 pb-16 px-6 relative">
          <div className="absolute hidden md:block inset-0 z-0 pointer-events-none">
            <div className="absolute pointer-events-none top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[200px] transform-gpu-blur" />
            <div className="absolute pointer-events-none top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[230px] transform-gpu-blur" />
            <div className="absolute pointer-events-none -bottom-40 left-[10%] size-150 rounded-full bg-[#d6795a] opacity-40 blur-[200px] blur-gpu" />
          </div>
          <div className="container mx-auto max-w-8xl pb-20">
            <div className="text-center mb-4 md:mb-16 space-y-4">
              <AnimatedText
                animationType="wordReveal"
                stagger={0.07}
                className="text-4xl lg:text-5xl font-bold tracking-tight mx-auto"
              >
                Our Case Studies
              </AnimatedText>
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                delay={0.2}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                Breaking down what drives modern brands across design, systems,
                and digital experience.
              </AnimatedText>
              <ActionButtons className="pt-4 justify-center" />
            </div>

            <WorkCarousel
              items={works}
              slideClassName="w-[85vw] md:w-[60vw] lg:w-[32.5rem]"
            />
          </div>

          <AwardsSection />

          <div className="container mx-auto max-w-8xl pt-40">
            <div className="text-center mb-4 md:mb-16 space-y-4">
              <AnimatedText
                animationType="wordReveal"
                useScrollTrigger={true}
                stagger={0.07}
                className="text-4xl lg:text-5xl font-bold tracking-tight mx-auto leading-loose"
              >
                Insights on Digital Performance
              </AnimatedText>
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                useScrollTrigger={true}
                delay={0.2}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                Breaking down what drives modern brands across design, systems,
                and digital experience.
              </AnimatedText>
              <ActionButtons className="pt-4 justify-center" />
            </div>

            <WorkCarousel
              items={works}
              slideClassName="w-[85vw] md:w-[60vw] lg:w-[32.5rem]"
            />
          </div>
        </section>
        <CTASection />
      </div>
    </SmoothContainer>
  );
};

export default page;

"use client";

import { motion } from "motion/react";
import { Triangle, Activity, Zap, Hexagon, Box } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import SmoothContainer from "@/lib/SmoothContainer";
import AnimatedLogoCloud from "@/components/LogoCloud";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedChip } from "@/components/AnimatedChip";

const TECH_STACK = [
  { icon: Triangle, label: "Vercel", showIcon: true },
  { icon: null, label: "React", showIcon: false },
  { icon: null, label: "GSAP", showIcon: false },
  { icon: Activity, label: "blender", showIcon: true },
  { icon: null, label: "Figma", showIcon: false },
  { icon: null, label: "aws", showIcon: false },
  { icon: Zap, label: "hotjar", showIcon: true },
  { icon: Hexagon, label: "Hostinger", showIcon: true },
  { icon: Box, label: "Notion", showIcon: true },
];

const CONTACT_METHODS = [
  {
    label: "Video Call",
    content: "Start the Conversation",
    isLink: true,
    href: "https://calendly.com/d/ctmb-trz-z3c/introduction",
  },
  {
    label: "Email",
    content: "project@refractweb.com",
    isLink: true,
    href: "mailto:project@refractweb.com",
  },
  {
    label: "Address",
    content: (
      <div className="leading-snug">
        6977 Navajo Rd #520
        <br />
        San Diego, CA 92119
      </div>
    ),
    isLink: false,
  },
];

const ContactPage = () => {
  const { rotateX, rotateY, mousePosition } = useMouseTilt();

  return (
    <SmoothContainer>
      <div className="relative min-h-screen flex flex-col bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-br from-secondary2/40 via-background to-background" />
          <div
            className="absolute top-[-10%] left-[1%] w-[50vw] h-[50vw] rounded-full bg-primary opacity-20 blur-[120px]"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            }}
          />
        </div>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-6 pt-12 lg:pt-32 grow flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                className="text-5xl lg:text-6xl font-bold tracking-tight text-grad"
              >
                Work With Us
              </AnimatedText>
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                delay={0.1}
                className="text-muted-foreground text-lg lg:text-xl font-light leading-relaxed max-w-md"
              >
                Have a vision in mind? Let's explore how we can bring it to
                life.
              </AnimatedText>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-3">
              {CONTACT_METHODS.map((method, idx) => (
                <ContactCard
                  key={idx}
                  label={method.label}
                  content={method.content}
                  isLink={method.isLink}
                  href={method.href}
                  icon={method.isLink ? undefined : null}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Video */}
          <AnimatedChip containerClassName="w-full lg:w-1/2 flex justify-center lg:justify-end relative isolate perspective-[1000px]" className="translate-x-10" />
        </main>

        <AnimatedLogoCloud />
      </div>
    </SmoothContainer>
  );
};

export default ContactPage;

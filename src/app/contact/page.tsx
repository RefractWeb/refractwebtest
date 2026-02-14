"use client";

import { ContactCard } from "@/components/ContactCard";
import SmoothContainer from "@/lib/SmoothContainer";
import AnimatedLogoCloud from "@/components/LogoCloud";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedChip } from "@/components/AnimatedChip";
import BgGrad from "@/components/ui/bg-grad";
import { motion } from "motion/react";

const CONTACT_METHODS = [
  {
    label: "Video Call",
    content: "Start the Conversation",
    isLink: false,
    href: null,
    calendlyLink:
      "https://calendly.com/d/ctmb-trz-z3c/introduction?embed_type=Inline&hide_gdpr_banner=1&background_color=15191d&text_color=ffffff&primary_color=f59768",
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
        4545 La Jolla Village Dr,
        <br />
        San Diego, CA 92122
      </div>
    ),
    isLink: false,
  },
];

const ContactPage = () => {
  return (
    <SmoothContainer>
      <div className="relative min-h-screen flex flex-col bg-background">
        <BgGrad />
        {/* Background Elements */}
        <div className="absolute hidden md:block inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] blur-gpu" />
          <div className="absolute top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[250px] blur-gpu" />
        </div>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-4 pt-32 grow flex flex-col lg:flex-row items-center gap-8 overflow-x-clip max-w-8xl">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                className="text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Work With Us
              </AnimatedText>
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                delay={0.2}
                className="text-lg lg:text-xl leading-relaxed max-w-md"
              >
                Have a vision in mind? Let's explore how we can bring it to
                life.
              </AnimatedText>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-2 sm:gap-3 max-w-lg">
              {CONTACT_METHODS.map((method, idx) => (
                <ContactCard
                  key={idx}
                  label={method.label}
                  content={method.content}
                  isLink={method.isLink}
                  href={method.href}
                  calendlyLink={method.calendlyLink}
                  icon={method.isLink ? undefined : null}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Video */}
          <AnimatedChip containerClassName="w-full md:w-1/2 isolate perspective-[1000px] min-h-[40vh]" />
        </main>

        <AnimatedLogoCloud className="md:-translate-y-12" />
      </div>
    </SmoothContainer>
  );
};

export default ContactPage;

"use client";

import { ContactCard } from "@/components/ContactCard";
import SmoothContainer from "@/lib/SmoothContainer";
import AnimatedLogoCloud from "@/components/LogoCloud";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedChip } from "@/components/AnimatedChip";
import {
  openCalendlyDialog,
  CalendlyWidget,
} from "@/components/CalendlyWidget";

const CONTACT_METHODS = [
  {
    label: "Video Call",
    content: "Start the Conversation",
    isLink: false,
    href: null,
    onClick: () => openCalendlyDialog(),
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
  const { mousePosition } = useMouseTilt();

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
        <main className="relative z-10 container mx-auto px-6 pt-32 grow flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
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
            <div className="flex flex-col gap-3">
              {CONTACT_METHODS.map((method, idx) => (
                <ContactCard
                  key={idx}
                  label={method.label}
                  content={method.content}
                  isLink={method.isLink}
                  href={method.href}
                  onClick={method.onClick}
                  icon={method.isLink ? undefined : null}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Video */}
          <AnimatedChip
            containerClassName="w-full md:w-1/2 isolate perspective-[1000px] min-h-[40vh]"
            className="md:translate-x-10"
          />
        </main>

        <AnimatedLogoCloud />
      </div>
      <CalendlyWidget />
    </SmoothContainer>
  );
};

export default ContactPage;

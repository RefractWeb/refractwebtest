"use client";

import { useEffect } from "react";
import { ContactCard } from "@/components/ContactCard";
import AnimatedLogoCloud from "@/components/LogoCloud";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedChip } from "@/components/AnimatedChip";
import BgGrad from "@/components/ui/bg-grad";

const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

const CONTACT_METHODS = [
  {
    label: "Video Call",
    content: "Start the Conversation",
    isLink: false,
    href: null,
    calendlyLink:
      "https://calendly.com/d/ctmb-trz-z3c/introduction?embed_type=Inline&hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1&background_color=15191d&text_color=ffffff&primary_color=f59768",
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
  useEffect(() => {
    if (
      !document.querySelector<HTMLScriptElement>(
        `script[src="${CALENDLY_SCRIPT_SRC}"]`,
      )
    ) {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <link rel="preconnect" href="https://calendly.com" crossOrigin="" />
      <link
        rel="preconnect"
        href="https://assets.calendly.com"
        crossOrigin=""
      />
      <BgGrad />
      {/* Background Elements */}
      <div className="absolute hidden md:block inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur" />
        <div className="absolute top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[250px] transform-gpu-blur" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 md:px-4 pt-26 grow flex flex-col lg:flex-row items-start lg:items-center gap-10 md:gap-0 overflow-x-clip max-w-8xl">
        {/* Left Section */}
        <div className="flex flex-col items-start px-0 md:px-8 justify-center md:w-1/2 gap-4 md:gap-6">
          <div className="space-y-3 md:space-y-4 max-w-md">
            <AnimatedText
              animationType="wordReveal"
              stagger={0.08}
              className="text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Work With Us
            </AnimatedText>
            <AnimatedText
              animationType="slideUp"
              splitType="lines"
              delay={0.24}
              className="text-lg lg:text-xl leading-relaxed"
            >
              Have a vision in mind? Let's explore how we can bring it to life.
            </AnimatedText>
          </div>

          {/* Contact Cards */}
          <div className="flex w-full flex-col gap-2 sm:gap-3 max-w-md">
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
  );
};

export default ContactPage;

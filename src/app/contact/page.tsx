"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
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
  const cardsRef = useRef<HTMLDivElement>(null);
  const logoCloudRef = useRef<HTMLDivElement>(null);

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

  useGSAP(() => {
    const cards = cardsRef.current?.querySelectorAll(
      ":scope > button, :scope > a",
    );
    if (cards && cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "expo.out",
          stagger: 0.06,
          delay: 0.3,
        },
      );
    }

    if (logoCloudRef.current) {
      gsap.fromTo(
        logoCloudRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 1.6,
        },
      );
    }
  }, []);

  return (
    <div className="relative md:min-h-dvh flex flex-col bg-background">
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
      <main className="relative z-10 grow flex flex-col md:flex-row items-center mx-auto contact-hero contact-col-gap w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-left flex flex-col contact-text-stack">
          <AnimatedText
            animationType="wordReveal"
            stagger={0.08}
            className="contact-heading font-bold"
          >
            Work With Us
          </AnimatedText>
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            delay={0.24}
            className="contact-body text-pretty"
          >
            Have a vision in mind? Let's explore how we can bring it to life.
          </AnimatedText>

          {/* Contact Cards */}
          <div
            ref={cardsRef}
            className="flex w-full flex-col contact-card-stack [&>button]:opacity-0 [&>a]:opacity-0"
          >
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
        <motion.div
          className="w-full md:w-1/2 opacity-0 contact-chip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        >
          <AnimatedChip
            containerClassName="w-full isolate perspective-[1000px]"
            className="xl:-translate-x-12"
          />
        </motion.div>
      </main>

      <div ref={logoCloudRef} className="opacity-0">
        <AnimatedLogoCloud className="lg:-translate-y-12" />
      </div>
    </div>
  );
};

export default ContactPage;

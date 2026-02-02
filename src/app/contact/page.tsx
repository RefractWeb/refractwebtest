"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "motion/react";
import { Triangle, Activity, Zap, Hexagon, Box } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import SmoothContainer from "@/lib/SmoothContainer";
import AnimatedLogoCloud from "@/components/LogoCloud";

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
    href: "#",
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { stiffness: 90, damping: 30, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      setMousePosition({ x, y });
      rotateX.set(y * -15);
      rotateY.set(x * 15);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);

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
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
              maskImage: "linear-gradient(to right, transparent, black 60%)",
            }}
          />
        </div>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-6 pt-12 lg:pt-32 grow flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-grad">
                Work With Us
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl font-light leading-relaxed max-w-md">
                Have a vision in mind? Let's explore how we can bring it to
                life.
              </p>
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
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative isolate perspective-[1000px]">
            <motion.video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md lg:max-w-full h-auto object-contain brightness-120 saturate-110 drop-shadow-2xl"
              src="/chip.webm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </main>

        <AnimatedLogoCloud />
      </div>
    </SmoothContainer>
  );
};

export default ContactPage;

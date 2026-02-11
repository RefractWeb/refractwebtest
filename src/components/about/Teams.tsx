import { Button } from "@/components/ui/button";
import Link from "next/link";
import adamImg from "@/assets/adam.png";
import jakeImg from "@/assets/jake.png";
import TeamMember, { Member } from "./MemberCard";
import { AnimatedText } from "../ui/animated-text";
import ActionButtons from "../ActionButtons";

export default function Teams() {
  const members: Member[] = [
    {
      name: "Adam Guarino",
      role: "Co-Founder and COO",
      bio: "Adam orchestrates creative strategy and production for high-growth organizations and enterprise partners. He bridges the gap between ambitious visual concepts and operational reality, driving projects from direction to delivery. Trusted to execute in high-stakes environments, he brings the structure required to turn digital initiatives into commercial impact.",
      email: "adam@refractweb.com",
      linkedin: "https://www.linkedin.com/in/adam-guarino/",
      img: adamImg,
    },
    {
      name: "Jake Young",
      role: "Co-Founder and CEO",
      bio: "Jake operates across major creative markets including San Diego and London, contributing to work built for global visibility and commercial impact. He works alongside creative and marketing teams to move projects from direction to delivery, supporting brand and campaign platforms where precision, judgment, and reliability matter.",
      email: "jake@refractweb.com",
      linkedin: "https://www.linkedin.com/in/jacob-young9/",
      img: jakeImg,
    },
  ];

  return (
    <section className="py-40 px-6 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute pointer-events-none top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[200px] -z-10" />
        <div className="absolute pointer-events-none top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[230px] -z-10" />
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-6 mb-16">
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.15]"
          >
            Working with those <br /> who set the standard
          </AnimatedText>
          <AnimatedText
            animationType="slideUp"
            splitType="lines"
            delay={0.4}
            className="text-xl"
          >
            Across media, technology, and high-visibility environments.
          </AnimatedText>
          <ActionButtons />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {members.map((m) => (
            <TeamMember key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

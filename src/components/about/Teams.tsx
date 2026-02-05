import { Button } from "@/components/ui/button";
import Link from "next/link";
import adamImg from "@/assets/adam.png";
import jakeImg from "@/assets/jake.png";
import TeamMember, { Member } from "./MemberCard";
import { AnimatedText } from "../ui/animated-text";

export default function Teams() {
  const members: Member[] = [
    {
      name: "Adam Guarino",
      role: "Co-Founder and COO",
      bio: "Adam orchestrates creative strategy and production for high-growth organizations and enterprise partners. He bridges the gap between ambitious visual concepts and operational reality, driving projects from direction to delivery. Trusted to execute in high-stakes environments, he brings the structure required to turn digital initiatives into commercial impact.",
      email: "adam@refractweb.com",
      linkedin: "https://linkedin.com",
      img: adamImg,
    },
    {
      name: "Jake Young",
      role: "Co-Founder and CEO",
      bio: "Jake operates across major creative markets including San Diego and London, contributing to work built for global visibility and commercial impact. He works alongside creative and marketing teams to move projects from direction to delivery, supporting brand and campaign platforms where precision, judgment, and reliability matter.",
      email: "jake@refractweb.com",
      linkedin: "https://linkedin.com",
      img: jakeImg,
    },
  ];

  return (
    <section className="py-40 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="space-y-6">
            <AnimatedText
              useScrollTrigger={true}
              animationType="slideUp"
              splitType="lines"
              className="text-grad text-5xl md:text-6xl font-semibold tracking-tighter leading-[0.9]"
            >
              Working with those <br /> who set the standard
            </AnimatedText>
            <AnimatedText
              useScrollTrigger={true}
              animationType="slideUp"
              splitType="lines"
              delay={0.1}
              className="text-muted-foreground text-xl font-medium"
            >
              Across media, technology, and high-visibility environments.
            </AnimatedText>
          </div>
          <Link href="/contact" className="hidden md:block">
            <Button size="lg">Work with us</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {members.map((m) => (
            <TeamMember key={m.name} member={m} />
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link href="/contact">
            <Button size="lg" className="w-full py-7 text-xl rounded-full">
              Work with us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

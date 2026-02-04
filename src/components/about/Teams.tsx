import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import adamImg from "@/assets/adam.png";
import jakeImg from "@/assets/jake.png";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-grad text-5xl md:text-6xl font-semibold tracking-tighter leading-[0.9]">
              Working with those <br /> who set the standard
            </h2>
            <p className="text-muted-foreground text-xl font-medium">
              Across media, technology, and high-visibility environments.
            </p>
          </div>
          <Link href="/contact" className="hidden md:block">
            <Button size="lg">Work with us</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Adam Photo Card */}
          <div className="flex flex-col bg-linear-to-b to-[#F59768] from-[#0C112D] rounded-4xl border border-white/5 overflow-hidden group relative">
            <Image
              src={adamImg}
              alt="Adam Guarino"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 " />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold tracking-tight">
                Adam Guarino
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                Co-Founder and COO
              </p>
            </div>
          </div>

          {/* Adam Bio Card */}
          <div className="flex flex-col bg-neutral-900/40 rounded-4xl border border-white/5 p-8 justify-between hover:border-white/10 transition-all duration-500">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">
                Adam Guarino
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                Adam orchestrates creative strategy and production for
                high-growth organizations and enterprise partners. He bridges
                the gap between ambitious visual concepts and operational
                reality, driving projects from direction to delivery. Trusted to
                execute in high-stakes environments, he brings the structure and
                energy required to turn digital initiatives into commercial
                impact.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="mailto:adam@refractweb.com"
                className="p-2.5 bg-white/5 rounded-xl text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:bg-white/10"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2.5 bg-white/5 rounded-xl text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:bg-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Jake Photo Card */}
          <div className="flex flex-col bg-linear-to-b to-[#F59768] from-[#0C112D] rounded-4xl border border-white/5 overflow-hidden group relative">
            <Image
              src={jakeImg}
              alt="Jake Young"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold tracking-tight">Jake Young</h3>
              <p className="text-muted-foreground text-sm font-medium">
                Co-Founder and CEO
              </p>
            </div>
          </div>

          {/* Jake Bio Card */}
          <div className="flex flex-col bg-neutral-900/40 rounded-4xl border border-white/5 p-8 justify-between hover:border-white/10 transition-all duration-500">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">Jake Young</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                Jake operates across major creative markets including San Diego
                and London, contributing to work built for global visibility and
                commercial impact. He works alongside creative and marketing
                teams to move projects from direction to delivery, supporting
                brand and campaign platforms where precision, judgment, and
                reliability matter.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="mailto:jake@refractweb.com"
                className="p-2.5 bg-white/5 rounded-xl text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:bg-white/10"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2.5 bg-white/5 rounded-xl text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:bg-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
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

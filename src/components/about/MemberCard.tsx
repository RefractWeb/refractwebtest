import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import BgGrad from "../ui/bg-grad";

export type Member = {
  name: string;
  role: string;
  bio: string;
  email: string;
  linkedin?: string;
  img: StaticImageData;
  gradientClass?: string;
};

export function TeamMember({ member }: { member: Member }) {
  return (
    <>
      {/* Photo Card */}
      <div
        className={cn(
          "flex flex-col rounded-2xl overflow-hidden group relative",
          member.gradientClass ??
            "saturate-110 bg-linear-to-b to-[#f59566] from-[#0C112D]",
        )}
      >
        <Image
          src={member.img}
          alt={member.name}
          className="object-cover mt-auto group-hover:scale-105 transition-all duration-700 brightness-110"
          placeholder="blur"
        />
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-background via-background/60" />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
          <p className="text-muted-foreground text-xs font-medium">
            {member.role}
          </p>
        </div>
      </div>

      {/* Bio Card */}
      <div className="flex flex-col bg-neutral-900/40 rounded-2xl p-6 justify-between hover:border-white/10 transition-all duration-500 relative backdrop-blur bg-grad-up">
        <div className="space-y-4">
          <h3 className="text-xl text-grad font-bold tracking-tight mb-12 md:mb-52">
            {member.name}
          </h3>
          <p className="text-foreground/90 text-xs font-medium">{member.bio}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <Link
            href={`mailto:${member.email}`}
            className="text-foreground/90 hover:text-primary transition-colors duration-300"
          >
            <Mail className="size-4" />
          </Link>
          <Link
            href={member.linkedin ?? "https://linkedin.com"}
            className="text-foreground/90 hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="size-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default TeamMember;

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

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
          member.gradientClass ?? "bg-linear-to-b to-[#f59566] from-[#0C112D]",
        )}
      >
        <Image
          src={member.img}
          alt={member.name}
          className="object-cover mt-auto group-hover:scale-105 transition-all duration-700"
          placeholder="blur"
        />
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-linear-to-t from-black" />
        <div className="absolute inset-0" />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
          <p className="text-muted-foreground text-xs font-medium">
            {member.role}
          </p>
        </div>
      </div>

      {/* Bio Card */}
      <div className="flex flex-col bg-neutral-900/40 rounded-2xl border border-white/5 p-6 justify-between hover:border-white/10 transition-all duration-500">
        <div className="space-y-4">
          <h3 className="text-xl text-grad font-bold tracking-tight mb-52">
            {member.name}
          </h3>
          <p className="text-muted-foreground text-xs font-medium">
            {member.bio}
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href={`mailto:${member.email}`}
            className="p-2.5 bg-white/5 rounded-xl text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:bg-white/10"
          >
            <Mail className="size-5" />
          </Link>
          <Link
            href={member.linkedin ?? "https://linkedin.com"}
            className="p-2.5 bg-white/5 rounded-xl text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:bg-white/10"
          >
            <Linkedin className="size-5" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default TeamMember;

"use client";

import { Calendar } from "lucide-react";
import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const CalendlyFrame = ({ src }: { src: string }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={src}
        width="100%"
        height="100%"
        frameBorder="0"
        className="rounded-2xl"
        title="Select a Date & Time - Calendly"
      />
    </div>
  );
};

interface ContactCardProps {
  label: string;
  content: string | ReactNode;
  isLink?: boolean;
  href?: string | null;
  icon?: ReactNode;
  onClick?: () => void;
  calendlyLink?: string;
}

export const ContactCard = ({
  label,
  content,
  isLink = false,
  href,
  icon,
  onClick,
  calendlyLink,
}: ContactCardProps) => {
  const CardComponent = isLink && href ? "a" : "button";
  const cardProps = isLink && href ? { href } : {};

  const Card = (
    <CardComponent
      {...cardProps}
      onClick={onClick}
      type={isLink ? undefined : "button"}
      target={isLink ? "_blank" : undefined}
      className="group relative bg-white/2 hover:bg-white/5 border border-white/10 rounded-2xl p-4 transition-all duration-300 cursor-pointer overflow-hidden w-full text-left backdrop-blur-md glass-1"
    >
      <div className="relative z-10">
        <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
          {label}
        </span>
        <div className="text-lg font-medium text-foreground group-hover:text-primary2 transition-colors flex items-center gap-2">
          {content}
          {(isLink && icon) || calendlyLink ? (
            <Calendar className="size-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
          ) : null}
        </div>
      </div>
    </CardComponent>
  );

  if (calendlyLink) {
    return (
      <Dialog>
        <DialogTrigger asChild>{Card}</DialogTrigger>
        <DialogContent className="sm:max-w-5xl md:h-170 max-h-[80vh] h-[75vh] p-1 md:p-4 overflow-hidden border border-white/20 bg-muted/10 backdrop-blur-lg rounded-2xl">
          <CalendlyFrame src={calendlyLink} />
        </DialogContent>
      </Dialog>
    );
  }

  return Card;
};

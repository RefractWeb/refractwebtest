"use client";

import { Calendar } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const CalendlyFrame = ({ src }: { src: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const iframe = containerRef.current.querySelector(
      "iframe",
    ) as HTMLIFrameElement | null;
    if (!iframe) return;

    iframe.style.background = "transparent";
    iframe.style.borderRadius = "16px";
    iframe.style.filter =
      "invert(1) hue-rotate(180deg) brightness(1.08) contrast(0.9) saturate(0.90)";
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <iframe
        src={src}
        width="100%"
        height="100%"
        frameBorder="0"
        className="rounded-xl"
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
      className="group relative bg-white/2 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-300 cursor-pointer overflow-hidden w-full text-left backdrop-blur-md"
      style={{
        boxShadow:
          "rgb(193 193 193 / 10%) -3px -4px 20px inset, rgb(0 0 0 / 25%) 6px 7px 20px inset",
      }}
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
        <DialogContent className="sm:max-w-7xl md:h-180 max-h-[82vh] h-[80vh] p-1 md:p-4 overflow-hidden border border-white/20 bg-muted/10 backdrop-blur-lg rounded-2xl">
          <CalendlyFrame src={calendlyLink} />
        </DialogContent>
      </Dialog>
    );
  }

  return Card;
};

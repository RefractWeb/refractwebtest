"use client";

import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface ContactCardProps {
  label: string;
  content: string | ReactNode;
  isLink?: boolean;
  href?: string;
  icon?: ReactNode;
}

export const ContactCard = ({
  label,
  content,
  isLink = false,
  href,
  icon,
}: ContactCardProps) => {
  const CardComponent = isLink && href ? "a" : "div";
  const cardProps = isLink && href ? { href } : {};

  return (
    <CardComponent
      {...cardProps}
      target="_blank"
      className="group relative bg-white/2 hover:bg-white/10 border border-white/20 rounded-2xl p-5 transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        boxShadow: "#ffffff2f 0px 0px 13px inset",
      }}
    >
      <div className="relative z-10">
        <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
          {label}
        </span>
        <div className="text-lg font-medium text-foreground group-hover:text-primary2 transition-colors flex items-center gap-2">
          {content}
          {isLink && icon && (
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
          )}
        </div>
      </div>
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </CardComponent>
  );
};

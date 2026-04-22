"use client";

import { Calendar, X } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

const CalendlyFrame = ({ src }: { src: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const init = () => {
      if (cancelled) return;
      if (ref.current && ref.current.childElementCount > 0) return;
      if (window.Calendly && ref.current) {
        window.Calendly.initInlineWidget({
          url: src,
          parentElement: ref.current,
        });
        return;
      }
      timeoutId = setTimeout(init, 100);
    };

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
    init();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [src]);

  return <div ref={ref} className="w-full h-full overflow-hidden rounded-2xl" />;
};

const CalendlyModal = ({
  src,
  isOpen,
  onClose,
}: {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (isOpen) setHasMounted(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 opacity-0"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.96,
          y: isOpen ? 0 : 12,
        }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="relative contact-modal bg-[#15191d] overflow-hidden border border-white/10 shadow-2xl will-change-transform opacity-0"
      >
        {hasMounted && <CalendlyFrame src={src} />}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="contact-modal-close bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="size-[0.9em]" />
        </button>
      </motion.div>
    </motion.div>
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
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const CardComponent = isLink && href ? "a" : "button";
  const cardProps = isLink && href ? { href } : {};

  const Card = (
    <CardComponent
      {...cardProps}
      onClick={calendlyLink ? () => setIsOpen(true) : onClick}
      type={isLink ? undefined : "button"}
      target={isLink ? "_blank" : undefined}
      className="group relative bg-white/2 hover:bg-white/5 border border-white/10 contact-card-pad transition-all duration-300 cursor-pointer overflow-hidden w-full text-left backdrop-blur-md glass-1"
    >
      <div className="relative z-10">
        <span className="contact-card-label text-muted-foreground uppercase block md:mb-1">
          {label}
        </span>
        <div className="contact-card-text font-medium text-foreground group-hover:text-primary2 transition-colors flex items-center gap-2">
          {content}
          {(isLink && icon) || calendlyLink ? (
            <Calendar className="size-[0.9em] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
          ) : null}
        </div>
      </div>
    </CardComponent>
  );

  if (calendlyLink) {
    return (
      <>
        {Card}
        <CalendlyModal
          src={calendlyLink}
          isOpen={isOpen}
          onClose={handleClose}
        />
      </>
    );
  }

  return Card;
};

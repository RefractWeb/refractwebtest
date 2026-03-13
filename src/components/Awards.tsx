"use client";

import Image from "next/image";
import { ArrowUpRight, Trophy, Award, Sparkles, Medal, X } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/animate-ui/components/radix/dialog";

const awards = [
  { label: "Best UI", sublabel: "Design", icon: Sparkles },
  { label: "Best UX", sublabel: "Design", icon: Award },
  { label: "Best", sublabel: "Innovation", icon: Trophy },
  { label: "Special", sublabel: "Kudos", icon: Medal },
];

const Awards = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="fixed bottom-16 right-0 bg-black/80 backdrop-blur-sm pr-6 pl-2.5 py-4 cursor-pointer rounded-l-md z-50 translate-x-4 transition-all duration-500 hover:translate-x-1 h-48 hidden sm:flex flex-col items-center gap-3 group"
          style={{
            boxShadow:
              "inset rgb(157 136 113 / 18%) 1px 2px 30px 3px, 0 0 0 1px rgb(157 136 113 / 12%)",
          }}
          aria-label="View CSSDA Awards"
        >
          <Image
            src={"/cssda.svg"}
            alt="CSSDA logo"
            width={36}
            height={36}
            className="opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <p className="-rotate-90 text-sm tracking-widest uppercase font-medium absolute bottom-13 -right-2 w-max">
            4x Winners
          </p>
        </button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="md:max-w-3xl p-0 border-0 overflow-hidden rounded-2xl"
        style={{
          background: "oklch(9% 0.004 260)",
          boxShadow:
            "0 0 0 1px rgb(157 136 113 / 8%), 0 60px 120px -20px rgba(0,0,0,0.95)",
        }}
      >
        {/* ── Top highlight edge ── */}
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, var(--primary2) 50%, transparent 90%)",
            opacity: 0.5,
          }}
        />

        <div className="relative z-10">
          {/* ══════ Hero section ══════ */}
          <div className="flex flex-col items-center text-center pt-12 pb-8 px-10">
            {/* CSSDA Logo */}
            <div className="relative mb-6">
              <div className="absolute inset-0 blur-2xl rounded-full bg-primary2 opacity-25 scale-250" />
              <div
                className="relative size-20 rounded-xl flex items-center justify-center bg-linear-to-br from-primary saturate-150 to-gray-950"
                style={{
                  border: "1px solid rgb(157 136 113 / 20%)",
                  boxShadow:
                    "inset 0 1px 8px rgb(255 255 255 / 8%), 0 12px 32px -6px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src="/cssda.svg"
                  alt="CSSDA"
                  width={50}
                  height={50}
                  draggable={false}
                  className="size-14 select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Title */}
            <p
              className="text-[10px] uppercase tracking-[0.35em] font-bold mb-3"
              style={{ color: "var(--primary2)", opacity: 0.8 }}
            >
              CSS Design Awards
            </p>

            {/* Big rating */}
            <div className="relative mb-2">
              <span
                className="text-5xl lg:text-8xl sm:text-7xl font-black leading-none tabular-nums tracking-tight block"
                style={{
                  background:
                    "linear-gradient(160deg, #fff 20%, var(--primary2) 70%, var(--primary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                7.77
              </span>
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/90 font-bold">
              Overall Score
            </p>
          </div>

          {/* ══════ Divider ══════ */}
          <div className="relative mx-8">
            <div className="h-px bg-linear-to-r from-transparent via-muted" />
          </div>

          {/* ══════ Awards ══════ */}
          <div className="px-8 pt-7 pb-6">
            <div className="grid grid-cols-4 gap-3">
              {awards.map((award, i) => {
                const Icon = award.icon;
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col items-center text-center gap-3 md:gap-5 py-5 md:py-8 md:px-8 px-2 rounded-2xl transition-all duration-400"
                    style={{
                      background:
                        "linear-gradient(180deg, oklch(14% 0.006 260) 0%, oklch(10% 0.004 260) 100%)",
                      border: "1px solid rgb(255 255 255 / 4%)",
                      boxShadow: "inset 0 1px 0 rgb(255 255 255 / 5%)",
                    }}
                  >
                    {/* Hover state */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, var(--primary)/8% 0%, transparent 60%)",
                        border: "1px solid rgb(157 136 113 / 20%)",
                      }}
                    />

                    {/* Icon circle */}
                    <div
                      className="relative size-10 md:size-14 rounded-xl flex items-center justify-center transition-transform duration-400 group-hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(145deg, oklch(20% 0.02 40) 0%, oklch(13% 0.01 40) 100%)",
                        border: "1px solid rgb(157 136 113 / 25%)",
                        boxShadow:
                          "inset 0 1px 0 rgb(255 255 255 / 8%), 0 4px 12px -4px rgba(0,0,0,0.5)",
                      }}
                    >
                      <Icon
                        className="size-5 md:size-7 text-primary2"
                        style={{
                          strokeWidth: 1.2,
                          filter: "drop-shadow(0 0 3px rgba(245,151,104,0.4))",
                        }}
                      />
                    </div>

                    {/* Label */}
                    <div className="relative">
                      <span className="text-sm font-bold uppercase tracking-[0.08em] leading-none block">
                        {award.label}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] leading-none mt-1 block text-muted-foreground/80">
                        {award.sublabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <DialogClose className="text-xs font-semibold transition-all duration-300 cursor-pointer p-2 rounded-xl hover:bg-white/5 absolute top-4 right-4 text-muted-foreground/50 hover:text-foreground">
            <X />
          </DialogClose>
          {/* ══════ Footer ══════ */}
          <div className="px-8 pb-8 flex items-center justify-end gap-4">
            <a
              href="https://cssdesignawards.com/sites/refractweb/48905"
              target="_blank"
              rel="noopener noreferrer"
              className="button group inline-flex items-center gap-2 text-xs px-5! py-2.5!"
            >
              View on CSSDA
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Awards;

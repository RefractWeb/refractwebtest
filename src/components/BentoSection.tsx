import {
  ArrowRight,
  Code,
  Globe,
  Palette,
  Sparkles,
  Video,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import img1 from "@/assets/works/Landing page 3.jpg";
import img2 from "@/assets/iconsgrp.png";

export const BentoSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-grad mb-6"
          >
            The full spectrum of core capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10"
          >
            We replace the need for multiple vendors. From brand identity to
            custom software, we build the entire ecosystem your business runs
            on.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="button"
          >
            Work with us
          </motion.button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[350px]">
          {/* Web Development - Top Left (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative bg-secondary3/20 border border-border/50 rounded-2xl overflow-hidden group p-8 md:p-14"
          >
            <div className="absolute -left-10 blur-[540px] size-250 bg-secondary3 rounded-full"></div>

            <div className="relative z-10 flex flex-col h-full gap-4">
              <Globe className="size-6 text-foreground/80" />
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-grad">
                Web Development
              </h3>
              <p className="text-grad max-w-xs">
                Transform concepts into high-performance experiences.
                Engineering story-driven websites and premium digital products.
              </p>
              <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-colors">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <Image
              src={img1}
              alt="Web Development Illustration"
              className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700 absolute right-[-12%] top-[-6%] w-auto h-[300px] pointer-events-none select-none rounded-2xl overflow-hidden bg-red-50"
            />
          </motion.div>

          {/* Branding - Right (1x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:row-span-2 relative bg-secondary3/20 border border-border/50 rounded-2xl overflow-hidden group p-8 md:p-14"
          >
            <div className="relative z-10 flex flex-col h-full gap-4">
              <Palette className="size-6 text-foreground/80" />
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-grad">
                Branding
              </h3>
              <p className="text-grad max-w-xs">
                We build strategic identities designed to secure a premium
                market position.
              </p>
              <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-colors">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="absolute bottom-30 z-10 left-0 w-full">
              <Image src={img2} alt="Branding Illustration" />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 blur-[320px] size-110 bg-primary/50 rounded-full pointer-events-none" />
          </motion.div>

          {/* Software / AI - Bottom Left (1x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:row-span-2 relative bg-card/40 border border-border/50 rounded-2xl overflow-hidden group flex flex-col"
          >
            {/* Code Visual */}
            <div className="h-[250px] relative bg-[#0d1117]/80 rounded-t-[40px] border-b border-border/50 overflow-hidden">
              <div className="absolute top-4 left-6 flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="p-8 pt-12 font-mono text-sm space-y-2 opacity-60 group-hover:opacity-100 transition-all duration-500">
                <div className="text-purple-400">
                  function <span className="text-blue-400">optimizeAI</span>(){" "}
                  {"{"}
                </div>
                <div className="pl-4 text-foreground/80">
                  const results = {"["}
                </div>
                <div className="pl-8 text-green-400">"neural_path",</div>
                <div className="pl-8 text-green-400">"data_sync",</div>
                <div className="pl-4 text-foreground/80">{"]"};</div>
                <div className="pl-4 text-purple-400">
                  return <span className="text-foreground/80">network.</span>
                  <span className="text-blue-400">process</span>(results);
                </div>
                <div className="text-purple-400">{"}"}</div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-[#0d1117] to-transparent" />
            </div>

            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Code className="size-6 text-foreground/80" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Software / AI:
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                We replace manual processes with intelligent software tailored
                to your specific operations.
              </p>
              <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-colors">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-blue-500/5 to-transparent pointer-events-none" />
          </motion.div>

          {/* Everything - Center (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-card/40 border border-border/50 rounded-2xl overflow-hidden group p-8 md:p-10 flex items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 mx-auto border border-white/10 group-hover:rotate-12 transition-transform duration-500">
                <Sparkles className="size-6 text-foreground/80" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Everything
                <br />
                in One Place
              </h3>
            </div>
          </motion.div>

          {/* 3D Animation - Bottom Right (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 relative bg-card/40 border border-border/50 rounded-2xl overflow-hidden group p-8 md:p-10"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Video className="size-6 text-foreground/80" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                3D Animation
              </h3>
              <p className="text-muted-foreground text-lg max-w-sm mb-auto">
                We build cinematic 3D assets designed to give your brand a
                premium feel.
              </p>
              <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-colors mt-6">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Illustration */}
            <div className="absolute right-[-5%] bottom-[-10%] w-[400px] h-[250px] md:w-[600px] md:h-[400px] pointer-events-none select-none">
              <Image
                src="/animation_ui.png"
                alt="3D Animation Illustration"
                fill
                className="object-contain opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-l from-purple-500/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

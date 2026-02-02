import {
  ArrowRight,
  Code,
  Globe,
  Palette,
  Sparkles,
  Video,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Web Development - Top Left (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative bg-card/40 border border-border/50 rounded-[40px] overflow-hidden group p-8 md:p-10"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Web Development:
              </h3>
              <p className="text-muted-foreground text-lg max-w-xs mb-auto">
                Transform concepts into high-performance experiences.
                Engineering story-driven websites and premium digital products.
              </p>
              <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors mt-6">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Illustration */}
            <div className="absolute right-[-10%] top-[-10%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] pointer-events-none select-none">
              <Image
                src="/torus.png"
                alt="Web Development Illustration"
                fill
                className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Branding - Right (1x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:row-span-2 relative bg-card/40 border border-border/50 rounded-[40px] overflow-hidden group p-8 md:p-10"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Palette className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Branding:
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                We build strategic identities designed to secure a premium
                market position.
              </p>
              <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors mb-auto">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Branding UI Elements */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-3xl group-hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-bold text-lg italic">
                    R
                  </div>
                  <div className="space-y-1">
                    <div className="w-20 h-2 bg-white/20 rounded-full" />
                    <div className="w-12 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full blur-md" />
                    <div className="w-3 h-3 bg-orange-500/80 rounded-full absolute" />
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-center items-center gap-1 group-hover:bg-white/10 transition-colors">
                    <div className="w-8 h-1 bg-white/20 rounded-full" />
                    <div className="w-8 h-1 bg-white/10 rounded-full" />
                    <div className="w-8 h-1 bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-orange-500/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Software / AI - Bottom Left (1x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:row-span-2 relative bg-card/40 border border-border/50 rounded-[40px] overflow-hidden group flex flex-col"
          >
            {/* Code Visual */}
            <div className="h-[250px] relative bg-[#0d1117]/80 rounded-t-[40px] border-b border-border/50 overflow-hidden">
              <div className="absolute top-4 left-6 flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="p-8 pt-12 font-mono text-sm space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-purple-400">
                  function <span className="text-blue-400">optimizeAI</span>(){" "}
                  {"{"}
                </div>
                <div className="pl-4 text-white/80">const results = {"["}</div>
                <div className="pl-8 text-green-400">"neural_path",</div>
                <div className="pl-8 text-green-400">"data_sync",</div>
                <div className="pl-4 text-white/80">{"]"};</div>
                <div className="pl-4 text-purple-400">
                  return <span className="text-white/80">network.</span>
                  <span className="text-blue-400">process</span>(results);
                </div>
                <div className="text-purple-400">{"}"}</div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-[#0d1117] to-transparent" />
            </div>

            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Code className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Software / AI:
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                We replace manual processes with intelligent software tailored
                to your specific operations.
              </p>
              <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
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
            className="relative bg-card/40 border border-border/50 rounded-[40px] overflow-hidden group p-8 md:p-10 flex items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 mx-auto border border-white/10 group-hover:rotate-12 transition-transform duration-500">
                <Sparkles className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
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
            className="md:col-span-2 relative bg-card/40 border border-border/50 rounded-[40px] overflow-hidden group p-8 md:p-10"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Video className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                3D Animation
              </h3>
              <p className="text-muted-foreground text-lg max-w-sm mb-auto">
                We build cinematic 3D assets designed to give your brand a
                premium feel.
              </p>
              <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors mt-6">
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

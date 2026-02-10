import { ArrowRight, Code, Globe, Palette, Video } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import img1 from "@/assets/works/Landing page 3.jpg";
import img4 from "@/assets/3danim.png";
import { AnimatedText } from "./ui/animated-text";
import ActionButtons from "./ActionButtons";
import { AnimatedLogoStroke } from "./SvgAnimation";
import { DraggableMarquee, Marquee, MarqueeItem } from "./ui/marquee";
import marqueeImg1 from "@/assets/branding/1.svg";
import marqueeImg2 from "@/assets/branding/2.svg";
import marqueeImg3 from "@/assets/branding/3.svg";
import marqueeImg4 from "@/assets/branding/4.svg";
import CodeEditorReplica from "./Codeblock";

const marqueeItems = [marqueeImg1, marqueeImg2, marqueeImg3, marqueeImg4];

export const BentoSection = () => {
  return (
    <section
      id="services"
      className="py-24 md:pt-40 px-6 md:px-12 lg:px-24 tracking-tight relative"
    >
      <div className="absolute top-[10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#253a7a] opacity-20 blur-[500px]" />
      <div className="absolute top-[14%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#B05D41]/15 blur-[250px]" />
      <div className="absolute top-[35%] -right-[20%] w-[50vw] h-[50vw] rounded-full bg-[#253a7a] opacity-15 blur-[500px]" />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            className="text-4xl md:text-5xl lg:text-5xl tracking-tight font-semibold mb-6"
          >
            The full spectrum of core capabilities
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.1}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10"
          >
            We replace the need for multiple vendors. From brand identity to
            custom software, we build the entire ecosystem your business runs
            on.
          </AnimatedText>
          <ActionButtons className="justify-center" />
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
              <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-all">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <Image
              src={img1}
              placeholder="blur"
              loading="lazy"
              alt="Web Development Illustration"
              className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700 absolute right-[-12%] top-[-6%] w-auto h-75 pointer-events-none select-none rounded-2xl overflow-hidden"
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
              <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-all">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="absolute bottom-30 z-10 left-0 w-full">
              <Marquee>
                <DraggableMarquee speed={0.5} direction="right" gap={10}>
                  {[...marqueeItems].map((item, index) => (
                    <MarqueeItem
                      key={index}
                      className="w-fit rounded-md m-auto"
                    >
                      <Image
                        src={item.src}
                        alt={`Marquee ${index}`}
                        className="size-20"
                        width={100}
                        height={100}
                      />
                    </MarqueeItem>
                  ))}
                </DraggableMarquee>
              </Marquee>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 blur-[320px] size-110 bg-primary/50 rounded-full pointer-events-none" />
          </motion.div>

          {/* Software / AI - Bottom Left (1x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:row-span-2 relative bg-secondary3/20 border border-border/50 rounded-2xl overflow-hidden group flex flex-col items-center justify-end"
          >
            {/* <Image
              src={img3}
              placeholder="blur"
              loading="lazy"
              alt="Software / AI Illustration"
              className="absolute top-0 left-0 object-cover"
            /> */}
            <CodeEditorReplica />
            <div className="relative z-10 p-8 md:p-14 flex flex-col gap-4">
              <Code className="size-6 text-foreground/80" />

              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-grad">
                Software / AI:
              </h3>
              <p className="text-grad max-w-xs">
                We replace manual processes with intelligent software tailored
                to your specific operations.
              </p>
              <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-all">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-blue-500/5 to-transparent pointer-events-none" />
          </motion.div>

          {/* Everything - Center (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-secondary3/20 border border-border/50 rounded-2xl overflow-hidden group p-8 md:p-14 flex items-center justify-center text-center"
          >
            <AnimatedLogoStroke className="absolute top-1/2 left-1/2 -translate-x-[46%] -translate-y-1/2 object-cover inset-0" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl tracking-tight leading-snug text-foreground">
                Everything
                <br />
                in One Place
              </h3>
            </div>
            <div className="absolute -bottom-10 -left-2 size-50 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute -top-20 left-0 size-50 bg-secondary2 rounded-full blur-[100px]"></div>
          </motion.div>

          {/* 3D Animation - Bottom Right (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 relative bg-secondary3/20 border border-border/50 rounded-2xl overflow-hidden group p-8 md:p-14"
          >
            <div className="relative z-10 flex flex-col h-full gap-4">
              <Video className="size-6 text-foreground/80" />
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-grad">
                3D Animation
              </h3>
              <p className="text-grad max-w-xs pr-2">
                We build cinematic 3D assets designed to give your brand a
                premium feel.
              </p>
              <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-all">
                <span className="text-sm font-medium">See More</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Illustration */}
            <div className="absolute inset-y-0 h-full w-2/3 -right-8 pointer-events-none select-none">
              <Image
                src={img4}
                placeholder="blur"
                loading="lazy"
                alt="3D Animation Illustration"
                className="h-full group-hover:scale-125 transition-all duration-700 object-contain scale-120"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-l from-secondary3/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

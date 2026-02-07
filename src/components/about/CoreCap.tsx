import { ArrowRight, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import webDevImg from "@/assets/works/Landing page 3.jpg";
import { AnimatedText } from "../ui/animated-text";
import ActionButtons from "../ActionButtons";

export default function () {
  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-24">
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            className="text-grad text-6xl font-semibold tracking-tighter p-2 inline-block"
          >
            Core capabilities
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.1}
            className="text-grad text-xl max-w-md mx-auto leading-relaxed"
          >
            Integrated execution. We blend strategy, design, and code to build
            platforms that perform.
          </AnimatedText>
          <ActionButtons className="justify-center" />
        </div>

        <div className="relative group">
          {/* <div className="absolute -inset-10 bg-linear-to-r from-primary/20 to-primary2/20 blur-[120px] opacity-100 group-hover:opacity-100 transition-opacity" /> */}
          <div className="relative bg-[#0E111B] rounded-3xl p-10 md:p-16 overflow-hidden flex flex-col lg:flex-row gap-16 items-center shadow-2xl">
            <div
              className="w-full lg:w-3/5 relative aspect-video rounded-2xl overflow-hidden transition-all bg-[#1423547a]"
              style={{
                boxShadow: "#01030a6e 0px 6px 30px",
              }}
            >
              <Image
                src={webDevImg}
                alt="Web Development Showcase"
                className="group-hover:scale-105 transition-all absolute w-5/6 duration-1000 bottom-0 left-1/2 -translate-x-1/2 object-cover rounded-t-2xl shadow-xl"
              />
            </div>
            <div className="w-full lg:w-2/5 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-grad tracking-tight leading-tight">
                Web Development
              </h3>
              <Monitor className="size-5 text-muted-foreground" />
              <p className="text-sm md:text-base text-grad leading-relaxed">
                Transform concepts into high-performance experiences. We
                engineer story-driven websites that turn your brand into a
                premium digital product. Every layout and interaction feels
                refined, fast, and distinct.
              </p>
              <Link
                href="/work"
                className="group/link flex items-center gap-3 text-muted-foreground"
              >
                <span className="text-grad">See More </span>
                <ArrowRight className="size-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

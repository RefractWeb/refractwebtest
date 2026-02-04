import { ArrowUpRight, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import webDevImg from "@/assets/works/Landing page 3.jpg";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 mb-24">
          <h2 className="text-grad text-6xl font-semibold tracking-tighter p-2 inline-block">
            Core capabilities
          </h2>
          <p className="text-grad text-xl max-w-md mx-auto font-medium leading-relaxed">
            integrated execution. We blend strategy, design, and code to build
            platforms that perform.
          </p>
          <Link href="/contact" className="inline-block">
            <Button size="lg">Work with us</Button>
          </Link>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-linear-to-r from-primary/20 to-primary2/20 blur-[120px] opacity-100 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-black/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 md:p-16 overflow-hidden flex flex-col lg:flex-row gap-16 items-center shadow-2xl">
            <div className="w-full lg:w-3/5 relative aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all shadow-2xl bg-neutral-900">
              <Image
                src={webDevImg}
                alt="Web Development Showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="w-full lg:w-2/5 space-y-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-5xl font-bold tracking-tight leading-tight">
                Web <br /> Development
              </h3>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Transform concepts into high-performance experiences. We
                engineer story-driven websites that turn your brand into a
                premium digital product. Every layout and interaction feels
                refined, fast, and distinct.
              </p>
              <Link
                href="/work"
                className="group/link text-primary hover:text-primary2 font-semibold text-xl flex items-center gap-3 transition-colors"
              >
                See More{" "}
                <ArrowUpRight className="w-6 h-6 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

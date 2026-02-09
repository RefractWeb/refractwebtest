import {
  Marquee,
  MarqueeItem,
  DraggableMarquee,
} from "@/components/ui/marquee";
import Image from "next/image";
import project1 from "@/assets/works/Landing page 1.jpg";
import project2 from "@/assets/works/Landing page 2.jpg";
import project3 from "@/assets/works/Landing page 3.jpg";
import project4 from "@/assets/works/Landing page 4.jpg";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";
import { AnimatedText } from "@/components/ui/animated-text";
import ActionButtons from "@/components/ActionButtons";

const projects = [project1, project2, project3, project4];

const page = () => {
  return (
    <SmoothContainer>
      <div className="overflow-hidden">
        <section className="py-32 px-6 relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#253a7a] opacity-30 blur-[320px]" />
            <div className="absolute top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#B05D41]/35 blur-[350px]" />
          </div>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-24">
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                className="text-6xl font-semibold tracking-tighter p-2 inline-block"
              >
                Recent Works
              </AnimatedText>
              <AnimatedText
                animationType="slideUp"
                splitType="lines"
                delay={0.1}
                className="text-xl max-w-md mx-auto leading-relaxed"
              >
                Let’s discuss scope, timing, and fit.
              </AnimatedText>
              <ActionButtons className="justify-center pt-4" />
            </div>

            <div className="relative group">
              <div className="flex items-center justify-center flex-col gap-4">
                <Marquee>
                  <DraggableMarquee speed={1.2} direction="right">
                    {projects.map((project, i) => (
                      <MarqueeItem key={i}>
                        <div className="p-3 rounded-2xl bg-linear-to-br from-card to-muted/20 border border-border/40">
                          <Image
                            src={project}
                            alt={project + " " + i}
                            width={460}
                            height={300}
                            placeholder="blur"
                            loading="lazy"
                            className="object-cover rounded-xl shadow pointer-events-none"
                          />
                        </div>
                      </MarqueeItem>
                    ))}
                  </DraggableMarquee>
                </Marquee>
                <Marquee>
                  <DraggableMarquee speed={2} direction="left">
                    {projects.map((project, i) => (
                      <MarqueeItem key={i}>
                        <div className="p-3 rounded-2xl bg-linear-to-br from-card to-muted/20 border border-border/40">
                          <Image
                            src={project}
                            alt={project + " " + i}
                            width={460}
                            height={300}
                            placeholder="blur"
                            loading="lazy"
                            className="object-cover rounded-xl shadow pointer-events-none"
                          />
                        </div>
                      </MarqueeItem>
                    ))}
                  </DraggableMarquee>
                </Marquee>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </div>
    </SmoothContainer>
  );
};

export default page;

import { Button } from "@/components/ui/button";
import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/marquee";
import Image from "next/image";
import Link from "next/link";
import project1 from "@/assets/works/Landing page 1.jpg";
import project2 from "@/assets/works/Landing page 2.jpg";
import project3 from "@/assets/works/Landing page 3.jpg";
import project4 from "@/assets/works/Landing page 4.jpg";
import { CTASection } from "@/components/CTASection";
import SmoothContainer from "@/lib/SmoothContainer";

const projects = [project1, project2, project3, project4];

const page = () => {
  return (
    <SmoothContainer>
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-24">
            <h2 className="text-grad text-6xl font-semibold tracking-tighter p-2 inline-block">
              Recent Works
            </h2>
            <p className="text-grad text-xl max-w-md mx-auto leading-relaxed">
              Let’s discuss scope, timing, and fit.
            </p>
            <Link href="/contact" className="inline-block">
              <Button size="lg">Work with us</Button>
            </Link>
          </div>

          <div className="relative group">
            <div className="flex items-center justify-center flex-col">
              <Marquee>
                <MarqueeContent speed={40}>
                  {projects.map((project, i) => (
                    <MarqueeItem key={i} className="mx-2">
                      <div className="p-3 rounded-2xl bg-linear-to-br from-card to-muted/20 border border-border/40">
                        <Image
                          src={project}
                          alt={project + " " + i}
                          width={460}
                          height={300}
                          placeholder="blur"
                          loading="lazy"
                          className="object-cover rounded-xl shadow"
                        />
                      </div>
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
              </Marquee>
              <Marquee>
                <MarqueeContent speed={35} direction="left">
                  {projects.map((project, i) => (
                    <MarqueeItem key={i} className="mx-2">
                      <div className="p-3 rounded-2xl bg-linear-to-br from-card to-muted/20 border border-border/40">
                        <Image
                          src={project}
                          alt={project + " " + i}
                          width={460}
                          height={300}
                          placeholder="blur"
                          loading="lazy"
                          className="object-cover rounded-xl shadow"
                        />
                      </div>
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </SmoothContainer>
  );
};

export default page;

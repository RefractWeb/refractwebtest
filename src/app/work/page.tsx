import ActionButtons from "@/components/ActionButtons";
import AwardsSection from "@/components/AwardsSection";
import { CTASection } from "@/components/CTASection";
import { AnimatedText } from "@/components/ui/animated-text";
import { WorkCarousel, type WorkCarouselItem } from "@/components/WorkCarousel";
import { blogPosts } from "@/lib/blog-posts";
import img1 from "@/assets/works/Screenshot_2026-04-13_22-43-36.png";
import img2 from "@/assets/works/Screenshot_2026-04-13_22-43-50.png";
import img3 from "@/assets/works/Screenshot_2026-04-13_22-44-09.png";

const blogItems: WorkCarouselItem[] = blogPosts.map((post) => ({
  title: post.title,
  category: post.eyebrow,
  description: post.excerpt,
  image: post.image,
  href: `/blogs/${post.id}`,
}));

const workItems: WorkCarouselItem[] = [
  {
    title: "Left Coast Design Studio",
    category: "Branding",
    description:
      "San Francisco's leading studio for luxury hospitality and retail design.",
    image: img1,
    href: "#",
    video: "/thumbnail.webm",
  },
  {
    title: "Cobe Construction",
    category: "Branding",
    description:
      "Premier Bay Area commercial construction for high performance spaces.",
    image: img2,
    video: "/thumbnail.webm",
    href: "#",
  },
  {
    title: "Kirusushi",
    category: "Branding",
    description: "Precision Crafted Sushi for Elevated Dining Experiences.",
    image: img3,
    href: "#",
    video: "/thumbnail.webm",
  },
];

const page = () => {
  return (
    <div className="overflow-hidden">
      <section className="md:py-32 pt-28 pb-16 px-6 relative">
        <div className="absolute hidden md:block inset-0 z-0 pointer-events-none">
          <div className="absolute pointer-events-none top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[200px] transform-gpu-blur" />
          <div className="absolute pointer-events-none top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[230px] transform-gpu-blur" />
          <div className="absolute pointer-events-none -bottom-40 left-[10%] size-150 rounded-full bg-[#d6795a] opacity-40 blur-[200px] blur-gpu" />
        </div>
        <div className="container mx-auto max-w-8xl pb-20">
          <div className="text-center mb-4 md:mb-16 space-y-4">
            <AnimatedText
              animationType="wordReveal"
              stagger={0.07}
              className="text-4xl lg:text-5xl font-bold tracking-tight mx-auto"
            >
              Our Case Studies
            </AnimatedText>
            <AnimatedText
              animationType="slideUp"
              splitType="lines"
              delay={0.2}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Breaking down what drives modern brands across design, systems,
              and digital experience.
            </AnimatedText>
            <ActionButtons className="pt-4 justify-center" />
          </div>

          <WorkCarousel
            items={workItems}
            slideClassName="w-[85vw] md:w-[60vw] lg:w-[32.5rem]"
          />
        </div>

        <AwardsSection />

        <div className="container mx-auto max-w-8xl pt-40">
          <div className="text-center mb-4 md:mb-16 space-y-4">
            <AnimatedText
              animationType="wordReveal"
              useScrollTrigger={true}
              stagger={0.07}
              className="text-4xl lg:text-5xl font-bold tracking-tight mx-auto leading-loose"
            >
              Insights on Digital Performance
            </AnimatedText>
            <AnimatedText
              animationType="slideUp"
              splitType="lines"
              useScrollTrigger={true}
              delay={0.2}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Breaking down what drives modern brands across design, systems,
              and digital experience.
            </AnimatedText>
            <ActionButtons className="pt-4 justify-center" />
          </div>

          <WorkCarousel
            items={blogItems}
            slideClassName="w-[85vw] md:w-[60vw] lg:w-[32.5rem]"
          />
        </div>
      </section>
      <CTASection />
    </div>
  );
};

export default page;

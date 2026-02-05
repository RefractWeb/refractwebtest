"use client";

import AnimatedText from "@/components/ui/animated-text";
import gsap from "gsap";

export const AnimatedTextDemo = () => {
  return (
    <div className="min-h-screen space-y-32 py-16 px-6 container mx-auto">
      {/* Example 1: Basic slideUp with lines */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Example 1: Slide Up Animation (Lines with Mask)
        </h2>
        <AnimatedText
          splitType="lines"
          maskType="lines"
          animationType="slideUp"
          duration={0.8}
          stagger={0.1}
          className="text-4xl lg:text-5xl font-bold leading-tight max-w-3xl"
        >
          This demo shows the correct way to set up your SplitText line
          animations. It automatically resplits when the browser resizes.
        </AnimatedText>
      </section>

      {/* Example 2: Words and lines with mask */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Example 2: Words & Lines Split
        </h2>
        <AnimatedText
          splitType="words,lines"
          maskType="lines"
          animationType="slideUp"
          duration={0.6}
          stagger={0.08}
          className="text-3xl font-semibold leading-relaxed max-w-4xl"
        >
          The text in this paragraph is split by words and lines. We have
          enabled masking on the lines so that we can animate the lines to
          create a fun reveal animation.
        </AnimatedText>
      </section>

      {/* Example 3: Characters animation */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Example 3: Character Animation
        </h2>
        <AnimatedText
          splitType="chars"
          maskType={false}
          animationType="scaleIn"
          duration={0.4}
          stagger={{ amount: 0.5, from: "random" }}
          className="text-2xl font-bold tracking-wide"
        >
          CHARACTER LEVEL ANIMATIONS
        </AnimatedText>
      </section>

      {/* Example 4: Scroll Trigger with scrub */}
      <section className="space-y-6 mt-[50vh]">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Example 4: Scroll Triggered Animation
        </h2>
        <AnimatedText
          splitType="lines"
          maskType="lines"
          animationType="slideUp"
          useScrollTrigger={true}
          scrollTriggerConfig={{
            start: "top 80%",
            end: "bottom 60%",
            scrub: false,
          }}
          className="text-3xl font-bold leading-tight max-w-3xl"
        >
          This animation is tied to scroll position. Watch as the text animates
          smoothly as you scroll past this section.
        </AnimatedText>
      </section>

      {/* Example 5: Custom animation */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Example 5: Custom Animation
        </h2>
        <AnimatedText
          splitType="words"
          maskType={false}
          customAnimation={(instance) => {
            return gsap.from(instance.words, {
              duration: 0.8,
              yPercent: 100,
              rotation: -10,
              opacity: 0,
              stagger: {
                amount: 0.5,
                from: "center",
              },
              ease: "back.out(1.7)",
            });
          }}
          className="text-3xl font-bold leading-relaxed max-w-3xl"
        >
          Custom animations give you complete control over timing, easing, and
          visual effects with GSAP's powerful API.
        </AnimatedText>
      </section>

      {/* Example 6: Fade In with delay */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Example 6: Delayed Fade In
        </h2>
        <AnimatedText
          splitType="lines"
          maskType={false}
          animationType="fadeIn"
          duration={1}
          stagger={0.15}
          delay={0.3}
          className="text-xl leading-relaxed max-w-4xl text-foreground/80"
        >
          Delays help sequence multiple animations on a page. This creates a
          choreographed effect where elements appear in a specific order,
          guiding the user's attention through your content naturally.
        </AnimatedText>
      </section>

      {/* Example 7: Slide from different directions */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Example 7: Slide Right
        </h2>
        <AnimatedText
          splitType="words"
          maskType="words"
          animationType="slideRight"
          duration={0.6}
          stagger={0.05}
          className="text-2xl font-semibold leading-tight max-w-3xl"
        >
          Directional slides add visual interest and can reinforce content
          hierarchy or reading flow.
        </AnimatedText>
      </section>

      {/* Example 8: Rotate In effect */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Example 8: Rotate In (Words)
        </h2>
        <AnimatedText
          splitType="words"
          maskType={false}
          animationType="rotateIn"
          duration={0.7}
          stagger={0.08}
          className="text-3xl font-bold max-w-3xl"
        >
          Rotation effects add playful energy to your text perfect for creative
          and modern designs.
        </AnimatedText>
      </section>

      <div className="h-[50vh]" />
    </div>
  );
};

export default AnimatedTextDemo;

import { AnimatedText } from "../ui/animated-text";
import ActionButtons from "../ActionButtons";
import HowItWorks from "../ui/stack-card";

export default function () {
  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-24">
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            className="text-4xl md:text-6xl font-semibold tracking-tighter"
          >
            Core capabilities
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.1}
            className="text-base md:text-xl max-w-md mx-auto md:leading-relaxed"
          >
            Integrated execution. We blend strategy, design, and code to build
            platforms that perform.
          </AnimatedText>
          <ActionButtons className="justify-center" />
        </div>

        <HowItWorks />
      </div>
    </section>
  );
}

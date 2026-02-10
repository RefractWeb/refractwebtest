import { ArrowRight, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import webDevImg from "@/assets/works/Landing page 3.jpg";
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
            className="text-6xl font-semibold tracking-tighter p-2 inline-block"
          >
            Core capabilities
          </AnimatedText>
          <AnimatedText
            useScrollTrigger={true}
            animationType="slideUp"
            splitType="lines"
            delay={0.1}
            className="text-xl max-w-md mx-auto leading-relaxed"
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

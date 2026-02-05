import { AnimatedText } from "../ui/animated-text";

export default function () {
  return (
    <section className="relative pt-48 pb-32 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <AnimatedText
          useScrollTrigger={true}
          animationType="slideUp"
          splitType="lines"
          className="text-grad text-5xl font-semibold leading-[1.05] tracking-tight mx-auto max-w-5xl p-2"
        >
          The Gap Between Reality And Perception ... We Exist To Ensure No Great
          Company Is Held Back By A Quiet Digital Presence
        </AnimatedText>
      </div>
    </section>
  );
}

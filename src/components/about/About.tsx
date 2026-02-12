import { AnimatedText } from "../ui/animated-text";

export default function () {
  return (
    <section className="relative py-20 md:pt-48 md:pb-32 px-6 overflow-x-clip">
      <div
        className="absolute inset-0 mask-radial-at-top mask-t-from-80% mask-radial-to-60% opacity-50 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute pointer-events-none -z-10 top-[8%] -right-[2%] w-200 h-200 rounded-full bg-[#253a7a] opacity-30 blur-[200px]" />
      <div className="absolute pointer-events-none -z-10 top-[20%] -right-[24%] w-200 h-200 rounded-full bg-[#B05D41] opacity-40 blur-[200px] hidden md:block" />
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <AnimatedText
          useScrollTrigger={true}
          animationType="skewIn"
          splitType="lines"
          duration={1.6}
          delay={0.1}
          className="text-3xl md:text-5xl font-semibold leading-[1.2] tracking-tight mx-auto max-w-5xl p-2"
        >
          The Gap Between Reality And Perception... We Exist To Ensure No Great
          Company Is Held Back By A Quiet Digital Presence
        </AnimatedText>
      </div>
    </section>
  );
}

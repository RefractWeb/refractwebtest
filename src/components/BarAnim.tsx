import { motion } from "motion/react";

// Heights (in px) scaled so the maximum matches container height h = 224px
const DATA = [163, 110, 171, 224, 171, 224, 110, 48, 171, 224];

const AnimatedBar = ({
  initialHeight,
  index,
}: {
  initialHeight: number;
  index: number;
}) => {
  const duration = 8 + Math.random();

  return (
    <div className="relative flex flex-col items-center justify-end h-full">
      <motion.div
        animate={{
          height: [initialHeight * 0.4, initialHeight, initialHeight * 0.4],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
        className="absolute bottom-0 w-6 pointer-events-none"
        style={{\n          background:\n            \"radial-gradient(circle at center, var(--primary2) 0%, transparent 70%)\",\n          filter: \"blur(14px)\",\n          transformOrigin: \"bottom\",\n          willChange: \"transform\",\n          transform: \"translateZ(0)\",\n          backfaceVisibility: \"hidden\",\n          perspective: \"1000px\",\n        }}
      />

      {/* Solid Gradient Bar */}
      <motion.div
        animate={{
          height: [initialHeight * 0.6, initialHeight, initialHeight * 0.6],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
        className="w-2.5 rounded-full z-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--primary2), var(--secondary3))",
          transformOrigin: "bottom",
        }}
      />
    </div>
  );
};

export default function BarAnim() {
  return (
    <div className="flex items-end justify-center gap-4 w-full max-w-5xl h-56">
      {DATA.map((height, i) => (
        <AnimatedBar key={i} initialHeight={height} index={i} />
      ))}
    </div>
  );
}

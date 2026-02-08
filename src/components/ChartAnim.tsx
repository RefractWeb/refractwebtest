import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

const ChartAnim = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState<number>(0);

  // Motion value for progress (0 to 1)
  const progress = useMotionValue(0);

  // We'll stop the circle at roughly 68% of the way through,
  // which aligns visually with the original placement of the circle in your SVG.
  const targetStop = 0.675;

  const pathD =
    "M14.1801 437.215C58.7608 259.002 104.348 213.657 140.658 210.81C205.774 205.739 241.108 337.67 311.958 333.183C399.409 327.69 419.843 122.101 506.399 117C577.42 112.835 607.573 248.72 677.699 244.826C766.649 239.856 791.973 17.1338 870.087 14.3569C899.516 13.3106 939.68 43.3731 990.408 169.358";

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Calculate coordinates based on path progress
  const [point, setPoint] = useState<{ x: number; y: number }>({
    x: 14.1801,
    y: 437.215,
  });

  useEffect(() => {
    const unsubscribe = progress.on("change", (latest: number) => {
      if (pathRef.current) {
        const p = pathRef.current.getPointAtLength(latest * pathLength);
        setPoint({ x: p.x, y: p.y });
      }
    });
    return () => unsubscribe();
  }, [pathLength, progress]);

  return (
    <div className="absolute -bottom-[65%] -right-[10%] w-full max-w-4xl">
      <svg
        viewBox="0 0 1005 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-200"
      >
        <defs>
          {/* Gaussian blur filter matching SVG configuration */}
          <filter
            id="filter0_f_3_19"
            x="-1.23978e-05"
            y="4.86374e-05"
            width="1004.37"
            height="447.735"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.65"
              result="effect1_foregroundBlur_3_19"
            />
          </filter>

          <filter
            id="filter1_f_3_19"
            x="-1.23978e-05"
            y="4.86374e-05"
            width="1004.37"
            height="447.735"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.65"
              result="effect1_foregroundBlur_3_19"
            />
          </filter>

          <filter
            id="filter2_f_3_19"
            x="-1.23978e-05"
            y="4.86374e-05"
            width="1004.37"
            height="447.735"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.65"
              result="effect1_foregroundBlur_3_19"
            />
          </filter>

          <filter
            id="filter3_f_3_19"
            x="-1.23978e-05"
            y="4.86374e-05"
            width="1004.37"
            height="447.735"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.65"
              result="effect1_foregroundBlur_3_19"
            />
          </filter>
        </defs>

        {/* Stacked blur layers with plus-lighter blend mode */}
        <g
          filter="url(#filter0_f_3_19)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d={pathD}
            stroke="#F59768"
            strokeWidth="10.0611"
            strokeMiterlimit="10"
          />
        </g>

        <g
          filter="url(#filter1_f_3_19)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d={pathD}
            stroke="#F59768"
            strokeWidth="10.0611"
            strokeMiterlimit="10"
          />
        </g>

        <g
          filter="url(#filter2_f_3_19)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d={pathD}
            stroke="#F59768"
            strokeWidth="10.0611"
            strokeMiterlimit="10"
          />
        </g>

        <g
          filter="url(#filter3_f_3_19)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d={pathD}
            stroke="#F59768"
            strokeWidth="10.0611"
            strokeMiterlimit="10"
          />
        </g>

        {/* Main white path for tracing */}
        <path
          ref={pathRef}
          d={pathD}
          stroke="white"
          strokeWidth="10.0611"
          strokeMiterlimit="10"
        />

        {/* Animated Tracing Circle */}
        <motion.circle
          cx={point.x}
          cy={point.y}
          r="14.2434"
          fill="#0E111B"
          stroke="#F59768"
          strokeWidth="8.20966"
          initial={false}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          style={{
            filter: "drop-shadow(0px 0px 8px rgba(245, 151, 104, 0.8))",
          }}
        />

        {/* Motion element to drive `progress` (SVG-safe element) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ x: targetStop }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          // `latest.x` may arrive as a string; coerce to number safely
          onUpdate={(latest: any) => {
            const rawX = (latest as any).x;
            const x = typeof rawX === "number" ? rawX : Number(rawX);
            progress.set(Number.isFinite(x) ? x : 0);
          }}
        />
      </svg>
    </div>
  );
};

export default ChartAnim;

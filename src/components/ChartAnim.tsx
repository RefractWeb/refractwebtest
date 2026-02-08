import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMousePosition } from "@/hooks/useMousePosition";

const PATH_D =
  "M14.1801 437.215C58.7608 259.002 104.348 213.657 140.658 210.81C205.774 205.739 241.108 337.67 311.958 333.183C399.409 327.69 419.843 122.101 506.399 117C577.42 112.835 607.573 248.72 677.699 244.826C766.649 239.856 791.973 17.1338 870.087 14.3569C899.516 13.3106 939.68 43.3731 990.408 169.358";

const TARGET_STOP = 0.7;
const HOVER_RADIUS = 150; // Distance in pixels for hover effect

const FILTER_CONFIG = {
  x: "-1.23978e-05",
  y: "4.86374e-05",
  width: "1005",
  height: "448",
  filterUnits: "userSpaceOnUse" as const,
  colorInterpolationFilters: "sRGB" as const,
};

const ChartAnim = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pathLength, setPathLength] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  const progress = useMotionValue(0);
  const targetProgress = useMotionValue(0);
  const mousePosition = useMousePosition();

  // Smooth spring animation for progress
  const smoothProgress = useSpring(targetProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const [point, setPoint] = useState<{ x: number; y: number }>({
    x: 14,
    y: 437,
  });

  // Find closest point on path to mouse
  const getClosestPointOnPath = useCallback(
    (mouseX: number, mouseY: number): number => {
      if (!pathRef.current || pathLength === 0) return progress.get();

      let minDistance = Infinity;
      let closestProgress = progress.get();
      const samples = 100;

      for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const pathPoint = pathRef.current.getPointAtLength(t * pathLength);
        const distance = Math.sqrt(
          Math.pow(pathPoint.x - mouseX, 2) + Math.pow(pathPoint.y - mouseY, 2),
        );

        if (distance < minDistance) {
          minDistance = distance;
          closestProgress = t;
        }
      }

      return minDistance < HOVER_RADIUS ? closestProgress : progress.get();
    },
    [pathLength, progress],
  );

  // Handle mouse hover effect
  useEffect(() => {
    if (!isHovered || !svgRef.current || !containerRef.current) return;

    const svg = svgRef.current;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Convert normalized mouse position to SVG coordinates
    const mouseXPx = ((mousePosition.x + 1) / 2) * window.innerWidth;
    const mouseYPx = ((mousePosition.y + 1) / 2) * window.innerHeight;

    // Check if mouse is near the SVG area
    if (
      mouseXPx >= rect.left &&
      mouseXPx <= rect.right &&
      mouseYPx >= rect.top &&
      mouseYPx <= rect.bottom
    ) {
      const pt = svg.createSVGPoint();
      pt.x = mouseXPx;
      pt.y = mouseYPx;
      const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());

      const closestProgress = getClosestPointOnPath(svgP.x, svgP.y);
      targetProgress.set(closestProgress);
    }
  }, [mousePosition, isHovered, getClosestPointOnPath, targetProgress]);

  const updatePoint = useCallback(
    (latest: number) => {
      if (pathRef.current && pathLength > 0) {
        const p = pathRef.current.getPointAtLength(latest * pathLength);
        setPoint({ x: p.x, y: p.y });
      }
    },
    [pathLength],
  );

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      progress.set(latest);
      updatePoint(latest);
    });
    return unsubscribe;
  }, [smoothProgress, progress, updatePoint]);

  const onProgressUpdate = useCallback(
    (latest: any) => {
      const x = typeof latest.x === "number" ? latest.x : Number(latest.x);
      if (Number.isFinite(x)) {
        targetProgress.set(x);
      }
    },
    [targetProgress],
  );

  // Memoize filter elements
  const filterDefs = useMemo(
    () => (
      <>
        {[0, 1, 2].map((i) => (
          <filter key={i} id={`filter${i}`} {...FILTER_CONFIG}>
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
        ))}
      </>
    ),
    [],
  );

  // Memoize blur layers
  const blurLayers = useMemo(
    () =>
      [0, 1, 2].map((i) => (
        <g
          key={i}
          filter={`url(#filter${i})`}
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d={PATH_D}
            stroke="#F59768"
            strokeWidth="10"
            strokeMiterlimit="10"
          />
        </g>
      )),
    [],
  );

  return (
    <div
      ref={containerRef}
      className="absolute -bottom-[65%] -right-[10%] w-full max-w-4xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1005 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-200 cursor-grab"
      >
        <defs>{filterDefs}</defs>

        {blurLayers}

        {/* Main white path for tracing */}
        <path
          ref={pathRef}
          d={PATH_D}
          stroke="white"
          strokeWidth="10"
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
          animate={{
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 20 },
          }}
          style={{
            filter: "drop-shadow(0px 0px 8px rgba(245, 151, 104, 0.8))",
          }}
        />

        {/* Motion element to drive auto-animation `progress` */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ x: TARGET_STOP }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          onUpdate={onProgressUpdate}
        />
      </svg>
    </div>
  );
};

export default ChartAnim;

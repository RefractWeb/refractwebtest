import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMousePosition } from "@/hooks/useMousePosition";

const PATH_D =
  "M48.7041 447C93.2848 268.788 138.872 223.443 175.182 220.595C240.298 215.524 275.632 347.456 346.482 342.968C433.933 337.475 454.367 131.887 540.923 126.786C611.944 122.62 642.097 258.505 712.223 254.612C801.173 249.642 826.497 26.9192 904.611 24.1423C934.04 23.096 974.204 53.1585 1024.93 179.144";

const FILL_PATH_D =
  "M54.6318 444.432C98.9418 267.302 144.252 222.232 180.342 219.402C245.062 214.362 280.182 345.492 350.602 341.032C437.522 335.572 457.832 131.232 543.862 126.162C614.452 122.022 644.422 257.082 714.122 253.212C802.532 248.272 827.702 26.9021 905.342 24.1421C934.592 23.1021 974.512 52.9821 1024.93 178.202V444.432";

const TARGET_STOP = 0.7;
const HOVER_RADIUS = 150; // Distance in pixels for hover effect

const FILTER_CONFIG = {
  x: "0.000106812",
  y: "-30.5155",
  width: "1039.32",
  height: "489.335",
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
    x: 712.223,
    y: 254.732,
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
      [0, 1, 2, 3].map((i) => (
        <g
          key={i}
          filter={`url(#filter${i})`}
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d={PATH_D}
            stroke="#F59768"
            strokeWidth="10.0611"
            strokeMiterlimit="10"
          />
        </g>
      )),
    [],
  );

  return (
    <div
      ref={containerRef}
      className="absolute -bottom-[65%] -right-[10%] w-full max-w-4xl z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1025 447"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-200 cursor-grab"
      >
        <defs>
          {filterDefs}
          <linearGradient
            id="gradientFill"
            x1="1024.93"
            y1="24.1163"
            x2="19.3345"
            y2="148.758"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1E2E5E" stopOpacity="0" />
            <stop offset="1" stopColor="#F59768" />
          </linearGradient>
        </defs>

        {/* Gradient fill area */}
        <path
          d={FILL_PATH_D}
          fill="url(#gradientFill)"
          shapeRendering="crispEdges"
        />

        {blurLayers}

        {/* Main white path for tracing */}
        <path
          ref={pathRef}
          d={PATH_D}
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

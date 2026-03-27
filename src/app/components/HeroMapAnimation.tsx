import { motion, useReducedMotion } from "motion/react";
import { BrandMark } from "./BrandMark";
import { cn } from "./ui/utils";

interface HeroMapAnimationProps {
  className?: string;
  mode?: "full" | "compact";
}

interface MapPlate {
  d: string;
  delay: number;
  fill: string;
  offsetY: number;
  stroke: string;
}

interface RouteLine {
  color: string;
  d: string;
  dashed?: boolean;
  delay: number;
  width: number;
}

interface MapNode {
  delay: number;
  fill: string;
  radius: number;
  stroke: string;
  x: number;
  y: number;
}

const INTRO_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const CAMBRIDGE_POINT = { x: 356, y: 244 };

const MAP_PLATES: MapPlate[] = [
  {
    d: "M56 162C104 94 194 52 286 58C364 64 426 104 446 164C468 230 446 304 390 352C330 404 236 428 156 406C90 388 42 336 34 272C28 228 34 194 56 162Z",
    delay: 0.14,
    fill: "rgba(0, 69, 139, 0.18)",
    offsetY: 24,
    stroke: "rgba(0, 69, 139, 0.28)",
  },
  {
    d: "M374 98C440 70 520 64 592 76C650 88 694 122 708 176C722 232 706 300 660 348C612 400 540 426 468 420C408 414 354 382 330 330C304 276 310 126 374 98Z",
    delay: 0.26,
    fill: "rgba(255, 255, 255, 0.34)",
    offsetY: -18,
    stroke: "rgba(0, 69, 139, 0.22)",
  },
  {
    d: "M130 402C182 374 244 374 294 400C338 424 358 460 348 494C338 530 288 552 224 552C164 552 110 532 82 496C58 466 70 432 130 402Z",
    delay: 0.38,
    fill: "rgba(245, 215, 4, 0.24)",
    offsetY: 28,
    stroke: "rgba(245, 215, 4, 0.36)",
  },
  {
    d: "M492 418C542 392 606 392 652 416C690 436 706 468 696 500C686 530 648 548 598 548C546 548 500 534 474 508C450 484 454 438 492 418Z",
    delay: 0.5,
    fill: "rgba(0, 69, 139, 0.14)",
    offsetY: 18,
    stroke: "rgba(0, 69, 139, 0.22)",
  },
];

const COASTLINE_LINES = [
  "M78 184C126 126 200 102 276 112C344 122 390 166 398 228C404 286 374 338 320 370C262 404 174 412 112 380C70 358 44 318 42 268C40 236 50 210 78 184Z",
  "M144 416C190 396 242 396 284 416C324 436 342 466 334 496C326 524 286 542 234 542C182 542 134 526 108 500C84 476 92 438 144 416Z",
  "M390 120C446 94 518 90 584 104C634 114 668 146 678 194C688 248 674 304 634 346C592 390 526 412 458 406C396 400 346 368 326 320C306 274 320 152 390 120Z",
  "M500 430C534 412 578 410 614 420C646 430 666 452 666 480C666 506 642 524 606 528C568 532 532 524 512 506C490 486 486 450 500 430Z",
  "M192 208C236 202 292 214 332 244",
  "M420 218C474 206 544 214 602 252",
  "M382 288C446 324 516 336 590 326",
  "M210 300C256 284 320 282 376 302",
  "M436 158C488 148 552 156 610 188",
];

const GRATICULE_HORIZONTAL = [
  "M0 78C178 60 366 60 720 84",
  "M0 142C176 126 366 126 720 146",
  "M0 216C180 202 366 202 720 220",
  "M0 296C182 282 366 282 720 300",
  "M0 388C184 374 366 374 720 392",
  "M0 486C188 474 366 474 720 490",
];

const GRATICULE_VERTICAL = [
  "M88 0C66 122 66 262 92 560",
  "M204 0C186 120 184 262 208 560",
  "M348 0C332 122 332 262 350 560",
  "M502 0C488 122 488 262 506 560",
  "M642 0C628 122 628 262 644 560",
];

const ROUTE_LINES: RouteLine[] = [
  {
    color: "rgba(0, 69, 139, 0.92)",
    d: "M104 188C182 202 272 232 356 244C448 258 540 226 646 136",
    delay: 1.2,
    width: 2.8,
  },
  {
    color: "rgba(245, 215, 4, 0.98)",
    d: "M128 452C222 410 290 352 356 244C426 126 538 90 656 96",
    delay: 1.78,
    width: 3.4,
  },
  {
    color: "rgba(245, 215, 4, 0.54)",
    d: "M218 96C270 130 324 182 356 244C394 320 494 390 642 440",
    dashed: true,
    delay: 2.36,
    width: 2.2,
  },
  {
    color: "rgba(0, 69, 139, 0.58)",
    d: "M88 324C180 296 278 288 356 244C458 186 560 210 646 286",
    dashed: true,
    delay: 2.94,
    width: 1.9,
  },
];

const MAP_NODES: MapNode[] = [
  { delay: 0.02, fill: "#f5d704", radius: 5, stroke: "#00458b", x: 104, y: 188 },
  { delay: 0.1, fill: "#f5d704", radius: 7, stroke: "#00458b", x: CAMBRIDGE_POINT.x, y: CAMBRIDGE_POINT.y },
  { delay: 0.18, fill: "#ffffff", radius: 5, stroke: "#00458b", x: 646, y: 136 },
  { delay: 0.28, fill: "#f5d704", radius: 5, stroke: "#00458b", x: 128, y: 452 },
  { delay: 0.36, fill: "#ffffff", radius: 5, stroke: "#00458b", x: 656, y: 96 },
  { delay: 0.44, fill: "#f5d704", radius: 5, stroke: "#00458b", x: 642, y: 440 },
  { delay: 0.52, fill: "#ffffff", radius: 5, stroke: "#00458b", x: 646, y: 286 },
];

export function HeroMapAnimation({
  className,
  mode = "full",
}: HeroMapAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const showIntro = mode === "full" && !shouldReduceMotion;
  const pace = (value: number) => value * 1.18;
  const mapPlates = mode === "full" ? MAP_PLATES : MAP_PLATES.slice(0, 3);
  const coastlineLines = mode === "full" ? COASTLINE_LINES.slice(0, 6) : COASTLINE_LINES.slice(0, 4);
  const routeLines = mode === "full" ? ROUTE_LINES.slice(0, 3) : ROUTE_LINES.slice(0, 2);
  const mapNodes = mode === "full" ? MAP_NODES.slice(0, 6) : MAP_NODES.slice(0, 4);
  const graticuleHorizontal = mode === "full" ? GRATICULE_HORIZONTAL.slice(0, 4) : GRATICULE_HORIZONTAL.slice(0, 3);
  const graticuleVertical = mode === "full" ? GRATICULE_VERTICAL.slice(0, 3) : GRATICULE_VERTICAL.slice(0, 2);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "hero-map-frame pointer-events-none relative isolate w-full overflow-hidden",
        className,
      )}
    >
      <div className="hero-map-panel absolute inset-0" />
      <motion.div
        className="hero-map-grid absolute inset-0"
        initial={showIntro ? { opacity: 0, scale: 1.04 } : false}
        animate={{ opacity: mode === "full" ? 0.58 : 0.4, scale: 1 }}
        transition={{ duration: pace(1.24), delay: pace(0.14), ease: INTRO_EASE }}
      />
      <motion.div
        className="absolute inset-[5.5%] rounded-[1.3rem] border border-[#00458b]/16"
        initial={showIntro ? { opacity: 0, scale: 0.96 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: pace(0.9), delay: pace(0.2), ease: INTRO_EASE }}
      />
      <motion.div
        className="absolute left-[8%] top-[8.5%] z-[1] flex items-center gap-2 font-mono text-[0.58rem] tracking-[0.22em] text-[#00458b]/72"
        initial={showIntro ? { opacity: 0, y: -8 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: pace(0.74), delay: pace(0.58), ease: INTRO_EASE }}
      >
        <span className="h-px w-8 bg-[#f5d704]/62" />
        52.2053° N
      </motion.div>
      <motion.div
        className="absolute right-[8%] top-[8.5%] z-[1] flex items-center gap-2 font-mono text-[0.58rem] tracking-[0.22em] text-[#00458b]/72"
        initial={showIntro ? { opacity: 0, y: -8 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: pace(0.74), delay: pace(0.68), ease: INTRO_EASE }}
      >
        0.1218° E
        <span className="h-px w-8 bg-[#f5d704]/62" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 z-[1] h-[46%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00458b]/20"
        initial={showIntro ? { opacity: 0, scale: 0.76 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: pace(1.02), delay: pace(0.82), ease: INTRO_EASE }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 z-[1] h-[32%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f5d704]/34"
        initial={showIntro ? { opacity: 0, scale: 0.82 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: pace(0.96), delay: pace(0.98), ease: INTRO_EASE }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 z-[1] h-[44%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5d704]/18 blur-3xl"
        initial={showIntro ? { opacity: 0, scale: 0.72 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: pace(1.08), delay: pace(1.06), ease: INTRO_EASE }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-[#eaf2fb]/96 via-white/20 to-transparent"
        initial={showIntro ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: pace(0.8), delay: showIntro ? pace(2.8) : 0, ease: INTRO_EASE }}
      />

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        focusable="false"
        viewBox="0 0 720 560"
      >
        {graticuleHorizontal.map((line, index) => (
          <motion.path
            key={`graticule-h-${index}`}
            d={line}
            fill="none"
            initial={showIntro ? { opacity: 0, pathLength: 0.3 } : false}
            animate={{ opacity: 1, pathLength: 1 }}
            stroke={index % 2 === 0 ? "rgba(0, 69, 139, 0.2)" : "rgba(245, 215, 4, 0.18)"}
            strokeWidth={1.1}
            transition={{ duration: pace(1.36), delay: pace(0.46 + index * 0.08), ease: INTRO_EASE }}
          />
        ))}
        {graticuleVertical.map((line, index) => (
          <motion.path
            key={`graticule-v-${index}`}
            d={line}
            fill="none"
            initial={showIntro ? { opacity: 0, pathLength: 0.3 } : false}
            animate={{ opacity: 1, pathLength: 1 }}
            stroke={index % 2 === 0 ? "rgba(0, 69, 139, 0.16)" : "rgba(245, 215, 4, 0.14)"}
            strokeWidth={1}
            transition={{ duration: pace(1.34), delay: pace(0.56 + index * 0.08), ease: INTRO_EASE }}
          />
        ))}

        {mapPlates.map((plate, index) => (
          <motion.path
            key={`plate-${index}`}
            d={plate.d}
            fill={plate.fill}
            initial={showIntro ? { opacity: 0, y: plate.offsetY } : false}
            animate={{ opacity: 1, y: 0 }}
            stroke={plate.stroke}
            strokeWidth={1.6}
            transition={{ duration: pace(0.94), delay: pace(plate.delay), ease: INTRO_EASE }}
          />
        ))}

        {coastlineLines.map((line, index) => (
          <motion.path
            key={`coast-${index}`}
            d={line}
            fill="none"
            initial={showIntro ? { opacity: 0, pathLength: 0.48 } : false}
            animate={{ opacity: 1, pathLength: 1 }}
            stroke={
              index < 4
                ? index % 2 === 0
                  ? "rgba(0, 69, 139, 0.5)"
                  : "rgba(245, 215, 4, 0.42)"
                : "rgba(0, 69, 139, 0.28)"
            }
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={index < 4 ? 2.1 : 1.45}
            transition={{ duration: pace(1.54), delay: pace(0.92 + index * 0.1), ease: INTRO_EASE }}
          />
        ))}

        <motion.g
          initial={showIntro ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: pace(0.9), delay: pace(1.18), ease: INTRO_EASE }}
        >
          <circle
            cx={CAMBRIDGE_POINT.x}
            cy={CAMBRIDGE_POINT.y}
            r={86}
            fill="none"
            stroke="rgba(0, 69, 139, 0.14)"
            strokeWidth={1.2}
          />
          <circle
            cx={CAMBRIDGE_POINT.x}
            cy={CAMBRIDGE_POINT.y}
            r={52}
            fill="none"
            stroke="rgba(245, 215, 4, 0.36)"
            strokeWidth={1.2}
          />
          <circle
            cx={CAMBRIDGE_POINT.x}
            cy={CAMBRIDGE_POINT.y}
            r={22}
            fill="none"
            stroke="rgba(0, 69, 139, 0.42)"
            strokeWidth={1.2}
          />
          <path
            d={`M${CAMBRIDGE_POINT.x - 108} ${CAMBRIDGE_POINT.y}H${CAMBRIDGE_POINT.x + 108}`}
            fill="none"
            stroke="rgba(0, 69, 139, 0.18)"
            strokeWidth={1}
          />
          <path
            d={`M${CAMBRIDGE_POINT.x} ${CAMBRIDGE_POINT.y - 108}V${CAMBRIDGE_POINT.y + 108}`}
            fill="none"
            stroke="rgba(245, 215, 4, 0.26)"
            strokeWidth={1}
          />
          <circle
            cx={CAMBRIDGE_POINT.x}
            cy={CAMBRIDGE_POINT.y}
            r={4.5}
            fill="#00458b"
          />
        </motion.g>

        {routeLines.map((line, index) => (
          <motion.path
            key={`route-glow-${index}`}
            d={line.d}
            fill="none"
            initial={showIntro ? { opacity: 0, pathLength: 0 } : false}
            animate={{ opacity: 0.42, pathLength: 1 }}
            stroke={index === 1 ? "rgba(245, 215, 4, 0.34)" : "rgba(255, 255, 255, 0.74)"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={line.width + 1.8}
            transition={{ duration: pace(1.8 + index * 0.12), delay: pace(line.delay), ease: INTRO_EASE }}
          />
        ))}

        {routeLines.map((line, index) => (
          <motion.path
            key={`route-${index}`}
            d={line.d}
            fill="none"
            initial={showIntro ? { opacity: 0, pathLength: 0 } : false}
            animate={{ opacity: 1, pathLength: 1 }}
            stroke={line.color}
            strokeDasharray={line.dashed ? "10 12" : undefined}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={line.width}
            transition={{ duration: pace(1.82 + index * 0.12), delay: pace(line.delay), ease: INTRO_EASE }}
          />
        ))}

        {mapNodes.map((node, index) => (
          <g key={`node-${index}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              fill={node.fill === "#f5d704" ? "rgba(245, 215, 4, 0.18)" : "rgba(255, 255, 255, 0.18)"}
              initial={showIntro ? { opacity: 0, r: 0 } : false}
              animate={{ opacity: 1, r: node.radius + 7 }}
              stroke={node.stroke}
              strokeOpacity={0.2}
              strokeWidth={1.2}
              transition={{
                duration: pace(0.5),
                delay: showIntro ? pace(1.52 + node.delay) : 0,
                ease: INTRO_EASE,
              }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              fill={node.fill}
              initial={showIntro ? { opacity: 0, r: 0 } : false}
              animate={{ opacity: 1, r: node.radius }}
              stroke={node.stroke}
              strokeWidth={2}
              transition={{
                duration: pace(0.42),
                delay: showIntro ? pace(1.62 + node.delay) : 0,
                ease: INTRO_EASE,
              }}
            />
          </g>
        ))}

        <motion.g
          initial={showIntro ? { opacity: 0, y: 8 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: pace(0.72), delay: showIntro ? pace(2.2) : 0, ease: INTRO_EASE }}
        >
          <text
            x="182"
            y={CAMBRIDGE_POINT.y + 28}
            fill="#00458b"
            fontFamily="ui-monospace, monospace"
            fontSize="12"
            letterSpacing="2.2"
          >
            CAMBRIDGE
          </text>
        </motion.g>
      </svg>

      <div className="hero-map-vignette absolute inset-0" />

      <motion.div
        className={cn(
          "absolute inset-x-0 z-30 flex justify-center px-8",
          mode === "full" ? "top-[13%]" : "top-[15%]",
        )}
        initial={showIntro ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{
          duration: pace(0.78),
          delay: showIntro ? pace(2.96) : 0,
          ease: INTRO_EASE,
        }}
      >
        <div
          className={cn(
            "hero-map-logo-shell w-full",
            mode === "full" ? "max-w-[22rem] px-7 py-5" : "max-w-[15rem] px-5 py-3.5",
          )}
        >
          <BrandMark
            className={cn(
              "mx-auto",
              mode === "full" ? "max-w-[18.5rem] lg:max-w-[19.5rem]" : "max-w-[12.5rem] sm:max-w-[13.75rem]",
            )}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-[7%] z-20 flex justify-center px-5"
        initial={showIntro ? { opacity: 0, y: 12 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: pace(0.74),
          delay: showIntro ? pace(3.18) : 0.08,
          ease: INTRO_EASE,
        }}
      >
        <p className="font-display text-[1.08rem] font-semibold tracking-[-0.04em] text-[#00458b] [text-shadow:0_1px_0_rgba(255,255,255,0.75)] sm:text-[1.26rem] md:text-[1.18rem]">
          Making sense of the real world
        </p>
      </motion.div>
    </div>
  );
}

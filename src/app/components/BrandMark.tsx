import lampataLogo from "../../../Lampata.svg";
import lampataLogoSource from "../../../Lampata.svg?raw";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "./ui/utils";

interface BrandMarkProps {
  className?: string;
  satelliteMode?: "none" | "orbit";
  variant?: "default" | "light";
}

const LOGO_VIEW_BOX = "0 595 1135.587 333.044";
const SATELLITE_ORBIT_DURATION_MS = 9500;
const SATELLITE_ORBIT_SAMPLE_COUNT = 480;
const SATELLITE_ROTATION = 18;

function getAttributeValue(tag: string, attribute: string) {
  return tag.match(new RegExp(`${attribute}="([^"]+)"`))?.[1] ?? null;
}

function createOrbitPath(svgSource: string) {
  const ellipseTags = svgSource.match(/<ellipse\b[\s\S]*?\/>/g) ?? [];
  const ellipseTag =
    ellipseTags.find((tag) => tag.includes('id="path1"')) ??
    ellipseTags.find((tag) => tag.includes("fill-opacity:0")) ??
    ellipseTags[0];

  if (!ellipseTag) {
    return null;
  }

  const cx = Number(getAttributeValue(ellipseTag, "cx"));
  const cy = Number(getAttributeValue(ellipseTag, "cy"));
  const rx = Number(getAttributeValue(ellipseTag, "rx"));
  const ry = Number(getAttributeValue(ellipseTag, "ry"));
  const transform = getAttributeValue(ellipseTag, "transform");

  if ([cx, cy, rx, ry].some((value) => Number.isNaN(value))) {
    return null;
  }

  const matrixValues = transform?.match(/matrix\(([^)]+)\)/)?.[1]
    ?.split(/[,\s]+/)
    .filter(Boolean)
    .map(Number);

  const [a, b, c, d, e, f] =
    matrixValues && matrixValues.length === 6 && matrixValues.every((value) => !Number.isNaN(value))
      ? matrixValues
      : [1, 0, 0, 1, 0, 0];

  const commands: string[] = [];

  for (let index = 0; index <= SATELLITE_ORBIT_SAMPLE_COUNT; index += 1) {
    const angle = (index / SATELLITE_ORBIT_SAMPLE_COUNT) * Math.PI * 2;
    const localX = cx + rx * Math.cos(angle);
    const localY = cy + ry * Math.sin(angle);
    const x = a * localX + c * localY + e;
    const y = b * localX + d * localY + f;
    const command = index === 0 ? "M" : "L";

    commands.push(`${command} ${x.toFixed(3)} ${y.toFixed(3)}`);
  }

  return commands.join(" ");
}

const SATELLITE_ORBIT_PATH = createOrbitPath(lampataLogoSource);

function OrbitingSatellite({ variant }: Pick<BrandMarkProps, "variant">) {
  const shouldReduceMotion = useReducedMotion();
  const orbitPathRef = useRef<SVGPathElement | null>(null);
  const satelliteRef = useRef<SVGGElement | null>(null);
  const bodyFill = variant === "light" ? "#ffffff" : "#f5d704";
  const bodyStroke = variant === "light" ? "rgba(255, 255, 255, 0.85)" : "#00458b";
  const panelFill = variant === "light" ? "rgba(255, 255, 255, 0.72)" : "#00458b";
  const panelStroke = variant === "light" ? "rgba(255, 255, 255, 0.35)" : "#f5d704";
  const antennaStroke = variant === "light" ? "rgba(255, 255, 255, 0.72)" : "#00458b";
  const accentFill = variant === "light" ? "#ffffff" : "#f5d704";
  const badgeFill = variant === "light" ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.96)";
  const badgeStroke = variant === "light" ? "rgba(255, 255, 255, 0.42)" : "rgba(0, 69, 139, 0.12)";

  const satelliteArtwork = (
    <g style={{ filter: "drop-shadow(0 8px 16px rgba(0, 69, 139, 0.22))" }}>
      <circle cx="4" cy="6" r="28" fill="rgba(0, 69, 139, 0.16)" opacity="0.16" />
      <circle cx="0" cy="0" r="28" fill={badgeFill} stroke={badgeStroke} strokeWidth="2" />
      <rect
        x="-19"
        y="-8"
        width="11"
        height="16"
        rx="2.2"
        fill={panelFill}
        opacity="0.95"
        stroke={panelStroke}
        strokeWidth="1.6"
      />
      <rect
        x="8"
        y="-8"
        width="11"
        height="16"
        rx="2.2"
        fill={panelFill}
        opacity="0.95"
        stroke={panelStroke}
        strokeWidth="1.6"
      />
      <line x1="-8" y1="0" x2="-3" y2="0" stroke={bodyStroke} strokeWidth="1.8" />
      <line x1="3" y1="0" x2="8" y2="0" stroke={bodyStroke} strokeWidth="1.8" />
      <rect
        x="-6.5"
        y="-6"
        width="13"
        height="12"
        rx="3"
        fill={bodyFill}
        stroke={bodyStroke}
        strokeWidth="1.9"
      />
      <circle cx="0" cy="0" r="2.2" fill={accentFill} opacity="0.95" />
      <line x1="0" y1="6" x2="0" y2="14.5" stroke={antennaStroke} strokeWidth="1.8" />
      <circle cx="0" cy="16.8" r="2" fill={accentFill} />
    </g>
  );

  useEffect(() => {
    const orbitPathNode = orbitPathRef.current;
    const satelliteNode = satelliteRef.current;

    if (!SATELLITE_ORBIT_PATH || !orbitPathNode || !satelliteNode) {
      return;
    }

    const orbitLength = orbitPathNode.getTotalLength();

    const setSatellitePosition = (distance: number) => {
      const point = orbitPathNode.getPointAtLength(distance);

      satelliteNode.setAttribute(
        "transform",
        `translate(${point.x.toFixed(3)} ${point.y.toFixed(3)}) rotate(${SATELLITE_ROTATION})`,
      );
    };

    if (shouldReduceMotion) {
      setSatellitePosition(0);
      return;
    }

    let frameId = 0;
    let startedAt: number | null = null;

    const animate = (timestamp: number) => {
      if (startedAt === null) {
        startedAt = timestamp;
      }

      const elapsed = (timestamp - startedAt) % SATELLITE_ORBIT_DURATION_MS;
      const distance = (elapsed / SATELLITE_ORBIT_DURATION_MS) * orbitLength;

      setSatellitePosition(distance);
      frameId = window.requestAnimationFrame(animate);
    };

    setSatellitePosition(0);
    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [shouldReduceMotion]);

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      viewBox={LOGO_VIEW_BOX}
    >
      {SATELLITE_ORBIT_PATH ? (
        <path d={SATELLITE_ORBIT_PATH} fill="none" ref={orbitPathRef} stroke="transparent" strokeWidth="1" />
      ) : null}
      <g ref={satelliteRef}>{satelliteArtwork}</g>
    </svg>
  );
}

export function BrandMark({
  className,
  satelliteMode = "none",
  variant = "default",
}: BrandMarkProps) {
  return (
    <div className={cn("relative inline-flex w-full", className)}>
      <img
        src={lampataLogo}
        alt="Lampata"
        className="h-auto w-full"
        style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
      />
      {satelliteMode === "orbit" ? <OrbitingSatellite variant={variant} /> : null}
    </div>
  );
}

import lampataLogo from "../../../Lampata.svg";
import { cn } from "./ui/utils";

interface BrandMarkProps {
  className?: string;
  showTagline?: boolean;
}

export function BrandMark({ className, showTagline = false }: BrandMarkProps) {
  return (
    <div className={cn("inline-flex w-full", className)}>
      <svg
        viewBox={showTagline ? "0 0 1155 360" : "0 0 1155 292"}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Lampata"
      >
        <image
          href={lampataLogo}
          x="0"
          y="0"
          width="1155"
          height="360"
          preserveAspectRatio="xMinYMin meet"
        />
      </svg>
    </div>
  );
}

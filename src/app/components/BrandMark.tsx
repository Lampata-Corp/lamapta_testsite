import lampataLogo from "../../../Lampata.svg";
import { cn } from "./ui/utils";

interface BrandMarkProps {
  className?: string;
  variant?: "default" | "light";
}

export function BrandMark({ className, variant = "default" }: BrandMarkProps) {
  return (
    <div className={cn("inline-flex w-full", className)}>
      <img
        src={lampataLogo}
        alt="Lampata"
        className="h-auto w-full"
        style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </div>
  );
}

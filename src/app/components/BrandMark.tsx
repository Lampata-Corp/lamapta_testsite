import lampataLogo from "../../../Lampata.svg";
import { cn } from "./ui/utils";

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div className={cn("inline-flex w-full", className)}>
      <img src={lampataLogo} alt="Lampata" className="h-auto w-full" />
    </div>
  );
}

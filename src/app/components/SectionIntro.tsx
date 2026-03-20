import { cn } from "./ui/utils";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-14 flex max-w-3xl flex-col gap-4",
        centered && "mx-auto items-center text-center",
        className,
      )}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title max-w-4xl text-balance">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "dark", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Badge className={tone === "light" ? "border-white/15 bg-white/10 text-white" : undefined}>{eyebrow}</Badge>
      <h2 className={cn("mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl", tone === "light" ? "text-white" : "text-slate-950")}>{title}</h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-8 sm:text-lg", tone === "light" ? "text-slate-300" : "text-slate-600")}>{description}</p>
      ) : null}
    </div>
  );
}

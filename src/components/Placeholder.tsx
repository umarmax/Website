import { Coffee, Leaf, UtensilsCrossed, Flower2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  coffee: Coffee,
  leaf: Leaf,
  utensils: UtensilsCrossed,
  flower: Flower2,
};

export function Placeholder({
  icon = "leaf",
  label,
  className,
  ratio = "aspect-[4/5]",
}: {
  icon?: keyof typeof ICONS;
  label?: string;
  className?: string;
  ratio?: string;
}) {
  const Icon = ICONS[icon];
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-accent/25",
        ratio,
        className,
      )}
    >
      <div className="texture-linen absolute inset-0 opacity-60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-foreground/40">
        <Icon className="h-10 w-10" strokeWidth={1.25} />
        {label && (
          <span className="font-display text-base italic tracking-wide">{label}</span>
        )}
      </div>
    </div>
  );
}

import { Placeholder } from "./Placeholder";

export function HighlightCard({
  title,
  description,
  icon,
  price,
}: {
  title: string;
  description: string;
  icon: "coffee" | "leaf" | "utensils" | "flower";
  price?: string;
}) {
  return (
    <article className="group flex flex-col gap-4">
      <Placeholder icon={icon} ratio="aspect-[4/5]" />
      <div>
        <h3 className="font-display text-2xl text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-foreground/60">{description}</p>
        {price && (
          <div className="mt-3 text-xs lowercase tracking-[0.22em] text-foreground/50">
            {price} soʼm
          </div>
        )}
      </div>
    </article>
  );
}

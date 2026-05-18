import { Star } from "lucide-react";

export function ReviewCard({ quote, author }: { quote: string; author?: string }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground">
        “{quote}”
      </blockquote>
      {author && (
        <figcaption className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground/50">
          — {author}
        </figcaption>
      )}
    </figure>
  );
}

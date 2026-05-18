import { useT, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { locale, setLocale } = useT();
  const opts: Locale[] = ["en", "ru"];
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 p-1 text-xs uppercase tracking-[0.18em]">
      {opts.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLocale(o)}
          className={cn(
            "rounded-full px-3 py-1 transition-colors",
            locale === o
              ? "bg-primary text-primary-foreground"
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

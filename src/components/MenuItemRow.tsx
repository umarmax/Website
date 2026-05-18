import type { MenuItem } from "@/lib/menu-data";
import type { Locale } from "@/lib/i18n";

export function MenuItemRow({ item, locale }: { item: MenuItem; locale: Locale }) {
  return (
    <li className="flex items-baseline gap-4 border-b border-dashed border-border/70 py-5 last:border-b-0">
      <div className="flex-1">
        <div className="font-display text-xl text-foreground">{item[locale]}</div>
        {item.description && (
          <p className="mt-1 text-sm text-foreground/60">{item.description[locale]}</p>
        )}
      </div>
      <div className="whitespace-nowrap font-display text-lg text-foreground/80">
        {item.price}
        <span className="ml-1 text-xs lowercase tracking-[0.18em] text-foreground/40">
          soʼm
        </span>
      </div>
    </li>
  );
}

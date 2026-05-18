import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { menuData, type MenuCategoryKey } from "@/lib/menu-data";
import { MenuItemRow } from "@/components/MenuItemRow";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — SOUL cafe Tashkent" },
      {
        name: "description",
        content:
          "Full menu at SOUL cafe in Tashkent — coffee, lemonades, salads, pides, mains and desserts. Prices in UZS.",
      },
      { property: "og:title", content: "Menu — SOUL cafe Tashkent" },
      {
        property: "og:description",
        content:
          "Coffee, lemonades, salads, pides, mains and desserts. Made fresh and served slowly.",
      },
    ],
  }),
  component: MenuPage,
});

const CATEGORY_ORDER: MenuCategoryKey[] = ["mains", "dessert", "others"];

function MenuPage() {
  const { t, locale } = useT();
  return (
    <div className="relative">
      {/* Header */}
      <section className="border-b border-border/60">
        <div className="texture-linen absolute inset-x-0 top-0 h-96 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="text-xs uppercase tracking-[0.28em] text-foreground/55">
            {t.menuPage.eyebrow}
          </div>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
            {t.menuPage.title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/65">
            {t.menuPage.subtitle}
          </p>
        </div>
      </section>

      {/* Category chips (mobile) */}
      <div className="sticky top-[73px] z-30 border-b border-border/60 bg-background/90 backdrop-blur md:hidden">
        <div className="flex gap-2 overflow-x-auto px-6 py-3 text-xs uppercase tracking-[0.18em]">
          {CATEGORY_ORDER.map((k) => (
            <a
              key={k}
              href={`#${k}`}
              className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-foreground/70"
            >
              {t.menuPage.categories[k]}
            </a>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:grid md:grid-cols-12 md:gap-12 md:px-10">
        {/* Sticky sidebar (desktop) */}
        <aside className="hidden md:col-span-3 md:block">
          <nav className="sticky top-28 space-y-1 text-sm">
            <div className="mb-4 text-xs uppercase tracking-[0.22em] text-foreground/50">
              {t.menuPage.eyebrow}
            </div>
            {CATEGORY_ORDER.map((k) => (
              <a
                key={k}
                href={`#${k}`}
                className="block py-1.5 font-display text-lg text-foreground/70 transition-colors hover:text-foreground"
              >
                {t.menuPage.categories[k]}
              </a>
            ))}
          </nav>
        </aside>

        <div className="md:col-span-9 md:col-start-4">
          <div className="space-y-20">
            {CATEGORY_ORDER.map((k) => (
              <section key={k} id={k} className="scroll-mt-32">
                <header className="mb-6 flex items-baseline justify-between border-b border-border pb-4">
                  <h2 className="font-display text-3xl md:text-4xl">
                    {t.menuPage.categories[k]}
                  </h2>
                  <span className="text-xs uppercase tracking-[0.22em] text-foreground/45">
                    {String(menuData[k].length).padStart(2, "0")}
                  </span>
                </header>
                <ul>
                  {menuData[k].map((item, i) => (
                    <MenuItemRow key={i} item={item} locale={locale} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

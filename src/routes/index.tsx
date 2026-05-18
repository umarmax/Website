import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Clock, Wallet } from "lucide-react";

import { useT } from "@/lib/i18n";
import { Placeholder } from "@/components/Placeholder";
import { ReviewCard } from "@/components/ReviewCard";
import { HighlightCard } from "@/components/HighlightCard";
import { menuData, highlightOrder } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOUL cafe — A quiet corner of Tashkent" },
      {
        name: "description",
        content:
          "Botanical neighborhood cafe in Tashkent. Slow coffee, seasonal food, open daily until midnight.",
      },
    ],
  }),
  component: IndexPage,
});

const HIGHLIGHT_ICONS = ["coffee", "utensils", "flower", "utensils", "leaf", "coffee"] as const;

function IndexPage() {
  const { t, locale } = useT();

  const highlights = highlightOrder.map((h, i) => {
    const item = menuData[h.key][h.index];
    return {
      title: item[locale],
      description: item.description ? item.description[locale] : "",
      price: item.price,
      icon: HIGHLIGHT_ICONS[i],
    };
  });

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="texture-linen absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-10 md:px-10 md:pb-28 md:pt-24">
          <div className="md:col-span-7 md:pr-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-foreground/55">
              <span className="h-px w-10 bg-foreground/30" />
              {t.hero.eyebrow}
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                {t.hero.viewMenu}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+998990606688"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-accent/25"
              >
                <Phone className="h-4 w-4" /> {t.hero.callUs}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-foreground/60">
              <span className="inline-block h-2 w-2 rounded-full bg-terracotta" />
              {t.hero.open}
            </div>
          </div>
          <div className="relative md:col-span-5">
            <Placeholder icon="flower" ratio="aspect-[4/5]" label="botanical interior" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-sm md:block">
              <div className="font-display text-4xl text-foreground">4.8</div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">
                Google · 908
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <Placeholder icon="leaf" ratio="aspect-[5/6]" label="warm sunlight" />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <div className="text-xs uppercase tracking-[0.28em] text-foreground/55">
              {t.about.eyebrow}
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              {t.about.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/70">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-foreground/55">
                {t.highlights.eyebrow}
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                {t.highlights.title}
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground"
            >
              {t.highlights.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
            {highlights.map((h, i) => (
              <HighlightCard key={i} {...h} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.28em] text-foreground/55">
                {t.reviews.eyebrow}
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                {t.reviews.title}
              </h2>
              <p className="mt-5 text-sm text-foreground/60">
                Drawn from real guest reviews on Google Maps.
              </p>
            </div>
            <div className="grid gap-6 md:col-span-8 md:grid-cols-3">
              {t.reviews.items.map((q, i) => (
                <ReviewCard key={i} quote={q} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6">
            <div className="text-xs uppercase tracking-[0.28em] text-foreground/55">
              {t.visit.eyebrow}
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              {t.visit.title}
            </h2>
            <dl className="mt-10 space-y-7 text-sm">
              <InfoRow icon={<MapPin className="h-4 w-4" />} label={t.visit.eyebrow} value={t.visit.address} />
              <InfoRow icon={<Clock className="h-4 w-4" />} label={t.visit.hoursLabel} value={t.visit.hours} />
              <InfoRow icon={<Phone className="h-4 w-4" />} label={t.visit.phoneLabel} value="+998 99 060 66 88" href="tel:+998990606688" />
              <InfoRow icon={<Wallet className="h-4 w-4" />} label={t.visit.checkLabel} value={t.visit.check} />
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=SOUL+cafe+Tashkent+Buyuk+Ipak+Yoli"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                {t.visit.directions}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+998990606688"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-accent/25"
              >
                <Phone className="h-4 w-4" /> {t.nav.call}
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card aspect-[4/3] shadow-sm">
              <iframe
                title="SOUL cafe location"
                src="https://www.google.com/maps?q=SOUL+cafe+Tashkent+Buyuk+Ipak+Yoli&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Value = href ? (
    <a href={href} className="font-display text-xl text-foreground hover:text-primary">
      {value}
    </a>
  ) : (
    <div className="font-display text-xl text-foreground">{value}</div>
  );
  return (
    <div className="flex gap-5 border-b border-border/70 pb-6 last:border-b-0">
      <div className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-border text-foreground/70">
        {icon}
      </div>
      <div>
        <dt className="text-xs uppercase tracking-[0.22em] text-foreground/50">{label}</dt>
        <dd className="mt-1.5">{Value}</dd>
      </div>
    </div>
  );
}

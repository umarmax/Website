import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { t } = useT();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-[0.32em] text-foreground">
            SOUL
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-foreground/50 sm:inline">
            cafe · Tashkent
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            className="text-foreground/65 transition-colors hover:text-foreground"
          >
            {t.nav.home}
          </Link>
          <Link
            to="/menu"
            activeProps={{ className: "text-foreground" }}
            className="text-foreground/65 transition-colors hover:text-foreground"
          >
            {t.nav.menu}
          </Link>
          <a
            href="#visit"
            className="text-foreground/65 transition-colors hover:text-foreground"
          >
            {t.nav.visit}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href="tel:+998990606688"
            className="hidden rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            {t.nav.call}
          </a>
        </div>
      </div>
    </header>
  );
}

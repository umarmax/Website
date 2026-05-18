import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="font-display text-3xl tracking-[0.28em]">SOUL</div>
          <p className="mt-3 max-w-xs text-sm text-foreground/60">{t.footer.tagline}</p>
        </div>
        <div className="text-sm text-foreground/70">
          <div className="mb-3 text-xs uppercase tracking-[0.22em] text-foreground/50">
            {t.nav.visit}
          </div>
          <p>{t.visit.address}</p>
          <p className="mt-2">{t.visit.hours}</p>
          <a
            href="tel:+998990606688"
            className="mt-2 inline-block text-foreground hover:text-primary"
          >
            +998 99 060 66 88
          </a>
        </div>
        <div className="text-sm text-foreground/70">
          <div className="mb-3 text-xs uppercase tracking-[0.22em] text-foreground/50">
            {t.nav.menu}
          </div>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-foreground">
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-foreground">
                {t.nav.menu}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-foreground/50 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} SOUL cafe. {t.footer.rights}</span>
          <span className="tracking-[0.18em] uppercase">Tashkent</span>
        </div>
      </div>
    </footer>
  );
}

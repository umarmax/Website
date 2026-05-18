import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

import appCss from "../styles.css?url";
import { dictionaries, LocaleContext, type Locale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-foreground/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">
          This page didn’t load
        </h1>
        <p className="mt-2 text-sm text-foreground/60">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-accent/30"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SOUL cafe — A quiet corner of Tashkent" },
      {
        name: "description",
        content:
          "SOUL is a botanical neighborhood cafe on Buyuk Ipak Yo‘li in Tashkent. Slow coffee, seasonal food, open daily until midnight.",
      },
      { property: "og:title", content: "SOUL cafe — A quiet corner of Tashkent" },
      {
        property: "og:description",
        content:
          "Botanical neighborhood cafe in Tashkent. Slow coffee, seasonal food, open daily until midnight.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "SOUL cafe — A quiet corner of Tashkent" },
      { name: "description", content: "SOUL Cafe Design is an application for showcasing cafe menus, reviews, and essential information." },
      { property: "og:description", content: "SOUL Cafe Design is an application for showcasing cafe menus, reviews, and essential information." },
      { name: "twitter:description", content: "SOUL Cafe Design is an application for showcasing cafe menus, reviews, and essential information." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/55845e52-e95d-4d68-8e41-c421b2f7ec3a/id-preview-f0b6a88f--8b0acb4b-caf5-48f9-b462-be18735d8b54.lovable.app-1779123531763.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/55845e52-e95d-4d68-8e41-c421b2f7ec3a/id-preview-f0b6a88f--8b0acb4b-caf5-48f9-b462-be18735d8b54.lovable.app-1779123531763.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined"
      ? (localStorage.getItem("soul-locale") as Locale | null)
      : null;
    if (saved === "en" || saved === "ru") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("soul-locale", l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LocaleProvider>
    </QueryClientProvider>
  );
}

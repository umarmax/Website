# SOUL cafe — Website Plan

A premium botanical cafe website with two routes (`/` landing + `/menu` full menu), bilingual EN/RU toggle, and the brand system applied verbatim (olive green, warm cream, espresso brown, Cormorant Garamond + Inter).

## Brand system (locked)

Applied as design tokens in `src/styles.css`:

- `--background` Warm Cream `#F3EBDD`
- `--foreground` Espresso Brown `#3B2D26`
- `--primary` Olive Green `#6F7148` (hover `#5E613D`)
- `--primary-foreground` Warm Cream
- `--accent` Sage `#A5AF8D`
- `--terracotta` `#B56E4D` (used sparingly for CTA highlights)
- `--radius` 14px
- Fonts: Cormorant Garamond (headlines), Inter (body), loaded via Google Fonts in `__root.tsx`
- Texture cues: linen-paper subtle noise on hero, matte surfaces, no glossy/neon/gradient effects

## Routes

```
src/routes/
  __root.tsx        site shell, fonts, header + footer
  index.tsx         Landing page
  menu.tsx          Full categorized menu
```

Each route gets its own `head()` with EN-language SEO (title, description, og:*).

## Landing page (`/`) sections

1. **Header** — wordmark "SOUL", nav (Home, Menu, Contact), EN/RU toggle
2. **Hero** — large Cormorant headline ("A quiet corner of Tashkent"), short tagline, "View menu" + "Call" CTAs, soft botanical placeholder image, opening hours + "Open · Closes 00:00"
3. **About** — two-column: editorial copy + placeholder image, brand mood (calm, botanical, premium)
4. **Menu highlights** — 6 popular items as cards (Capuccino, Pide, Cheesecake Sebastian, Italian Chicken, Caesar Salad, Pina Colada Game) with placeholder image, name, short description
5. **Reviews** — 3 real reviews from the listing in a quote layout, with 4.8 ★ / 908 reviews badge
6. **Visit / Contact** — address (Buyuk Ipak Yoli ko'chasi, Tashkent), phone (99 060 66 88), hours, average check (100,000–350,000 UZS), map placeholder, directions/call buttons
7. **Footer** — small nav, socials placeholder, copyright

## Menu page (`/menu`)

Categorized full menu using items from the listing, organized as:

- **Coffee & Hot Drinks** — Capuccino, Golden Cappuccino, Coffee Latte
- **Cold Drinks & Lemonades** — Raspberry Tea, Lemon Tea, Berry Lychee Lemonade, Pina Colada Game
- **Salads** — Italian Salad, Buffalo Chicken Salad, Thai Beef Salad, Caesar Salad
- **Soups** — Gazpacho
- **Mains** — Pide Assorti, Italian Chicken, Georgian Chicken, Barbecue
- **Desserts** — Cheesecake Sebastian

Each category renders as a section with Cormorant heading, items as name + short description + price placeholder in UZS. Sticky category nav on the left (desktop) / horizontal scroll chips (mobile).

## Bilingual EN/RU toggle

- Lightweight in-memory dictionary in `src/lib/i18n.ts` with `en` and `ru` keys for every visible string
- `LanguageProvider` context in `__root.tsx` storing current locale in `localStorage`
- `useT()` hook returns the active dictionary
- Toggle button in header (EN | RU)
- No external i18n library — keeps bundle small

## Imagery

Tasteful placeholders only — `bg-[--sage]/20` blocks with subtle Lucide icons (Coffee, Leaf, UtensilsCrossed) and Cormorant captions. No AI image generation. User can swap later.

## Components

```
src/components/
  Header.tsx          nav + language toggle
  Footer.tsx
  LanguageToggle.tsx
  ReviewCard.tsx
  MenuItemCard.tsx
  MenuCategory.tsx
  Placeholder.tsx     reusable image-slot
src/lib/
  i18n.ts             dictionaries + hook
  menu-data.ts        categorized menu items (EN/RU names)
```

## Technical notes

- TanStack Start file-based routes, no router config edits
- All colors via semantic tokens — never inline hex in components
- Fonts loaded via `<link>` in `__root.tsx` head, registered in `@theme` as `--font-display` (Cormorant) and `--font-sans` (Inter)
- Replace placeholder `src/routes/index.tsx` content entirely
- Responsive: single column mobile, two-column from `md`, generous whitespace throughout
- Buttons: 14px radius, olive primary with cream text, terracotta reserved for one hero highlight only

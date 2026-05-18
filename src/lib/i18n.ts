import { createContext, useContext } from "react";

export type Locale = "en" | "ru";

const dict = {
  en: {
    nav: { home: "Home", menu: "Menu", visit: "Visit", call: "Call" },
    hero: {
      eyebrow: "Cafe · Tashkent",
      title: "A quiet corner of Tashkent",
      subtitle:
        "Slow mornings, botanical light, and food made with care. SOUL is a neighborhood cafe on Buyuk Ipak Yo‘li — open from breakfast until midnight.",
      viewMenu: "View the menu",
      callUs: "Call 99 060 66 88",
      open: "Open · Closes 00:00",
    },
    about: {
      eyebrow: "Our story",
      title: "Where coffee meets calm",
      body: [
        "SOUL began as a small idea: a room where the city slows down for a moment. Linen napkins, warm ceramic, dried flowers on every table.",
        "We roast our coffee in small batches, bake daily, and write our menu around what feels right for the season. The result is the kind of place you come back to without needing a reason.",
      ],
    },
    highlights: {
      eyebrow: "Loved by 908 guests",
      title: "A taste of the menu",
      cta: "See the full menu",
    },
    reviews: {
      eyebrow: "Google Reviews",
      title: "4.8 from 908 guests",
      items: [
        "Cozy atmosphere, attentive and friendly staff. Delicious food. A perfect 10 out of 10.",
        "Everything on time. The atmosphere is very warm — you can feel the care for every guest. It’s a pleasure to be here.",
        "Everything is tasty, the dessert plating is excellent. Our waiter Islam — well done!",
      ],
    },
    visit: {
      eyebrow: "Find us",
      title: "Come and stay a while",
      address: "Buyuk Ipak Yo‘li ko‘chasi, Tashkent",
      hoursLabel: "Hours",
      hours: "Open daily · until 00:00",
      phoneLabel: "Phone",
      checkLabel: "Average check",
      check: "100,000–350,000 UZS per person",
      directions: "Get directions",
    },
    menuPage: {
      eyebrow: "Our menu",
      title: "Made fresh, served slowly",
      subtitle: "Prices in UZS. Seasonal items rotate quietly through the year.",
      categories: {
        mains: "Mains",
        dessert: "Dessert",
        others: "Others",
      },
    },
    footer: {
      tagline: "A quiet cafe in Tashkent.",
      rights: "All rights reserved.",
    },
  },
  ru: {
    nav: { home: "Главная", menu: "Меню", visit: "Контакты", call: "Позвонить" },
    hero: {
      eyebrow: "Кафе · Ташкент",
      title: "Тихий уголок Ташкента",
      subtitle:
        "Медленные утра, ботанический свет и еда, приготовленная с заботой. SOUL — соседское кафе на Буюк Ипак Йули, открытое с завтрака и до полуночи.",
      viewMenu: "Посмотреть меню",
      callUs: "Позвонить 99 060 66 88",
      open: "Открыто · Закроется в 00:00",
    },
    about: {
      eyebrow: "Наша история",
      title: "Где кофе встречает тишину",
      body: [
        "SOUL начался с простой идеи: комната, в которой город замедляется на минуту. Льняные салфетки, тёплая керамика, сухоцветы на каждом столе.",
        "Мы обжариваем кофе маленькими партиями, печём каждый день и пишем меню вокруг того, что чувствуется правильным для сезона. Получается место, в которое возвращаются без повода.",
      ],
    },
    highlights: {
      eyebrow: "Любимое у 908 гостей",
      title: "Вкус нашего меню",
      cta: "Открыть всё меню",
    },
    reviews: {
      eyebrow: "Отзывы Google",
      title: "4,8 от 908 гостей",
      items: [
        "Уютная атмосфера, внимательный и приветливый персонал. Вкусная еда. Атмосфера 10 из 10.",
        "Всё вовремя. Атмосфера очень уютная, чувствуется забота о каждом госте. Здесь действительно приятно.",
        "Всё вкусно, подача сладкого отлично. Официант Ислам молодец!",
      ],
    },
    visit: {
      eyebrow: "Как найти",
      title: "Заходите, останьтесь подольше",
      address: "Buyuk Ipak Yo‘li ko‘chasi, Ташкент",
      hoursLabel: "Часы работы",
      hours: "Ежедневно · до 00:00",
      phoneLabel: "Телефон",
      checkLabel: "Средний чек",
      check: "100 000–350 000 UZS на человека",
      directions: "Построить маршрут",
    },
    menuPage: {
      eyebrow: "Наше меню",
      title: "Свежее, поданное неспешно",
      subtitle: "Цены в UZS. Сезонные позиции тихо сменяются в течение года.",
      categories: {
        mains: "Горячее",
        dessert: "Десерт",
        others: "Другое",
      },
    },
    footer: {
      tagline: "Тихое кафе в Ташкенте.",
      rights: "Все права защищены.",
    },
  },
} as const;

export type Dictionary = typeof dict.en;

export const dictionaries: Record<Locale, Dictionary> = {
  en: dict.en,
  ru: dict.ru as unknown as Dictionary,
};

export const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}>({
  locale: "en",
  setLocale: () => {},
  t: dictionaries.en,
});

export function useT() {
  return useContext(LocaleContext);
}

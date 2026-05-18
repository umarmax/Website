export type MenuItem = {
  en: string;
  ru: string;
  description?: { en: string; ru: string };
  price: string; // soʼm
};

export type MenuCategoryKey = "mains" | "dessert" | "others";

export const menuData: Record<MenuCategoryKey, MenuItem[]> = {
  mains: [
    {
      en: "Chicken Kiev",
      ru: "Котлета по-киевски",
      description: {
        en: "Served with mashed potatoes and sundried tomato sauce.",
        ru: "Подаётся с картофельным пюре и соусом из вяленых томатов.",
      },
      price: "62 000",
    },
    {
      en: "Beef Medallions",
      ru: "Медальоны из говядины",
      description: {
        en: "Bon fillet, mashed potato and creamy mushroom sauce.",
        ru: "Филе бон, картофельное пюре и сливочно-грибной соус.",
      },
      price: "152 000",
    },
    {
      en: "Homemade Potato and Meat",
      ru: "Домашняя картошка с мясом",
      price: "112 000",
    },
    {
      en: "Turkish Sac Tava with Beef",
      ru: "Турецкая сач тава с говядиной",
      description: {
        en: "Mixed rice, parsley, biber spices, capsicum and tomatoes.",
        ru: "Рис, петрушка, специи бибер, перец и томаты.",
      },
      price: "95 000",
    },
    {
      en: "Turkish Sac Tava with Chicken",
      ru: "Турецкая сач тава с курицей",
      description: {
        en: "Mixed rice, parsley, biber spices, capsicum and tomatoes.",
        ru: "Рис, петрушка, специи бибер, перец и томаты.",
      },
      price: "70 000",
    },
  ],
  dessert: [
    {
      en: "Pina Colada Game",
      ru: "Игра Пина Колада",
      price: "72 000",
    },
  ],
  others: [
    {
      en: "Kuksi",
      ru: "Куксу",
      price: "60 000",
    },
    {
      en: "Okroshka",
      ru: "Окрошка",
      price: "50 000",
    },
    {
      en: "Cold Beetroot Soup",
      ru: "Холодный свекольник",
      price: "45 000",
    },
    {
      en: "Gazpacho",
      ru: "Гаспачо",
      description: {
        en: "Classic cold Spanish soup, made with fresh tomatoes.",
        ru: "Классический холодный испанский суп из свежих томатов.",
      },
      price: "55 000",
    },
    {
      en: "Fruit Salad",
      ru: "Фруктовый салат",
      price: "54 000",
    },
  ],
};

export const highlightOrder: { key: MenuCategoryKey; index: number }[] = [
  { key: "mains", index: 1 },  // Beef Medallions
  { key: "mains", index: 0 },  // Chicken Kiev
  { key: "mains", index: 3 },  // Sac Tava Beef
  { key: "dessert", index: 0 }, // Pina Colada
  { key: "others", index: 3 }, // Gazpacho
  { key: "others", index: 0 }, // Kuksi
];

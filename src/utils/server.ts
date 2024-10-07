import type { Product } from '../types/index.types'

export const pizzasCategories = [
  { id: 1, value: 'hot', label: 'Острые' },
  { id: 2, value: 'kids', label: 'Детям' },
  { id: 3, value: 'veg', label: 'Без мяса' },
]

export const drinksCategories = [
  { id: 1, value: 'hot', label: 'Горячие' },
  { id: 2, value: 'cold', label: 'Холодные' },
]

export const pizzas: Product[] = [
  {
    _id: 1,
    name: 'Пицца Бекон и чоризо',
    description:
      'Бекон, колбаски чоризо, моцарелла, фирменный томатный соус, базилик, орегано, тесто',
    image: '/assets/products/pizza/p1.webp',
    category: ['hot'],
  },
  {
    _id: 2,
    name: 'Пицца Мясное барбекю',
    description:
      'Охотничьи колбаски, бекон, моцарелла, лук красный, томаты, соус барбекю, фирменный томатный соус, тесто',
    image: '/assets/products/pizza/p2.webp',
    category: [],
  },
  {
    _id: 3,
    name: 'Пицца Ветчина и Грибы',
    description: 'Ветчина, свежие шампиньоны, моцарелла, чеснок, соус ранч, тесто',
    image: '/assets/products/pizza/p3.webp',
    category: [],
  },
  {
    _id: 4,
    name: 'Пицца Чоризо',
    description:
      'Колбаски чоризо, моцарелла, свежие шампиньоны, перец болгарский, фирменный томатный соус, тесто',
    image: '/assets/products/pizza/p4.webp',
    category: ['hot'],
  },
  {
    _id: 5,
    name: 'Пицца Греческая с курицей',
    description:
      'Курица, моцарелла, фета, томаты, перец болгарский, красный лук, свежие шампиньоны, базилик, орегано, фирменный томатный соус, тесто',
    image: '/assets/products/pizza/p5.webp',
    category: ['kids'],
  },
  {
    _id: 6,
    name: 'Пицца Итальянская',
    description:
      'Пепперони, два вида сыра моцареллы, шампиньоны, фирменный томатный соус, базилик, орегано, тесто',
    image: '/assets/products/pizza/p6.webp',
    category: [],
  },
  {
    _id: 7,
    name: 'Пицца Курица и Колбаски',
    description:
      'Копченая курица, охотничьи колбаски, моцарелла, маринованные огурцы, томаты, красный лук, свежий укроп, майонезный соус, кетчуп, тесто',
    image: '/assets/products/pizza/p7.webp',
    category: [],
  },
  {
    _id: 8,
    name: 'Пицца Курочка Блю Чиз',
    description: 'Много курицы, моцарелла, сыр блю чиз с голубой плесенью, соус ранч, тесто',
    image: '/assets/products/pizza/p8.webp',
    category: [],
  },
  {
    _id: 9,
    name: 'Пицца Жюльен',
    description:
      'Бекон, копчёная курица, моцарелла, чеддер, свежие шампиньоны, сливки, укроп, майонезный соус, тесто',
    image: '/assets/products/pizza/p9.webp',
    category: [],
  },
  {
    _id: 10,
    name: 'Пицца Ветчина и бекон',
    description: 'Ветчина, бекон, моцарелла, чеддер, красный лук, соус цезарь, тесто',
    image: '/assets/products/pizza/p10.webp',
    category: [],
  },
  {
    _id: 11,
    name: 'Пицца Американа',
    description:
      'Бекон, моцарелла, чеддер, маринованные огурцы, фирменный томатный соус, медово - горчичный соус, тесто',
    image: '/assets/products/pizza/p11.webp',
    category: [],
  },
  {
    _id: 12,
    name: 'Пицца 4 сезона',
    description:
      'Фирменный томатный соус, моцарелла, пепперони, ветчина, охотничьи колбаски, буженина из свинины, сыр блю чиз, сыр фета, томаты',
    image: '/assets/products/pizza/p12.webp',
    category: [],
  },
  {
    _id: 13,
    name: 'Пицца Деревенская',
    description:
      'Ветчина, копчёная курица, моцарелла, зеленый лук, маринованные огурцы, майонезный соус, фирменный томатный соус, тесто',
    image: '/assets/products/pizza/p13.webp',
    category: [],
  },
  {
    _id: 14,
    name: 'Пицца Охотничья',
    description:
      'Пепперони, охотничьи колбаски, моцарелла, свежие шампиньоны, свежий укроп, соус ранч, фирменный томатный соус, тесто',
    image: '/assets/products/pizza/p14.webp',
    category: ['hot'],
  },
  {
    _id: 15,
    name: 'Пицца Пепперони',
    description: 'Много пепперони, много моцареллы, фирменный томатный соус, тесто',
    image: '/assets/products/pizza/p15.webp',
    category: ['hot'],
  },
  {
    _id: 16,
    name: 'Пицца Жгучая Барбекю',
    description:
      'Пепперони, моцарелла, красный лук, халапеньо, болгарский перец, фирменный томатный соус, барбекю соус, тесто',
    image: '/assets/products/pizza/p16.webp',
    category: ['hot'],
  },
  {
    _id: 17,
    name: 'Пицца Карбонара',
    description:
      'Много бекона, моцарелла, пармезан, томаты, сливки, свежий укроп, соус ранч, тесто',
    image: '/assets/products/pizza/p17.webp',
    category: ['kids'],
  },
  {
    _id: 18,
    name: 'Пицца 4 сыра',
    description: 'Моцарелла, сыр блю чиз с голубой плесенью, фета, пармезан, соус ранч, тесто',
    image: '/assets/products/pizza/p18.webp',
    category: ['kids', 'veg'],
  },
  {
    _id: 19,
    name: 'Пицца Сырная',
    description: 'Два вида моцареллы, фета, соус цезарь, тесто',
    image: '/assets/products/pizza/p19.webp',
    category: ['kids', 'veg'],
  },
  {
    _id: 20,
    name: 'Пицца Маргарита',
    description: 'Очень много моцареллы, томаты, фирменный томатный соус, орегано, базилик, тесто',
    image: '/assets/products/pizza/p20.webp',
    category: ['kids', 'veg'],
  },
]

export const drinks: Product[] = [
  {
    _id: 21,
    name: 'Добрый Апельсин',
    description: '0,5 л',
    image: '/assets/products/drink/d1.avif',
    category: ['cold'],
    price: 140,
  },
  {
    _id: 22,
    name: 'Добрый Лимон-Лайм',
    description: '0,5 л',
    image: '/assets/products/drink/d2.avif',
    category: ['cold'],
    price: 140,
  },
  {
    _id: 23,
    name: 'Добрый Кола',
    description: '0,5 л',
    image: '/assets/products/drink/d3.avif',
    category: ['cold'],
    price: 140,
  },
  {
    _id: 24,
    name: 'Rich Tea Черный с лимоном',
    description: '0,5 л',
    image: '/assets/products/drink/d4.avif',
    category: ['cold'],
    price: 160,
  },
  {
    _id: 25,
    name: 'Rich Tea Зеленый',
    description: '0,5 л',
    image: '/assets/products/drink/d5.avif',
    category: ['cold'],
    price: 160,
  },
  {
    _id: 26,
    name: 'Rich Tea Зеленый с манго',
    description: '0,5 л',
    image: '/assets/products/drink/d6.avif',
    category: ['cold'],
    price: 160,
  },
  {
    _id: 27,
    name: 'Апельсиновый сок Rich',
    description: '1 л',
    image: '/assets/products/drink/d7.avif',
    category: ['cold'],
    price: 260,
  },
  {
    _id: 28,
    name: 'Яблочный сок Rich',
    description: '1 л',
    image: '/assets/products/drink/d8.avif',
    category: ['cold'],
    price: 260,
  },
  {
    _id: 29,
    name: 'Вишневый нектар Rich',
    description: '1 л',
    image: '/assets/products/drink/d9.avif',
    category: ['cold'],
    price: 260,
  },
  {
    _id: 30,
    name: 'Кофе Американо',
    description: '0,2 л',
    image: '/assets/products/drink/c10.webp',
    category: ['hot'],
    price: 100,
  },
  {
    _id: 31,
    name: 'Кофе Американо',
    description: '0,3 л',
    image: '/assets/products/drink/c11.webp',
    category: ['hot'],
    price: 130,
  },
  {
    _id: 32,
    name: 'Кофе Капучино',
    description: '0,2 л',
    image: '/assets/products/drink/c12.webp',
    category: ['hot'],
    price: 100,
  },
  {
    _id: 33,
    name: 'Кофе Капучино',
    description: '0,3 л',
    image: '/assets/products/drink/c13.webp',
    category: ['hot'],
    price: 130,
  },
  {
    _id: 34,
    name: 'Кофе Латте',
    description: '0,3 л',
    image: '/assets/products/drink/c14.webp',
    category: ['hot'],
    price: 140,
  },
  {
    _id: 35,
    name: 'Чай Черный',
    description: '0,3 л',
    image: '/assets/products/drink/t15.webp',
    category: ['hot'],
    price: 80,
  },
  {
    _id: 36,
    name: 'Чай Зеленый',
    description: '0,3 л',
    image: '/assets/products/drink/t16.webp',
    category: ['hot'],
    price: 80,
  },
]

export type OneOption = Record<string, number>
export type Values = Record<string, OneOption>

export const PRICE: Values = {
  size: {
    small: 400,
    medium: 500,
    large: 600,
  },
  thickness: {
    thin: 0,
    lush: 50,
  },
  toppings: {
    cheese: 80,
    jalapeno: 50,
    mushrooms: 95,
    ham: 100,
  },
}

export const WEIGHT: Values = {
  size: {
    small: 370,
    medium: 520,
    large: 620,
  },
  thickness: {
    thin: 0,
    lush: 80,
  },
  toppings: {
    cheese: 100,
    jalapeno: 30,
    mushrooms: 30,
    ham: 50,
  },
}

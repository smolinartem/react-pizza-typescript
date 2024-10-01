import type { Pizza } from '../types/index.types'

export const pizzaCategories = [
  { id: 1, value: 'all', label: 'Все' },
  { id: 2, value: 'hot', label: 'Острые' },
  { id: 3, value: 'kids', label: 'Детям' },
  { id: 4, value: 'veg', label: 'Без мяса' },
]

export const pizzaList: Pizza[] = [
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
    category: ['classic'],
  },
  {
    _id: 3,
    name: 'Пицца Ветчина и Грибы',
    description: 'Ветчина, свежие шампиньоны, моцарелла, чеснок, соус ранч, тесто',
    image: '/assets/products/pizza/p3.webp',
    category: ['classic'],
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
    category: ['classic'],
  },
  {
    _id: 7,
    name: 'Пицца Курица и Колбаски',
    description:
      'Копченая курица, охотничьи колбаски, моцарелла, маринованные огурцы, томаты, красный лук, свежий укроп, майонезный соус, кетчуп, тесто',
    image: '/assets/products/pizza/p7.webp',
    category: ['classic'],
  },
  {
    _id: 8,
    name: 'Пицца Курочка Блю Чиз',
    description: 'Много курицы, моцарелла, сыр блю чиз с голубой плесенью, соус ранч, тесто',
    image: '/assets/products/pizza/p8.webp',
    category: ['classic'],
  },
  {
    _id: 9,
    name: 'Пицца Жюльен',
    description:
      'Бекон, копчёная курица, моцарелла, чеддер, свежие шампиньоны, сливки, укроп, майонезный соус, тесто',
    image: '/assets/products/pizza/p9.webp',
    category: ['classic'],
  },
  {
    _id: 10,
    name: 'Пицца Ветчина и бекон',
    description: 'Ветчина, бекон, моцарелла, чеддер, красный лук, соус цезарь, тесто',
    image: '/assets/products/pizza/p10.webp',
    category: ['classic'],
  },
  {
    _id: 11,
    name: 'Пицца Американа',
    description:
      'Бекон, моцарелла, чеддер, маринованные огурцы, фирменный томатный соус, медово - горчичный соус, тесто',
    image: '/assets/products/pizza/p11.webp',
    category: ['classic'],
  },
  {
    _id: 12,
    name: 'Пицца 4 сезона',
    description:
      'Фирменный томатный соус, моцарелла, пепперони, ветчина, охотничьи колбаски, буженина из свинины, сыр блю чиз, сыр фета, томаты',
    image: '/assets/products/pizza/p12.webp',
    category: ['classic'],
  },
  {
    _id: 13,
    name: 'Пицца Деревенская',
    description:
      'Ветчина, копчёная курица, моцарелла, зеленый лук, маринованные огурцы, майонезный соус, фирменный томатный соус, тесто',
    image: '/assets/products/pizza/p13.webp',
    category: ['classic'],
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

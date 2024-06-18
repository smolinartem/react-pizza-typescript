import { IPizza } from '../types/pizza.types'

import pizza1 from '../assets/pizzas/pizza-1.jpeg'
import pizza2 from '../assets/pizzas/pizza-2.jpeg'
import pizza3 from '../assets/pizzas/pizza-3.jpeg'
import pizza4 from '../assets/pizzas/pizza-4.jpeg'
import pizza5 from '../assets/pizzas/pizza-5.jpeg'
import pizza6 from '../assets/pizzas/pizza-6.jpeg'
import pizza7 from '../assets/pizzas/pizza-7.jpeg'
import pizza8 from '../assets/pizzas/pizza-8.jpeg'
import pizza9 from '../assets/pizzas/pizza-9.jpeg'

export const PIZZAS: IPizza[] = [
  {
    _id: 1,
    name: 'Пицца 4 сыра',
    description: 'Моцарелла, сыр блю чиз с голубой плесенью, фета, пармезан, соус ранч, тесто',
    image: pizza1,
  },
  {
    _id: 2,
    name: 'Пицца Охотничья',
    description:
      'Пепперони, охотничьи колбаски, моцарелла, свежие шампиньоны, свежий укроп, соус ранч, фирменный томатный соус, тесто',
    image: pizza2,
  },
  {
    _id: 3,
    name: 'Пицца Курица и Колбаски',
    description:
      'Копченая курица, охотничьи колбаски, моцарелла, маринованные огурцы, томаты, красный лук, свежий укроп, майонезный соус, кетчуп, тесто',
    image: pizza3,
  },
  {
    _id: 4,
    name: 'Пицца Запечённая Буженина',
    description:
      'Буженина из свинины, моцарелла, маринованные огурцы, лук фри, лук красный, майонезный соус, томатный соус, тесто',
    image: pizza4,
  },
  {
    _id: 5,
    name: 'Пицца Жгучая Барбекю',
    description:
      'Пепперони, моцарелла, красный лук, халапеньо, болгарский перец, фирменный томатный соус, барбекю соус, тесто',
    image: pizza5,
  },
  {
    _id: 6,
    name: 'Пицца Американа',
    description:
      'Бекон, моцарелла, чеддер, маринованные огурцы, фирменный томатный соус, медово - горчичный соус, тесто',
    image: pizza6,
  },
  {
    _id: 7,
    name: 'Пицца Жюльен',
    description:
      'Бекон, копчёная курица, моцарелла, чеддер, свежие шампиньоны, сливки, укроп, майонезный соус, тесто',
    image: pizza7,
  },
  {
    _id: 8,
    name: 'Пицца Копченое барбекю',
    description:
      'Копченая курица, пепперони, моцарелла, томаты, перец болгарский, чеснок, укроп, соус барбекю, соус майонезный, тесто',
    image: pizza8,
  },
  {
    _id: 9,
    name: 'Пицца Пепперони',
    description: 'Много пепперони, много моцареллы, фирменный томатный соус, тесто',
    image: pizza9,
  },
]

interface IOptions {
  [key: string]: {
    [key: string]: number
  }
}

export const PRICE: IOptions = {
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

export const WEIGHT: IOptions = {
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

export const NAVIGATION_LINKS = [
  {
    name: 'Пиццы',
    path: '/',
  },
  {
    name: 'Напитки',
    path: 'drinks',
  },
  {
    name: 'Акции',
    path: 'promos',
  },
  {
    name: 'Контакты',
    path: 'contacts',
  },
]

type Names = {
  [key: string]: string
}

export const RU_NAMES: Names = {
  small: '20см',
  medium: '25см',
  large: '30см',
  thin: 'Тонкое',
  lush: 'Пышное',
  cheese: 'Сыр Моцарелла',
  jalapeno: 'Халапеньо',
  mushrooms: 'Шампиньоны',
  ham: 'Ветчина',
}

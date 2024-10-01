import type { Pizza } from '../types/index.types'

type PizzaCardProps = {
  pizza: Pizza
  onOpen: (pizza: Pizza) => void
}

export default function PizzaCard({ onOpen, pizza }: PizzaCardProps) {
  return (
    <article onClick={() => onOpen(pizza)} className='group flex flex-col cursor-pointer'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75'>
        <img
          src={pizza.image}
          alt={pizza.name}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <h3 className='mt-4 text-lg font-semibold'>{pizza.name}</h3>
      <p className='mt-2 grow text-sm'>{pizza.description}</p>
      <div className='mt-4 flex justify-between items-center'>
        <span className='text-lg font-semibold shrink-0'>от 400 &#8381;</span>
        <button className='text-sm shrink-0 button'>Добавить</button>
      </div>
    </article>
  )
}

import { Product } from '../types/index.types'

type PizzaInfoProps = {
  pizza: Product
}

export default function PizzasInfo({ pizza }: PizzaInfoProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-lg text-center font-title uppercase text-stone-600'>{pizza.name}</h3>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md'>
        <img
          src={pizza.image}
          alt={pizza.name}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <span className='text-center'>{pizza.description}</span>
    </div>
  )
}

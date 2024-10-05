import { Product } from '../types/index.types'

type PizzaInfoProps = {
  pizza: Product
}

export default function PizzasInfo({ pizza }: PizzaInfoProps) {
  return (
    <div className='flex flex-col'>
      <h3 className='mb-4 text-2xl md:text-xl text-center md:text-left font-boldleading-none'>
        {pizza.name}
      </h3>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200'>
        <img
          src={pizza.image}
          alt={pizza.name}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <span className='my-4 text-center'>{pizza.description}</span>
    </div>
  )
}

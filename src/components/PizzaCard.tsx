import type { Product } from '../types/index.types'

import ButtonLike from './buttons/ButtonLike'

type PizzaCardProps = {
  product: Product
  onCardClick: (product: Product) => void
}

export default function PizzaCard({ onCardClick, product }: PizzaCardProps) {
  return (
    <article className='group relative w-full flex'>
      <ButtonLike product={product} />

      <div
        onClick={() => onCardClick(product)}
        className='flex sm:flex-col w-full items-center gap-2 cursor-pointer'
      >
        <div className='shrink-0 size-32 sm:size-auto sm:w-full aspect-1 overflow-hidden rounded-md bg-white group-hover:opacity-75'>
          <img
            src={product.image}
            alt={product.name}
            className='h-full w-full object-cover object-center'
          />
        </div>

        <div className='flex flex-col gap-2 sm:gap-4 w-full grow'>
          <h3 className='text-xs md:text-base text-stone-600 font-title uppercase tracking-wide'>
            {product.name}
          </h3>

          <p className='text-xs md:text-sm sm:grow'>{product.description}</p>

          <button className='text-sm md:text-base font-title shrink-0 button max-w-32'>
            {product.price || 'от 400'} P
          </button>
        </div>
      </div>
    </article>
  )
}

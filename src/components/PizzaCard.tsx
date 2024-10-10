import { Product } from '@/types/index.types'
import { Heart } from 'lucide-react'

type PizzaCardProps = {
  product: Product
  onCardClick: (pizza: Product) => void
}

export function PizzaCard({ product, onCardClick }: PizzaCardProps) {
  return (
    <article
      onClick={() => onCardClick(product)}
      className='group relative flex sm:flex-col w-full items-center gap-2 cursor-pointer'
    >
      <button className='absolute bottom-2 right-2 sm:top-2 flex-center size-6 z-10'>
        <Heart size={24} color='#525252' />
      </button>

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
    </article>
  )
}

import type { Product } from '../types/index.types'

type ProductCardProps = {
  product: Product
  onCardClick: (product: Product) => void
}

export default function ProductCard({ onCardClick, product }: ProductCardProps) {
  return (
    <article onClick={() => onCardClick(product)} className='group flex flex-col cursor-pointer'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75'>
        <img
          src={product.image}
          alt={product.name}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <h3 className='mt-4 text-lg font-semibold'>{product.name}</h3>
      <p className='mt-2 grow text-sm'>{product.description}</p>
      <div className='mt-4 flex justify-between items-center'>
        <span className='text-lg font-semibold shrink-0'>{product.price || 'от 400'} &#8381;</span>
        <button className='text-sm shrink-0 button'>Добавить</button>
      </div>
    </article>
  )
}

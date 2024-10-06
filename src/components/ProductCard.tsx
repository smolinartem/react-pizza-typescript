import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { addFavoriteProduct } from '../store/user/userSlice'
import { Heart } from 'lucide-react'
import type { Product } from '../types/index.types'

type ProductCardProps = {
  product: Product
  onCardClick: (product: Product) => void
}

export default function ProductCard({ onCardClick, product }: ProductCardProps) {
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()

  const handleLike = () => {
    dispatch(
      addFavoriteProduct({
        name: product.name,
        image: product.image,
        description: product.description,
      })
    )
  }
  const isLiked = user?.favourite?.find((fav) => fav.name === product.name)

  return (
    <article className='relative group flex'>
      <button onClick={() => handleLike()} className='absolute flex-center size-6 right-2 z-10'>
        <Heart size={24} color={isLiked ? '#D92121' : '#525252'} />
      </button>

      <div onClick={() => onCardClick(product)} className='flex flex-col cursor-pointer group'>
        <div className='aspect-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75'>
          <img
            src={product.image}
            alt={product.name}
            className='h-full w-full object-cover object-center'
          />
        </div>
        <h3 className='mt-4 text-lg font-semibold'>{product.name}</h3>
        <p className='mt-2 grow text-sm'>{product.description}</p>
        <div className='mt-4 flex justify-between items-center'>
          <span className='text-lg font-semibold shrink-0'>
            {product.price || 'от 400'} &#8381;
          </span>
          <button className='text-sm shrink-0 button'>Добавить</button>
        </div>
      </div>
    </article>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { addFavoriteProduct } from '../store/user/userSlice'
import { Heart } from 'lucide-react'
import type { Product } from '../types/index.types'
import { useState } from 'react'
import PopupUnauthorized from './popup/PopupUnauthorized'

type ProductCardProps = {
  product: Product
  onCardClick: (product: Product) => void
}

export default function ProductCard({ onCardClick, product }: ProductCardProps) {
  const [authOpen, setAuthOpen] = useState(false)
  const { userProducts, userInfo } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const handleLike = () => {
    if (userInfo) {
      dispatch(addFavoriteProduct(product))
    } else {
      setAuthOpen(true)
    }
  }
  const isLiked = userProducts.find((fav) => fav._id === product._id)

  return (
    <>
      {authOpen && <PopupUnauthorized isOpen={authOpen} onClose={() => setAuthOpen(false)} />}
      <article className='relative group flex'>
        <button onClick={() => handleLike()} className='absolute flex-center size-6 right-2 z-10'>
          <Heart
            size={24}
            fill={isLiked ? '#D92121' : 'white'}
            color={isLiked ? '#D92121' : '#525252'}
          />
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
    </>
  )
}

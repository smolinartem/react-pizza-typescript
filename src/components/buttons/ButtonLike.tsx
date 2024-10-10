import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { addFavoriteProduct } from '../../store/user/userSlice'

import { Product } from '../../types/index.types'
import { Heart } from 'lucide-react'

import { toast } from 'react-toastify'

interface Props {
  product: Product
}

export default function ButtonLike({ product }: Props) {
  const { userProducts, userInfo } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const notify = () =>
    toast.error(<span className='font-body text-sm'>Необходимо авторизоваться</span>, {
      autoClose: 2000,
      position: 'bottom-center',
      closeOnClick: true,
      pauseOnHover: false,
    })

  const handleLike = () => {
    if (userInfo) {
      dispatch(addFavoriteProduct(product))
    } else {
      notify()
    }
  }
  const isLiked = userProducts.find((fav) => fav._id === product._id)

  return (
    <button
      onClick={() => handleLike()}
      className='absolute bottom-2 right-2 sm:top-2 flex-center size-6 z-10'
    >
      <Heart
        size={24}
        fill={isLiked ? '#D92121' : 'white'}
        color={isLiked ? '#D92121' : '#525252'}
      />
    </button>
  )
}

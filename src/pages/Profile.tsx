import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

import UserInfo from '../components/UserInfo'
import UserHeader from '../components/UserHeader'
import UserFavProducts from '../components/UserFavProducts'

export default function Profile() {
  const { userProducts } = useSelector((state: RootState) => state.user)

  return (
    <div className='section-container'>
      <UserHeader />

      <div className='gap-6 mt-6 md:grid md:grid-cols-2 md:gap-4'>
        <UserInfo />

        {userProducts.length > 0 && <UserFavProducts />}
      </div>
    </div>
  )
}

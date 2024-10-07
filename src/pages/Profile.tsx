import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

import UserInfo from '../components/UserInfo'
import UserHeader from '../components/UserHeader'
import UserFavProducts from '../components/UserFavProducts'

export default function Profile() {
  const user = useSelector((state: RootState) => state.user.user)

  /*   const [selectionMenuOpen, setSelectionMenuOpen] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState<Product | null>(null)

  const handlePopupOpen = (pizza: Product) => {
    dispatch(resetOptions())
    setSelectedPizza(pizza)
    setSelectionMenuOpen(true)
  }
  const handlePopupClose = () => {
    setSelectionMenuOpen(false)
  } */

  console.log(user)

  return (
    <div className='section-container'>
      <UserHeader />

      {user && (
        <div className='gap-6 mt-6 md:grid md:grid-cols-2 md:gap-4'>
          <UserInfo />

          {user.favourite.length > 0 && <UserFavProducts />}
        </div>
      )}

      {/*       {selectedPizza && (
        <PopupSelectionMenu
          selectedPizza={selectedPizza}
          isOpen={popupOpen}
          onClose={handlePopupClose}
        />
      )} */}
    </div>
  )
}

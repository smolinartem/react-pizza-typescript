import { useDispatch, useSelector } from 'react-redux'
import { addOrder, increaseAmount } from '../store/order/orderSlice'
import { RootState } from '../store/store'

import { drinks, drinksCategories } from '../utils/server'
import { Product } from '../types/index.types'
import { useProductCategory } from '../hooks/useProductCategory'
// - components
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import PopupDrinkMenu from '../components/popup/PopupDrinkMenu'

export default function Drinks() {
  const { shownProducts, changeCategory, selected } = useProductCategory(drinks)
  const dispatch = useDispatch()
  const order = useSelector((state: RootState) => state.order)
  const [popupOpen, setPopupOpen] = useState(false)
  const [selectedDrink, setSelectedDrink] = useState<Product | null>(null)

  const handleAddDrink = (drink: Product) => {
    setSelectedDrink(drink)
    setPopupOpen(true)
    const newOrder = {
      name: drink.name,
      image: drink.image,
      description: drink.description,
      price: drink.price as number,
      amount: 1,
    }

    if (order.length === 0) {
      dispatch(addOrder(newOrder))
    } else {
      const index = order.findIndex((item) => {
        return item.name === newOrder.name && item.description === newOrder.description
      })

      index === -1 ? dispatch(addOrder(newOrder)) : dispatch(increaseAmount(index))
    }
  }

  return (
    <div className='section-container'>
      {selectedDrink && (
        <PopupDrinkMenu
          drink={selectedDrink}
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
        />
      )}
      <Filters
        items={drinksCategories}
        categoryName='drinksCategories'
        onSelect={changeCategory}
        selected={selected}
      />
      <ul className='product-grid'>
        {shownProducts.map((drink) => (
          <ProductCard onCardClick={handleAddDrink} product={drink} key={drink._id} />
        ))}
      </ul>
    </div>
  )
}

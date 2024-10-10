import { useDispatch, useSelector } from 'react-redux'
import { addOrder, increaseAmount } from '../store/order/orderSlice'
import { RootState } from '../store/store'

import { drinks, drinksCategories } from '../utils/server'
import { Product } from '../types/index.types'
import { useProductCategory } from '../hooks/useProductCategory'
// - components
import Filters from '../components/Filters'
import DrinkCard from '../components/DrinkCard'

export default function Drinks() {
  const { shownProducts, changeCategory, selected } = useProductCategory(drinks)
  const dispatch = useDispatch()
  const order = useSelector((state: RootState) => state.order)

  const handleAddDrink = (drink: Product) => {
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
      <Filters
        items={drinksCategories}
        categoryName='drinksCategories'
        onSelect={changeCategory}
        selected={selected}
      />
      <ul className='product-grid'>
        {shownProducts.map((drink) => (
          <DrinkCard onCardClick={handleAddDrink} product={drink} key={drink._id} />
        ))}
      </ul>
    </div>
  )
}

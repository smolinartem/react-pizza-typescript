import { useDispatch } from 'react-redux'
import { addOrder } from '../store/order/orderSlice'

import { drinks, drinksCategories } from '../utils/server'
import { Product } from '../types/index.types'
import { useProductCategory } from '../hooks/useProductCategory'
// - components
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'

export default function Drinks() {
  const { shownProducts, changeCategory, selected } = useProductCategory(drinks)
  const dispatch = useDispatch()

  const handleAddDrink = (drink: Product) => {
    const newOrder = {
      name: drink.name,
      image: drink.image,
      description: drink.description,
      price: drink.price as number,
      amount: 1,
    }
    dispatch(addOrder(newOrder))
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
          <ProductCard onCardClick={handleAddDrink} product={drink} key={drink._id} />
        ))}
      </ul>
    </div>
  )
}

import { drinks, drinksCategories } from '@/utils/server'
import { useProductCategory } from '@/hooks/useProductCategory'
import Filters from '@/components/Filters'
import ProductCard from '@/components/PizzaCard'
export function DrinksPage() {
  const { shownProducts, changeCategory, selected } = useProductCategory(drinks)
  return (
    <section className='section-container'>
      <Filters
        items={drinksCategories}
        categoryName='pizzaCategories'
        onSelect={changeCategory}
        selected={selected}
      />

      {/* <ul className='product-grid'>
        {shownProducts.map((drink) => (
          {<ProductCard product={drink} key={drink._id} />}
        ))}
      </ul> */}
    </section>
  )
}

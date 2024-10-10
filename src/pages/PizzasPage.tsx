import { pizzas, pizzasCategories } from '@/utils/server'
import { useProductCategory } from '@/hooks/useProductCategory'
import { PizzaCard } from '@/components/PizzaCard'
import Filters from '@/components/Filters'
import { useState } from 'react'
import { Product } from '@/types/index.types'
import { PizzaMenuDialog } from '@/components/dialogs/PizzaMenuDialog'

export function PizzasPage() {
  const { shownProducts, changeCategory, selected } = useProductCategory(pizzas)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState<Product | null>(null)

  const handleCardClick = (pizza: Product) => {
    setSelectedPizza(pizza)
    setDialogOpen(true)
  }
  return (
    <section className='section-container'>
      {selectedPizza && (
        <PizzaMenuDialog
          pizza={selectedPizza}
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
        />
      )}
      <Filters
        items={pizzasCategories}
        categoryName='pizzaCategories'
        onSelect={changeCategory}
        selected={selected}
      />

      <ul className='product-grid'>
        {shownProducts.map((pizza) => (
          <PizzaCard onCardClick={handleCardClick} product={pizza} key={pizza._id} />
        ))}
      </ul>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { Size, Thickness, Topping, Toppings } from '../types/index.types'
import { PRICE, WEIGHT } from '../utils/server'

interface SelectedOptions {
  size: Size
  thickness: Thickness
  toppings: Toppings
}
interface Actions {
  chooseSize: (e: React.ChangeEvent<HTMLInputElement>) => void
  chooseThickness: (e: React.ChangeEvent<HTMLInputElement>) => void
  chooseToppings: (e: React.ChangeEvent<HTMLInputElement>) => void
}
interface ReturnProps {
  selected: SelectedOptions
  price: number
  weight: number
  actions: Actions
}
export function usePizzaForm(isOpen: boolean): ReturnProps {
  const [size, setSize] = useState<Size>('small')
  const [thickness, setThickness] = useState<Thickness>('thin')
  const [toppings, setToppings] = useState<Toppings>([])

  useEffect(() => {
    setSize('small')
    setThickness('thin')
    setToppings([])
  }, [isOpen])

  const chooseSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value as Size)
  }
  const chooseThickness = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThickness(event.target.value as Thickness)
  }
  const chooseToppings = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setToppings((prev) => [...prev, e.target.value as Topping])
    } else {
      setToppings((prev) => prev.filter((item) => item !== (e.target.value as Topping)))
    }
  }

  const calculateWeight = (size: Size, thickness: Thickness, toppings: Toppings) => {
    const sizeWeight = WEIGHT.size[size]
    const thicknessWeight = WEIGHT.thickness[thickness]
    const toppingsWeight = toppings.reduce((acc, item) => acc + WEIGHT.toppings[item], 0)

    return sizeWeight + thicknessWeight + toppingsWeight
  }

  const calculatePrice = (size: Size, thickness: Thickness, toppings: Toppings) => {
    const sizeWeight = PRICE.size[size]
    const thicknessWeight = PRICE.thickness[thickness]
    const toppingsWeight = toppings.reduce((acc, item) => acc + PRICE.toppings[item], 0)

    return sizeWeight + thicknessWeight + toppingsWeight
  }

  const weight = calculateWeight(size, thickness, toppings)
  const price = calculatePrice(size, thickness, toppings)
  const selected: SelectedOptions = { size, thickness, toppings }
  const actions: Actions = { chooseSize, chooseThickness, chooseToppings }

  return { selected, price, weight, actions }
}

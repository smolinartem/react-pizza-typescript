export type Product = {
  _id: number
  name: string
  description: string
  image: string
  category: string[]
  price?: number
}

export type Category = {
  id: number
  value: string
  label: string
}

export type PizzaOrder = {
  name: string
  image: string
  description: string
  size: string
  thickness: string
  toppings: string[]
  price: number
  amount: number
}

export type User = {
  name: string
  email: string
  password: string
  birthday?: string
  phone?: string
  favourite: Product[]
}

export type UserState = User | null

export type Size = 'small' | 'medium' | 'large'
export type Thickness = 'thin' | 'lush'
export type Topping = 'cheese' | 'jalapeno' | 'mushrooms' | 'ham'
export type Toppings = Topping[]

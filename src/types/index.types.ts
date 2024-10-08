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

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

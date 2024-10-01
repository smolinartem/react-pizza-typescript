export type cats = 'classic' | 'hot' | 'kids' | 'veg'

export type Pizza = {
  _id: number
  name: string
  description: string
  image: string
  category: cats[]
}

export type category = {
  id: number
  value: string
  label: string
}

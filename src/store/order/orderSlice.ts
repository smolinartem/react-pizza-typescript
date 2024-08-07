import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Order = {
  name: string
  image: string
  description: string
  size: string
  thickness: string
  toppings: string[]
  price: number
  amount: number
}

const initialState: Order[] = []

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload)
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const index = action.payload
      state.splice(index, 1)
    },
    clearOrder: (state) => {
      state.length = 0
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const index = action.payload
      state[index].amount++
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const index = action.payload
      state[index].amount--
    },
  },
})

export const { addOrder, deleteItem, clearOrder, increaseAmount, decreaseAmount } =
  orderSlice.actions
export default orderSlice.reducer

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Order = {
  name: string
  image: string
  description: string
  size?: string
  thickness?: string
  toppings?: string[]
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
    increaseAmountByNum: (state, action: PayloadAction<{ index: number; num: number }>) => {
      const index = action.payload.index
      const num = action.payload.num

      state[index].amount = num
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const index = action.payload
      state[index].amount--
    },
  },
})

export const {
  addOrder,
  deleteItem,
  clearOrder,
  increaseAmount,
  increaseAmountByNum,
  decreaseAmount,
} = orderSlice.actions
export default orderSlice.reducer

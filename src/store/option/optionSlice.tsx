import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IOptions {
  size: string
  thickness: string
  toppings: string[]
}

const initialState: IOptions = {
  size: 'small',
  thickness: 'thin',
  toppings: [],
}

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    changeSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload
    },
    changeThickness: (state, action: PayloadAction<string>) => {
      state.thickness = action.payload
    },
    updateToppings: (state, action) => {
      const checked = action.payload.checked
      const value = action.payload.value
      if (checked) {
        state.toppings.push(value)
      } else {
        state.toppings = state.toppings.filter((item) => item !== value)
      }
    },
    resetOptions: (state) => {
      state.size = 'small'
      state.thickness = 'thin'
      state.toppings = []
    },
  },
})

export const { changeSize, changeThickness, updateToppings, resetOptions } = optionSlice.actions
export default optionSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import optionReducer from './option/optionSlice'
import orderReducer from './order/orderSlice'

export const store = configureStore({
  reducer: {
    option: optionReducer,
    order: orderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

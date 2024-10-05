import { configureStore } from '@reduxjs/toolkit'
import optionReducer from './option/optionSlice'
import orderReducer from './order/orderSlice'
import userReducer from './user/userSlice'

export const store = configureStore({
  reducer: {
    option: optionReducer,
    order: orderReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

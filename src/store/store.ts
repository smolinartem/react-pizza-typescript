import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './order/orderSlice'
import userReducer from './user/userSlice'

export const store = configureStore({
  reducer: {
    order: orderReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

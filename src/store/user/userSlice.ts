import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoriteProduct = {
  name: string
  image: string
  description: string
}

export type User = {
  name: string
  email: string
  password: string
  favouriteProducts: FavoriteProduct[] | []
} | null

const initialState = null as User

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      return action.payload
    },
    deleteUser: () => initialState,
  },
})

export const { createUser, deleteUser } = userSlice.actions
export default userSlice.reducer

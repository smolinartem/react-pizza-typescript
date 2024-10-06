import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ProfileEditForm } from '../../components/PopupProfileEdit'

type FavoriteProduct = {
  name: string
  image: string
  description: string
}

export type User = {
  name: string
  email: string
  password: string
  birthday?: string
  phone?: string
  favourite: FavoriteProduct[]
} | null

const initialState = {
  user: null as User,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    deleteUser: () => initialState,
    addFavoriteProduct: (state, action: PayloadAction<FavoriteProduct>) => {
      if (state.user) {
        if (state.user.favourite.find((product) => product.name === action.payload.name)) {
          state.user.favourite = state.user.favourite.filter(
            (product) => product.name !== action.payload.name
          )
        } else {
          state.user.favourite.push(action.payload)
        }
      }
    },
    editProfile: (state, action: PayloadAction<ProfileEditForm>) => {
      const { name, email, birthday, phone } = action.payload
      if (state.user) {
        if (name) {
          state.user.name = name
        }
        if (email) {
          state.user.email = email
        }
        if (birthday) {
          state.user.birthday = birthday
        }
        if (phone) {
          state.user.phone = phone
        }
      }
    },
  },
})

export const { createUser, deleteUser, addFavoriteProduct, editProfile } = userSlice.actions
export default userSlice.reducer

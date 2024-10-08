import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ProfileEditForm } from '../../components/PopupProfileEdit'
import type { Product, User, UserState } from '../../types/index.types'

const initialState = {
  userInfo: null as UserState,
  userProducts: [] as Product[],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload
    },
    deleteUser: () => initialState,
    addFavoriteProduct: (state, action: PayloadAction<Product>) => {
      if (state.userProducts.find((product) => product._id === action.payload._id)) {
        state.userProducts = state.userProducts.filter(
          (product) => product._id !== action.payload._id
        )
      } else {
        state.userProducts.push(action.payload)
      }
    },
    editProfile: (state, action: PayloadAction<ProfileEditForm>) => {
      const { userInfo } = state
      const { name, email, birthday, phone } = action.payload
      if (userInfo) {
        if (name) {
          userInfo.name = name
        }
        if (email) {
          userInfo.email = email
        }
        if (birthday) {
          userInfo.birthday = birthday
        }
        if (phone) {
          userInfo.phone = phone
        }
      }
    },
    deleteFavoriteProduct: (state, action: PayloadAction<Product>) => {
      state.userProducts = state.userProducts.filter(
        (product) => product._id !== action.payload._id
      )
    },
  },
})

export const { createUser, deleteUser, addFavoriteProduct, editProfile, deleteFavoriteProduct } =
  userSlice.actions
export default userSlice.reducer

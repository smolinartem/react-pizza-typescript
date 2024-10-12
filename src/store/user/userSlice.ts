import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ProfileEditForm } from '../../components/popup/PopupProfileEdit'
import type { Product, User, UserState } from '../../types/index.types'

/* export type Address = {
  selected: boolean
  streetName: string
  houseNumber: string
  flatNumber: string
  blockNumber?: string
  doorCode?: string
  floorNumber?: string
  entranceNumber?: string
} */

type Address = {
  selected: boolean
  value: string
}

const initialState = {
  userInfo: null as UserState,
  userProducts: [] as Product[],
  userAddresses: [] as Address[],
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
    updatePassword: (state, action: PayloadAction<string>) => {
      if (state.userInfo) {
        state.userInfo.password = action.payload
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
    addNewAddress: (state, action: PayloadAction<string>) => {
      state.userAddresses.forEach((address) => {
        address.selected = false
      })
      state.userAddresses.push({ selected: true, value: action.payload })
    },
    selectAddress: (state, action: PayloadAction<string>) => {
      state.userAddresses.forEach((address) => {
        address.selected = address.value === action.payload
      })
    },
  },
})

export const {
  createUser,
  deleteUser,
  addFavoriteProduct,
  editProfile,
  deleteFavoriteProduct,
  addNewAddress,
  selectAddress,
  updatePassword,
} = userSlice.actions
export default userSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DeliveryInfos = {
  fullName: string
  address: string
  city: string
  zipCode: string
  houseNumber: string
  complement?: string
}

type CartState = {
  items: MenuItem[]
  cartOpen: boolean
  paymentOpen: boolean
  deliveryOpen: boolean
  deliveryInfos: DeliveryInfos
}

const initialState: CartState = {
  items: [],
  cartOpen: false,
  paymentOpen: false,
  deliveryOpen: false,
  deliveryInfos: {
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    houseNumber: '',
    complement: ''
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.cartOpen = true
    },
    closeCart: (state) => {
      state.cartOpen = false
    },
    openPaymemt: (state) => {
      state.paymentOpen = true
    },

    closePaymemt: (state) => {
      state.paymentOpen = false
    },
    openDelivery: (state) => {
      state.deliveryOpen = true
    },
    closeDelivery: (state) => {
      state.deliveryOpen = false
    },
    closeSidebar: (state) => {
      state.cartOpen = false
      state.paymentOpen = false
      state.deliveryOpen = false
    },
    setDeliveryInfos: (state, action: PayloadAction<DeliveryInfos>) => {
      state.deliveryInfos = { ...state.deliveryInfos, ...action.payload }
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  openCart,
  closeCart,
  remove,
  openPaymemt,
  closePaymemt,
  openDelivery,
  closeDelivery,
  closeSidebar,
  setDeliveryInfos,
  clear
} = cartSlice.actions
export default cartSlice.reducer

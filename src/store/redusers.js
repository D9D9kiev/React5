import { createReducer } from '@reduxjs/toolkit'

import * as actions from './actions'

export const defaultState = {
  cart: [],
  favourites: [],
  isModalOpened: false,
  modalContent: {},
  products: [],
  isLoading: true,
}

export default createReducer(defaultState, {
  [actions.setProducts]: (state, { payload }) => {
    state.products = payload
  },
  [actions.changeLoadingProducts]: (state, { payload }) => {
    state.isLoading = payload
  },
  [actions.changeCartList]: (state, { payload }) => {
    state.cart = payload
  },
  [actions.changeFavList]: (state, { payload }) => {
    state.favourites = payload
  },
  [actions.changeModalBool]: (state, { payload }) => {
    state.isModalOpened = payload
  },
  [actions.changeModalContent]: (state, { payload }) => {
    state.modalContent = payload
  },
  [actions.toDefault]: () => defaultState,
})

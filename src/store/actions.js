import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const setProducts = createAction('SET_PRODUCTS')

export const changeLoadingProducts = createAction('CHANGE_LOADING_PRODUCTS')

export const changeCartList = createAction('CHANGE_PRODUCTLIST_IN_CART')

export const changeFavList = createAction('CHANGE_PRODUCTLIST_IN_FAV')

export const changeModalBool = createAction('CHANGE_MODAL_BOOL')

export const changeModalContent = createAction('ACTION_MODAL_CONTENT')

export const toDefault = createAction('TO_DEFAULT')

export const fetchProducts = (url) => (dispatch) => {
  dispatch(changeLoadingProducts(true))
  axios.get(url).then(({ data }) => {
    dispatch(setProducts(data.products))
    dispatch(changeLoadingProducts(false))
  })
}

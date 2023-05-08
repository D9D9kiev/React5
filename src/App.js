import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'

import PropTypes from 'prop-types'
import AppRoutes from './AppRoutes'
import Header from './components/Header'
import ModalWindow from './components/ModalWindow'

import {
  selectCart,
  selectFavourites,
  selectModalContent,
  selectIsModalOpened,
  selectIsProductsLoaded,
} from './store/selectors'

import {
  changeCartList,
  changeFavList,
  changeModalBool,
  changeModalContent,
  fetchProducts,
} from './store/actions'

const getHistoryFromLS = (itemArr) => {
  const lsHistory = localStorage.getItem(itemArr)
  if (!lsHistory) {
    return []
  }
  try {
    const value = JSON.parse(lsHistory)
    return value
  } catch (error) {
    return []
  }
}

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsProductsLoaded)
  const cart = useSelector(selectCart)
  const favourites = useSelector(selectFavourites)
  const isModalOpened = useSelector(selectIsModalOpened)
  const modalContent = useSelector(selectModalContent)

  useEffect(() => {
    dispatch(changeCartList(getHistoryFromLS('cart')))
    dispatch(changeFavList(getHistoryFromLS('favourites')))
    dispatch(fetchProducts('apple.json'))
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [cart, favourites])

  const showModal = () => {
    dispatch(changeModalBool(true))
  }

  const addToCartModal = (item, nameOfProduct) => {
    dispatch(
      changeModalContent({
        header: 'Confirmation',
        text: `Add ${nameOfProduct} to cart?`,
        actions: (
          <>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={(event) => addToCart(item)}>
              Add
            </Button>
          </>
        ),
      })
    )
    showModal()
  }

  const removeFromCartModal = (item, nameOfProduct) => {
    dispatch(
      changeModalContent({
        header: 'Confirmation',
        text: `Remove ${nameOfProduct} from cart?`,
        actions: (
          <>
            <>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={(event) => removeFromCart(item)}
              >
                Remove
              </Button>
            </>
          </>
        ),
      })
    )
    showModal()
  }

  const closeModal = () => {
    dispatch(changeModalBool(false))
  }

  const addToCart = (item) => {
    const newCart = [...cart, item]
    dispatch(changeCartList(newCart))
    closeModal()
  }

  const addToFavourite = (item) => {
    if (!favourites.find((favourite) => favourite.article === item.article)) {
      const newFavourites = [...favourites, item]
      dispatch(changeFavList(newFavourites))
    } else {
      removeFromFavorite(item)
    }
  }

  const removeFromCart = (item) => {
    const indexOfItem = cart.findIndex(
      (cartItem) => cartItem.article === item.article
    )
    const newCart = [...cart]
    newCart.splice(indexOfItem, 1)
    dispatch(changeCartList(newCart))
    closeModal()
  }

  const removeFromFavorite = (item) => {
    const newFavourites = favourites.filter(
      (favourite) => favourite.article !== item.article
    )
    dispatch(changeFavList(newFavourites))
  }

  return (
    <>
      <Header
        productsInCartLength={cart.length}
        productsInFavouriteLength={favourites.length}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AppRoutes
          addToCartModal={addToCartModal}
          removeFromCartModal={removeFromCartModal}
          addToFavourite={addToFavourite}
          favouriteItems={favourites}
          cartItems={cart}
        />
      )}
      <ModalWindow
        content={modalContent}
        show={isModalOpened}
        close={closeModal}
      />
    </>
  )
}

App.propTypes = {
  isLoading: PropTypes.bool,
  products: PropTypes.array,
  cart: PropTypes.array,
  favourites: PropTypes.array,
  isModalOpened: PropTypes.bool,
  modalContent: PropTypes.object,
}

export default App

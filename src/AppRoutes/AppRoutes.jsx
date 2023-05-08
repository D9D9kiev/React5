import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Cart from '../pages/Cart'
import Favourites from '../pages/Favourites'
import Error from '../pages/Error'
import Home from '../pages/Home'

const AppRoutes = ({
  addToCartModal,
  removeFromCartModal,
  addToFavourite,
  favouriteItems,
  cartItems,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            addToCartModal={addToCartModal}
            addToFavourite={addToFavourite}
            favouriteItems={favouriteItems}
          />
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <Cart
            removeFromCartModal={removeFromCartModal}
            addToFavourite={addToFavourite}
            cartItems={cartItems}
            favouriteItems={favouriteItems}
          />
        }
      ></Route>
      <Route
        path="/favourites"
        element={
          <Favourites
            addToCartModal={addToCartModal}
            addToFavourite={addToFavourite}
            favouriteItems={favouriteItems}
          />
        }
      ></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRoutes

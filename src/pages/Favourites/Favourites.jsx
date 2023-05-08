import React from 'react'
import ProductList from '../../components/ProductList'

import './Favourites.scss'

const Favourites = ({ addToCartModal, addToFavourite, favouriteItems }) => {
  return (
    <>
      {favouriteItems.length > 0 ? (
        <ProductList
          items={favouriteItems}
          onClickBtn={addToCartModal}
          addToFavourite={addToFavourite}
          favouriteItems={favouriteItems}
          btnContent={{
            backGroundColor: 'outline-danger',
            title: 'Add to Cart',
          }}
          className={`favourite`}
        />
      ) : (
        <div className="favourite__list--empty">No products in favourites</div>
      )}
    </>
  )
}

export default Favourites

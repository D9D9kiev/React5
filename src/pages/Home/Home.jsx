import React from 'react'
import { useSelector } from 'react-redux'

import ProductList from '../../components/ProductList'
import { selectProducts } from '../../store/selectors'

const Home = ({ addToCartModal, addToFavourite, favouriteItems }) => {
  const items = useSelector(selectProducts)

  return (
    <>
      <ProductList
        items={items}
        onClickBtn={addToCartModal}
        addToFavourite={addToFavourite}
        favouriteItems={favouriteItems}
        btnContent={{
          backGroundColor: 'outline-danger',
          title: 'Add to Cart',
        }}
        className={`products`}
      />
    </>
  )
}

export default Home

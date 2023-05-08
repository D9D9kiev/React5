import React from 'react'
import ProductCard from '../ProductCard'
import './ProductList.scss'

const ProductList = ({
  items,
  addToFavourite,
  favouriteItems,
  onClickBtn,
  btnContent,
  className,
}) => {
  const isItemInFavourite = (item) => {
    return favouriteItems.find(
      (favouriteItem) => favouriteItem.article === item.article
    )
  }

  return (
    <div className={`${className}`}>
      <div className={`${className}__list`}>
        {items.map((item) => (
          <ProductCard
            key={item.article}
            item={item}
            onClickStar={addToFavourite}
            onClickBtn={onClickBtn}
            isFavourite={isItemInFavourite(item)}
            btnContent={btnContent}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList

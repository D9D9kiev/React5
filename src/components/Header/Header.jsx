import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Navbar, Container } from 'react-bootstrap'

import StarSvg from '../../img/star.svg'
import './Header.scss'

const Header = ({ productsInCartLength, productsInFavouriteLength }) => {
  return (
    <Container>
      <Navbar bg="light" expand="lg" className="header">
        <div className="header__logo">
          <Link to="/">
            {' '}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
              width="35px"
              alt=""
            ></img>
            Apple Store
          </Link>
        </div>
        <div className="header__items">
          <Link to="/cart">Cart</Link>
          <div className="item__cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1413/1413925.png"
              alt="cart"
              width="30px"
            ></img>
            <p className="d-inline-block align-top">{`: ${productsInCartLength}`}</p>
          </div>
          <Link to="/favourites">Favourites</Link>
          <div className="item__favorite">
            <img src={StarSvg} width="30px" alt="star"></img>
            <p>{`: ${productsInFavouriteLength}`}</p>
          </div>
        </div>
      </Navbar>
    </Container>
  )
}

Header.propTypes = {
  productsInCart: PropTypes.number,
  productsInFavourite: PropTypes.number,
}

export default Header

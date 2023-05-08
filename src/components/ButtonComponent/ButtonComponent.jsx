import React from 'react'
import Button from 'react-bootstrap/Button'

// import './Button.scss'

const ButtonComponent = ({ title, backGround, onClick, ...restProps }) => {
  return (
    <Button variant={backGround} onClick={onClick} {...restProps}>
      {title}
    </Button>
  )
}

export default ButtonComponent

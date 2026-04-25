import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const selector = useSelector(selector => selector.cart)
  console.log(selector);
  
  return (
    <div>Checkout</div>
  )
}

export default Checkout
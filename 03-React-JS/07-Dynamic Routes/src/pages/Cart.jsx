import React from 'react'
import { useLocation } from 'react-router-dom'

function Cart() {
    const location = useLocation();
    const cart = location.state ;
    console.log(cart);
    
  return (
    <>
    
    </>
  )
}

export default Cart
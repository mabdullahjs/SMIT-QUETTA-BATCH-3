import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    </>
  )
}

export default Navbar
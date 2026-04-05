import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        margin: '5px 0px'
    }}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/dashboard'}>Dashboard</Link>
    </div>
  )
}

export default Navbar
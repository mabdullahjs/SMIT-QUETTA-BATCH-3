import React from 'react'
import { Link } from 'react-router'
import Login from './Login'

function Navbar() {
    return (
        <>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/service"}>Service</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>

            <Login/>
        </>
    )
}

export default Navbar
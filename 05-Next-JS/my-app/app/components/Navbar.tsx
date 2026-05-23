import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-yellow-400 transition">
              Services
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/services/webdev" className="hover:text-yellow-400 transition">
              web dev
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
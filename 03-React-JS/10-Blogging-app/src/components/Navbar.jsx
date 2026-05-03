import { Link, NavLink } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
           Blogging App
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/login" className={navLinkClass}>Login</NavLink>
            <NavLink to="/register" className={navLinkClass}>Register</NavLink>
            <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
            <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/login" className={navLinkClass} onClick={() => setIsOpen(false)}>Login</NavLink>
          <NavLink to="/register" className={navLinkClass} onClick={() => setIsOpen(false)}>Register</NavLink>
          <NavLink to="/dashboard" className={navLinkClass} onClick={() => setIsOpen(false)}>Dashboard</NavLink>
          <NavLink to="/profile" className={navLinkClass} onClick={() => setIsOpen(false)}>Profile</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React from 'react'
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const Navigation = [
    {
      "name": "New Arrivals",
      "href": "/new-arrivals"
    },
    {
      "name": "Fashion",
      "href": "/men"
    },
    {
      "name": "Footwear",
      "href": "/footwear"
    }
  ]


  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Left - Logo */}
          <div className="flex items-center">
            {/* <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-auto"
            /> */}
            <h2 className="text-2xl font-bold font-serif tracking-wide text-black">F<b className="text-yellow-900">&</b>F</h2>
          </div>

          {/* Center - Navigation */}
           <nav className="hidden md:flex items-center space-x-8">
            {Navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-gray-700 font-medium transition
                           hover:text-black
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-black
                           after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right - Icons */}
          <div className="flex items-center space-x-5">
            <Search className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />
            <Link to="/customer">
            <User className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />
            </Link>
            <Link to="/cart">
            <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />
</Link>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {Navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium hover:text-black"
                >
                  {item.name}
                </Link>
              ))}

              {/* <div className="flex gap-4 pt-3 border-t">
                <Link to="/account" className="flex items-center gap-2">
                  <User size={18} /> Account
                </Link>
                <Link to="/cart" className="flex items-center gap-2">
                  <ShoppingCart size={18} /> Cart
                </Link>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
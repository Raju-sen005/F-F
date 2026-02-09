import React from 'react'
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
function Navbar() {
  const [open, setOpen] = useState(false);
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
          <nav className="hidden md:flex space-x-8">
            {["New Arrivals", "Fashion", "Footwear"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-700 font-medium hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right - Icons */}
          <div className="flex items-center space-x-5">
            <Search className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />
            <User className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />
            <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />

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
            <nav className="flex flex-col space-y-3">
              {["New Arrivals", "Fashion", "Footwear"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 font-medium hover:text-black"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
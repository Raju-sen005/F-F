import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const Navigation = [
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Fashion", href: "/men" },
    { name: "Footwear", href: "/footwear" },
  ];

  return (
    <header className="w-full bg-[#00c2ff] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-white font-medium transition
                           hover:text-black
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-black
                           after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-5">

            <Search className="w-5 h-5 cursor-pointer text-white hover:text-black transition" />

            <Link to="/customer">
              <User className="w-5 h-5 cursor-pointer text-white hover:text-black transition" />
            </Link>

            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer text-white hover:text-black transition" />

              {/* Cart Count */}
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 rounded-full">
                2
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {Navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className="text-white font-medium hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
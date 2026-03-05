import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

function FooterNavbar() {
  return (
    <footer className="bg-[#0b1c2d] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* BRAND */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto"
            />

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Discover quality products from trusted brands. Fashion,
              lifestyle and everyday essentials — all in one place.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full border border-gray-600 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full border border-gray-600 hover:bg-pink-500 hover:border-pink-500 hover:text-white transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full border border-gray-600 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/men" className="hover:text-white transition">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="hover:text-white transition">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/footwear" className="hover:text-white transition">
                  Footwear
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="hover:text-white transition">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="hover:text-white transition">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-white transition">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-14 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} F&F. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterNavbar;
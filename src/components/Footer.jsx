import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

function FooterNavbar() {
  return (
    <footer className="bg-[#0b1c2d] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              F<b className="text-yellow-900">&</b>F
            </h2>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Discover quality products from trusted brands.  
              Fashion, lifestyle, and everyday essentials — all in one place.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a className="p-2 rounded-full border border-gray-600 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a className="p-2 rounded-full border border-gray-600 hover:bg-pink-500 hover:border-pink-500 hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a className="p-2 rounded-full border border-gray-600 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a className="p-2 rounded-full border border-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition">
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
              <li className="hover:text-white cursor-pointer">Men</li>
              <li className="hover:text-white cursor-pointer">Women</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
              <li className="hover:text-white cursor-pointer">New Arrivals</li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Order Tracking</li>
              <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Shipping Policy</li>
              <li className="hover:text-white cursor-pointer">Refund Policy</li>
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

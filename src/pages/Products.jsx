import { Search, ShoppingCart, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const products = [
  {
    id: 1,
    title: "Premium Jacket",
    price: "₹2,999",
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/59/c4/4a/59c44a20a41bddcc1fe825e6e4aebbbd.jpg",
  },
  {
    id: 2,
    title: "Running Shoes",
    price: "₹3,499",
    rating: 4.2,
    image:
      "https://shop.teamsg.in/cdn/shop/files/22-07-202401206.jpg?v=1724842455&width=1445",
  },
  {
    id: 3,
    title: "Casual Shirt",
    price: "₹1,299",
    rating: 4.1,
    image:
      "https://blackberrys.com/cdn/shop/files/LINEN_SHIRTS.jpg?v=1715746351",
  },
  {
    id: 4,
    title: "Leather Bag",
    price: "₹1,999",
    rating: 4.6,
    image:
      "https://www.craftshades.com/wp-content/uploads/2017/08/IMG_20240602_133357.jpg",
  },
];

function Products() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Navbar */}
      <Navbar />

      {/* Page Layout */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* FILTER SIDEBAR */}
        <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-lg font-semibold mb-4">Men's Products</h2>

          <div className="space-y-6 text-sm">
            {/* Category */}
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <input type="checkbox" /> Jackets
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" /> Shoes
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" /> Shirts
                </li>
              </ul>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-medium mb-2">Price</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <input type="checkbox" /> Under ₹2000
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" /> ₹2000 - ₹5000
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="bg-white rounded-xl border border-gray-100
                         shadow-sm hover:shadow-md transition block"
            >
              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             hover:scale-105"
                />

                {/* Wishlist */}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-sm
                             hover:text-red-500 transition"
                >
                  <Heart size={16} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                  {item.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-gray-600">{item.rating}</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-2">
                  <p className="text-base font-semibold text-gray-900">
                    {item.price}
                  </p>

                  <ShoppingCart
                    size={16}
                    className="text-gray-500 hover:text-black"
                  />
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Products;

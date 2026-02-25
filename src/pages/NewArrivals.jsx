import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function NewArrivals() {
  const products = [
    {
      id: 1,
      title: "Premium Winter Jacket",
      price: "₹2,999",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53",
    },
    {
      id: 2,
      title: "Lightweight Running Shoes",
      price: "₹3,499",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    },
    {
      id: 3,
      title: "Casual Everyday Shirt",
      price: "₹1,299",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
    {
      id: 4,
      title: "Smart Fitness Watch",
      price: "₹4,999",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#f8f9fb] py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            New Arrivals
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Discover the latest styles curated just for you. Fresh, trendy, and ready to ship.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="group bg-white rounded-2xl border border-gray-100
                         shadow-sm transition-all duration-300 block"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* BADGE */}
                <span className="absolute top-4 left-4 bg-white text-black
                                 text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide">
                  NEW ARRIVAL
                </span>

                {/* WISHLIST */}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur
                             p-2 rounded-full shadow
                             opacity-0 group-hover:opacity-100
                             hover:text-red-500 transition"
                >
                  <Heart size={16} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-sm font-medium text-gray-800 leading-snug line-clamp-1">
                  {item.title}
                </h3>

                {/* RATING */}
                <div className="flex items-center gap-1 mt-2">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-gray-600">
                    {item.rating}
                  </span>
                  <span className="text-xs text-gray-400">
                    (120+)
                  </span>
                </div>

                {/* PRICE */}
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-900">
                    {item.price}
                  </p>
                  <span className="text-xs text-green-600 font-medium">
                    In Stock
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </div>
    </>
  );
}

export default NewArrivals;

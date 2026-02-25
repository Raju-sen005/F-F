import {
    Search,
    User,
    ShoppingCart,
    Heart,
    Star
} from "lucide-react";
import { Link } from "react-router-dom";
function Products() {
    const products = [
        {
            id: 1,
            title: "Premium Jacket",
            price: "₹2,999",
            rating: 4.5,
            image: "https://i.pinimg.com/1200x/59/c4/4a/59c44a20a41bddcc1fe825e6e4aebbbd.jpg",
        },
        {
            id: 2,
            title: "Running Shoes",
            price: "₹3,499",
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        },
        {
            id: 3,
            title: "Casual Shirt",
            price: "₹1,299",
            rating: 4.1,
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        },
        {
            id: 4,
            title: "Leather Bag",
            price: "₹1,999",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ================= NAVBAR ================= */}
            <header className="bg-white">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <h2 className="text-2xl font-bold font-serif tracking-wide text-black">F<b className="text-yellow-900">&</b>F</h2>


                    {/* Search */}
                    <div className="hidden md:flex items-center w-1/2 relative">
                        <Search className="absolute left-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full pl-10 pr-4 py-2 border-1 border-gray-300 rounded-full focus:outline-none focus:ring-0 focus:ring-blue-500"
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-5">
                        <Heart className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />
                        <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />
                    </div>

                </div>
            </header>

            {/* ================= MAIN CONTENT ================= */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* ===== LEFT FILTER SIDEBAR ===== */}
                <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">
                        Men's Products
                    </h2>

                    <div className="space-y-6 text-sm">

                        {/* Category */}
                        <div>
                            <h3 className="font-medium mb-2">Category</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li><input type="checkbox" /> Jackets</li>
                                <li><input type="checkbox" /> Shoes</li>
                                <li><input type="checkbox" /> Shirts</li>
                            </ul>
                        </div>

                        {/* Price */}
                        <div>
                            <h3 className="font-medium mb-2">Price</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li><input type="checkbox" /> Under ₹2000</li>
                                <li><input type="checkbox" /> ₹2000 - ₹5000</li>
                            </ul>
                        </div>

                        {/* Rating */}
                        {/* <div>
                            <h3 className="font-medium mb-2">Rating</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>⭐⭐⭐⭐ & above</li>
                                <li>⭐⭐⭐ & above</li>
                            </ul>
                        </div> */}

                    </div>
                </aside>

                {/* ===== RIGHT PRODUCT LIST ===== */}
                <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {products.map((item) => (
                        <Link
                            key={item.id}
                            to={`/product/${item.id}`}   // 👈 dynamic product detail
                            className="min-w-[260px] bg-white rounded-xl
               shadow-sm transition hover:shadow-sm block"
                        >
                            <div
                                key={item.id}
                                className="min-w-[260px] bg-white rounded-xl border border-gray-100
                            transition"

                            >
                                {/* Image */}
                                <div className="relative h-60 overflow-hidden rounded-t-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover
                               transition-transform duration-500
                               hover:scale-105"
                                    />

                                    {/* Wishlist */}
                                    <button
                                        className="absolute top-3 right-3 bg-white/90 backdrop-blur
                               p-2 rounded-full shadow-sm
                               hover:text-red-500 transition"
                                    >
                                        <Heart size={16} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-800 leading-snug line-clamp-1">
                                        {item.title}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mt-1">
                                        <Star
                                            size={14}
                                            className="text-yellow-400 fill-yellow-400"
                                        />
                                        <span className="text-xs text-gray-600">
                                            {item.rating}
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <p className="mt-2 text-base font-semibold text-gray-900">
                                        {item.price}
                                    </p>
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

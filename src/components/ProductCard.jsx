import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
    return (
        <Link
            to={`/product/${item.id}`}
            className="min-w-[260px] bg-white rounded-xl border border-gray-100
            shadow-sm transition hover:shadow-lg block"
        >
            {/* Image */}
            <div className="bg-white rounded-xl border border-gray-100
shadow-sm hover:shadow-lg transition duration-300 block"
>
                <img
                    src={item.image}
                    alt={item.title || item.name}
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
                    {item.title || item.name}
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
        </Link>
    );
}

export default ProductCard;

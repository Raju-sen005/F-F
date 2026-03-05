import React from 'react'
import { useState, useEffect } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Star
} from "lucide-react";

function Womens() {
    const womens = [
  {
    id: 1,
    name: "Women Denim Jacket",
    price: "₹2,799",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127",
  },
  {
    id: 2,
    name: "Women Summer Dress",
    price: "₹1,999",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
  },
  {
    id: 3,
    name: "Women Handbag",
    price: "₹1,499",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: 4,
    name: "Women Casual Top",
    price: "₹999",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
  {
    id: 5,
    name: "Women High Heels",
    price: "₹2,299",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
  },
];

    const CARD_WIDTH = 270;
    const [index, setIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setVisibleItems(1);
            else if (window.innerWidth < 1024) setVisibleItems(2);
            else setVisibleItems(4);

            setIndex(0);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        if (index < womens.length - visibleItems) {
            setIndex((prev) => prev + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };
    return (
        <section className=" py-16 max-w-7xl mx-auto px-4">
            {/* Title */}
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
                Women's Collection
            </h2>

            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={prev}
                    disabled={index === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     bg-white border border-gray-200 rounded-full p-2 shadow-sm
                      transition
                     disabled:opacity-30 disabled:hover:bg-white"
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Slider */}
                <div className="overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out py-5"
                        style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
                    >
                        {womens.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[260px] bg-white rounded-xl 
                           shadow-sm hover:shadow-sm transition"
                            >
                                {/* Image */}
                                <div className="relative h-60 overflow-hidden rounded-t-xl">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover
                               transition-transform duration-500
                               hover:scale-105"
                                    />

                                    {/* Wishlist */}
                                    <button
                                        className="absolute top-3 right-3 bg-white backdrop-blur
                               p-2 rounded-full shadow-sm
                               hover:text-red-500 transition"
                                    >
                                        <Heart size={16} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-800 leading-snug line-clamp-1">
                                        {item.name}
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
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    disabled={index >= womens.length - visibleItems}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     bg-white border border-gray-200 rounded-full p-2 shadow-sm
                      transition
                     disabled:opacity-30 disabled:hover:bg-white"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    )
}

export default Womens
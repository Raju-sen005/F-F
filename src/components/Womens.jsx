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
            name: "Premium Jacket",
            price: "₹2,999",
            rating: 4.5,
            image: "https://i.pinimg.com/1200x/59/c4/4a/59c44a20a41bddcc1fe825e6e4aebbbd.jpg",
        },
        {
            id: 2,
            name: "Running Shoes",
            price: "₹3,499",
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        },
        {
            id: 3,
            name: "Leather Bag",
            price: "₹1,999",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        },
        {
            id: 4,
            name: "Casual Shirt",
            price: "₹1,299",
            rating: 4.1,
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        },
        {
            id: 5,
            name: "Smart Watch",
            price: "₹4,999",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
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
                     bg-white border  rounded-full p-2 shadow-sm
                      transition
                     disabled:opacity-30 disabled:hover:bg-white"
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Slider */}
                <div className="overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
                    >
                        {womens.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[260px] bg-white rounded-xl 
                           shadow-sm hover:shadow-lg transition"
                            >
                                {/* Image */}
                                <div className="relative h-60 overflow-hidden rounded-xl">
                                    <img
                                        src={item.image}
                                        alt={item.name}
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
                     bg-white border rounded-full p-2 shadow-sm
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
import React from 'react'
import { useEffect, useState } from "react";

function Slider() {
    const slides = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            title: "New Season Arrivals",
            subtitle: "Up to 40% Off",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
            title: "Trendy Styles",
            subtitle: "Shop the latest fashion",
        },
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[220px] sm:h-[350px] md:h-[420px] overflow-hidden">

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center">
                        <div className="ml-6 sm:ml-12 text-white">
                            <h2 className="text-2xl sm:text-4xl font-bold">
                                {slide.title}
                            </h2>
                            <p className="mt-2 text-sm sm:text-lg">
                                {slide.subtitle}
                            </p>
                            <button className="mt-4 px-5 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition ${current === index ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider
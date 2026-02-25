import React from 'react'
import { Link } from "react-router-dom";

function Category() {
    const categories = [
  {
    id: 1,
    name: "Men",
    image: "https://i.pinimg.com/1200x/fe/08/37/fe0837cee6cb96532e9579f5c98910b4.jpg",
  },
  {
    id: 2,
    name: "Women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    id: 3,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  },
];
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Our Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/${category.name.toLowerCase()}`}
            className="group relative overflow-hidden rounded-lg"

          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold tracking-wide">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Category
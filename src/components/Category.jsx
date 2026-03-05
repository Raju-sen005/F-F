import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
  },
  {
    id: 2,
    name: "Women",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
  {
    id: 3,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  },
];

function Category() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Our Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/${category.name.toLowerCase()}`}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50">
              <h3 className="text-white text-xl font-semibold tracking-wide">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;
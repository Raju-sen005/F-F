import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const brands = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Puma" },
  { id: 4, name: "Levi's" },
  { id: 5, name: "Zara" },
  { id: 6, name: "H&M" },
];

const products = [
    {
      id: 1,
      title: "Nike Running Shoes",
      brandId: 1,
      price: 3499,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    },
    {
      id: 2,
      title: "Adidas Jacket",
      brandId: 2,
      price: 2999,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: 3,
      title: "Puma Sneakers",
      brandId: 3,
      price: 2199,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    },
    {
      id: 4,
      title: "Nike Jacket",
      brandId: 1,
      price: 2799,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
  ];
  
  function BrandsProducts() {
    const { brandId } = useParams();
    const [sort, setSort] = useState("default");
  
    const selectedBrand = brands.find(
    (brand) => brand.id === Number(brandId)
  );

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (product) => product.brandId === Number(brandId)
    );

    if (sort === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [brandId, sort]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/brands" className="hover:text-black">Brands</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">
            {selectedBrand?.name}
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              {selectedBrand?.name} Collection
            </h2>
            <p className="text-gray-500 mt-2">
              {filteredProducts.length} Products Available
            </p>
          </div>

          {/* Sorting */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          >
            <option value="default">Sort By</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-24">
            No products available for this brand.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                item={{
                  ...item,
                  price: `₹${item.price.toLocaleString()}`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BrandsProducts;

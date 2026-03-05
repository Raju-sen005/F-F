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

    if (sort === "low-high") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high-low") filtered.sort((a, b) => b.price - a.price);
    if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

    return filtered;

  }, [brandId, sort]);

  return (

    <section className="min-h-screen bg-[#f8f9fb] py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}

        <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-black">
            Home
          </Link>

          <span>/</span>

          <span className="font-medium text-gray-800">
            {selectedBrand?.name}
          </span>
        </div>

        {/* Header */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

            {/* Brand Title */}

            <div>

              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                {selectedBrand?.name} Collection
              </h1>

              <p className="text-gray-500 mt-2 text-sm">
                Showing {filteredProducts.length} Products
              </p>

            </div>

            {/* Sorting */}

            <div className="flex items-center gap-3">

              <span className="text-sm text-gray-500">
                Sort By
              </span>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-gray-200 bg-white rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-black/10"
              >

                <option value="default">Default</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
                <option value="rating">Top Rated</option>

              </select>

            </div>

          </div>

        </div>

        {/* Products Grid */}

        {filteredProducts.length === 0 ? (

          <div className="text-center py-28">

            <p className="text-gray-500 text-lg">
              No products available for this brand
            </p>

            <Link
              to="/"
              className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg hover:opacity-90"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredProducts.map((item) => (

              <ProductCard
                key={item.id}
                item={{
                  ...item,
                  price: `₹${item.price.toLocaleString()}`,
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
import React from "react";
import { Link } from "react-router-dom";

function Brands() {
  const brands = [
    { id: 1, name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
    { id: 2, name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
    { id: 3, name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Puma_AG.svg" },
    { id: 4, name: "Levi's", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Levi%27s_logo.svg" },
    { id: 5, name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" },
    { id: 6, name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" },
  ];

  const row1 = [...brands, ...brands];
  const row2 = [...brands.slice().reverse(), ...brands.slice().reverse()];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Top Brands
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Discover premium fashion from top global brands
          </p>
        </div>

        <div className="space-y-6">

          {/* Row 1 */}
          <div className="brand-slider">
            <div className="brand-track">
              {row1.map((brand, index) => (
                <Link to={`/brands/${brand.id}`} key={`r1-${index}`}>
                  <div className="brand-card">
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="brand-slider">
            <div className="brand-track reverse">
              {row2.map((brand, index) => (
                <Link to={`/brands/${brand.id}`} key={`r2-${index}`}>
                  <div className="brand-card">
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Brands;

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Brands() {
  const brands = [
    {
      id: 1,
      name: "Zara",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwhEdS2Rg2dMyNnmGiQbPP_3E1OUqFsTdBDHSEXSJlc4cZxESP8EG-l2A8E3pn",
    },
    {
      id: 2,
      name: "H&M",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThNGV5GTfggGbqziQEgvIiddJ5WY9R8K2-T2uGSn9AMh09VP7AkhbnBa9KGK4Q",
    },
    {
      id: 3,
      name: "Levi's",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYkv9mmoyiZ8EmIXxfB7LFwE4ruutHfH7FVsRQF_MX6tR4QBw6NXQGFcc1EFhc",
    },
    {
      id: 4,
      name: "BURBERRY",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwema-7gjKAUuwZuI8mq6YJVnnldX1uR6nbijrvX1QFIXfCkMNgdCnvKBZBOz",
    },
  ];

  const CARD_WIDTH = 236; // card width + gap
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(4);

      setIndex(0); // reset on resize
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index < brands.length - visibleItems) {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-14 max-w-7xl mx-auto px-4">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold mb-10">
        Top Brands
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     bg-white border rounded-full p-2 shadow
                     disabled:opacity-30"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="min-w-[220px] h-56 rounded-lg overflow-hidden relative group"
              >
                {/* Image */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0
                                bg-gradient-to-t
                                from-black/60 via-black/20 to-transparent" />

                {/* Text */}
                <div className="absolute left-4 bottom-4">
                  <h3 className="text-white text-sm font-semibold">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index >= brands.length - visibleItems}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     bg-white border rounded-full p-2 shadow
                     disabled:opacity-30"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default Brands;

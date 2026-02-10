import { useState } from "react";
import { Heart, Star } from "lucide-react";
import ProductDetailsAccordion from "../components/ProductDetailsAccordion.jsx";
import SellerInfoAccordion from "../components/SellerInfoAccordion.jsx";
import { Link } from "react-router-dom";
// import { Heart, Star } from "lucide-react";
import { useNavigate } from 'react-router-dom';
function ProductDetail() {
    const navigate = useNavigate();
    const images = [
        "https://i.pinimg.com/1200x/59/c4/4a/59c44a20a41bddcc1fe825e6e4aebbbd.jpg",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    ];

    const sizes = ["S", "M", "L", "XL"];
    const colors = [
        { name: "Black", value: "bg-black" },
        { name: "Blue", value: "bg-blue-600" },
        { name: "Gray", value: "bg-gray-400" },
    ];
    const details = [
        { label: "Product Name", value: "Premium Men's Jacket" },
        { label: "Fabric", value: "Cotton Blend" },
        { label: "Fit Type", value: "Regular Fit" },
        { label: "Sleeve", value: "Full Sleeve" },
        { label: "Occasion", value: "Casual / Winter Wear" },
        { label: "Wash Care", value: "Machine Wash" },
        { label: "Country of Origin", value: "India" },
    ];
    const similarProducts = [
        {
            id: 101,
            title: "Running Shoes",
            price: "₹3,499",
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        },
        {
            id: 102,
            title: "Casual Sneakers",
            price: "₹2,799",
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        },
        {
            id: 103,
            title: "Sports Shoes",
            price: "₹3,199",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
        },
        {
            id: 104,
            title: "Training Shoes",
            price: "₹2,999",
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        },
    ];
    const [mainImage, setMainImage] = useState(images[0]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("Black");

    const addToCart = () => {
        alert(
            `Added to cart:\nSize: ${selectedSize}\nColor: ${selectedColor}`
        );
    };

    const buyNow = () => {
        navigate('/checkout'); 
    };

    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10">
            <div className="max-w-7xl mx-auto">

                {/* ================= TOP SECTION ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl">

                    {/* LEFT : IMAGES */}
                    <div className="flex gap-4">
                        {/* Thumbnails */}
                        <div className="flex flex-col gap-3">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt=""
                                    onClick={() => setMainImage(img)}
                                    className={`w-20 h-20 object-cover rounded-lg border border-gray-300 cursor-pointer
                    ${mainImage === img ? "border-black" : "border-gray-200"}`}
                                />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1">
                            <img
                                src={mainImage}
                                alt="Product"
                                className="w-full h-[420px] object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    {/* RIGHT : PRODUCT INFO */}
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Premium Men's Jacket
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-2">
                            <Star className="text-yellow-400 fill-yellow-400" size={16} />
                            <span className="text-sm text-gray-600">
                                4.5 (234 reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <p className="text-2xl font-bold mt-4 text-gray-900">
                            ₹2,999
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            Inclusive of all taxes
                        </p>

                        {/* Size */}
                        <div className="mt-6">
                            <h3 className="font-medium mb-2">Size</h3>
                            <div className="flex gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-lg text-sm border
                      ${selectedSize === size
                                                ? "border-black bg-black text-white"
                                                : "border-gray-300 hover:border-gray-500"}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color */}
                        <div className="mt-6">
                            <h3 className="font-medium mb-2">Color</h3>
                            <div className="flex gap-3">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-7 h-7 rounded-full ${color.value}
                      ${selectedColor === color.name
                                                ? "ring-2 ring-gray-500 ring-offset-2"
                                                : ""}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={addToCart}
                                className="flex-1 py-3 border rounded-lg hover:bg-black hover:text-white transition"
                            >
                                Add to Cart
                            </button>

                            <button
                                onClick={buyNow}
                                className="flex-1 py-3 bg-black text-white rounded-lg transition"
                            >
                                Buy Now
                            </button>

                            <button className="p-3 border rounded-lg hover:text-red-500">
                                <Heart />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ================= DETAILS / REVIEWS / SELLER ================= */}
                <div className="bg-white mt-10 p-6 rounded-xl space-y-10">

                    {/* Details */}
                    <ProductDetailsAccordion details={details} />

                    {/* Reviews */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            Customer Reviews
                        </h2>

                        <div className="space-y-0">
                            <div className="border-b  p-4 ">
                                <p className="font-medium">Rohit Sharma</p>
                                <p className="text-sm text-gray-600">
                                    Excellent quality, totally worth it.
                                </p>
                            </div>
                            <div className="border-b p-4 ">
                                <p className="font-medium">Amit Verma</p>
                                <p className="text-sm text-gray-600">
                                    Stylish and comfortable jacket.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Seller */}
                    <SellerInfoAccordion />

                </div>

                {/* ================= SIMILAR PRODUCTS ================= */}
                <div className="mt-14">
                    <h2 className="text-2xl font-semibold mb-6">
                        Similar Products
                    </h2>

                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {similarProducts.map((item) => (
                            <Link
                                key={item.id}
                                to={`/product/${item.id}`}
                                className="bg-white rounded-xl border border-gray-100
                   shadow-sm transition hover:shadow-md block"
                            >
                                {/* Image */}
                                <div className="relative h-60 overflow-hidden rounded-t-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover
                       transition-transform duration-500
                       hover:scale-105"
                                    />

                                    {/* Wishlist */}
                                    <button
                                        onClick={(e) => e.preventDefault()}
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
                                        {item.title}
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
                        ))}
                    </section>
                </div>


            </div>
        </div>
    );
}

export default ProductDetail;

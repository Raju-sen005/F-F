import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Premium Men's Jacket",
      price: 2999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53",
    },
    {
      id: 2,
      title: "Running Shoes",
      price: 3499,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    },
  ]);

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-3xl font-semibold tracking-tight">
              Shopping Cart
            </h1>

            <p className="text-gray-500 mt-1 text-sm">
              {cartItems.length} items in your cart
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
              <p className="text-gray-600 mb-6">Your cart is currently empty</p>

              <Link
                to="/"
                className="inline-flex px-6 py-3 bg-black text-white rounded-xl hover:opacity-90"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* CART ITEMS */}

              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-gray-100
                               p-5 flex gap-5 shadow-sm hover:shadow-md transition"
                  >
                    {/* IMAGE */}

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-28 object-cover rounded-xl"
                    />

                    {/* DETAILS */}

                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        ₹{item.price.toLocaleString()}
                      </p>

                      <p className="text-sm text-gray-700 mt-1">
                        Item Total: ₹
                        {(item.price * item.quantity).toLocaleString()}
                      </p>

                      {/* QUANTITY */}

                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, "dec")}
                            className="p-1 text-gray-600 hover:text-black"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="mx-3 text-sm font-medium">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, "inc")}
                            className="p-1 text-gray-600 hover:text-black"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* REMOVE */}

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-600 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* SUMMARY */}

              <div
                className="bg-white rounded-2xl border border-gray-100
                              p-6 h-fit sticky top-24 shadow-sm"
              >
                <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t mt-5 pt-4">
                  <span className="text-base font-semibold">Total</span>

                  <span className="text-xl font-bold">
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  className="block mt-8 text-center py-3
                             bg-black text-white rounded-xl
                             hover:opacity-90 transition"
                >
                  Proceed to Checkout
                </Link>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Secure checkout · 100% protected payments
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;

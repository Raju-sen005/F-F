import { useState } from "react";
import Navbar from "../components/Navbar";

function CheckOut() {

  const [step, setStep] = useState(1);
  const [onlineMethod, setOnlineMethod] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    address: "",
  });

  const product = {
    title: "Premium Men's Jacket",
    price: 2999,
    size: "M",
    color: "Black",
    image:
      "https://i.pinimg.com/1200x/59/c4/4a/59c44a20a41bddcc1fe825e6e4aebbbd.jpg",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {

    if (step === 1) {
      const { name, phone, pincode, city, address } = formData;

      if (!name || !phone || !pincode || !city || !address) {
        alert("Please fill all customer details");
        return;
      }
    }

    setStep(step + 1);
  };

  const placeOrder = () => {

    if (!onlineMethod) {
      alert("Please select payment method");
      return;
    }

    alert(`Redirecting to ${onlineMethod.toUpperCase()} payment gateway`);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f8f9fb] py-10 px-4">

        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-sm">

          {/* STEP INDICATOR */}

          <div className="flex mb-10">

            {["Customer Info", "Order Summary", "Payment"].map((label, i) => (

              <div key={i} className="flex-1 text-center">

                <div
                  className={`text-sm font-medium pb-2 border-b-2
                  ${
                    step === i + 1
                      ? "border-black text-black"
                      : "border-gray-200 text-gray-400"
                  }`}
                >
                  Step {i + 1}
                </div>

                <p className="text-xs text-gray-500 mt-1">{label}</p>

              </div>

            ))}

          </div>

          {/* STEP 1 CUSTOMER */}

          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-6">
                Customer Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {["name", "phone", "pincode", "city"].map((field) => (

                  <input
                    key={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field.toUpperCase()}
                    className="border border-gray-300 rounded-md px-4 py-3 text-sm
                               focus:ring-1 focus:ring-black outline-none"
                  />

                ))}

                <textarea
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Full Address"
                  className="sm:col-span-2 border border-gray-300 rounded-md px-4 py-3 text-sm
                             focus:ring-1 focus:ring-black outline-none"
                />

              </div>

              <button
                onClick={nextStep}
                className="mt-8 px-8 py-3 bg-black text-white rounded-lg hover:opacity-90"
              >
                Continue →
              </button>

            </>
          )}

          {/* STEP 2 SUMMARY */}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4">

                <img
                  src={product.image}
                  alt="product"
                  className="w-full sm:w-28 h-40 sm:h-28 object-cover rounded"
                />

                <div className="flex-1">

                  <h3 className="font-medium">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    Size: {product.size} | Color: {product.color}
                  </p>

                  <p className="font-semibold mt-3 text-lg">
                    ₹{product.price}
                  </p>

                </div>

              </div>

              <div className="flex justify-between mt-8">

                <button
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-600 hover:underline"
                >
                  ← Back
                </button>

                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-black text-white rounded-lg"
                >
                  Continue →
                </button>

              </div>

            </>
          )}

          {/* STEP 3 PAYMENT */}

          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold mb-6">
                Select Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {[
                  { id: "upi", label: "UPI (Google Pay / PhonePe)" },
                  { id: "card", label: "Credit / Debit Card" },
                  { id: "netbanking", label: "Net Banking" },
                  { id: "wallet", label: "Wallets" },
                ].map((method) => (

                  <label
                    key={method.id}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer
                    ${
                      onlineMethod === method.id
                        ? "border-black bg-gray-50"
                        : "hover:border-black"
                    }`}
                  >

                    <input
                      type="radio"
                      checked={onlineMethod === method.id}
                      onChange={() => setOnlineMethod(method.id)}
                    />

                    <span className="text-sm font-medium">
                      {method.label}
                    </span>

                  </label>

                ))}

              </div>

              {/* TOTAL */}

              <div className="mt-8 border-t pt-4 flex justify-between text-lg font-semibold">

                <span>Total Payable</span>

                <span>₹{product.price}</span>

              </div>

              <div className="flex justify-between mt-8">

                <button
                  onClick={() => setStep(2)}
                  className="text-sm text-gray-600 hover:underline"
                >
                  ← Back
                </button>

                <button
                  onClick={placeOrder}
                  className="px-8 py-3 bg-black text-white rounded-lg hover:opacity-90"
                >
                  Pay & Place Order
                </button>

              </div>

            </>
          )}

        </div>

      </div>
    </>
  );
}

export default CheckOut;
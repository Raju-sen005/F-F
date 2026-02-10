import { useState } from "react";

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (step === 1) {
            const { name, phone, pincode, city, address } = formData;
            if (!name || !phone || !pincode || !city || !address) {
                alert("❌ Please fill all customer details");
                return;
            }
        }
        setStep(step + 1);
    };

    const placeOrder = () => {
        if (!onlineMethod) {
            alert("❌ Please select a payment option");
            return;
        }

        alert(`🔐 Redirecting to ${onlineMethod.toUpperCase()} Payment Gateway`);
        // Razorpay / Stripe / PhonePe integration yahin lagega
    };

    return (
        <div className="min-h-screen bg-white py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8">

                {/* ================= STEP INDICATOR ================= */}
                <div className="flex mb-10">
                    {["Customer Info", "Order Summary", "Payment"].map((label, i) => (
                        <div key={i} className="flex-1 text-center">
                            <div
                                className={`text-sm font-medium pb-2 border-b-2
                ${step === i + 1
                                        ? "border-black text-black"
                                        : "border-gray-200 text-gray-400"
                                    }`}
                            >
                                Step {i + 1}
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ================= STEP 1 : CUSTOMER INFO ================= */}
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
                                    className="border rounded-sm px-4 py-3 text-sm
                             focus:ring-2 focus:ring-black outline-none"
                                />
                            ))}

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Full Address"
                                rows="3"
                                className="sm:col-span-2 border rounded-sm px-4 py-3 text-sm
                           focus:ring-2 focus:ring-black outline-none"
                            />
                        </div>

                        <button
                            onClick={nextStep}
                            className="mt-8 w-full sm:w-auto px-8 py-3
                         bg-black text-white rounded-lg
                         hover:opacity-90 transition"
                        >
                            Continue →
                        </button>
                    </>
                )}

                {/* ================= STEP 2 : ORDER SUMMARY ================= */}
                {step === 2 && (
                    <>
                        <h2 className="text-xl font-semibold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 border rounded-sm p-4">
                            <img
                                src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd53"
                                alt="product"
                                className="w-full sm:w-28 h-40 sm:h-28 object-cover rounded-lg"
                            />

                            <div className="flex-1">
                                <h3 className="font-medium">
                                    Premium Men's Jacket
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Size: M | Color: Black
                                </p>
                                <p className="font-semibold mt-3 text-lg">
                                    ₹2,999
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

                {/* ================= STEP 3 : ONLINE PAYMENT ================= */}
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
                                    className={`flex items-center gap-3 p-4 border rounded-sm
                             cursor-pointer transition
                             ${onlineMethod === method.id
                                            ? "border-black bg-gray-50"
                                            : "hover:border-gray-400"
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
                            <span>₹2,999</span>
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
                                className="px-8 py-3 bg-black text-white rounded-lg
                           hover:opacity-90 transition"
                            >
                                Pay & Place Order
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CheckOut;

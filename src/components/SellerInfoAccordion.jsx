import { useState } from "react";
import { ChevronDown } from "lucide-react";

function SellerInfoAccordion() {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-8 bg-white rounded-xl overflow-hidden">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-5 py-4
                   text-left text-lg font-semibold
                   hover:bg-gray-50 transition"
            >
                Seller Information
                <ChevronDown
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Content */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden px-5 pb-5">
                    <div className="flex items-start justify-between mt-4">
                        {/* Seller Info */}
                        <div>
                            <p className="text-sm text-gray-600">
                                Sold by
                            </p>

                            <p className="text-base font-semibold text-gray-900">
                                DesiBazaar Official
                                <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
                                    Verified
                                </span>
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mt-2">
                                <span className="text-yellow-400">⭐</span>
                                <span className="text-sm font-medium text-gray-800">
                                    4.6
                                </span>
                                <span className="text-sm text-gray-500">
                                    Seller Rating
                                </span>
                            </div>
                        </div>

                        {/* Action */}
                        <button className="text-sm px-4 py-2 mt-2 border rounded-lg
                               hover:bg-black hover:text-white transition">
                            View Store
                        </button>
                    </div>

                    {/* Extra Trust Info */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-600">
                        <div>
                            <p className="font-medium text-gray-800">Dispatch Time</p>
                            <p>24 Hours</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">Return Policy</p>
                            <p>7 Days Return</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">Location</p>
                            <p>India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerInfoAccordion;

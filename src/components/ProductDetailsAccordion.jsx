import { useState } from "react";
import { ChevronDown } from "lucide-react";

function ProductDetailsAccordion({ details }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-6 bg-white rounded-xl overflow-hidden">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-5 py-4
                   text-left text-lg font-semibold
                   hover:bg-gray-50 transition"
            >
                Product Details
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
                <div className="overflow-hidden">
                    <table className="w-full text-sm border-t">
                        <tbody>
                            {details.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b last:border-b-0"
                                >
                                    <th className="w-1/3 px-4 py-3 text-left font-medium text-gray-700">
                                        {item.label}
                                    </th>
                                    <td className="px-4 py-3 text-gray-600">
                                        {item.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsAccordion;

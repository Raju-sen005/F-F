import { useState } from "react";
import {
  User,
  ShoppingBag,
  Truck,
  LogOut,
  Mail,
  Lock,
  Phone,
} from "lucide-react";

import Navbar from "../components/Navbar";

function Customer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const orders = [
    {
      id: "ORD12345",
      product: "Premium Men's Jacket",
      price: "₹2,999",
      status: "Delivered",
    },
    {
      id: "ORD12346",
      product: "Running Shoes",
      price: "₹3,499",
      status: "In Transit",
    },
  ];

  /* ================= LOGIN / REGISTER ================= */

  if (!isLoggedIn) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-[#caf0f8] flex items-center justify-center px-4">

          <div className="bg-white rounded-2xl shadow-sm p-10 w-full max-w-md">

            <h2 className="text-3xl font-semibold text-center mb-2">
              {showRegister ? "Create Account" : "Welcome Back"}
            </h2>

            <p className="text-sm text-gray-500 text-center mb-8">
              {showRegister
                ? "Register to start shopping"
                : "Login to manage your account"}
            </p>

            <div className="space-y-5">

              {showRegister && (
                <Input icon={<User size={18} />} placeholder="Full Name" />
              )}

              <Input icon={<Mail size={18} />} placeholder="Email Address" />

              {showRegister && (
                <Input icon={<Phone size={18} />} placeholder="Phone Number" />
              )}

              <Input
                icon={<Lock size={18} />}
                placeholder="Password"
                type="password"
              />

            </div>

            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full mt-8 py-3 border border-[#a2d6f9]
                         bg-white text-black hover:bg-[#a2d6f9]
                         hover:text-white rounded-xl transition"
            >
              {showRegister ? "Register" : "Login"}
            </button>

            <p className="text-sm text-gray-500 text-center mt-6">

              {showRegister ? "Already have an account?" : "New here?"}

              <span
                onClick={() => setShowRegister(!showRegister)}
                className="ml-2 text-black font-medium cursor-pointer hover:underline"
              >
                {showRegister ? "Login" : "Register"}
              </span>

            </p>

          </div>
        </div>
      </>
    );
  }

  /* ================= DASHBOARD ================= */

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f8f9fb] py-10 px-4">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* SIDEBAR */}

          <aside className="bg-white rounded-2xl shadow-sm p-6 h-fit space-y-2">

            <div className="mb-6 text-center">

              <div className="h-16 w-16 mx-auto rounded-full
                              bg-white border border-[#a2d6f9]
                              flex items-center justify-center
                              text-xl font-semibold">
                RK
              </div>

              <p className="mt-3 font-medium">Raju Kumar</p>
              <p className="text-xs text-gray-500">Customer</p>

            </div>

            <SidebarItem
              icon={<User size={18} />}
              label="Profile"
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            />

            <SidebarItem
              icon={<ShoppingBag size={18} />}
              label="My Orders"
              active={activeTab === "orders"}
              onClick={() => setActiveTab("orders")}
            />

            <SidebarItem
              icon={<Truck size={18} />}
              label="Track Order"
              active={activeTab === "track"}
              onClick={() => setActiveTab("track")}
            />

            <SidebarItem
              icon={<LogOut size={18} />}
              label="Logout"
              onClick={() => setIsLoggedIn(false)}
            />

          </aside>

          {/* CONTENT */}

          <section className="md:col-span-3 bg-white rounded-2xl shadow-sm p-8">

            {activeTab === "profile" && <EditableProfile />}

            {activeTab === "orders" && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  Order History
                </h2>

                <div className="space-y-5">

                  {orders.map((order) => (

                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-xl p-5
                                 flex justify-between items-center
                                 hover:shadow-sm transition"
                    >

                      <div>
                        <p className="font-medium text-gray-800">
                          {order.product}
                        </p>

                        <p className="text-sm text-gray-500">
                          Order ID: {order.id}
                        </p>
                      </div>

                      <div className="text-right">

                        <p className="font-semibold text-gray-900">
                          {order.price}
                        </p>

                        <span
                          className={`text-xs px-3 py-1 rounded-full
                          ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {order.status}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>
              </>
            )}

            {activeTab === "track" && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  Track Order
                </h2>

                <div className="flex gap-3 max-w-md">

                  <input
                    placeholder="Enter Order ID"
                    className="flex-1 border border-gray-200
                               rounded-xl px-4 py-3
                               focus:ring-1 focus:ring-gray-300 outline-none"
                  />

                  <button className="px-6 py-3 bg-[#edae49] text-white rounded-xl hover:bg-[#d89c3c]">
                    Track
                  </button>

                </div>

                <div className="mt-6 p-5 bg-white rounded-xl border border-gray-200">

                  <p className="text-sm text-gray-500">
                    Current Status
                  </p>

                  <p className="text-lg font-semibold text-blue-600">
                    In Transit
                  </p>

                </div>
              </>
            )}

          </section>

        </div>

      </div>
    </>
  );
}

/* ================= PROFILE ================= */

function EditableProfile() {

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Raju Kumar",
    email: "raju@email.com",
    phone: "9876543210",
    gender: "Male",
    address: "Jaipur, Rajasthan",
    city: "Jaipur",
    pincode: "302001",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-semibold">
          My Profile
        </h2>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 border border-[#edae49]
                     rounded-xl text-sm hover:bg-[#edae49]
                     hover:text-white transition"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>

      </div>

      {!isEditing ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {Object.entries(profile).map(([key, value]) => (
            <Info key={key} label={key} value={value} />
          ))}

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {["name", "email", "phone", "city", "pincode"].map((field) => (

            <input
              key={field}
              name={field}
              value={profile[field]}
              onChange={handleChange}
              className="border border-gray-200 rounded-xl px-4 py-3
                         focus:ring-1 focus:ring-gray-300 outline-none"
              placeholder={field.toUpperCase()}
            />

          ))}

          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="border border-gray-200 rounded-xl px-4 py-3"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            rows="3"
            className="sm:col-span-2 border border-gray-200 rounded-xl px-4 py-3"
          />

          <div className="sm:col-span-2 flex justify-end">

            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-3 bg-[#edae49] text-white rounded-xl hover:bg-[#d89c3c]"
            >
              Save Changes
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

/* ================= UI HELPERS ================= */

function SidebarItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
        ${
          active
            ? "bg-white text-black shadow-sm border border-[#a2d6f9]"
            : "hover:bg-gray-100"
        }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Info({ label, value }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white">
      <p className="text-xs text-gray-500 capitalize mb-1">
        {label}
      </p>
      <p className="font-medium text-gray-800">
        {value}
      </p>
    </div>
  );
}

function Input({ icon, ...props }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-4 text-gray-400">
        {icon}
      </span>

      <input
        {...props}
        className="w-full border border-[#a2d6f9] rounded-lg pl-11 pr-4 py-2
                   focus:ring-1 focus:ring-[#a2d6f9] outline-none"
      />
    </div>
  );
}

export default Customer;
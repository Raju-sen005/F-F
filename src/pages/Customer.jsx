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

  /* ================= AUTH (LOGIN / REGISTER) ================= */
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-2">
            {showRegister ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            {showRegister
              ? "Register to start shopping"
              : "Login to manage your account"}
          </p>

          <div className="space-y-4">
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
            className="w-full mt-6 py-3 bg-black text-white rounded-lg hover:opacity-90"
          >
            {showRegister ? "Register" : "Login"}
          </button>

          <p className="text-sm text-gray-500 text-center mt-5">
            {showRegister ? "Already have an account?" : "New here?"}
            <span
              onClick={() => setShowRegister(!showRegister)}
              className="ml-1 text-black font-medium cursor-pointer hover:underline"
            >
              {showRegister ? "Login" : "Register"}
            </span>
          </p>
        </div>
      </div>
    );
  }

  /* ================= DASHBOARD ================= */
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* SIDEBAR */}
        <aside className="bg-white rounded-xl p-5 shadow-sm h-fit space-y-1">
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
        <section className="md:col-span-3 bg-white rounded-xl p-6 shadow-sm">

          {/* PROFILE */}
          {activeTab === "profile" && <EditableProfile />}

          {/* ORDERS */}
          {activeTab === "orders" && (
            <>
              <h2 className="text-xl font-semibold mb-4">Order History</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-4 flex justify-between"
                  >
                    <div>
                      <p className="font-medium">{order.product}</p>
                      <p className="text-sm text-gray-500">
                        Order ID: {order.id}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{order.price}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
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

          {/* TRACK ORDER */}
          {activeTab === "track" && (
            <>
              <h2 className="text-xl font-semibold mb-4">Track Order</h2>
              <input
                placeholder="Enter Order ID"
                className="border rounded-lg px-4 py-3 w-full max-w-sm focus:ring-2 focus:ring-black outline-none"
              />
              <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg">
                Track Order
              </button>
              <p className="mt-5 text-sm">
                Status:{" "}
                <span className="font-semibold text-blue-600">
                  In Transit
                </span>
              </p>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

/* ================= EDITABLE PROFILE ================= */
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">My Profile</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {!isEditing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {Object.entries(profile).map(([key, value]) => (
            <Info key={key} label={key} value={value} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {["name", "email", "phone", "city", "pincode"].map((field) => (
            <input
              key={field}
              name={field}
              value={profile[field]}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
              placeholder={field.toUpperCase()}
            />
          ))}

          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2"
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
            className="sm:col-span-2 border rounded-lg px-4 py-2"
          />

          <div className="sm:col-span-2 flex justify-end">
            <button
              onClick={() => {
                setIsEditing(false);
                alert("Profile updated successfully");
              }}
              className="px-6 py-2 bg-black text-white rounded-lg"
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
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm
        ${active ? "bg-black text-white" : "hover:bg-gray-100 text-gray-700"}`}
    >
      {icon}
      {label}
    </button>
  );
}

function Info({ label, value }) {
  return (
    <div className="border rounded-lg p-4">
      <p className="text-xs text-gray-500 capitalize">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function Input({ icon, ...props }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-3.5 text-gray-400">
        {icon}
      </span>
      <input
        {...props}
        className="w-full border rounded-lg pl-10 px-4 py-3 focus:ring-2 focus:ring-black outline-none"
      />
    </div>
  );
}

export default Customer;

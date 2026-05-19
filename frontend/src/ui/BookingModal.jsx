import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function BookingModal({ isOpen, setIsOpen, property }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
  });

  if (!isOpen || !property) return null;

  const price = property.pricePerWeek || 500;

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    const res = await loadRazorpay();
    if (!res) return alert("Razorpay failed");

    const options = {
      key: "rzp_test_xxxxx",
      amount: price * 100,
      currency: "INR",
      name: "Room Scholars",
      description: property.title,

      handler: function (response) {
        alert("Payment Success 🎉");
        setIsOpen(false);
      },

      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },

      theme: {
        color: "#3b3395",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
 
    <div className="fixed inset-0 z-50 flex items-center justify-center">

  
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />


      <div className="relative bg-white w-[420px] rounded-3xl shadow-2xl p-6 z-10 animate-fade-in">


        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-red-500"
        >
          <IoCloseOutline size={24} />
        </button>


        <h2 className="text-xl font-bold mb-1">
          Book Property
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          {property.title}
        </p>


        <div className="bg-gray-100 p-3 rounded-xl mb-4">
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-bold text-orange-500">
            £{price}/week
          </p>
        </div>


        <form onSubmit={handlePayment} className="space-y-3">

          <input
            placeholder="Name"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            placeholder="Email"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            placeholder="Phone"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            required
          />

          <input
            placeholder="University"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setForm({ ...form, university: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="w-full bg-[#3b3395] text-white py-3 rounded-xl font-semibold hover:bg-[#2a226e]"
          >
            Pay & Book Now
          </button>

        </form>

      </div>
    </div>
  );
}
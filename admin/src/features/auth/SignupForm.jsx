import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import useSignup from "./useSignup";
import Logo from "../../components/Logo";

const inputClass =
  "w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-300 text-gray-800 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const [formError, setFormError] = useState("");

  const { signup, isPending } = useSignup();

  const handleSignup = (e) => {
    e.preventDefault();

    setFormError("");

    if (!email || !password || !username || !confirmPassword) {
      setFormError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    signup({ username, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-2xl rounded-3xl p-6 sm:p-8 transition-all duration-300">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-8 text-center">
          <Logo textSize="text-3xl sm:text-4xl" color="text-gray-900" />

          <p className="text-gray-500 text-sm mt-2">
             Create and manage admin accounts 👨‍💼🔐
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          
          {/* Username */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaUser />
            </span>

            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Full Name"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaEnvelope />
            </span>

            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className={inputClass}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>

            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className={inputClass}
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>

            <input
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={inputClass}
            />
          </div>

          {/* Error */}
          {formError && (
            <p className="text-red-500 text-sm text-center">
              {formError}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={isPending}
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 flex justify-center items-center"
          >
            {isPending ? (
              <span className="loading loading-bars loading-md"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
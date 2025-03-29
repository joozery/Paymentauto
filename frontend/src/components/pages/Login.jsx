import { useState } from "react";
import { FaLock, FaUser, FaSignInAlt, FaMoneyBillWave, FaGlobeAsia } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://severpayment-0e5a1a076969.herokuapp.com/api/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 font-['Prompt']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden"
      >
        {/* Left Intro */}
        <div className="flex-1 p-10 hidden md:flex flex-col justify-center bg-gradient-to-br from-blue-100 to-blue-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
            Welcome to <span className="text-blue-600">AutoPayz</span>
          </h1>
          <p className="text-gray-600 mb-8 text-sm">
            Accept payments, manage balances and grow your business with ease.
          </p>

          <div className="space-y-4">
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-lg border border-blue-200 flex gap-3 items-start">
              <FaMoneyBillWave className="text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-blue-700">Single API Integration</p>
                <p className="text-xs text-gray-600">Connect once, access all features.</p>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-lg border border-sky-200 flex gap-3 items-start">
              <FaGlobeAsia className="text-sky-600 mt-1" />
              <div>
                <p className="font-semibold text-sky-700">Multi-Country Support</p>
                <p className="text-xs text-gray-600">Asia & LATAM payment networks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 p-8 md:p-12 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <FaSignInAlt /> Login to your Dashboard
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 text-sm p-3 mb-4 rounded-md border border-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full ml-3 outline-none text-sm bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full ml-3 outline-none text-sm bg-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-400">
            Powered by <span className="text-blue-500 font-medium">AutoPayz Co., Ltd.</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
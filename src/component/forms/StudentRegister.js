import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      setMessage({ text: "", type: "" });
      return;
    }

    setError("");

    try {
      const response = await axios.post("http://192.168.1.54:8000/api/register/", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response data:", response.data); 

      const token = localStorage.getItem("token");
      if (token) {
        setMessage({ text: "Signup successful! Redirecting...", type: "success" });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage({ text: "An error occurred. Please try again.", type: "error" });
      }
    } catch (error) {
      console.error("Signup error:", error);

      if (error.response) {
        console.error("Error response data:", error.response.data);
        setMessage({ text: error.response.data.detail || "An error occurred during signup.", type: "error" });
      } else {
        setMessage({ text: "An unexpected error occurred.", type: "error" });
      }
    }
};


  return (
    <div className="flex items-center justify-center my-10">
      <form
        className="bg-white p-6 rounded shadow-md w-96"
        onSubmit={handleSignup}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Signup Form</h2>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label
            htmlFor="confirm_password"
            className="block text-gray-700 font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>

        {/* Display success or error messages */}
        {message.text && (
          <p
            className={`text-center mb-4 ${
              message.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message.text}
          </p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-950 transition duration-200"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" }); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.1.29:8000/api/login/", formData, {
        headers: { "Content-Type": "application/json" },
      });
      // console.log(response);
      // localStorage.setItem("token", response.data.token);
      // console.log("Token stored in localStorage:", localStorage.getItem("token"));

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        setMessage({ text: "Login successful!", type: "success" });
        navigate("/abroad-unbox");
        window.location.reload();
      } else {
        setMessage({ text: "Invalid login credentials.", type: "error" });
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.detail || "An error occurred during login.";
      setMessage({ text: errorMsg, type: "error" });
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center my-20">
      <form
        className="bg-white p-6 rounded shadow-md w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login Form</h2>
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
        {message.text && (
          <p
            className={`text-center mb-4 ${
              message.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message.text}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-950 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

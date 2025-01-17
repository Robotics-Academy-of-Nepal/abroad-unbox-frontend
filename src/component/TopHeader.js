import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa"; 

const TopHeader = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [username, setUsername] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const fetchUsername = async () => {
    const token = localStorage.getItem("token");
    // console.log("Token from localStorage:", token);

    if (!token) {
      setIsLoggedin(false);
      setUsername("");
      return;
    }

    try {
      const response = await axios.get("http://192.168.1.54:8000/api/get-user/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      if (response.data) {
        setUsername(response.data.username);
        setIsLoggedin(true);
      }
    } catch (error) {
      console.error("Error fetching username:", error);
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    fetchUsername();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedin(false);
    setUsername("");
    setIsDropdownOpen(false); 
    window.location.reload();
  };

  return (
    <div className="w-full flex justify-between items-center p-4 md:p-5">
      {/* Brand Logo */}
      <div>
        <Link to="/abroad-unbox">
          <h1 className="font-poppins font-semibold text-lg md:text-xl text-blue-900">
            Ab-Un
          </h1>
        </Link>
      </div>

      {/* User Section */}
      <div className="relative">
        {isLoggedin ? (
          <div className="flex items-center gap-4">
            {/* User Icon */}
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative">
              <FaUserCircle size={30} className="text-blue-900" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-40 w-40 mt-20 bg-white border border-gray-300 rounded-lg shadow-md">
                <div className="p-2 text-gray-700">
                  <h2 className="font-poppins text-sm text-gray-800">{username}</h2>
                  <button
                    onClick={handleLogout}
                    className="font-poppins text-sm text-red-500 hover:text-red-700 w-full text-left mt-2"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="font-poppins font-medium text-lg md:text-xl text-blue-900 hover:text-blue-700 transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopHeader;

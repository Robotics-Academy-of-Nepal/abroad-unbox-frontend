import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const Header = ({ setIsStaff: setParentIsStaff }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isStaff, setIsStaffState] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://192.168.1.29:8000/api/get-user/", {
            headers: {
              Authorization: `Token ${token}`,
            },
          });

          if (response.data.is_staff) {
            setIsLoggedin(true);
            setIsStaffState(true);
            setParentIsStaff(true);  // Propagate the staff status to parent component
          } else {
            setIsLoggedin(true);
            setIsStaffState(false);
            setParentIsStaff(false);  // Propagate the non-staff status to parent component
          }
        } catch (error) {
          setIsLoggedin(false);
          setIsStaffState(false);
          setParentIsStaff(false);
        }
      } else {
        setIsLoggedin(false);
        setIsStaffState(false);
        setParentIsStaff(false);
      }
    };

    fetchUserData();
  }, [setParentIsStaff]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex justify-between items-center px-2 border-b-4 border-[#020346] bg-white md:bg-[#07096D]">
      <button
        onClick={toggleMenu}
        className="lg:hidden flex ml-auto text-3xl text-[#07096D] font-semibold mt-0"
      >
        {menuOpen ? <RxCross2 /> : <MdOutlineMenu />}
      </button>

      {menuOpen && (
        <div className="lg:hidden absolute top-14 right-0 bg-white w-64 p-9 space-y-4 transform transition-all duration-300 shadow-lg border rounded-md z-50">
          <ul className="space-y-4">
            <li>
              <Link to="/" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/"
                      ? "bg-[#020346] text-white"
                      : "bg-[#07096D] text-white hover:bg-[#020346]"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              {isLoggedin && (
                <Link to="/sat/reading" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/sat/reading"
                      ? "bg-[#020346] text-white"
                      : "bg-[#07096D] text-white hover:bg-[#020346]"
                  }`}
                >
                  SAT
                </span>
              </Link>
              )}
            </li>
            {isLoggedin && !isStaff && (
              <li>
                <Link to="/studentdash" onClick={toggleMenu}>
                  <span
                    className={`block px-4 py-2 rounded-md text-lg ${
                      location.pathname === "/studentdash"
                        ? "bg-[#020346] text-white"
                        : "bg-[#07096D] text-white hover:bg-[#020346]"
                    }`}
                  >
                    Student Dashboard
                  </span>
                </Link>
              </li>
            )}
            {isLoggedin && isStaff && (
              <li>
                <Link to="/addstudent" onClick={toggleMenu}>
                  <span
                    className={`block px-4 py-2 rounded-md text-lg ${
                      location.pathname === "/addstudent"
                        ? "bg-[#020346] text-white"
                        : "bg-[#07096D] text-white hover:bg-[#020346]"
                    }`}
                  >
                    Add Student
                  </span>
                </Link>
              </li>
            )}
            <li>
              <Link to="/applicationtimeline" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/applicationtimeline"
                      ? "bg-[#020346] text-white"
                      : "bg-[#07096D] text-white hover:bg-[#020346]"
                  }`}
                >
                  Application Timeline
                </span>
              </Link>
            </li>
            <li>
              <Link to="/essaywriting" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/essaywriting"
                      ? "bg-[#020346] text-white"
                      : "bg-[#07096D] text-white hover:bg-[#020346]"
                  }`}
                >
                  Essay writing
                </span>
              </Link>
            </li>
            <li>
              <Link to="/info" onClick={toggleMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-lg ${
                    location.pathname === "/info"
                      ? "bg-[#020346] text-white"
                      : "bg-[#07096D] text-white hover:bg-[#020346]"
                  }`}
                >
                  Info
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div style={{ position: "sticky", top: "0", zIndex:"999"}} className="sticky z-50 top-0">
      <div className="hidden md:flex lg:flex space-x-6 text-lg ">
        <Link to="/">
          <button
            className={`px-4 py-4 rounded-t-lg focus:outline-none ${
              location.pathname === "/"
                ? "bg-[#020346] text-white"
                : "bg-[#07096D] text-white hover:bg-[#020346]"
            }`}
          >
            Home
          </button>
        </Link>
        {isLoggedin && (
          <Link to="/sat/reading">
          <button
            className={`px-4 py-4 rounded-t-lg focus:outline-none ${
              location.pathname === "/sat/reading"
                ? "bg-[#020346] text-white"
                : "bg-[#07096D] text-white hover:bg-[#020346]"
            }`}
          >
            SAT
          </button>
        </Link>
        )}
        {isLoggedin && !isStaff && (
          <Link to="/studentdash">
            <button
              className={`px-4 py-4 rounded-t-lg focus:outline-none ${
                location.pathname === "/studentdash"
                  ? "bg-[#020346] text-white"
                  : "bg-[#07096D] text-white hover:bg-[#020346]"
              }`}
            >
              Student Dashboard
            </button>
          </Link>
        )}
        {isLoggedin && isStaff && (
          <Link to="/addstudent">
            <button
              className={`px-4 py-4 rounded-t-lg focus:outline-none ${
                location.pathname === "/addstudent"
                  ? "bg-[#020346] text-white"
                  : "bg-[#07096D] text-white hover:bg-[#020346]"
              }`}
            >
              Add Student
            </button>
          </Link>
        )}
        <Link to="/applicationtimeline">
          <button
            className={`px-4 py-4 rounded-t-lg focus:outline-none ${
              location.pathname === "/applicationtimeline"
                ? "bg-[#020346] text-white"
                : "bg-[#07096D] text-white hover:bg-[#020346]"
            }`}
          >
            Application Timeline
          </button>
        </Link>
        <Link to="/essaywriting">
          <button
            className={`px-4 py-4 rounded-t-lg focus:outline-none ${
              location.pathname === "/essaywriting"
                ? "bg-[#020346] text-white"
                : "bg-[#07096D] text-white hover:bg-[#020346]"
            }`}
          >
            Essay writing
          </button>
        </Link>
        <Link to="/info">
          <button
            className={`px-4 py-4 rounded-t-lg focus:outline-none ${
              location.pathname === "/info"
                ? "bg-[#020346] text-white"
                : "bg-[#07096D] text-white hover:bg-[#020346]"
            }`}
          >
            Info
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Header;

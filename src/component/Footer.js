import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-blue-950 text-white mb-0">
      <div className="flex justify-around items-start flex-wrap md:justify-around md:flex md:items-start">
        {/* Our Services Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
          <ul className="m-1 text-lg">
            <li className="mb-2 text-3xl font-bold">Our Services</li>
            <li>Career counseling</li>
            <li>USA Application</li>
            <li>University Selection</li>
            <li>Essay Writing</li>
            <li>Documentation</li>
            <li>Visa Application</li>
            <li>Visa Preparation</li>
            <li>After Visa Sessions</li>
            <li>SAT Preparation</li>
            <li>DET/IELTS/TOFEL</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
          <ul className="m-1 text-lg">
            <li className="mb-2 text-3xl font-bold">Contact us</li>
            <li>Kalikasthan-29, Kathmandu Bagmati Nepal</li>
            <li>01-45470760 9848594312</li>
            <li>
              abroadunbox@gmail.com
              <br />
              bishal.karki942@gmail.com
            </li>
            <li>
              <a
                href="https://www.abroadunbox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.abroadunbox.com
              </a>
            </li>
          </ul>
        </div>

        {/* Our Official Hours Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
          <ul className="m-1 text-lg">
            <li className="mb-2 text-3xl font-bold">Our Official Hours</li>
            <li>Sunday: 10.00 AM - 5.00 PM</li>
            <li>Monday: 10.00 AM - 5.00 PM</li>
            <li>Tuesday: 10.00 AM - 5.00 PM</li>
            <li>Wednesday: 10.00 AM - 5.00 PM</li>
            <li>Thursday: 10.00 AM - 5.00 PM</li>
            <li>Friday: Closed</li>
            <li>Saturday: Closed</li>
          </ul>
        </div>

        {/* Abroad Unbox Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 text-center lg:text-left">
          <h2 className="text-orange-500 font-bold text-3xl">ABROAD UNBOX</h2>
          <ul className="flex justify-center lg:justify-start space-x-4">
            <li>
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook fa fa-2x text-orange-500"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <i className="fa-brands fa-twitter fa fa-2x text-orange-500"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-square-instagram fa fa-2x text-orange-500"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin fa fa-2x text-orange-500"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

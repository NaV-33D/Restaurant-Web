import React from "react";
import logo from "../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";


const Navbar = () => {
  return (
    <div
      className="shadow-md bg-white dark:bg-gray-900 
    dark:text-white duration-200"
    >
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
            <img src={logo} alt="logo" className="w-10" />
            Foodie Zone
          </a>

          {/* Centered Navigation Links */}
          <ul className="hidden sm:flex gap-6">
            <li>
              <a href="#" className="inline-block py-4 px-4 hover:text-primary">Home</a>
            </li>
            <li>
              <a href="#" className="inline-block py-4 px-4 hover:text-primary">About</a>
            </li>
            <li>
              <a href="#" className="inline-block py-4 px-4 hover:text-primary">Contact</a>
            </li>
          </ul>

          {/* Right Side - Dark Mode Toggle & Cart Button */}
          <div className="flex items-center gap-4">
            <DarkMode />
            <button className="bg-gradient-to-r from-primary to-secondary
            text-white px-4 py-2 rounded-full flex items-center gap-2 
            hover:from-secondary hover:to-primary">
              Order <FaCartShopping className="text-xl drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

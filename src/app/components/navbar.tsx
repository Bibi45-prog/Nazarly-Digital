"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex bg-[#0D0D0D] p-4 text-white relative">
      <div className="bg-[#2626267A] w-[150px] h-auto p-2 rounded-lg ml-10 mr-5 text-[18px]">
        Logo
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center space-x-2 relative">
          <div className="bg-[#2626267A] flex justify-between items-center p-2 rounded-lg w-[250px]">
            <h1 className="text-[18px] font-[400]">Home</h1>
            <button
              onClick={toggleDropdown}
              className="ml-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {isOpen && (
            <ul className="absolute top-full left-0 right-0 bg-[#2626267A] rounded-lg w-full p-4 space-y-2 text-[24px]">
              <li className="cursor-pointer hover:text-gray-300">Work</li>
              <li className="cursor-pointer hover:text-gray-300">About</li>
              <li className="cursor-pointer hover:text-gray-300">Careers</li>
            </ul>

          )}  <div className="bg-[#313131]">
          Follow us
        </div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

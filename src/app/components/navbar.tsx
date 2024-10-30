"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center bg-[#0D0D0D] p-4 text-white relative mx-12">
      <div className="bg-[#2626267A] w-auto h-auto p-2 rounded-lg text-[18px]">
        <img src="/assets/img/logo.svg"></img>
      </div>
      <div className="flex items-center space-x-6 flex-grow ml-4">
        <div className="relative">
          <div className="hidden justify-between lg:flex bg-[#2626267A] p-2 rounded-lg w-[200px] cursor-pointer">
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

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute top-full mt-2 bg-[#262626] p-4 rounded-lg w-[250px] space-y-2 text-[18px] z-10">
              <li className="cursor-pointer hover:underline">Work</li>
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <div className="mt-4 border-t border-gray-700 pt-2">
                <div className="flex items-center justify-between">
                  <span>Follow us</span>
                  <div className="flex space-x-2">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.75 8.25h-1.75v5.75H12V10.25H9.75v-1.5h2.25v-.67c0-1.25.75-2.08 1.92-2.08h1.33v1.5h-1.17c-.67 0-.83.33-.83.83v.92h2.25l-.25 1.5z"
                        />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.75 8.25h-1.75v5.75H12V10.25H9.75v-1.5h2.25v-.67c0-1.25.75-2.08 1.92-2.08h1.33v1.5h-1.17c-.67 0-.83.33-.83.83v.92h2.25l-.25 1.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          )}
        </div>
      </div>

      <div className="hidden lg:block bg-[#2626267A] p-2 rounded-lg text-[18px] cursor-pointer ml-auto">
        Contact us
      </div>

      <div className="block lg:hidden">
        <button onClick={toggleDropdown} className="ml-2 focus:outline-none">
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
    </nav>
  );
};

export default Navbar;

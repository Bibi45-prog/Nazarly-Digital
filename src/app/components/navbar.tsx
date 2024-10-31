"use client";

import { Container } from "@/shared/ui/Container";
import React, { useState } from "react";
import Image from "next/image";
import { Flex } from "@/shared/ui/Flex";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <Container className="mt-[40px]">
      <nav>
        <Flex className="justify-between">
          <Flex className="gap-x-2">
            <Image
              src={"/assets/logo/logo.svg"}
              width={60}
              height={60}
              alt="Logo"
            />
            <div onClick={toggleDropdown} className="relative">
              <button className="items-center justify-between lg:flex bg-secondary px-4 rounded-lg h-[50px] w-[300px] cursor-pointer">
                <h1 className="text-lg font-normal">Home</h1>
                <Image
                  src={"/assets/icons/menu.svg"}
                  width={16}
                  height={16}
                  alt="Menu"
                />
              </button>

              {isOpen && (
                <ul className="absolute top-full mt-2 bg-secondary p-4 rounded-lg w-[300px] space-y-2 text-[18px] z-10">
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
          </Flex>
          <button className="bg-secondary rounded-xl px-6 h-[50px]">
            Contact us
          </button>
        </Flex>
      </nav>
    </Container>
  );
};

export default Navbar;

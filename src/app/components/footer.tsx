"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");

    setFormData({
      email: "",
      phone: "",
    });
  };

  return (
    <footer className="bg-black text-white py-16 px-8 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-[35px] font-semibold">
            Your name could be the beginning of something great.
          </h2>
          <p className="text-[#FAFAFA] text-[16px]">
            Leave your name and phone number and we will contact you within 20
            minutes to discuss your project.
          </p>

          <div className="w-auto h-auto ">
            <Image
              src={"/assets/logo/logo.svg"}
              width={50}
              height={50}
              alt="Logo"
            />
          </div>

          <div className="bottom-2">
            <p className="text-[#FAFAFA] text-[#14px]">
              &copy; 2024 Nazarly Digital.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#FAFAFA]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@nazarly.digital"
                required
                className="w-full bg-[#161616] text-white p-4 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[#FAFAFA]">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+(993 65) 85 58 73"
                required
                className="w-full bg-[#161616] text-white p-4 rounded-lg focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3AFFA3] text-black py-4 rounded-lg font-semibold"
            >
              SUBMIT
            </button>
          </form>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 bg-[#161616] p-4 rounded-lg">
              <a href="#" className="block text-[#FAFAFA] hover:text-white">
                Home
              </a>
              <a href="#" className="block text-[#FAFAFA] hover:text-white">
                Work
              </a>
              <a href="#" className="block text-[#FAFAFA] hover:text-white">
                About
              </a>
              <a href="#" className="block text-[#FAFAFA] hover:text-white">
                Careers
              </a>
            </div>
            <div className="space-y-2 bg-[#161616] rounded-lg p-4">
              <a href="#" className="block text-[#FAFAFA] hover:text-white">
                Contact us
              </a>
              <div>
                <a href="#" className="block text-[#FAFAFA] hover:text-white">
                  Policy privacy
                </a>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <a href="" className="text-white hover:text-[#A3A3A3]">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="" className="text-white hover:text-[#A3A3A3]">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import React, { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
    phone: ""
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
      phone: ""
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

          <div className="mt-20">
            <h3 className="text-2xl font-bold">nazarly.digital</h3>
          </div>

          <div className="bottom-2">
             <p className="text-[#FAFAFA] text-[#14px]">&copy; 2024 Nazarly Digital.</p>
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
              className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold"
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
            <a href="#" className="text-[#FAFAFA] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.94.24 2.39.409a4.8 4.8 0 011.684.975 4.8 4.8 0 01.975 1.684c.169.45.353 1.184.409 2.39.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.056 1.206-.24 1.94-.409 2.39a4.8 4.8 0 01-.975 1.684 4.8 4.8 0 01-1.684.975c-.45.169-1.184.353-2.39.409-1.267.058-1.647.07-4.85.07s-3.584-.012-4.851-.07c-1.206-.056-1.94-.24-2.39-.409a4.8 4.8 0 01-1.684-.975 4.8 4.8 0 01-.975-1.684c-.169-.45-.353-1.184-.409-2.39C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.851c.056-1.206.24-1.94.409-2.39a4.8 4.8 0 01.975-1.684 4.8 4.8 0 011.684-.975c.45-.169 1.184-.353 2.39-.409C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.014 7.052.07 5.772.127 4.95.322 4.3.606a6.644 6.644 0 00-2.397 1.567A6.644 6.644 0 00.606 4.3C.322 4.95.127 5.772.07 7.052.014 8.332 0 8.737 0 12c0 3.263.014 3.668.07 4.948.057 1.28.252 2.102.536 2.752a6.644 6.644 0 001.567 2.397 6.644 6.644 0 002.397 1.567c.65.284 1.472.479 2.752.536C8.332 23.986 8.737 24 12 24s3.668-.014 4.948-.07c1.28-.057 2.102-.252 2.752-.536a6.644 6.644 0 002.397-1.567 6.644 6.644 0 001.567-2.397c.284-.65.479-1.472.536-2.752.057-1.28.07-1.685.07-4.948 0-3.263-.014-3.668-.07-4.948-.057-1.28-.252-2.102-.536-2.752a6.644 6.644 0 00-1.567-2.397A6.644 6.644 0 0019.7.606c-.65-.284-1.472-.479-2.752-.536C15.668.014 15.263 0 12 0z" />
                <path d="M12 5.838a6.163 6.163 0 100 12.325 6.163 6.163 0 000-12.325zm0 10.163a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
              </svg>
            </a>
            <a href="#" className="text-[#FAFAFA] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M9.029 11.249l-3.766 2.605a.495.495 0 00.18.877l2.401.566 1.185 3.834a.498.498 0 00.827.19l2.462-2.326 2.504 1.823a.497.497 0 00.777-.305l3.912-17.911a.499.499 0 00-.675-.564l-19.5 8.062a.5.5 0 00-.04.927l4.808 1.709 3.428-1.288a.5.5 0 00-.028-.935l-1.484-.528a.5.5 0 01.316-.905z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

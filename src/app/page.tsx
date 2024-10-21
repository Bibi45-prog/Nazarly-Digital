"use client";

export default function Home() {
  return (
    <div className="relative items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      {/* Background Image */}
      {/* <div className="absolute flex-col">
        <img className="w-screen h-full" alt="banner image" src="/assets/img/home1.svg" />
      </div> */}

     

      {/* Main Content */}
      <div className="relative">
        {/* Section Title */}
        <div className="text-[56px] font-bold mb-12 text-start">
          <h1>Why do entrepreneurs choose us?</h1>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Card 1: Marketing */}
          <div className="bg-gray-800 p-8 rounded-lg relative">
            <span className="text-gray-400 absolute top-4 left-4 text-sm">/01</span>
            <img className="absolute -top-5 right-4 w-20" src="/assets/img/glass_icon1.svg" alt="Marketing Icon" />
            <h2 className="text-2xl font-bold mb-4">Marketing</h2>
            <p className="text-gray-300">We make websites that bring clients.</p>
          </div>

          {/* Card 2: Deadlines */}
          <div className="bg-gray-800 p-8 rounded-lg relative">
            <span className="text-gray-400 absolute top-4 left-4 text-sm">/02</span>
            <img className="absolute -top-5 right-4 w-20" src="/assets/img/glass_icon2.svg" alt="Deadlines Icon" />
            <h2 className="text-2xl font-bold mb-4">Deadlines</h2>
            <p className="text-gray-300">We understand that time is money.</p>
          </div>

          {/* Card 3: 3+ years */}
          <div className="bg-gray-800 p-8 rounded-lg relative">
            <span className="text-gray-400 absolute top-4 left-4 text-sm">/03</span>
            <img className="absolute -top-5 right-4 w-20" src="/assets/img/glass_icon3.svg" alt="Experience Icon" />
            <h2 className="text-2xl font-bold mb-4">3+ years</h2>
            <p className="text-gray-300">Warranty and technical support on the website.</p>
          </div>
        </div>

        {/* Category Tags */}
        <div className="bg-gray-800 p-2 mt-2 rounded-lg">
        <div className="flex flex-wrap justify-center gap-4 mt-12 ">
          {[
            "Education",
            "Healthcare",
            "Fitness",
            "Cryptocurrency",
            "Real estate",
            "Online sales",
            "IT infrastructure",
            "Construction",
            "Restaurants",
            "Clothing brands",
          ].map((category, index) => (
            <div
              key={index}
              className="bg-gray-700 px-4 py-2 rounded-full text-white font-medium"
            >
              {category}
            </div>
          ))}
        </div>
        </div>
      </div>

      <div>
         {/* Section Title */}
         <div className="text-[56px] font-bold mb-12 text-start mt-10">
          <h1>Latest Projects</h1>
        </div>
      </div>

     
    </div>
  );
}

import React from "react";

export const WeWill = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[80vh] sm:h-[20vh] md:h-[50vh] bg-contain bg-center bg-no-repeat my-24"
      style={{ backgroundImage: "url('/assets/img/bg.svg')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl"></div>

      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-joystix">
          We will design the first screen <br /> of the site for free
        </h1>
        <img
          src="/assets/img/button.svg"
          alt="Button Image"
          className="mt-4 mx-auto"
        />
      </div>
    </div>
  );
};

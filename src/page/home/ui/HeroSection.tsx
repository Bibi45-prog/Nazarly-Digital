import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative mt-[160px] h-[645px] max-w-[98%] mx-auto rounded-[30px] bg-[url('/assets/shapes/hero.png')] bg-cover bg-center">
      <div>
        <h1 className=" text-center text-[46px] sm:text-[64px] md:text-[86px] font-bold text-white leading-[110px] max-w-3xl mx-auto">
          Turning ideas into
          <span className="text-[#3AFFA3]"> digital</span> reality
        </h1>
        <p className="max-w-[740px] mx-auto text-center text-xl mt-8 text-textSecondary mb-11">
          Empowering your vision with cutting-edge technology, we bring your
          ideas to life and help you stand out in an increasingly digital world
        </p>
        <button className="flex items-center gap-x-3 bg-[#3AFFA3] text-blackPrimary px-[30px] h-[50px] font-medium mx-auto rounded-full hover:bg-[#2EC47E]">
          Leave a request
          <Image
            src={"assets/icons/magicStars.svg"}
            width={20}
            height={20}
            alt="magic stars"
          />
        </button>
      </div>
    </div>
  );
};

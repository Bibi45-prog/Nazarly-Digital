import { Container } from "@/shared/ui/Container";
import React from "react";

export const WhyChooseUs = () => {
  return (
    <Container className="mt-10">
      <h2 className="text-[56px] font-bold mb-12">
        Why do entrepreneurs choose us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {["Marketing", "Deadlines", "3+ years"].map((title, index) => (
          <div
            key={index}
            className="bg-[#1F1F1F] p-8 rounded-xl relative h-[400px] flex flex-col justify-between"
          >
            <span className="text-[#666666] absolute top-4 left-4 text-md">
              /{index + 1}
            </span>
            <div className="flex-grow"></div>
            <div className="flex flex-col">
              <h2 className="text-5xl mb-5 font-bold">{title}</h2>
              <p className="text-[#666666]">
                {title === "Marketing" &&
                  "We make websites that bring clients."}
                {title === "Deadlines" && "We understand that time is money."}
                {title === "3+ years" &&
                  "Warranty and technical support on the website."}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1F1F1F] p-4 sm:p-6 lg:p-8 mt-2 rounded-xl h-auto min-h-[222px]">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mt-6 lg:mt-12">
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
              className="bg-[#353535] px-3 py-2 sm:px-4 lg:px-6 rounded-full text-white font-medium text-sm sm:text-base lg:text-lg"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

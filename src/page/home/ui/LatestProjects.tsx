"use client";

import { Container } from "@/shared/ui/Container";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const LatestProjects = () => {
  const carouselRef = React.useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };
  return (
    <Container className="mt-10 rounded-xl">
      <h2 className="text-[56px] font-bold mb-12">Latest Projects</h2>
      <div className="relative flex items-center">
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-2 z-10 p-2 bg-[#222222] rounded-full hover:bg-[#222222] hover:opacity-[40%]"
        >
          <FaArrowLeft className="text-white h-6 w-6" />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-hidden gap-4 md:gap-8 scrollbar-hide"
        >
          {[
            {
              imageSrc: "/assets/img/phone_mockup.svg",
              title:
                "A new era of education at the Dutch Creative Technology Academy",
              client: "Reducations",
              description: "Used tools",
              tools: ["Figma", "React", "Dart", "Flutter"],
              action: "Build to launch",
              duration: "6 months",
            },
            {
              imageSrc: "/assets/img/phone_mockup.svg",
              title:
                "A new era of education at the Dutch Creative Technology Academy",
              client: "Reducations",
              description: "Used tools",
              tools: ["Figma", "React", "Dart", "Flutter"],
              action: "Build to launch",
              duration: "4 months",
            },
            {
              imageSrc: "/assets/img/phone_mockup.svg",
              title:
                "A new era of education at the Dutch Creative Technology Academy",
              client: "Reducations",
              description: "Used tools",
              tools: ["Figma", "React", "Dart", "Flutter"],
              duration: "8 months",
            },
            {
              imageSrc: "/assets/img/phone_mockup.svg",
              title:
                "A new era of education at the Dutch Creative Technology Academy",
              client: "Reducations",
              description: "Used tools",
              tools: ["Figma", "React", "Dart", "Flutter"],
              duration: "8 months",
            },
            {
              imageSrc: "/assets/img/phone_mockup.svg",
              title:
                "A new era of education at the Dutch Creative Technology Academy",
              client: "Reducations",
              description: "Used tools",
              tools: ["Figma", "React", "Dart", "Flutter"],
              duration: "8 months",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] w-[250px] sm:w-[300px] md:w-[350px] h-[450px] rounded-xl overflow-hidden relative flex-shrink-0"
            >
              <div className="h-[250px] sm:h-[300px] md:h-[350px] relative">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex mb-5 items-end justify-center">
                  <div className="bg-[#262626] p-4 sm:p-6 w-[200px] sm:w-[350px] md:w-[280px] h-[150px] sm:h-[200px] rounded-md">
                    <div className="my-2 text-xs sm:text-sm text-[#A3A3A3]">
                      {project.description}
                    </div>
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm ">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-[#353535] px-2 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-xs sm:text-sm text-[#A3A3A3]">
                      {project.action}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-white font-bold text-md sm:text-lg">
                        {project.duration}
                      </span>
                      <div className="px-2 py-1 bg-[#3AFFA3] rounded-md">
                        <a href="#" className="text-black text-xs sm:text-sm">
                          Show case &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2">
                <div className="my-2 text-white text-sm sm:text-md font-semibold">
                  {project.title}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">
                  {project.client}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-2 z-10 p-2 bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <FaArrowRight className="text-white h-6 w-6" />
        </button>
      </div>
    </Container>
  );
};

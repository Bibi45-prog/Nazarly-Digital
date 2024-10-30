"use client";

import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  const services = [
    {
      title: "Multi-page website",
      description:
        "To provide information about the company, its products or services. Applications from advertising and top 10 in search for all services.",
      term: "Term 15-20 days",
      uniqueDesign: "Unique design and layout on React",
      seoPromotion: "SEO promotion to the top 10 search results",
      buttonColor: "bg-white",
      textColor: "text-gray-900",
      imageSrc: "/assets/img/laptop.svg",
      bgColor: "bg-[#1F1F1F]",
    },
    {
      title: "Landing on Tilda",
      description:
        "If a large of request from advertising campaigns or social networks is required for a certain service.",
      term: "Term 5-6 days",
      uniqueDesign: "Unique design on ZeroBlock",
      seoPromotion: "SEO promotion 1-2 requests",
      buttonColor: "bg-green-300",
      textColor: "text-gray-900",
      imageSrc: "/assets/img/laptop.svg",
      bgColor: "bg-custom-gradient",
    },
    {
      title: "Service, store, PR",
      description:
        "Development of complex projects with UX prototypes, research, own CMS/CRM systems, including work with backend and databases.",
      term: "Term 30-45 days",
      uniqueDesign: "SEO promotion 1-2 requests",
      seoPromotion: "Unique design development on PERN stack",
      buttonColor: "bg-white",
      textColor: "text-gray-900",
      imageSrc: "/assets/img/laptop.svg",
      bgColor: "bg-[#1F1F1F]",
    },
  ];

  return (
    <div className="relative items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans),var(--font-joystix) ] bg-[#0D0D0D] text-white ">
      {/* Section 1 */}
      <div
        className="flex flex-col items-center justify-center text-center h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/frame.svg')" }}
      >
        <h1 className="text-center text-[46px] sm:text-[64px] md:text-[86px] font-bold">
          Turning ideas into
          <span className="block text-[#3AFFA3]">digital reality</span>
        </h1>
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl mx-4 md:mx-0">
          "Empowering your vision with cutting-edge technology, we bring your
          ideas to life <br /> and help you stand out in an increasingly digital
          world."
        </p>

        <button
          className="bg-[#3AFFA3] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full my-8 sm:my-10 hover:bg-[#2EC47E]"
          style={{
            boxShadow: "inset 0px -4px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          Leave a request 
        </button>
      </div>

      {/* Section 2 */}

      <div className="relative">
        <div className="text-5xl md:text-md mt-10 font-bold mb-12 text-start">
          <h1>Why do entrepreneurs choose us?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {["Marketing", "Deadlines", "3+ years"].map((title, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] p-8 rounded-lg relative h-[400px] flex flex-col justify-between"
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

        <div className="bg-[#1F1F1F] p-4 sm:p-6 lg:p-8 mt-2 rounded-lg h-auto min-h-[222px]">
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
      </div>

      {/* Section 3 */}
      <div>
        <div className="text-5xl md:text-md  font-bold mb-8 md:mb-12 text-start mt-10 md:mt-10">
          <h1>Latest Projects</h1>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-2 z-10 p-2 bg-[#222222] rounded-full hover:bg-[#222222] hover:opacity-[40%]"
          >
            <FaArrowLeft className="text-white h-6 w-6" />
          </button>
          <div
            ref={carouselRef}
            className="flex overflow-hidden gap-4 md:gap-8 px-4 scrollbar-hide"
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
                className="bg-[#1F1F1F] w-[250px] sm:w-[300px] md:w-[350px] h-[450px] rounded-lg overflow-hidden relative flex-shrink-0"
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
      </div>

      {/* Section 4 */}

      <div
        className="relative flex flex-col justify-center items-center h-[80vh] sm:h-[20vh] md:h-[50vh] bg-contain bg-center bg-no-repeat my-20"
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

      {/* Section 5 */}
      <div className="py-12">
  <h2 className="text-5xl font-bold text-start text-white mb-10">
    Cost of website a specific task
  </h2>
  <div className="flex flex-col md:flex-row justify-center gap-6 max-w-7xl mx-auto px-4">
    {services.map((service, index) => (
      <div
        key={index}
        className={`${service.bgColor} text-white rounded-lg p-6 flex flex-col items-center w-full md:w-1/3`}
      >
        <img
          src={service.imageSrc}
          alt={service.title}
          className="w-3/4 mb-6"
        />
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-[#D4D4D4] text-center mb-6">
          {service.description}
        </p>
        <button
          className={`${service.buttonColor} ${service.textColor} font-semibold py-2 px-4 rounded-full mb-6 w-[320px]`}
        >
          ORDER
        </button>
        <ul className="space-y-2 text-[#D4D4D4]">
          <li className="flex items-center">
            <span className="mr-2">
              <FontAwesomeIcon icon={faCheckCircle} />
            </span> 
            {service.term}
          </li>
          <li className="flex items-center">
            <span className="mr-2">
              <FontAwesomeIcon icon={faCheckCircle} />
            </span> 
            {service.uniqueDesign}
          </li>
          <li className="flex items-center">
            <span className="mr-2">
              <FontAwesomeIcon icon={faCheckCircle} />
            </span> 
            {service.seoPromotion}
          </li>
        </ul>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

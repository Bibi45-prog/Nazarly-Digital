import { Container } from "@/shared/ui/Container";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Costs = () => {
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
    <Container className="mb-6">
      <h2 className="text-[56px] font-bold mb-12">
        Cost of website a specific task
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
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
    </Container>
  );
};

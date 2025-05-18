"use client";
import React, { useState } from "react";

const Accordion = () => {
  // State to track which accordion is open (null means all closed)
  const [openAccordion, setOpenAccordion] = useState(null);

  // Data for accordions
  const accordionData = [
    {
      id: 1,
      title: "Mutualized Services",
      content:
        "Access lead generation, CRM, quoting tools, and billing — all ready for you",
    },
    {
      id: 2,
      title: "Keep Your Independence",
      content:
        "You choose your projects and clients, while benefiting from a shared ecosystem.",
      },
      {
        id: 3,
        title: "Grow With Us",
        content:
          "A portion of revenue is reinvested to support the community — profits are shared annually.",
      },
      {
        id: 4,
        title: "Pan-African Network",
        content:
          "Collaborate with experienced consultants across multiple countries and sectors.",
      },
      {
        id: 5,
        title: "Backed by a Brand",
        content:
          "Operate under a trusted name with a powerful story and impactful results."
      },

  ];

  // Toggle function for accordion
  const toggleAccordion = (id: any) => {
    if (openAccordion === id) {
      // If clicking on already open accordion, close it
      setOpenAccordion(null);
    } else {
      // Otherwise open the clicked accordion (closing any other)
      setOpenAccordion(id);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-4 py-20">
      <h2 className="text-[40px] font-nexa font-bold mb-6 text-center text-black">
        Why Choose Us
      </h2>

      {accordionData.map((accordion) => (
        <div
          key={accordion.id}
          className="border border-gray-300 rounded-2xl overflow-hidden mb-4 text-black shadow-sm"
        >
          <button
            className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
              openAccordion === accordion.id ? "bg-[#F4FBFA]" : ""
            }`}
            onClick={() => toggleAccordion(accordion.id)}
          >
            <span className="font-medium">{accordion.title}</span>
            <span className="transform transition-transform duration-300">
              {openAccordion === accordion.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#2BB19C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </span>
          </button>

          {/* Content area that shows/hides */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openAccordion === accordion.id
                ? "max-h-96 opacity-100 bg-[#F4FBFA]  font-light"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 ">{accordion.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

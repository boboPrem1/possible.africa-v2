"use client";
import React, { useState } from "react";

const Accordion = () => {
  // State to track which accordion is open (null means all closed)
  const [openAccordion, setOpenAccordion] = useState(null);

  // Data for accordions
  const accordionData = [
    {
      id: 1,
      title: "What services do you offer?",
      content:
        "We offer a comprehensive range of services including consulting, development, strategy, and implementation. Our team specializes in helping businesses transform their operations through innovative solutions tailored to their specific needs and challenges.",
    },
    {
      id: 2,
      title: "How does your pricing work?",
      content:
        "Our pricing is structured to provide maximum value while remaining transparent and flexible. We offer different tiers of service packages as well as custom solutions based on the scope and requirements of your project. Contact us for a personalized quote tailored to your specific needs.",
    },
    {
      id: 3,
      title: "What is your approach to projects?",
      content:
        "We follow a collaborative and iterative approach to all our projects. After an initial consultation to understand your needs, we develop a strategic plan, implement solutions with regular check-ins, and provide ongoing support and optimization. Our focus is on delivering measurable results that align with your business objectives.",
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

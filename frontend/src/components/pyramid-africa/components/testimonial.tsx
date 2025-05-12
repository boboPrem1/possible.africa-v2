"use client";
import React from "react";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [1, 2, 3, 4]; // Replace with real data

// @ts-ignore
import Arrow from "../../../assets/consulting/Arrow.svg";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = 3;
  const totalCards = testimonials.length;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, totalCards - visibleCards));
  };



  return (
    <section className="bg-[#F1F8F7] py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">
        {/* Left Section */}
        <div className="w-full md:w-auto flex flex-col justify-between items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black mb-6">
            Our <br className="hidden md:block" />
            Customers <br className="hidden md:block" />
            Speak
          </h2>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className={`w-10 h-10 border-2 border-[#2BB19C] rounded-full text-[#2BB19C] flex items-center justify-center hover:bg-[#2BB19C] hover:text-white transition ${
                startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={startIndex === 0}
            >
              <img src={Arrow} alt="Previous" className="rotate-180 w-4" />
            </button>
            <button
              onClick={handleNext}
              className={`w-10 h-10 border-2 border-[#2BB19C] rounded-full text-[#2BB19C] flex items-center justify-center hover:bg-[#2BB19C] hover:text-white transition ${
                startIndex >= totalCards - visibleCards
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={startIndex >= totalCards - visibleCards}
            >
              <img src={Arrow} alt="Next" className="w-4" />
            </button>
          </div>
        </div>

        {/* Sliding Cards */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(startIndex * 100) / visibleCards}%)`,
              width: `${(totalCards * 100) / visibleCards}%`,
            }}
          >
            {testimonials.map((_, i) => (
              <div key={i} className=" w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2">
                <TestimonialCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

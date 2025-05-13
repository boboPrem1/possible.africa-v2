"use client";
import React from "react";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

// @ts-ignore
import Arrow from "../../../assets/consulting/Arrow.svg";
// @ts-ignore
import peopleImg from "../../../assets/consulting/people-img.png";
// @ts-ignore
import egbeyemiImg from "../../../assets/consulting/egbeyemi.jpeg";
// @ts-ignore
import leachImg from "../../../assets/consulting/leach.jpeg";
// @ts-ignore
import nervoImg from "../../../assets/consulting/nervo.jpeg";
// @ts-ignore
import cisse from "../../../assets/consulting/cisse.jpeg";
// @ts-ignore
import hodara from "../../../assets/consulting/hodara.jpeg";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Helped us navigate complex regulations and identify high-value partners to accelerate our African expansion.",
      imageSrc: egbeyemiImg,
      name: "Demi Egbeyemi",
      headline: "Expansion at Dlocal",
      linkedIn: "https://www.linkedin.com/in/demiegbeyemi/"
    },
    {
      quote: "A strategic force in managing our business pipeline and building strong relationships with insurers and corporate clients.",
      imageSrc: leachImg,
      name: "Jeremy Leach",
      headline: "Executive Director at Inclusivity Solutions",
      linkedIn: "https://www.linkedin.com/in/jeremysfleach/"
    },
    {
      quote: "Supported the growth of our African footprint by generating new revenue streams and onboarding key clients efficiently.",
      imageSrc: nervoImg,
      name: "Bruno Nervo",
      headline: "VP Sales at Prepaynation",
      linkedIn: "https://www.linkedin.com/in/brunonervo/"
    },
    {
      quote: "Instrumental in launching new countries, enriching our service portfolio, and reinforcing local partner engagement from end to end.",
      imageSrc: cisse,
      name: "Omar Cisse",
      headline: "CEO at Intouch",
      linkedIn: "https://www.linkedin.com/in/omarcisse29/"
    },
    {
      quote: "A sharp understanding of African markets that helped us uncover new services and grow brand visibility across the continent.",
      imageSrc: hodara,
      name: "Julien Hodara",
      headline: "CEO at Libon",
      linkedIn: "https://www.linkedin.com/in/jhodara/"
    }
  ];

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
            <div className="w-full sm:w-1/2 lg:w-fit shrink-0 px-2">
              <TestimonialCard
                quote={testimonials[0].quote}
                imageSrc={testimonials[0].imageSrc}
                name={testimonials[0].name}
                headline={testimonials[0].headline}
              />
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-fit shrink-0 px-2">
              <TestimonialCard
                quote={testimonials[1].quote}
                imageSrc={testimonials[1].imageSrc}
                name={testimonials[1].name}
                headline={testimonials[1].headline}
              />
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-fit shrink-0 px-2">
              <TestimonialCard
                quote={testimonials[2].quote}
                imageSrc={testimonials[2].imageSrc}
                name={testimonials[2].name}
                headline={testimonials[2].headline}
              />
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-fit shrink-0 px-2">
              <TestimonialCard
                quote={testimonials[3].quote}
                imageSrc={testimonials[3].imageSrc}
                name={testimonials[3].name}
                headline={testimonials[3].headline}
              />
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-fit shrink-0 px-2">
              <TestimonialCard
                quote={testimonials[4].quote}
                imageSrc={testimonials[4].imageSrc}
                name={testimonials[4].name}
                headline={testimonials[4].headline}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

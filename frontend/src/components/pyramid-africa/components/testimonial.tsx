"use client";
import React from "react";
import { useState, useEffect } from "react";
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
  const [visibleCards, setVisibleCards] = useState(3);
  const totalCards = testimonials.length;

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) { // mobile
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) { // tablet
        setVisibleCards(2);
      } else { // desktop
        setVisibleCards(3);
      }
    };

    // Set initial value
    updateVisibleCards();

    // Update on resize
    window.addEventListener('resize', updateVisibleCards);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Handle edge case when resizing window
  useEffect(() => {
    if (startIndex > totalCards - visibleCards) {
      setStartIndex(Math.max(0, totalCards - visibleCards));
    }
  }, [visibleCards, totalCards, startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, totalCards - visibleCards));
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex >= totalCards - visibleCards;

  return (
    <section className="bg-[#F1F8F7] py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">
        {/* Left Section */}
        <div className="w-full md:w-auto flex flex-col justify-between items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black mb-6">
          Client <br className="hidden md:block" />
          Success <br className="hidden md:block" />
          Stories
          </h2>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className={`w-10 h-10 border-2 border-[#2BB19C] rounded-full text-[#2BB19C] flex items-center justify-center hover:bg-[#2BB19C] hover:text-white transition ${
                isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isPrevDisabled}
            >
              <img src={Arrow} alt="Previous" className="rotate-180 w-4" />
            </button>
            <button
              onClick={handleNext}
              className={`w-10 h-10 border-2 border-[#2BB19C] rounded-full text-[#2BB19C] flex items-center justify-center hover:bg-[#2BB19C] hover:text-white transition ${
                isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isNextDisabled}
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
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-fit shrink-0 sm:px-2">
                <TestimonialCard
                  quote={testimonial.quote}
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  headline={testimonial.headline}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
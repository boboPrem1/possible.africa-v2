"use client";
import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="py-16 px-4 sm:px-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center gap-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] text-center font-bold text-black">
          Our Consulting Services
        </h1>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Card 1 */}
          <div className="bg-[#F4FBFA] flex-1 flex flex-col gap-4 justify-center items-center rounded-lg px-4 pt-6 pb-8 text-center">
            <h1 className="text-xl sm:text-2xl text-black font-bold">
              Go-to-Market
            </h1>
            <h2 className="text-base sm:text-lg text-black font-light">
              Launch with confidence with data-driven strategies and local
              insights.
            </h2>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F4FBFA] flex-1 flex flex-col gap-4 justify-center items-center rounded-lg px-4 pt-6 pb-8 text-center">
            <h1 className="text-xl sm:text-2xl text-black font-bold">
              Biz Dev
            </h1>
            <h2 className="text-base sm:text-lg text-black font-light">
              Launch with confidence with data-driven strategies and local
              insights.
            </h2>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F4FBFA] flex-1 flex flex-col gap-4 justify-center items-center rounded-lg px-4 pt-6 pb-8 text-center">
            <h1 className="text-xl sm:text-2xl text-black font-bold">
              Local implementation
            </h1>
            <h2 className="text-base sm:text-lg text-black font-light">
              Launch with confidence with data-driven strategies and local
              insights.
            </h2>
          </div>
        </div>

        <Link to="/consulting/contact" className="px-8 py-3 sm:px-10 sm:py-4 bg-[#2BB19C] rounded-full text-white text-lg sm:text-xl lg:text-2xl font-bold">
          Work with us
        </Link>
      </div>
    </div>
  );
};

export default Services;

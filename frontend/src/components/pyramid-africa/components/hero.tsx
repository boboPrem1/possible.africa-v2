"use client";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#F4FBFA] py-20 md:py-28 flex justify-center px-4 sm:px-6">
      <div className="max-w-[943px] flex flex-col justify-center items-center gap-10 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#111B21] to-[#2BB19C]">
          Unlocking the potential of digital Companies in Africa
        </h1>

        <p className="text-[#242827] font-light text-base sm:text-lg lg:text-xl max-w-[914px]">
          Expand in Africa, a leader in Africa's advisory services,
          combines its experience, business communities and digital solutions to
          support its clients in all phases of their African expansion, from
          strategy to implementation.
        </p>

        <Link to="/consulting/contact" className="px-8 py-3 sm:px-10 sm:py-4 bg-[#2BB19C] rounded-full text-white text-lg sm:text-xl lg:text-2xl font-bold cursor-pointer">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Hero;

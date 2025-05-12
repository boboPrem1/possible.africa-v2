"use client";
import React from "react";
import { Link } from "react-router-dom";
const CTA = () => {

  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="flex mx-auto justify-center bg-[#124B42] max-w-7xl rounded-xl items-center py-14 px-6 sm:px-10">
        <div className="max-w-4xl w-full gap-10 flex flex-col justify-center items-center text-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-3xl sm:text-4xl font-bold leading-snug">
              Become a Consultant
            </h1>
            <p className="text-white font-light text-base sm:text-lg">
              Expand in Africa, a reference in Africa's consulting industry,
              combines its experience, business communities and digital
              solutions to support its clients in all phases of their African
              expansion, from strategy to implementation.
            </p>
          </div>
          <Link
            to="/consulting/consultant"
            className="px-8 py-3 sm:px-10 sm:py-4 border border-white text-white rounded-full text-lg sm:text-xl lg:text-2xl font-bold cursor-pointer"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;

"use client";
import React from "react";

// @ts-ignore
import logo from "../../../assets/consulting/logo.svg";
// @ts-ignore
import fb from "../../../assets/consulting/fb.svg";
// @ts-ignore
import linkedin from "../../../assets/consulting/linkedin.svg";
// @ts-ignore
import twitter from "../../../assets/consulting/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#F4FBFA] grid grid-cols-5 w-full px-4 sm:px-[52px] py-10">
        <div className="col-span-2 flex flex-col gap-8 max-w-[400px] mb-8 sm:mb-0 w-full">
          <img className="w-28" src={logo} alt="" />
          <p className="text-[#242827] font-normal ">
            Pyramid.Africa is your ultimate sales intelligence platform, helping
            businesses across Africa connect, grow, and thrive.
          </p>
          <div className="flex gap-6">
            {/* <img className="w-6" src={fb} alt="" /> */}
            <Link to="https://www.linkedin.com/company/possibleafrica" target="_blank" > <img className="w-6" src={linkedin} alt="" /> </Link>
            {/* <img className="w-6" src={twitter} alt="" /> */}
          </div>
        </div>

        {/* Second container */}
        <div className=" col-span-3 grid grid-cols-4 gap-6 w-full">
          {/* Quick Links */}
          <div className="flex flex-col gap-6 w-full sm:w-auto">
            <h3 className="text-[#242827] font-medium">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#242827] font-light">Consulting</h4>
              <h4 className="text-[#242827] font-light">New tracking</h4>
              <h4 className="text-[#242827] font-light">Lead generation</h4>
              <h4 className="text-[#242827] font-light">CRM</h4>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="flex flex-col gap-6 w-full sm:w-auto">
            <h3 className="text-[#242827] font-medium">Ecosystem</h3>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#242827] font-light">Yprlink</h4>
              <h4 className="text-[#242827] font-light">
                Africa Tech Industry
              </h4>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6 w-full sm:w-auto col-span-2">
            <h3 className="text-[#242827] font-medium">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#242827] font-light">
                Senegal | Ivory Coast | Nigeria | South Africa | Morocco | Egypt
              </h4>
              <h4 className="text-[#242827] font-light">
                support@expandinafrica.africa
              </h4>
              <h4 className="text-[#242827] font-light">+123-456-7890</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[52px] bg-[#F4FBFA]">
        <hr className="h-0.5 bg-gray-300" />
      </div>

      <div className="flex justify-between px-[52px] pt-8 pb-10 bg-[#F4FBFA] flex-wrap">
        <p className="text-black font-light w-full sm:w-auto text-center sm:text-left">
          © {new Date().getFullYear()} Expand in Africa. All rights reserved.
        </p>
        <div className="flex gap-4 text-black font-light w-full sm:w-auto justify-center sm:justify-end">
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

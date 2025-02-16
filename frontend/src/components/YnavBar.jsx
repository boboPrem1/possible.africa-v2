import React from "react";
import { useState } from "react";
import yperLinkLogo from "../assets/yperlink-logo.svg";

const YnavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed lg:static bg-white shadow-md lg:shadow-none z-50 w-full top-0">
      <nav className="flex items-center w-[90%] mx-auto text-sm justify-between flex-wrap px-6 py-4">
        {/* <div className="flex flex-row items-start text-white lg:mr-72"></div> */}
        {/* <div className=" w-[50%] h-auto"> */}
        <img
          src={yperLinkLogo}
          className="mr-2 w-[50%] max-w-[50%] md:w-[25%] h-auto" // Add responsive classes
          alt="Logo"
        />
        {/* </div> */}
        <div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-4 w-4 ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-4 w-4 ${
                  isOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div
            className={`fixed left-5 bg-white shadow-lg rounded-md lg:shadow-none p-4 w-[65%] lg:static block flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-sm lg:text-base lg:flex-grow">
              <a
                href="#participate"
                className="block mt-4 active:text-blue-500 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Pourquoi participer
              </a>
              <a
                href="#apply"
                className="block mt-4 active:text-blue-500 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Recompense
              </a>
              <a
                href="#eligibiltyCriteria"
                className="block mt-4 active:text-blue-500 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Critères d’éligibilité
              </a>
              <a
                href="#register"
                className="block mt-4 active:text-blue-500 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Candidature
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default YnavBar;

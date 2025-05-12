"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/consulting/logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-10 py-4 md:py-6 flex items-center justify-between relative">
      {/* Logo */}
      <a href="/consulting">
        <img src={logo} alt="Logo" className="h-8 md:h-10 lg:h-16" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-10 text-primary-gray text-lg items-center font-light">
        <a href="">Advisory</a>
        <a href="https://possible.africa/news" target="_blank">News tracking</a>
        <a href="https://possible.africa/database" target="_blank">Lead generation</a>
        <a href="https://pyramid.possible.africa" target="_blank">CRM</a>
        <div className="relative group">
          <button 
            className="flex items-center gap-1 text-primary-gray text-lg font-light focus:outline-none"
            onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
          >
            Ecosystem
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <a href="https://yprlink.africa" target="_blank" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">yprlink.africa</a>
            <a href="https://www.africantechindustry.com/african-tech-industry" target="_blank" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">African Tech Industry</a>
          </div>
        </div>
      </nav>

      {/* Connexion Button */}
      <Link to="https://pyramid.possible.africa/auth/login" target="_blank" className="hidden lg:block px-8 py-3 bg-[#2BB19C] rounded-full text-white text-lg font-bold">
        Connexion
      </Link>

      {/* Hamburger Icon */}
      <button
        className="lg:hidden text-3xl text-[#2BB19C]"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start gap-4 p-6 z-50">
          <a href="" className="text-gray-700 text-base">
            Advisory
          </a>
          <a href="https://possible.africa/news" target="_blank" className="text-gray-700 text-base">
            News tracking
          </a>
          <a href="https://possible.africa/database" target="_blank" className="text-gray-700 text-base">
            Lead generation
          </a>
          <a href="https://pyramid.possible.africa" target="_blank" className="text-gray-700 text-base">
            CRM
          </a>
          <div className="w-full">
            <button 
              onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
              className="flex items-center justify-between w-full text-gray-700 text-base"
            >
              Ecosystem
              <svg className={`w-4 h-4 transition-transform ${isEcosystemOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isEcosystemOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <a href="https://yprlink.africa" target="_blank" className="text-gray-700 text-base">
                  yprlink.africa
                </a>
                <a href="https://www.africantechindustry.com/african-tech-industry" target="_blank" className="text-gray-700 text-base">
                  African Tech Industry
                </a>
              </div>
            )}
          </div>
          <Link to="https://pyramid.possible.africa/auth/login" target="_blank" className="mt-4 w-full px-6 py-3 bg-[#2BB19C] text-white rounded-full text-base font-semibold">
            Connexion
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

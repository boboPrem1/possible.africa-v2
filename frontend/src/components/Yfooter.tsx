import React from "react";
import yperLinkLogo from "../assets/yperlink-logo.svg";
import lamPossibleicon from "../assets/lam-africapossible.png";

const Yfooter = () => {
  return (
    <div className="">
      <footer className="bg-white py-4">
        <div className="flex flex-col md:flex-row items-center pb-4 justify-between w-[80%] mx-auto">
          <div className="flex items-center lg:flex-col justify-end items-end space-x-4">
            <img
              src={yperLinkLogo}
              width={288}
              height={73}
              alt="yperlink logo"
              className="w-[50%] h-auto"
            />
            <span className="text-gray-600">
              Yperlink.com - Startup Challenge Africa
            </span>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img
              src={lamPossibleicon}
              width={318}
              height={107}
              alt="possible africa logo"
              className="h-auta w-[50%] mx-auto"
            />
          </div>
        </div>
        <div className="border-b-2 border-gray-200"></div>
        <div className="flex flex-col lg:justify-between md:justify-center flex-wrap overflow-x-scroll md:flex-row items-center justify-between w-[80%] mx-auto mt-4">
          <div className="flex space-x-2 text-gray-600">
            <a href="#" className="hover:underline">
              Pourquoi participer
            </a>
            <a href="#" className="hover:underline">
              Recompense
            </a>
            <a href="#" className="hover:underline">
              Critères d'éligibilité
            </a>
            <a href="#" className="hover:underline">
              Candidature
            </a>
          </div>
          <div className="text-gray-600 mt-4 md:mt-0">
            © 2025, Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Yfooter;

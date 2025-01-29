import React from "react";
import lamPossibleicon from "../assets/lam-africapossible.png";
import Hero from "../assets/hero.png";

const Yheader = () => {
  return (
    <div className="flex text-sm md:text-base lg:text-lg flex-col md:flex-row w-[90%] mx-auto items-center justify-center">
      <div className="md:w-[75%] lg:w-[50%]">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#3030F9]">
          Startup Challenge Africa
        </h1>
        <p className="py-6">  
          Propulsé par{" "}
          <a
            className="text-[#2BB19C]"
            href="https://lafricamobile.com/fr/"
            target="blank"
          >
            Lafricamobile
          </a>{" "}
          et{" "}
          <a
            className="text-[#2BB19C]"
            href="https://possible.africa/"
            target="blank"
          >
            Possible.africa
          </a>
          , avec le soutien de{" "}
          <a className="text-[#2BB19C]" href="https://h-7.eu/" target="blank">
            H7
          </a>{" "}
          , yprlink est un concours qui offre aux startups africaines
          l’opportunité de bénéficier d’un accompagnement et de présenter leur
          projet à Lyon lors de l’événement Zero To One.
        </p>
        <button className="px-4 py-2 lg:text-lg bg-[#3030F9] text-white rounded-lg">
          <a href="#register">Soumettre ma candidature</a>
        </button>
        <h2 className="text-md lg:text-lg py-6 text-center md:text-start font-medium text-[#3030F9]">
          Candidature ouverte jusqu’au 10 mars 2025
        </h2>
        <div className="flex flex-row items-center md:justify-end justify-center">
          <img
            src={lamPossibleicon}
            width={246}
            height={85}
            className="w-[30%]"
            alt="Africa Mobile X Possible Africa"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <img src={Hero} width={412} height={420} alt="YperLink challenge" />
      </div>
    </div>
  );
};

export default Yheader;

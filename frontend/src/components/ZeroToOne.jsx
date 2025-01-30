import React from "react";
import zeroToOne from "../assets/zero-to-one.png";
import h7 from "../assets/h7.png";
import info from "../assets/info.png";
const ZeroToOne = () => {
  return (
    <section className="bg-black text-white py-10 px-5">
      <h2 className="text-lg md:text-3xl text-center font-bold pb-6">
        A Propos de zero to one
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-between">
        {/* Texte principal à gauche */}
        <div>
          <div className="flex items-center gap-6 mb-4">
            <img
              src={zeroToOne}
              width={187}
              height={148}
              className="md:w-[40%] max-w-[40%] h-auto"
              alt="zero to one"
            />
            <img
              src={h7}
              width={187}
              height={148}
              className="md:w-[40%] h-auto"
              alt="h7"
            />
          </div>
          <p className="text-base md:text-lg uppercase tracking-wide mb-4">
            L’événement start-up à Lyon
          </p>
          <p className="text-lg md:text-lg font-medium mb-4">22 Mai 2025</p>
          <p className="text-base md:text-xl leading-relaxed mb-6">
            UNE JOURNÉE POUR S’INSPIRER DES TALENTS DES PLUS BELLES START-UP
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Fondateurs, fondatrices, ces femmes et hommes aux parcours
            inspirants vous racontent leur passage de 0 à 1. Découvrez leurs
            histoires et leur capacité à remettre en question l’existant pour
            créer de la valeur économique et sociétale.
          </p>
        </div>

        {/* Liste des chiffres à droite */}
        <div className="flex md:justify-end">
          <div className="grid gap-4">
            <div className="text-6xl font-bold">
              1200<span className="ml-2 text-xl font-normal">Participants</span>
            </div>
            <div className="text-6xl font-bold">
              1M
              <span className="ml-2 text-xl font-normal">
                De personnes touchées
              </span>
            </div>
            <div className="text-6xl font-bold">
              30<span className="ml-2 text-xl font-normal">Speakers</span>
            </div>
            <div className="text-6xl font-bold">
              20<span className="ml-2 text-xl font-normal">Conférences</span>
            </div>
            <div className="text-6xl font-bold">
              10
              <span className="ml-2 text-xl font-normal">Heures de lives</span>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <div>
                <img src={info} width={48} height={48} alt="info image" />
              </div>
              <div className="text-lg font-normal">
                Plus d’infos : <a href="https://www.h-7.eu">www.h-7.eu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroToOne;

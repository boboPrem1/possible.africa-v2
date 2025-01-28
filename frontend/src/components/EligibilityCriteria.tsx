import React from "react";

const EligibilityCriteria = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="font-bold text-center text-gray-800 mb-12">
          Critères d’éligibilité
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="relative flex flex-col items-center text-center md:w-1/4 mb-12 md:mb-0">
            <div className="bg-yellow-500 text-white font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full mb-4">
              01
            </div>
            <p className="text-gray-700">
              Siège social en France ou en Afrique
            </p>
          </div>

          <div className="relative flex flex-col items-center text-center md:w-1/4 mb-12 md:mb-0">
            <div className="bg-yellow-500 text-white font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full mb-4">
              02
            </div>
            <p className="text-gray-700">
              Modèle économique à fort potentiel s’appuyant sur une offre
              technologique innovante
            </p>
          </div>

          <div className="relative flex flex-col items-center text-center md:w-1/4 mb-12 md:mb-0">
            <div className="bg-yellow-500 text-white font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full mb-4">
              03
            </div>
            <p className="text-gray-700">
              Produit ou service déjà opérationnel (minimum viable product -
              MVP) avec un minimum de traction existante
            </p>
          </div>

          <div className="relative flex flex-col items-center text-center md:w-1/4">
            <div className="bg-yellow-500 text-white font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full mb-4">
              04
            </div>
            <p className="text-gray-700">
              Équipe dirigeante mature, capable de porter l’ambition de
              l’entreprise
            </p>
          </div>
        </div>

        <div className="absolute w-full h-px bg-dotted-line top-[50%] left-0"></div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;

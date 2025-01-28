import React from "react";

const Participate = () => {
  return (
    <div className="bg-white">
      <div className="rounded-lg w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-between items-center mx-auto py-10 lg:py-20">
        <div className="lg:w-[40%]">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 lg:py-6 text-center">
            Pourquoi participer au Startup Challenge Africa 2025 ?
          </h2>
          <div className="pt-4 text-sm md:text-base hidden lg:block text-center">
            <button className="bg-[#3030F9] text-white py-2 px-4 rounded">
              Soumettre ma candidature
            </button>
          </div>
        </div>
        <div className="lg:w-[60%]">
          <p className="text-base md:text-md lg:text-lg">
            <span className="text-[#3030F9] font-bold mr-1">
              10 startups sélectionnées
            </span>
            bénéficieront d’un programme intensif en ligne comprenant 4 modules
            de formation par nos experts
          </p>
          <ul className="list-disc list-inside text-sm md:text-base lg:text-md my-4">
            <li>Accélérer la croissance</li>
            <li>Sécuriser les financements</li>
            <li>Optimiser sa structure</li>
            <li>Développement produit</li>
          </ul>
          <p className="lg:text-lg">
            Parmi elles,{" "}
            <span className="text-[#3030F9] font-bold">3 finalistes</span>{" "}
            seront invités à Lyon (France) le{" "}
            <span className="text-[#3030F9] font-bold">
              22 Mars pour participer au Zero To One,
            </span>{" "}
            avec frais de voyage et d’hébergement pris en charge et
            bénéficieront d’une visibilité médiatique et d’opportunités de
            réseautage avec des investisseurs et leaders.
          </p>
          <div className="pt-4 flex flex-col text-sm lg:hidden md:text-base items-center">
            <button className="bg-[#3030F9] text-white py-2 px-4 rounded">
              Soumettre ma candidature
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;

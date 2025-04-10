import React from "react";

const Participate = () => {
  return (
    <div id="participate" className="bg-white">
      <div className="rounded-lg w-[90%] lg:w-[80%] flex flex-col gap-4 lg:flex-row justify-between items-center mx-auto py-10 lg:py-20">
        <div className="lg:w-[40%]">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 lg:py-6 text-center">
            Pourquoi participer au challenge yperlink ?
          </h2>
          <div className="pt-4 text-sm md:text-base hidden lg:block text-center">
            <button className="bg-[#3030F9] text-white py-2 px-4 rounded">
              <a href="#register">Soumettre ma candidature</a>
            </button>
          </div>
        </div>
        <div className="lg:w-[60%]">
          <p className="text-base md:text-md lg:text-lg">
            <span className="text-[#3030F9] font-bold mr-1">
              10 startups sélectionnées
            </span>
            bénéficieront d’un programme de Venture Building avec nos experts
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
              22 Mai pour participer au Zero To One,
            </span>{" "}
            avec frais de voyage et d’hébergement pris en charge. Ils
            bénéficieront également d’un accompagnement venture building avec
            Possible.Africa et d’un accompagnement technologique de
            LAfricaMobile.
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

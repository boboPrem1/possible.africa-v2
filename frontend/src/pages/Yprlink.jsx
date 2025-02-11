import React from "react";
import { useState } from "react";
import axios from "axios";
import h7 from "../assets/h-7.png";
import yperLinkLogo from "../assets/logo_hyperlink.png";
import lamPossibleicon from "../assets/lam-africapossible.png";
import Hero from "../assets/hero.png";
import info from "../assets/info.png";
import YperLinkEligibilityCriteria from "../assets/YperLinkEligibilityCriteria.png";

const Yprlink = () => {
  return (
    <div className="font-nexaRegular">
      <div>
        <YnavBar />
        <div className="py-10 mt-16 lg:mt-0 bg-gray-100">
          <Yheader />
        </div>
        <div className="bg-white">
          <Participate />
        </div>
        <div>
          <Apply />
        </div>
        {/* <EligibilityCriteria /> */}
        <RegistrationForm />
        <div>
          <Timeline />
        </div>
        <div>
          <ZeroToOne />
        </div>
        <Yfooter />
      </div>
    </div>
  );
};

export default Yprlink;

const Participate = () => {
  return (
    <div id="participate" className="bg-white">
      <div className="rounded-lg w-[90%] lg:w-[73%] flex flex-col gap-4 lg:flex-row justify-between lg:items-start items-center mx-auto py-10 lg:py-20">
        <div className="lg:w-[50%]">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 lg:pb-6 md:text-start text-center">
            Pourquoi participer à yperlink ?
          </h2>
          <div className="pt-4 text-sm md:text-base hidden lg:block md:text-start text-center">
            <button className="bg-[#3030F9] text-white py-2 px-4 rounded">
              <a href="#register">Je candidate</a>
            </button>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <p className="text-base md:text-md lg:text-lg">
            <span className="text-[#3030F9] font-bold mr-1">10 startups</span>
            sélectionnées bénéficieront d'un programme d'accompagnement autour
            de 4 piliers:
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
            bénéficieront également d'une visibilité médiatique, d’un
            accompagnement entrepreneurial et technologique  personnalisé avec
            Possible.Africa, LAfricamobile & H7
          </p>
          <div className="pt-4 flex flex-col text-sm lg:hidden md:text-base items-center">
            <button className="bg-[#3030F9] text-white py-2 px-4 rounded">
              Je candidate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Yheader = () => {
  return (
    <div className="flex text-sm md:text-base lg:text-lg flex-col md:flex-row w-[90%] mx-auto items-center justify-center">
      <div className="md:w-[75%] lg:w-[50%]">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-[#3030F9]">
          Challenge Tech Africa
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
          l’opportunité de bénéficier d’un accompagnement et de pitcher leur
          projet devant des investisseurs et des partenaires potentiels lors de
          zero to one, l'événement start-up à Lyon.
        </p>
        <button className="px-4 py-2 lg:text-lg bg-[#3030F9] text-white rounded-lg">
          <a href="#register">Je candidate</a>
        </button>
        <h2 className="text-md lg:text-xl lg:mt-8 pt-6 text-center md:text-start font-medium text-[#3030F9]">
          Candidature ouverte jusqu’au 10 mars 2025
        </h2>
      </div>
      <div className="hidden md:block">
        <img
          src={Hero}
          width={412}
          height={420}
          alt="YperLink challenge"
          className="-mb-10"
        />
      </div>
    </div>
  );
};

const YnavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed lg:sticky bg-white shadow-md lg:shadow-none z-50 w-full top-0">
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

const Apply = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div id="apply" className="w-[73%] mx-auto">
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-center text-gray-900 mb-10">
          Récompense
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
          {/* Voyage */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-start">
            <div className="mb-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="12" fill="#242827" />
                <g clipPath="url(#clip0_2009_143)">
                  <path
                    d="M27.2138 26.2171C26.3315 27.2228 25.2572 28.0457 24.0481 28.6422V32.0708C24.0481 32.3739 23.9276 32.6646 23.7133 32.8789C23.499 33.0932 23.2083 33.2137 22.9052 33.2137H16.0481C15.745 33.2137 15.4543 33.0932 15.2399 32.8789C15.0256 32.6646 14.9052 32.3739 14.9052 32.0708V28.6422C12.4968 27.4401 10.6557 25.3418 9.77684 22.7976C8.89799 20.2534 9.05147 17.4661 10.2044 15.0338C11.3572 12.6015 13.4177 10.718 15.9434 9.7876C18.4692 8.85717 21.2591 8.95392 23.7143 10.0571M14.9052 38.8571H24.0481"
                    stroke="#FFBE00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.9029 16.9919C24.1006 16.8525 24.1006 15.7005 24.9029 15.5611C26.3229 15.3127 27.637 14.6476 28.6781 13.6505C29.7193 12.6533 30.4403 11.3691 30.7497 9.96108L30.7977 9.73708C30.9714 8.94394 32.1006 8.93937 32.2811 9.73023L32.3406 9.98851C32.6598 11.3911 33.3868 12.6679 34.4301 13.6583C35.4733 14.6486 36.7862 15.3083 38.2034 15.5542C39.0103 15.6959 39.0103 16.8525 38.2034 16.9942C36.7866 17.2406 35.4742 17.9004 34.4314 18.8908C33.3886 19.8811 32.662 21.1577 32.3429 22.5599L32.2834 22.8182C32.1029 23.6091 30.9737 23.6045 30.8 22.8114L30.7543 22.5897C30.4446 21.181 29.7228 19.8963 28.6808 18.8991C27.6389 17.9019 26.3237 17.2395 24.9029 16.9919Z"
                    stroke="#FFBE00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2009_143">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(8 8)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-gray-600 text-sm md:text-base lg:text-md">
              Accès gratuit aux APIs de Lafricamobile et accompagnement
              personnalisé en co-développement produit pour booster vos
              capacités technologique pendant 6 mois
            </p>
          </div>
          {/* Formation */}
          <div className="bg-white rounded-2xl shadow-lg md:text-base p-6 flex flex-col items-start text-start">
            <div className="text-4xl mb-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="12" fill="#242827" />
                <path
                  d="M21.9333 28.6667C22.4666 29.2 23.1555 29.4614 24 29.4507C24.8444 29.44 25.4666 29.1343 25.8666 28.5334L33.3333 17.3334L22.1333 24.8C21.5333 25.2 21.2168 25.8112 21.184 26.6334C21.1511 27.4556 21.4008 28.1334 21.9333 28.6667ZM24 13.3334C25.3111 13.3334 26.5724 13.5165 27.784 13.8827C28.9955 14.2489 30.1342 14.7992 31.2 15.5334L28.6666 17.1334C27.9333 16.7556 27.1724 16.4725 26.384 16.284C25.5955 16.0956 24.8008 16.0009 24 16C21.0444 16 18.5275 17.0392 16.4493 19.1174C14.3711 21.1956 13.3324 23.712 13.3333 26.6667C13.3333 27.6 13.4613 28.5223 13.7173 29.4334C13.9733 30.3445 14.3342 31.2 14.8 32H33.2C33.7111 31.1556 34.0835 30.2778 34.3173 29.3667C34.5511 28.4556 34.6675 27.5112 34.6666 26.5334C34.6666 25.7334 34.572 24.9556 34.3826 24.2C34.1933 23.4445 33.9102 22.7112 33.5333 22L35.1333 19.4667C35.8 20.5112 36.328 21.6223 36.7173 22.8C37.1066 23.9778 37.312 25.2 37.3333 26.4667C37.3546 27.7334 37.2102 28.9445 36.9 30.1C36.5897 31.2556 36.1342 32.3556 35.5333 33.4C35.2888 33.8 34.9555 34.1112 34.5333 34.3334C34.1111 34.5556 33.6666 34.6667 33.2 34.6667H14.8C14.3333 34.6667 13.8888 34.5556 13.4666 34.3334C13.0444 34.1112 12.7111 33.8 12.4666 33.4C11.8888 32.4 11.4444 31.3392 11.1333 30.2174C10.8222 29.0956 10.6666 27.912 10.6666 26.6667C10.6666 24.8223 11.0168 23.0947 11.7173 21.484C12.4177 19.8734 13.3733 18.4623 14.584 17.2507C15.7946 16.0392 17.2111 15.0836 18.8333 14.384C20.4555 13.6845 22.1777 13.3343 24 13.3334Z"
                  fill="#FFBE00"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-sm md:text-base lg:text-md">
              Venture Building par possible.africa : Accélérez la structuration
              de votre projet, optimisez votre modèle d’affaires, améliorez
              votre visbilité et préparez-vous à lever des fonds efficacement.
            </p>
          </div>
          {/* Réseautage */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-start">
            <div className="text-4xl mb-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="12" fill="#242827" />
                <path
                  d="M20 14C15.3387 15.6013 12 19.9226 12 25.0013C12 26.6106 12.3347 28.144 12.9413 29.5373M28 14C32.6613 15.6013 36 19.9226 36 25.0013C36 26.3653 35.76 27.6733 35.3173 28.8893M30 35.1066C28.1675 36.134 26.1009 36.6713 24 36.6666C21.8991 36.6713 19.8325 36.134 18 35.1066M28 14.6666C28 15.7275 27.5786 16.7449 26.8284 17.4951C26.0783 18.2452 25.0609 18.6666 24 18.6666C22.9391 18.6666 21.9217 18.2452 21.1716 17.4951C20.4214 16.7449 20 15.7275 20 14.6666C20 13.6058 20.4214 12.5883 21.1716 11.8382C21.9217 11.0881 22.9391 10.6666 24 10.6666C25.0609 10.6666 26.0783 11.0881 26.8284 11.8382C27.5786 12.5883 28 13.6058 28 14.6666Z"
                  stroke="#FFBE00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6667 37.3333C16.8759 37.3333 18.6667 35.5424 18.6667 33.3333C18.6667 31.1241 16.8759 29.3333 14.6667 29.3333C12.4576 29.3333 10.6667 31.1241 10.6667 33.3333C10.6667 35.5424 12.4576 37.3333 14.6667 37.3333Z"
                  stroke="#FFBE00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.3335 37.3333C35.5426 37.3333 37.3335 35.5424 37.3335 33.3333C37.3335 31.1241 35.5426 29.3333 33.3335 29.3333C31.1244 29.3333 29.3335 31.1241 29.3335 33.3333C29.3335 35.5424 31.1244 37.3333 33.3335 37.3333Z"
                  stroke="#FFBE00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-sm md:text-base lg:text-md">
              Participation exclusive à l’événement Zero To One avec une
              opportunité unique de pitcher devant des investisseurs en
              capital-risque de renom et accès privilégié au réseau de H7
              (hébergement pris en charge pour les finalistes à Lyon).
            </p>
          </div>
          {/* Co-developement */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-start">
            <div className="text-4xl mb-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="12" fill="#242827" />
                <path
                  d="M25.3334 22.6666L32 15.9999M33.3334 17.3333L30.6667 14.6666L34 12.6666L35.3334 13.9999L33.3334 17.3333ZM13.3667 19.9666C12.7266 19.327 12.2862 18.5151 12.0992 17.6298C11.9121 16.7444 11.9866 15.8238 12.3134 14.98L14.2094 16.876H16.876V14.2093L14.98 12.3133C15.8239 11.9857 16.7449 11.9107 17.6306 12.0973C18.5164 12.2839 19.3288 12.7241 19.9688 13.3643C20.6088 14.0044 21.0489 14.8169 21.2353 15.7027C21.4217 16.5886 21.3464 17.5095 21.0187 18.3533L29.6454 26.9813C30.4892 26.6536 31.4101 26.5783 32.2959 26.7647C33.1817 26.9511 33.9942 27.3912 34.6344 28.0312C35.2746 28.6712 35.7148 29.4836 35.9014 30.3694C36.088 31.2551 36.0129 32.1761 35.6854 33.02L33.7907 31.124H31.124V33.7906L33.02 35.6866C32.1764 36.0142 31.2557 36.0893 30.37 35.9029C29.4844 35.7165 28.6721 35.2767 28.032 34.6369C27.3919 33.997 26.9517 33.1849 26.7649 32.2994C26.5781 31.4138 26.6529 30.4931 26.98 29.6493L18.3507 21.02C17.5072 21.3462 16.5871 21.4203 15.7023 21.2333C14.8175 21.0463 14.0061 20.6062 13.3667 19.9666Z"
                  stroke="#FFBE00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.2707 27.3332L16.7987 34.8052C16.6315 34.9728 16.4329 35.1056 16.2143 35.1963C15.9957 35.287 15.7613 35.3337 15.5247 35.3337C15.288 35.3337 15.0537 35.287 14.8351 35.1963C14.6164 35.1056 14.4179 34.9728 14.2507 34.8052L13.1947 33.7492C13.0272 33.5821 12.8943 33.3835 12.8036 33.1649C12.7129 32.9463 12.6663 32.7119 12.6663 32.4752C12.6663 32.2386 12.7129 32.0042 12.8036 31.7856C12.8943 31.567 13.0272 31.3684 13.1947 31.2012L20.6667 23.7292"
                  stroke="#FFBE00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-sm md:text-base lg:text-md">
              Accès gratuit à plus de 150 outils professionnels (AWS, HubSpot,
              et bien d’autres) pour soutenir votre croissance rapide.
            </p>
          </div>
          {/* 150 outils */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-start">
            <div className="text-4xl mb-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="12" fill="#242827" />
                <path
                  d="M16.9767 10.2726C16.8404 10.2726 15.9457 12.6665 15.8355 12.7466C15.7253 12.8266 13.1721 12.9378 13.13 13.0674C13.0878 13.197 15.0881 14.7876 15.1302 14.9171C15.1723 15.0467 14.489 17.5093 14.5992 17.5894C14.7095 17.6695 16.8405 16.2587 16.9767 16.2587C17.1128 16.2587 19.2439 17.6695 19.3541 17.5893C19.4643 17.5093 18.781 15.0467 18.8231 14.9171C18.8652 14.7876 20.8654 13.197 20.8233 13.0674C20.7813 12.9378 18.228 12.8266 18.1177 12.7466C18.0075 12.6666 17.1129 10.2726 16.9767 10.2726ZM31.0233 10.2726C30.887 10.2726 29.9924 12.6665 29.8822 12.7466C29.7719 12.8266 27.2187 12.9378 27.1766 13.0674C27.1345 13.197 29.1347 14.7876 29.1768 14.9171C29.219 15.0467 28.5356 17.5093 28.6458 17.5894C28.7561 17.6695 30.8871 16.2587 31.0233 16.2587C31.1595 16.2587 33.2905 17.6695 33.4008 17.5893C33.5109 17.5093 32.8277 15.0467 32.8697 14.9171C32.9118 14.7876 34.912 13.197 34.87 13.0674C34.8279 12.9378 32.2746 12.8266 32.1643 12.7466C32.0542 12.6666 31.1595 10.2726 31.0233 10.2726ZM24 10.4927C23.555 10.4927 20.6322 18.3129 20.2722 18.5745C19.9122 18.836 11.5715 19.1992 11.4339 19.6225C11.2963 20.0457 17.8307 25.242 17.9683 25.6652C18.1058 26.0885 15.8737 34.1331 16.2337 34.3946C16.5937 34.6562 23.555 30.0475 24 30.0475C24.445 30.0475 31.4062 34.6563 31.7662 34.3946C32.1262 34.133 29.8942 26.0884 30.0317 25.6652C30.1692 25.242 36.7035 20.0457 36.566 19.6225C36.4285 19.1992 28.0878 18.836 27.7278 18.5745C27.3678 18.3129 24.445 10.4927 24 10.4927ZM12.8733 23.1939C12.737 23.1939 11.8423 25.5878 11.7322 25.6679C11.622 25.7479 9.06866 25.8591 9.02653 25.9886C8.98447 26.1182 10.9848 27.7088 11.027 27.8384C11.0691 27.968 10.3857 30.4306 10.496 30.5106C10.6062 30.5907 12.737 29.18 12.8733 29.18C13.0095 29.18 15.1405 30.5907 15.2507 30.5106C15.3609 30.4306 14.6776 27.968 14.7197 27.8384C14.7618 27.7088 16.7622 26.1182 16.72 25.9886C16.6779 25.8591 14.1247 25.748 14.0145 25.6679C13.9043 25.5878 13.0095 23.1939 12.8733 23.1939ZM35.1267 23.1939C34.9904 23.1939 34.0957 25.5878 33.9854 25.6679C33.8752 25.7479 31.322 25.8591 31.2799 25.9886C31.2378 26.1182 33.2382 27.7088 33.2802 27.8384C33.3223 27.968 32.639 30.4306 32.7492 30.5106C32.8595 30.5907 34.9905 29.18 35.1267 29.18C35.263 29.18 37.3938 30.5907 37.504 30.5106C37.6142 30.4306 36.9308 27.968 36.973 27.8384C37.0151 27.7088 39.0155 26.1182 38.9733 25.9886C38.9312 25.8591 36.378 25.748 36.2678 25.6679C36.1576 25.5878 35.2629 23.1939 35.1267 23.1939ZM24 31.1208C23.8637 31.1208 22.9691 33.5146 22.8588 33.5948C22.7487 33.6748 20.1954 33.786 20.1533 33.9155C20.1112 34.0451 22.1114 35.6358 22.1535 35.7654C22.1957 35.895 21.5123 38.3576 21.6225 38.4376C21.7328 38.5177 23.8638 37.1068 24 37.1068C24.1362 37.1068 26.2672 38.5177 26.3775 38.4376C26.4876 38.3576 25.8043 35.895 25.8464 35.7654C25.8885 35.6358 27.8887 34.0451 27.8467 33.9155C27.8045 33.786 25.2513 33.6748 25.141 33.5948C25.0308 33.5146 24.1362 31.1208 24 31.1208Z"
                  fill="#FFBE00"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-sm md:text-base lg:text-md">
              Réseautage stratégique avec des investisseurs, des mentors
              expérimentés et des leaders d’industrie pour multiplier vos
              opportunités.
            </p>
          </div>
          {/* Visibilité */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-start">
            <div className="text-4xl mb-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="12" fill="#242827" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.6667 10.6666C20.8986 10.6666 19.2029 11.369 17.9527 12.6192C16.7025 13.8695 16.0001 15.5652 16.0001 17.3333C16.0001 19.1014 16.7025 20.7971 17.9527 22.0473C19.2029 23.2976 20.8986 24 22.6667 24C24.4349 24 26.1305 23.2976 27.3808 22.0473C28.631 20.7971 29.3334 19.1014 29.3334 17.3333C29.3334 15.5652 28.631 13.8695 27.3808 12.6192C26.1305 11.369 24.4349 10.6666 22.6667 10.6666ZM18.6667 17.3333C18.6667 16.808 18.7702 16.2879 18.9712 15.8026C19.1722 15.3173 19.4669 14.8763 19.8383 14.5049C20.2098 14.1334 20.6507 13.8388 21.136 13.6378C21.6213 13.4368 22.1415 13.3333 22.6667 13.3333C23.192 13.3333 23.7122 13.4368 24.1975 13.6378C24.6828 13.8388 25.1237 14.1334 25.4952 14.5049C25.8666 14.8763 26.1612 15.3173 26.3623 15.8026C26.5633 16.2879 26.6667 16.808 26.6667 17.3333C26.6667 18.3942 26.2453 19.4116 25.4952 20.1617C24.745 20.9119 23.7276 21.3333 22.6667 21.3333C21.6059 21.3333 20.5885 20.9119 19.8383 20.1617C19.0882 19.4116 18.6667 18.3942 18.6667 17.3333ZM21.7827 28.028C22.1357 28.0055 22.4652 27.8438 22.6989 27.5783C22.9325 27.3129 23.0512 26.9655 23.0287 26.6126C23.0063 26.2597 22.8446 25.9302 22.5791 25.6965C22.3137 25.4628 21.9663 25.3442 21.6134 25.3666C18.6667 25.5533 16.0201 26.5106 14.0787 27.784C13.1081 28.4213 12.2814 29.1586 11.6841 29.9573C11.0934 30.7426 10.6667 31.6733 10.6667 32.6666C10.6667 34.7133 12.3707 35.7946 13.9934 36.3506C15.7001 36.936 17.9801 37.2013 20.4361 37.2933C20.7841 37.2979 21.12 37.1662 21.3723 36.9265C21.6245 36.6867 21.773 36.3578 21.786 36.0101C21.7991 35.6623 21.6757 35.3233 21.4421 35.0653C21.2086 34.8073 20.8834 34.6508 20.5361 34.6293C18.1481 34.5386 16.1854 34.2826 14.8587 33.8293C13.6161 33.4026 13.3787 32.9826 13.3401 32.7493L13.3334 32.6666C13.3334 32.4426 13.4387 32.0613 13.8174 31.5546C14.1894 31.0586 14.7667 30.5226 15.5414 30.0133C17.0894 28.9986 19.2921 28.1866 21.7827 28.028ZM30.6667 26.52C32.5414 26.52 34.1761 27.3626 35.3201 28.3733C35.8743 28.8561 36.3498 29.4225 36.7294 30.052C37.0654 30.6213 37.3334 31.3053 37.3334 32.0013C37.3334 32.6986 37.0667 33.3813 36.7294 33.9506C36.3499 34.5805 35.8744 35.1474 35.3201 35.6306C34.1761 36.64 32.5414 37.484 30.6667 37.484C28.7921 37.484 27.1574 36.64 26.0134 35.6306C25.4591 35.1474 24.9836 34.5805 24.6041 33.9506C24.2667 33.38 24.0001 32.696 24.0001 32C24.0001 31.304 24.2667 30.62 24.6041 30.0506C24.9836 29.4207 25.4591 28.8539 26.0134 28.3706C27.1574 27.3613 28.7921 26.5173 30.6667 26.5173V26.52ZM30.6667 29.1866C29.5961 29.1866 28.5641 29.6773 27.7774 30.372C27.4338 30.6691 27.1383 31.0177 26.9014 31.4053C26.814 31.5468 26.7446 31.6986 26.6947 31.8573L26.6681 31.9733V32.0293L26.6947 32.1453C26.7254 32.248 26.7854 32.3986 26.9014 32.5986C27.0934 32.9226 27.3894 33.288 27.7774 33.6306C28.5641 34.324 29.5961 34.8173 30.6667 34.8173C31.7374 34.8173 32.7694 34.324 33.5561 33.6306C33.8997 33.3335 34.1952 32.9849 34.4321 32.5973C34.5481 32.4 34.6081 32.248 34.6387 32.1453L34.6654 32.0293L34.6667 32L34.6561 31.9226C34.6083 31.7389 34.5328 31.5636 34.4321 31.4026C34.1951 31.0155 33.8996 30.6674 33.5561 30.3706C32.7694 29.6773 31.7374 29.184 30.6667 29.184V29.1866ZM30.7827 30.6733C30.686 30.8427 30.6476 31.0392 30.6735 31.2325C30.6994 31.4259 30.7882 31.6053 30.9261 31.7432C31.0641 31.8812 31.2435 31.9699 31.4369 31.9958C31.6302 32.0218 31.8267 31.9834 31.9961 31.8866L32.0001 32.0013C32.0001 32.27 31.919 32.5324 31.7674 32.7542C31.6157 32.9759 31.4006 33.1467 31.1502 33.2442C30.8999 33.3416 30.6259 33.3611 30.3642 33.3001C30.1026 33.2392 29.8654 33.1006 29.6839 32.9025C29.5023 32.7045 29.3848 32.4562 29.3468 32.1902C29.3088 31.9243 29.352 31.653 29.4708 31.4121C29.5896 31.1711 29.7784 30.9716 30.0125 30.8398C30.2466 30.7079 30.5151 30.6499 30.7827 30.6733Z"
                  fill="#FFBE00"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-sm md:text-base lg:text-md">
              Visibilité médiatique et opportunités de développement de marché.
            </p>
          </div>
          {/* Impact amplifiée */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="12" fill="#242827" />
                <path
                  d="M16.9767 10.2726C16.8404 10.2726 15.9457 12.6665 15.8355 12.7466C15.7253 12.8266 13.1721 12.9378 13.13 13.0674C13.0878 13.197 15.0881 14.7876 15.1302 14.9171C15.1723 15.0467 14.489 17.5093 14.5992 17.5894C14.7095 17.6695 16.8405 16.2587 16.9767 16.2587C17.1128 16.2587 19.2439 17.6695 19.3541 17.5893C19.4643 17.5093 18.781 15.0467 18.8231 14.9171C18.8652 14.7876 20.8654 13.197 20.8233 13.0674C20.7813 12.9378 18.228 12.8266 18.1177 12.7466C18.0075 12.6666 17.1129 10.2726 16.9767 10.2726ZM31.0233 10.2726C30.887 10.2726 29.9924 12.6665 29.8822 12.7466C29.7719 12.8266 27.2187 12.9378 27.1766 13.0674C27.1345 13.197 29.1347 14.7876 29.1768 14.9171C29.219 15.0467 28.5356 17.5093 28.6458 17.5894C28.7561 17.6695 30.8871 16.2587 31.0233 16.2587C31.1595 16.2587 33.2905 17.6695 33.4008 17.5893C33.5109 17.5093 32.8277 15.0467 32.8697 14.9171C32.9118 14.7876 34.912 13.197 34.87 13.0674C34.8279 12.9378 32.2746 12.8266 32.1643 12.7466C32.0542 12.6666 31.1595 10.2726 31.0233 10.2726ZM24 10.4927C23.555 10.4927 20.6322 18.3129 20.2722 18.5745C19.9122 18.836 11.5715 19.1992 11.4339 19.6225C11.2963 20.0457 17.8307 25.242 17.9683 25.6652C18.1058 26.0885 15.8737 34.1331 16.2337 34.3946C16.5937 34.6562 23.555 30.0475 24 30.0475C24.445 30.0475 31.4062 34.6563 31.7662 34.3946C32.1262 34.133 29.8942 26.0884 30.0317 25.6652C30.1692 25.242 36.7035 20.0457 36.566 19.6225C36.4285 19.1992 28.0878 18.836 27.7278 18.5745C27.3678 18.3129 24.445 10.4927 24 10.4927ZM12.8733 23.1939C12.737 23.1939 11.8423 25.5878 11.7322 25.6679C11.622 25.7479 9.06866 25.8591 9.02653 25.9886C8.98447 26.1182 10.9848 27.7088 11.027 27.8384C11.0691 27.968 10.3857 30.4306 10.496 30.5106C10.6062 30.5907 12.737 29.18 12.8733 29.18C13.0095 29.18 15.1405 30.5907 15.2507 30.5106C15.3609 30.4306 14.6776 27.968 14.7197 27.8384C14.7618 27.7088 16.7622 26.1182 16.72 25.9886C16.6779 25.8591 14.1247 25.748 14.0145 25.6679C13.9043 25.5878 13.0095 23.1939 12.8733 23.1939ZM35.1267 23.1939C34.9904 23.1939 34.0957 25.5878 33.9854 25.6679C33.8752 25.7479 31.322 25.8591 31.2799 25.9886C31.2378 26.1182 33.2382 27.7088 33.2802 27.8384C33.3223 27.968 32.639 30.4306 32.7492 30.5106C32.8595 30.5907 34.9905 29.18 35.1267 29.18C35.263 29.18 37.3938 30.5907 37.504 30.5106C37.6142 30.4306 36.9308 27.968 36.973 27.8384C37.0151 27.7088 39.0155 26.1182 38.9733 25.9886C38.9312 25.8591 36.378 25.748 36.2678 25.6679C36.1576 25.5878 35.2629 23.1939 35.1267 23.1939ZM24 31.1208C23.8637 31.1208 22.9691 33.5146 22.8588 33.5948C22.7487 33.6748 20.1954 33.786 20.1533 33.9155C20.1112 34.0451 22.1114 35.6358 22.1535 35.7654C22.1957 35.895 21.5123 38.3576 21.6225 38.4376C21.7328 38.5177 23.8638 37.1068 24 37.1068C24.1362 37.1068 26.2672 38.5177 26.3775 38.4376C26.4876 38.3576 25.8043 35.895 25.8464 35.7654C25.8885 35.6358 27.8887 34.0451 27.8467 33.9155C27.8045 33.786 25.2513 33.6748 25.141 33.5948C25.0308 33.5146 24.1362 31.1208 24 31.1208Z"
                  fill="#FFBE00"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-sm md:text-base lg:text-md">
              Visibilité médiatique ciblée pour renforcer votre notoriété
            </p>
          </div> */}
        </div>
      </div>
      <section
        id="eligibiltyCriteria"
        className="relative pt-16 w-[90%] mx-auto min-h-screen overflow-hidden"
      >
        {/* <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-12 overflow-hidden">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
            Critères d’éligibilité
          </h2>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="#3030F9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1 12"
                  />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-4 gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#FFBE00] border-2 border-[#FFBE00] rounded-full shadow">
                    <span className="text-xl font-semibold text-[#3030F9]">
                      01
                    </span>
                  </div>
                  <p className="mt-3 sm:mt-4 text-base">
                    Siège social en France ou en Afrique. 
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#FFBE00] border-2 border-[#FFBE00] rounded-full shadow">
                    <span className="text-xl font-semibold text-[#3030F9]">
                      02
                    </span>
                  </div>
                  <p className="mt-3 sm:mt-4 text-base">
                    Modèle économique à fort potentiel s’appuyant sur une offre
                    technologique innovante
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#FFBE00] border-2 border-[#FFBE00] rounded-full shadow">
                    <span className="text-xl font-semibold text-[#3030F9]">
                      03
                    </span>
                  </div>
                  <p className="mt-3 sm:mt-4 text-base">
                    Produit ou service déjà opérationnel (minimum viable product
                    - MVP) avec un minimum de traction existante{" "}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#FFBE00] border-2 border-[#FFBE00] rounded-full shadow">
                    <span className="text-xl font-semibold text-[#3030F9]">
                      04
                    </span>
                  </div>
                  <p className="mt-3 sm:mt-4 text-base">
                    Equipe dirigeante mature, capable de porter l’ambition de
                    l’entreprise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          {/* Section 1: Header */}
          <div className="w-[90%] mx-auto px-4 pt-12">
            <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
              Critères d’éligibilité
            </h2>
            {/* Content */}
            <div className="flex flex-col mt-16 lg:flex-row">
              {/* Left Section: Image */}
              <div className="w-full lg:w-1/2 lg:flex hidden justify-center md:mr-6 mb-8 md:mb-0">
                <img
                  src={YperLinkEligibilityCriteria}
                  alt="YperLink Eligibility Criteria"
                  width={543}
                  height={521}
                  className="rounded-lg"
                />
              </div>
              {/* Right Section: Steps */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex flex-col items-start">
                  {/* Step 1 */}
                  <div className="flex items-start mb-7 relative">
                    <div className="flex flex-col lg:pb-20 items-center">
                      <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                        1
                      </div>
                      <div className="md:h-32 h-36 w-[3px] bg-black absolute left-5 top-8"></div>
                    </div>
                    <div className="ml-6">
                      <p className="text-gray-600 text-sm md:text-md xl:text-lg">
                        Siège social en France ou en Afrique.
                      </p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex items-start mb-7 lg:pb-20 relative">
                    <div className="flex flex-col items-center">
                      <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                        2
                      </div>
                      <div className="md:h-32 h-44 w-[3px] bg-black absolute left-5 top-8"></div>
                    </div>
                    <div className="ml-6">
                      <p className="text-gray-600 text-sm md:text-md xl:text-lg">
                        Modèle économique à fort potentiel s’appuyant sur une
                        offre technologique innovante
                      </p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex items-start mb-7 lg:pb-20 relative">
                    <div className="flex flex-col items-center">
                      <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                        3
                      </div>
                      <div className="md:h-28 h-28 lg:h-36 w-[3px] bg-black absolute left-5 top-8"></div>
                    </div>
                    <div className="ml-6">
                      <p className="text-gray-600 text-sm md:text-md xl:text-lg">
                        Produit ou service déjà opérationnel (minimum viable
                        product - MVP) avec un minimum de traction existante
                      </p>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="flex items-start mb-7 lg:pb-20 relative">
                    <div className="flex flex-col items-center">
                      <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                        4
                      </div>
                      <div className="h-20 sm:h-10 lg:h-32 w-[3px] bg-black absolute left-5 top-8"></div>
                    </div>
                    <div className="ml-6">
                      <p className="text-gray-600 text-sm md:text-md xl:text-lg">
                        Equipe dirigeante mature, capable de porter l’ambition
                        de l’entreprise
                      </p>
                    </div>
                  </div>
                  {/* Step 5 */}
                  <div className="flex items-start mb-7">
                    <div className="flex flex-col items-center">
                      <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                        5
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="text-gray-600 text-sm md:text-md xl:text-lg">
                        Votre entreprise développe une innovation technologique
                        qui vise à réduire les inégalités d’accès aux services
                        financiers, à la connectivité, aux services en ligne, à
                        l’information, et à l’accessibilité pour le secteur
                        informel ou en zone rural en Afrique.
                      </p>
                    </div>
                  </div>

                  {/* Repeat for Step 3, 4, 5 */}
                </div>
              </div>
            </div>
            {/* Call to Action */}
            {/* <div className="flex justify-center mt-12">
              <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg">
                Discover Our Database
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    "Nom complet": "",
    "Adresse e-mail": "",
    fld8KB8rJvFpjGNuG: "",
    "Numéro de téléphone (WhatsApp)": "",
    fldUGHfKImEzVCSYb: "",
    "Site Web ou lien vers le pitch deck": "",
    Solution: "",
    Description: "",
    Voix: false,
    SMS: false,
    USSD: false,
    Whatsapp: false,
    "Speech-to-Text (STT)": false,
    "Text-to-Speech (TTS)": false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    if (type === "checkbox") {
      let solution = Array.isArray(updatedFormData.Solution)
        ? updatedFormData.Solution
        : [];
      if (checked) {
        if (!solution.includes(name)) {
          solution.push(name);
        }
      } else {
        solution = solution.filter((item) => item !== name);
      }
      updatedFormData.Solution = solution;
    }

    // Remove all checkbox fields from the formData
    Object.keys(updatedFormData).forEach((key) => {
      if (typeof updatedFormData[key] === "boolean") {
        delete updatedFormData[key];
      }
    });

    setFormData(updatedFormData);
  };

  const showToast = (message, type) => {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("opacity-100");
    type === "success"
      ? toast.classList.add("bg-green-500")
      : toast.classList.add("bg-red-500");
    setTimeout(() => {
      toast.classList.remove("opacity-100");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
    const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
    const tableId = import.meta.env.VITE_AIRTABLE_TABLE_ID;
    const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

    try {
      const response = await axios.post(
        url,
        {
          fields: formData,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data submitted successfully:", response.data);
      showToast("Data submitted successfully!", "success");
    } catch (error) {
      console.error("Error submitting data:", error.message);
      showToast("Error submitting data!");
    }
  };

  return (
    <div>
      <div
        id="toast"
        className="fixed top-20 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded shadow-lg opacity-0 transition-opacity duration-300"
      >
        <span id="desc"></span>
      </div>
      <form
        id="register"
        onSubmit={handleSubmit}
        className=" md:w-[80%] lg:w-[60%] mx-auto p-4 bg-white rounded-lg"
      >
        <h2 className="text-2xl md:text-2xl lg:text-4xl lg:py-10 text-center font-semibold mb-4">
          Inscrivez-vous dès maintenant pour accélérer votre start-up
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:text-base lg:text-lg gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Nom complet</label>
            <input
              type="text"
              name="Nom complet"
              value={formData["Nom complet"]}
              onChange={handleChange}
              className="mt-1 p-2 rounded-xl w-full border border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Nom de l'entreprise</label>
            <input
              type="text"
              name="fld8KB8rJvFpjGNuG"
              value={formData["fld8KB8rJvFpjGNuG"]}
              onChange={handleChange}
              className="mt-1 p-2 rounded-xl w-full border border-gray-300"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:text-base lg:text-lg gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Adresse e-mail</label>
            <input
              type="email"
              name="Adresse e-mail"
              value={formData["A²dresse e-mail"]}
              onChange={handleChange}
              className="mt-1 p-2 rounded-xl w-full border border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Téléphone (WhatsApp)</label>
            <input
              type="text"
              name="Numéro de téléphone (WhatsApp)"
              value={formData["Numéro de téléphone (WhatsApp)"]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:text-base lg:text-lg gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Secteur d'activité</label>
            <input
              type="text"
              name="fldUGHfKImEzVCSYb"
              value={formData["fldUGHfKImEzVCSYb"]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Site Web</label>
            <input
              type="url"
              name="Site Web ou lien vers le pitch deck"
              value={formData["Site Web ou lien vers le pitch deck"]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4 lg:text-lg">
          <label className="block text-gray-700 mb-2">
            La solution intègre-t-elle :
          </label>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="Voix"
                checked={formData["Voix"]}
                onChange={handleChange}
                className="mr-2"
              />
              Voix
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="SMS"
                checked={formData["SMS"]}
                onChange={handleChange}
                className="mr-2"
              />
              SMS
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="USSD"
                checked={formData["USSD"]}
                onChange={handleChange}
                className="mr-2"
              />
              USSD
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="Whatsapp"
                checked={formData["Whatsapp"]}
                onChange={handleChange}
                className="mr-2"
              />
              WhatsApp
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="Speech-to-Text (STT)"
                checked={formData["Speech-to-Text (STT)"]}
                onChange={handleChange}
                className="mr-2"
              />
              Speech-to-Text (STT)
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="Text-to-Speech (TTS)"
                checked={formData["Text-to-Speech (TTS)"]}
                onChange={handleChange}
                className="mr-2"
              />
              Text-to-Speech (TTS)
            </label>
          </div>
        </div>

        <div className="mb-4 md:text-base lg:text-lg">
          <label className="block text-gray-700">
            Description du startup (500 caractères max)
          </label>
          <textarea
            name="Description"
            value={formData["Description"]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            maxLength="500"
            rows={6}
            required
          />
        </div>
        <div className="w-full mx-auto lg:py-6">
          <button
            type="submit"
            className="w-full lg:justify-center bg-[#3030F9] text-white md:text-base lg:text-lg py-2 px-4 rounded-xl hover:bg-blue-600"
          >
            Valider ma candidature
          </button>
        </div>
      </form>
    </div>
  );
};
const ZeroToOne = () => {
  return (
    <section className="bg-black text-white py-8 md:py-16 px-5">
      <h2 className="text-lg md:text-3xl text-center font-bold pb-4 md:pb-10">
        A Propos de zero to one
      </h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row lg:items-start lg:justify-between">
        {/* Texte principal à gauche */}
        <div>
          <p className="text-base md:text-lg uppercase tracking-wide mb-4">
            L’événement start-up à Lyon
          </p>
          <p className="text-lg md:text-lg font-medium mb-4">22 Mai 2025</p>
          <p className="text-base md:text-xl w-[90%] leading-relaxed mb-6">
            UNE JOURNÉE POUR S’INSPIRER DES TALENTS DES PLUS BELLES START-UP
          </p>
        </div>

        {/* Liste des chiffres à droite */}
        <div className="lg:w-1/2 w-full">
          <p className="text-base md:text-xl leading-relaxed">
            Fondateurs, fondatrices, ces femmes et hommes aux parcours
            inspirants vous racontent leur passage de 0 à 1. Découvrez leurs
            histoires et leur capacité à remettre en question l’existant pour
            créer de la valeur économique et sociétale.
          </p>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const events = [
    {
      title: "Fin appel à candidature",
      date: "10/03/25",
      bgColor: "bg-sky-400", // Bleu ciel
    },
    {
      title: "Annonce des finalistes",
      date: "15/04/25",
      bgColor: "bg-yellow-400", // Jaune
    },
    {
      title: "Semaine Venture Building",
      date: "01/05/25",
      bgColor: "bg-teal-400", // Vert
    },
    {
      title: "Participation à zéro to one",
      date: "22/05/25",
      bgColor: "bg-blue-700", // Bleu foncé
    },
  ];

  return (
    <div className="bg-gray-100 py-10 md:py-14">
      <div className="w-[80%] sm:w-[90%] mx-auto">
        <h4 className="font-bold text-2xl text-center">
          Chronologie des dates
        </h4>
        <div className="lg:w-[70%] w-[60%] sm:w-[60%] mx-auto sm:gap-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center mt-6">
            {events.map((event, index) => (
              <div className="text-sm md:text-base" key={index}>
                <p className="text-start w-3/4 text-black font-medium">
                  {event.title}
                </p>
                <div
                  className={`text-white font-bold text-center px-1 py-2 lg:py-4 lg:px-6 rounded-lg mt-2 ${event.bgColor}`}
                >
                  {event.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-row items-center md:justify-end justify-center">
          <img
            src={lamPossibleicon}
            width={246}
            height={85}
            className=""
            alt="Africa Mobile X Possible Africa"
          />
        </div> */}
      </div>
    </div>
  );
};

const Yfooter = () => {
  return (
    <div>
      <footer className="bg-white py-4">
        <div className="flex flex-col md:flex-row items-center pb-4 w-[90%] md:w-[73%] mx-auto">
          <div className="flex items-center w-fit lg:w-1/2 lg:flex-col justify-end space-x-4">
            <img
              src={yperLinkLogo}
              width={288}
              height={73}
              alt="yperlink logo"
              className="w-2/4"
            />
            <span className="text-gray-600 text-sm">
              Yperlink.com - Challenge Tech Africa
            </span>
          </div>
          <div className="flex items-center space-x-4 mt-4 justify-center md:mt-0">
            <img
              src={lamPossibleicon}
              width={318}
              height={107}
              alt="possible africa logo"
              className="lg:w-full w-1/2"
            />
            <img
              src={h7}
              width={88}
              height={84}
              alt="possible africa logo"
              className="lg:w-full w-1/6"
            />
          </div>
        </div>
        <div className="border-b-2 border-gray-200"></div>
        <div className="flex flex-col lg:justify-between md:justify-center text-sm flex-wrap overflow-x-scroll md:flex-row items-center justify-between w-[90%] md:w-[73%] mx-auto mt-4">
          <div className="flex space-x-2 text-gray-600">
            <a href="#participate" className="hover:underline">
              Les bénéfices du programme
            </a>
            <a href="#apply" className="hover:underline">
              Recompense
            </a>
            <a href="#eligibiltyCriteria" className="hover:underline">
              Critères d'éligibilité
            </a>
            <a href="#register" className="hover:underline">
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

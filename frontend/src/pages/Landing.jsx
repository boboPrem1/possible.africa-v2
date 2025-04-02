import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/LogoPossible.png";
import MediaImg from "../assets/media_img.png";
import OrganisationImg from "../assets/jumia.jpg";
import AfricanTechIndustry from "../assets/african_tech_industry.webp";
import PyramidAfricaLogo from "../assets/dashboard_logo.svg";
import LogoExa from "../assets/logoEXA.svg";
import LogoYprlink from "../assets/logo_hyperlink.png";
import { useContext } from "react";
import { fetchResource } from "../utils/possible_api_actions";
import Loader from "../assets/icons/loader.svg";
import Star from "../assets/icons/star.svg";
import {
  LangTransContext,
  LangTransDispatchContext,
} from "../langTransContext";
import { socialMedias } from "./NewOrganisations";
import { Link } from "react-router-dom";

function getDate(dateSended) {
  const date = new Date(dateSended);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Les mois commencent à 0
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}`;
  // return `${day}/${month}/${year} à ${hours}:${minutes}`;
}

const Landing = () => {
  const lang_trans = useContext(LangTransContext);
  const lang = lang_trans.lang;
  const _ = lang_trans._;
  const [dashBoardData, setDashboardData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let data;
    async function fetchData() {
      // You can await here
      let data = await fetchResource("dashboard/lasts", {});
      setDashboardData(data);
      console.log(data);
      // ...
    }
    fetchData();
  }, [isLoading]);

  useEffect(() => {
    if (dashBoardData) {
      setIsLoading(false);
    }
  }, [dashBoardData]);

  if (!dashBoardData) {
    return (
      <>
        <Header page="database" />
        <div className="flex justify-center">
          <div className="flex flex-col w-11/12">
            <div className="h-[400px] w-full m-auto flex justify-center items-center">
              <img
                src={Loader}
                alt="Loader possible"
                className="w-16 animate-[loading_1s_ease-in-out_infinite_alternate]"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  // return <div>{JSON.stringify()}</div>

  return (
    <>
      <Header page="/" />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texte */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-primary">
                  {_.landing_hero_title?.split(" ")[0] || "Connect"}
                </span>{" "}
                {_.landing_hero_title?.split(" ").slice(1).join(" ") ||
                  "with Africa's Tech Ecosystem"}
                <br className="hidden md:block" />
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
                {_.landing_hero_description ||
                  "Découvrez et connectez-vous avec les acteurs clés de l'écosystème technologique africain. Une plateforme pour explorer, analyser et collaborer."}
              </p>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                <Link
                  to="/database"
                  className="px-5 md:px-6 py-2.5 md:py-3 bg-primary text-white text-sm md:text-base rounded-full font-medium hover:bg-darkPrimary transition-all shadow-md hover:shadow-lg"
                >
                  {_.landing_hero_cta_primary || "Explorer la base de données"}
                </Link>
                <Link
                  to="/news"
                  className="px-5 md:px-6 py-2.5 md:py-3 bg-white text-sm md:text-base text-primary border border-primary rounded-full font-medium hover:bg-primary-50 transition-all"
                >
                  {_.landing_hero_cta_secondary || "Actualités Tech"}
                </Link>
              </div>
            </div>

            {/* Animation/Illustration */}
            <div className="mx-auto md:mx-0 relative h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 mt-4 md:mt-0">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Cercles animés */}
                  <div className="absolute top-0 -left-4 w-36 h-36 md:w-48 md:h-48 bg-primary opacity-10 rounded-full mix-blend-multiply filter blur-md animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-36 h-36 md:w-48 md:h-48 bg-yellow-300 opacity-10 rounded-full mix-blend-multiply filter blur-md animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-36 h-36 md:w-48 md:h-48 bg-blue-300 opacity-10 rounded-full mix-blend-multiply filter blur-md animate-blob animation-delay-4000"></div>

                  {/* Carrousel de logos de partenaires */}
                  <div className="relative flex justify-center items-center">
                    <HeroPartnerCarousel
                      partners={[
                        {
                          logo: "https://api.possible.africa/storage/logos/techafricanewscom.jpg",
                          name: "Tech Africa Newws",
                        },
                        {
                          logo: "https://api.possible.africa/storage/logos/guardianng.jpg",
                          name: "Guardian Nigeria",
                        },
                        {
                          logo: "https://api.possible.africa/storage/logos/techcabalcom.jpg",
                          name: "Tech Cabal",
                        },
                        {
                          logo: "https://api.possible.africa/storage/logos/wwwitwebcoza.jpg",
                          name: "IT Web Coza",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="mt-8 md:mt-16 grid grid-col-1 md:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
            <div className="bg-white bg-opacity-80 p-3 md:p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                +60 000
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-600 font-medium text-center">
                {_.landing_stat_companies || "Organisations"}
              </div>
            </div>
            <div className="bg-white bg-opacity-80 p-3 md:p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                +100
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-600 font-medium text-center">
                {_.landing_stat_countries || "Médias tech suivis"}
              </div>
            </div>
            <div className="bg-white bg-opacity-80 p-3 md:p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                +54
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-600 font-medium text-center">
                {_.landing_stat_news || "Pays"}
              </div>
            </div>
            <div className="bg-white bg-opacity-80 p-3 md:p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                3 Services
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-600 font-medium text-center">
                {_.landing_stat_partners ||
                  "Génération de Lead, Deals, Interactions"}
              </div>
            </div>
          </div>
        </div>

        {/* Style pour les animations */}
        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>

      <div className="flex justify-center mt-10">
        <div className="flex flex-col w-11/12">
          <div className="w-full flex justify-between px-5 gap-5 flex-wrap md:flex-nowrap">
            <div className="w-full md:w-9/12 flex flex-col justify-start p-5 rounded-xl shadow-xl">
              <div className="flex justify-between items-center mb-5">
                <span className="text-lg font-medium">
                  {_.landing_lats_news}
                </span>
                <a
                  href="/news"
                  className="flex justify-end w-2/12 items-center self-center gap-x-3"
                >
                  <span className="text-nowrap">{_.landing_view_more}</span>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="27"
                      height="27"
                      rx="13.5"
                      stroke="#666968"
                    />
                    <path
                      d="M18.3766 10.325H10.6985C10.5418 10.325 10.3916 10.2628 10.2809 10.1521C10.1701 10.0413 10.1079 9.89107 10.1079 9.73442C10.1079 9.57778 10.1701 9.42755 10.2809 9.31679C10.3916 9.20603 10.5418 9.1438 10.6985 9.1438H18.9672C19.1239 9.1438 19.2741 9.20603 19.3849 9.31679C19.4956 9.42755 19.5579 9.57778 19.5579 9.73442V18.0032C19.5579 18.1598 19.4956 18.31 19.3849 18.4208C19.2741 18.5316 19.1239 18.5938 18.9672 18.5938C18.8106 18.5938 18.6604 18.5316 18.5496 18.4208C18.4388 18.31 18.3766 18.1598 18.3766 18.0032V10.325Z"
                      fill="#242827"
                    />
                    <path
                      d="M18.5483 9.31627C18.6592 9.20537 18.8096 9.14307 18.9665 9.14307C19.1233 9.14307 19.2737 9.20537 19.3847 9.31627C19.4956 9.42718 19.5579 9.5776 19.5579 9.73444C19.5579 9.89128 19.4956 10.0417 19.3847 10.1526L9.34403 20.1932C9.23313 20.3041 9.08271 20.3664 8.92587 20.3664C8.76903 20.3664 8.61861 20.3041 8.5077 20.1932C8.3968 20.0823 8.3345 19.9319 8.3345 19.7751C8.3345 19.6182 8.3968 19.4678 8.5077 19.3569L18.5483 9.31627Z"
                      fill="#242827"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex justify-start flex-col gap-y-3">
                {dashBoardData.posts?.lastByLang[lang].map((post) => {
                  return <New post={post} />;
                })}
              </div>
            </div>
            <div className="w-full md:min-h-16 md:w-3/12 p-5 rounded-xl shadow-xl">
              <div className="flex justify-between items-center mb-5">
                <span className="text-lg font-medium">
                  {_.landing_lats_orgs}
                </span>
                <a
                  href="/database"
                  className="flex justify-end items-center self-center gap-x-3"
                >
                  <span className="text-nowrap">{_.landing_view_more}</span>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="27"
                      height="27"
                      rx="13.5"
                      stroke="#666968"
                    />
                    <path
                      d="M18.3766 10.325H10.6985C10.5418 10.325 10.3916 10.2628 10.2809 10.1521C10.1701 10.0413 10.1079 9.89107 10.1079 9.73442C10.1079 9.57778 10.1701 9.42755 10.2809 9.31679C10.3916 9.20603 10.5418 9.1438 10.6985 9.1438H18.9672C19.1239 9.1438 19.2741 9.20603 19.3849 9.31679C19.4956 9.42755 19.5579 9.57778 19.5579 9.73442V18.0032C19.5579 18.1598 19.4956 18.31 19.3849 18.4208C19.2741 18.5316 19.1239 18.5938 18.9672 18.5938C18.8106 18.5938 18.6604 18.5316 18.5496 18.4208C18.4388 18.31 18.3766 18.1598 18.3766 18.0032V10.325Z"
                      fill="#242827"
                    />
                    <path
                      d="M18.5483 9.31627C18.6592 9.20537 18.8096 9.14307 18.9665 9.14307C19.1233 9.14307 19.2737 9.20537 19.3847 9.31627C19.4956 9.42718 19.5579 9.5776 19.5579 9.73444C19.5579 9.89128 19.4956 10.0417 19.3847 10.1526L9.34403 20.1932C9.23313 20.3041 9.08271 20.3664 8.92587 20.3664C8.76903 20.3664 8.61861 20.3041 8.5077 20.1932C8.3968 20.0823 8.3345 19.9319 8.3345 19.7751C8.3345 19.6182 8.3968 19.4678 8.5077 19.3569L18.5483 9.31627Z"
                      fill="#242827"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex justify-start flex-col gap-y-3">
                {dashBoardData.organisations?.last.map((organisation) => {
                  return <Organisation org={organisation} />;
                })}
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="rounded-xl overflow-hidden">
              <div className="p-6 md:p-10 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {_.landing_our_partners}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Ensemble, nous travaillons avec des organisations leaders pour
                  transformer le paysage technologique africain.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Partenaire 1 */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden border border-gray-100">
                      <div className="flex flex-col h-full">
                        <div className="p-5 md:p-8 bg-gradient-to-r from-primary-50 to-white flex items-center justify-center h-[120px] md:h-[160px]">
                          <img
                            src={LogoExa}
                            alt="EXA logo"
                            className="h-16 md:h-20 w-auto object-contain"
                          />
                        </div>
                        <div className="p-5 md:p-6 flex-grow bg-white">
                          <h3 className="font-semibold text-xl text-gray-800 mb-3">
                            EXA
                          </h3>
                          <p className="text-gray-600">
                            {_.landing_service_exa}
                          </p>
                        </div>
                        <div className="bg-primary-50 p-3 text-center">
                          <Link
                            to="https://expand-in-africa.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:text-darkPrimary transition-colors"
                          >
                            En savoir plus →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Partenaire 2 */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden border border-gray-100">
                      <div className="flex flex-col h-full">
                        <div className="p-5 md:p-8 bg-gradient-to-r from-primary-50 to-white flex items-center justify-center h-[120px] md:h-[160px]">
                          <img
                            src={PyramidAfricaLogo}
                            alt="Pyramid Africa logo"
                            className="h-16 md:h-20 w-auto object-contain"
                          />
                        </div>
                        <div className="p-5 md:p-6 flex-grow bg-white">
                          <h3 className="font-semibold text-xl text-gray-800 mb-3">
                            Pyramid Africa
                          </h3>
                          <p className="text-gray-600">
                            {_.landing_service_pyramid}
                          </p>
                        </div>
                        <div className="bg-primary-50 p-3 text-center">
                          <a
                            href="https://pyramid.possible.africa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:text-darkPrimary transition-colors"
                          >
                            En savoir plus →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Partenaire 3 */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden border border-gray-100">
                      <div className="flex flex-col h-full">
                        <div className="p-5 md:p-8 bg-gradient-to-r from-primary-50 to-white flex items-center justify-center h-[120px] md:h-[160px]">
                          <img
                            src={AfricanTechIndustry}
                            alt="African Tech Industry"
                            className="h-16 md:h-20 w-auto object-contain"
                          />
                        </div>
                        <div className="p-5 md:p-6 flex-grow bg-white">
                          <h3 className="font-semibold text-xl text-gray-800 mb-3">
                            African Tech Industry
                          </h3>
                          <p className="text-gray-600">
                            {_.landing_service_african_tech}
                          </p>
                        </div>
                        <div className="bg-primary-50 p-3 text-center">
                          <a
                            href="https://www.africantechindustry.com/african-tech-industry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:text-darkPrimary transition-colors"
                          >
                            En savoir plus →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Partenaire 4 */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden border border-gray-100">
                      <div className="flex flex-col h-full">
                        <div className="p-5 md:p-8 bg-gradient-to-r from-primary-50 to-white flex items-center justify-center h-[120px] md:h-[160px]">
                          <img
                            src={LogoYprlink}
                            alt="Hyperlink"
                            className="h-16 md:h-20 w-auto object-contain"
                          />
                        </div>
                        <div className="p-5 md:p-6 flex-grow bg-white">
                          <h3 className="font-semibold text-xl text-gray-800 mb-3">
                            Yprlink
                          </h3>
                          <p className="text-gray-600">
                            {_.landing_service_yprlink}
                          </p>
                        </div>
                        <div className="bg-primary-50 p-3 text-center">
                          <a
                            href="https://yprlink.africa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:text-darkPrimary transition-colors"
                          >
                            En savoir plus →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <button className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-darkPrimary transition-colors shadow-sm hover:shadow">
                    Devenir partenaire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Landing;

const New = ({ post }) => {
  return (
    <a
      key={post.id}
      href={
        post.airMedia === "Possible Africa"
          ? `/news/${post.slug}`
          : post.airLink
      }
      target={post.airMedia === "Possible Africa" ? null : "_blank"}
      rel="noopener noreferrer"
      className="flex justify-between items-center gap-x-5  bg-[#D9D9D9]/20 rounded-md min-h-26 p-2.5 min-w-full relative"
    >
      {post.airMedia === "Possible Africa" && (
        <img
          src={Star}
          alt="Star possible"
          className="mx-auto w-7 animate-[wiggle_1s_ease-in-out_infinite] absolute bottom-3 right-3"
        />
      )}
      <div className="w-1/12 flex justify-center items-center">
        <img
          src={
            socialMedias.includes(post.airLogo) ? logoPlaceholder : post.airLogo
          }
          onError={(e) => {
            e.target.src = logoPlaceholder;
          }}
          alt={`media img's logo`}
          className="w-10 h-10 min-w-10 min-h-10 md:w-14 md:h-14 md:min-w-14 md:min-h-14 rounded-md"
        />
      </div>
      <div className="flex flex-col justify-start items-center gap-y-1 w-11/12 overflow-hidden">
        <div className="flex justify-between w-full">
          <span className="font-semibold text-sm md:text-base">
            {post.airMedia}
          </span>
          <span className="text-sm md:text-base">
            {/* {getDate(post.airDateAdded)} */}
          </span>
        </div>
        <div className="w-full text-sm md:text-base font-medium md:hidden">
          {post.title.length > 45
            ? post.title.slice(0, 45) + " ..."
            : post.title}
        </div>
        <div className="hidden md:block w-full text-sm md:text-base font-medium">
          {post.title.length > 120
            ? post.title.slice(0, 120) + " ..."
            : post.title}
        </div>
        <div className="w-full text-xs flex justify-start gap-x-2 overflow-auto scrollbar-hidden">
          {post.airTags &&
            post.airTags.split(", ").map((tag) => {
              return (
                <div className="py-0.5 px-1.5 border rounded flex justify-between items-center gap-x-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.00956 3.77606L3.65606 3.42256M5.49006 10.0971L1.84106 6.44806C1.65606 6.26306 1.55106 6.01306 1.54756 5.75206L1.50006 2.00756C1.49905 1.94063 1.51148 1.87418 1.53663 1.81215C1.56177 1.75012 1.59912 1.69378 1.64645 1.64645C1.69378 1.59912 1.75012 1.56177 1.81215 1.53663C1.87418 1.51148 1.94063 1.49905 2.00756 1.50006L5.75206 1.54756C6.01351 1.55064 6.26335 1.656 6.44806 1.84106L10.0971 5.49006C10.4341 5.82656 10.6931 6.46956 10.3091 6.85356L6.85406 10.3086C6.46956 10.6931 5.82656 10.4336 5.49006 10.0971Z"
                      stroke="#124B42"
                      stroke-width="0.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-nowrap">{tag}</span>
                </div>
              );
            })}
        </div>
      </div>
    </a>
  );
};
const Organisation = ({ org }) => {
  const logoPlaceholder =
    "https://api.possible.africa/storage/logos/placeholder_org.jpeg";

  return (
    <Link
      key={org.id}
      to={`/database/${org.name}`}
      className="flex justify-between items-center gap-x-2.5 bg-[#D9D9D9]/20 rounded-md min-h-18 p-2.5"
    >
      <div className="w-12 h-12 flex justify-center items-center self-start bg-custom-white rounded">
        {/* <img
          src={org.logo}
          height={40}
          width={40}
          alt={`${org.name}'s logo`}
          className="min-w-10 min-h-10 rounded"
        /> */}
        <img
          src={socialMedias.includes(org?.logo) ? logoPlaceholder : org?.logo}
          alt={`${org.name}'s logo`}
          height={40}
          width={40}
          className="w-10 h-10 rounded-md object-cover"
          onError={(e) => {
            e.target.src = logoPlaceholder;
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-1 w-11/12">
        <div className="w-full flex justify-between text-[#242827]">
          <span className="text-sm font-semibold">{org.name}</span>
          <span className="text-xs font-semibold mr-3">{org.sector}</span>
        </div>
        <div className="w-full text-xs font-medium text-[#7C7E7D]">
          {org.description.length > 45
            ? org.description.slice(0, 45) + " ..."
            : org.description}
        </div>
        <div className="flex justify-start gap-x-2.5 w-full text-[#7C7E7D]">
          {/* {org.headquarters.length > 0 && } */}
          {/* <p>{JSON.stringify(org)}</p> */}
          {org.headquarter ? (
            <span className="border border-[#7C7E7D] text-xs rounded px-1.5 py-0.5">
              {org.headquarter}
            </span>
          ) : (
            "-"
          )}
          {/* <span className="border border-[#7C7E7D] text-xs rounded px-1.5 py-0.5">
            Morocco
          </span> */}
        </div>
      </div>
    </Link>
  );
};

// Composant pour le carrousel des partenaires
const PartnerCarousel = ({ partners }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Changer automatiquement de partenaire toutes les 3 secondes
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % partners.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [partners.length, isPaused]);

  return (
    <div className="relative overflow-hidden">
      {/* Conteneur principal du carrousel */}
      <div className="relative mx-auto max-w-3xl h-[450px] md:h-[500px]">
        {/* Animation des points */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -top-20 -left-4 w-72 h-72 bg-primary opacity-5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute -bottom-20 -right-4 w-72 h-72 bg-blue-300 opacity-5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Carrousel des partenaires */}
        <div
          className="relative z-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Affichage du partenaire actif */}
          <div className="transition-all duration-500 ease-in-out">
            <div className="bg-white rounded-xl shadow-md h-full overflow-hidden border border-gray-100 transform transition-all duration-500 hover:shadow-xl">
              <div className="flex flex-col h-full">
                <div className="p-6 md:p-10 bg-gradient-to-r from-primary-50 to-white flex items-center justify-center h-[180px] md:h-[200px]">
                  <img
                    src={partners[activeIndex].logo}
                    alt={`${partners[activeIndex].name} logo`}
                    className="h-24 md:h-28 w-auto object-contain transition-all duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex-grow bg-white">
                  <h3 className="font-semibold text-2xl text-gray-800 mb-4">
                    {partners[activeIndex].name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {partners[activeIndex].description}
                  </p>
                </div>
                <div className="bg-primary-50 p-4 text-center">
                  <a
                    href={partners[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:text-darkPrimary transition-colors"
                  >
                    En savoir plus →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs du carrousel */}
          <div className="flex justify-center mt-6 space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Voir partenaire ${index + 1}`}
              />
            ))}
          </div>

          {/* Boutons précédent/suivant */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between z-20 px-2">
            <button
              onClick={() =>
                setActiveIndex(
                  (current) => (current - 1 + partners.length) % partners.length
                )
              }
              className="bg-white bg-opacity-80 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110"
              aria-label="Partenaire précédent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() =>
                setActiveIndex((current) => (current + 1) % partners.length)
              }
              className="bg-white bg-opacity-80 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110"
              aria-label="Partenaire suivant"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Style pour les animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

// Composant pour le carrousel des partenaires dans la section hero
const HeroPartnerCarousel = ({ partners }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Changer automatiquement de partenaire toutes les 2.5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg md:shadow-2xl h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full">
      {/* Container des images avec transition */}
      <div className="relative bg-white p-3 md:p-5 rounded-xl w-full h-full">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center p-1 md:p-3 transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="min-h-12 min-w-12 w-auto max-h-80 object-cover transform transition-transform hover:scale-105 duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Header = ({ page }) => {
  const lang_trans = useContext(LangTransContext);
  const lang = lang_trans.lang;
  const _ = lang_trans._;
  const dispatch = useContext(LangTransDispatchContext);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  return (
    <div className="sticky top-0 right-0 left-0 bg-white backdrop-blur-sm bg-opacity-95 shadow-md px-3 md:px-12 lg:px-20 z-50 transition-all duration-300">
      <AnimatePresence>
        {mobileMenuIsVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuIsVisible(!mobileMenuIsVisible)}
            className="md:hidden fixed inset-0 z-50 bg-black/75 top-0 right-0 left-0 bottom-0 w-screen h-screen"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-[280px] h-screen flex flex-col shadow-2xl rounded-r-xl overflow-hidden absolute left-0 top-0 bottom-0"
            >
              <div className="bg-primary-50 p-5 flex items-center">
                <img src={Logo} alt="Logo" className="h-8" />
                <button
                  onClick={() => setMobileMenuIsVisible(false)}
                  className="ml-auto text-gray-600 hover:text-primary p-2 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col py-4 overflow-y-auto">
                <Link
                  to="/"
                  className={`flex items-center pl-6 py-3.5 hover:bg-primary-50 transition-colors ${
                    page === "/"
                      ? "font-bold text-primary border-l-4 border-primary"
                      : "border-l-4 border-transparent"
                  }`}
                >
                  {_.header_link_home}
                </Link>
                <Link
                  to="/news"
                  className={`flex items-center pl-6 py-3.5 hover:bg-primary-50 transition-colors ${
                    page === "/news"
                      ? "font-bold text-primary border-l-4 border-primary"
                      : "border-l-4 border-transparent"
                  }`}
                >
                  {_.header_link_news}
                </Link>
                <Link
                  to="/database"
                  className={`flex items-center pl-6 py-3.5 hover:bg-primary-50 transition-colors ${
                    page === "/database"
                      ? "font-bold text-primary border-l-4 border-primary"
                      : "border-l-4 border-transparent"
                  }`}
                >
                  {_.header_link_database}
                </Link>
                <Link
                  to="https://pyramid.possible.africa"
                  target="_blank"
                  className={`flex items-center pl-6 py-3.5 hover:bg-primary-50 transition-colors ${
                    page === "https://pyramid.possible.africa"
                      ? "font-bold text-primary border-l-4 border-primary"
                      : "border-l-4 border-transparent"
                  }`}
                >
                  Sales Platform
                </Link>
                <Link
                  to="https://yprlink.africa"
                  className={`flex items-center pl-6 py-3.5 hover:bg-primary-50 transition-colors ${
                    page === "https://yprlink.africa"
                      ? "font-bold text-primary border-l-4 border-primary"
                      : "border-l-4 border-transparent"
                  }`}
                >
                  Yperlink
                </Link>

                <Link
                  to="https://pyramid.possible.africa/database/create-campaign"
                  target="_blank"
                  className="flex items-center justify-center gap-x-2 bg-primary text-white font-medium py-2.5 px-6 mx-6 mt-4 rounded-full hover:bg-primary-600 shadow-sm hover:shadow transition-all duration-300"
                >
                  <span className="font-bold">+</span>
                  <span className="whitespace-nowrap text-sm">
                    {_.header_btn_free_first_campaign}
                  </span>
                </Link>
              </div>
              <div className="mt-auto p-5 border-t border-gray-100">
                <select
                  defaultValue={lang}
                  className="w-full px-4 py-2 rounded-lg bg-primary-50 text-primary font-medium outline-none"
                  onChange={(e) => {
                    dispatch({
                      type: "change",
                      lang: e.target.value,
                    });
                  }}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-20 lg:h-24 w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-x-4 md:gap-x-10 flex-shrink-0">
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="Possible Africa"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </a>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden lg:flex items-center justify-center flex-grow">
          <nav className="flex space-x-8 xl:space-x-12">
            <Link
              to="/"
              className={`relative font-medium px-2 py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full after:bg-primary ${
                page === "/"
                  ? "text-primary font-semibold after:w-full"
                  : "text-gray-700 after:w-0"
              }`}
            >
              {_.header_link_home}
            </Link>
            <Link
              to="/news"
              className={`relative font-medium px-2 py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full after:bg-primary ${
                page === "/news"
                  ? "text-primary font-semibold after:w-full"
                  : "text-gray-700 after:w-0"
              }`}
            >
              {_.header_link_news}
            </Link>
            <Link
              to="/database"
              className={`relative font-medium px-2 py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full after:bg-primary ${
                page === "/database"
                  ? "text-primary font-semibold after:w-full"
                  : "text-gray-700 after:w-0"
              }`}
            >
              {_.header_link_database}
            </Link>
            <Link
              to="https://pyramid.possible.africa"
              target="_blank"
              className={`relative font-medium px-2 py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full after:bg-primary ${
                page === "https://pyramid.possible.africa"
                  ? "text-primary font-semibold after:w-full"
                  : "text-gray-700 after:w-0"
              }`}
            >
              Sales Platform
            </Link>
            <Link
              to="https://yprlink.africa"
              className={`relative font-medium px-2 py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full after:bg-primary ${
                page === "https://yprlink.africa"
                  ? "text-primary font-semibold after:w-full"
                  : "text-gray-700 after:w-0"
              }`}
            >
              Yprlink
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-x-3 md:gap-x-4 lg:gap-x-6">
          <p className="hidden md:block text-primary font-semibold text-sm lg:text-base">
            Connect AfricaTech Ecosystem
          </p>
          <div className="hidden md:flex items-center">
            <select
              defaultValue={lang}
              className="px-4 py-1.5 rounded-md bg-primary-50 text-primary font-medium border border-primary/20 hover:border-primary/50 transition-colors outline-none cursor-pointer"
              onChange={(e) => {
                dispatch({
                  type: "change",
                  lang: e.target.value,
                });
              }}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </div>

          <Link
            to="https://pyramid.possible.africa/database/create-campaign"
            target="_blank"
            className="hidden md:flex items-center justify-center gap-x-2 bg-primary text-white font-medium py-2.5 px-5 md:px-6 lg:px-8 rounded-full hover:bg-primary-600 shadow-sm hover:shadow transition-all duration-300"
          >
            <span className="font-bold">+</span>
            <span className="whitespace-nowrap text-sm md:text-base">
              {_.header_btn_free_first_campaign}
            </span>
          </Link>

          <button
            onClick={() => setMobileMenuIsVisible(!mobileMenuIsVisible)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  const lang_trans = useContext(LangTransContext);
  const lang = lang_trans.lang;
  const _ = lang_trans._;
  const dispatch = useContext(LangTransDispatchContext);
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img
              src={Logo}
              alt="Possible Africa"
              className="h-10 mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-600 text-sm mt-2 text-center md:text-left">
              {_.footer_connect_text || "Connectez-vous avec l'écosystème technologique africain en pleine croissance."}
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary group"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 12,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </motion.div>
              </a>
              <a
                href="https://www.linkedin.com/company/possibleafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary group"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 12,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </motion.div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-center md:text-start">
              {_.footer_platforms || "Plateformes"}
            </h3>
            <ul className="space-y-2 text-center md:text-start">
              <li>
                <a
                  href="/database"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  {_.footer_database || "Database"}
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  {_.footer_tech_news || "Actualités Tech"}
                </a>
              </li>
              <li>
                <a
                  href="https://pyramid.possible.africa"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  {_.footer_sales_platform || "Sales Platform"}
                </a>
              </li>
              <li>
                <a
                  href="https://yprlink.africa"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  {_.footer_yprlink || "Yprlink"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-center md:text-start">
              {_.footer_useful_links || "Liens utiles"}
            </h3>
            <ul className="space-y-2 text-center md:text-start">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  {_.footer_about || "À propos"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  {_.footer_become_partner || "Devenir partenaire"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  {_.footer_privacy || "Confidentialité"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  {_.footer_terms || "Conditions d'utilisation"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-center md:text-start">
              {_.footer_contact || "Contact"}
            </h3>
            <p className="text-gray-600 text-sm mb-2 text-center md:text-start">
              {_.footer_questions || "Vous avez des questions? Contactez-nous:"}
            </p>
            <a
              href="mailto:info@possible.africa"
              className="text-primary hover:underline text-sm block md:inline text-center md:text-start"
            >
              info@possible.africa
            </a>
            <div className="mt-4">
              <select
                defaultValue={lang}
                className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 text-sm"
                onChange={(e) => {
                  dispatch({
                    type: "change",
                    lang: e.target.value,
                  });
                }}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Possible Africa. {_.footer_all_rights_reserved || "Tous droits réservés."}
          </p>
        </div>
      </div>
    </footer>
  );
};

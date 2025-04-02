import Logo from "../assets/LogoPossible.png";
import MediaImg from "../assets/media_img.png";
import OrganisationImg from "../assets/jumia.jpg";
import AfricanTechIndustry from "../assets/african_tech_industry.webp";
import PossibleAfricaLogo from "../assets/dashboard_logo.svg"
import LogoExa from "../assets/logoEXA.svg"
import LogoHyperlink from "../assets/logo_hyperlink.png";
import { useContext, useEffect, useState } from "react";
import { fetchResource } from "../utils/possible_api_actions";
import Loader from "../assets/icons/loader.svg";
import Star from "../assets/icons/star.svg";
import { AnimatePresence, motion } from "framer-motion";
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
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{_.landing_our_partners}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">Ensemble, nous travaillons avec des organisations leaders pour transformer le paysage technologique africain.</p>
                
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
                          <h3 className="font-semibold text-xl text-gray-800 mb-3">EXA</h3>
                          <p className="text-gray-600">
                            {_.landing_service_exa}
                          </p>
                        </div>
                        <div className="bg-primary-50 p-3 text-center">
                          <a href="#" className="text-primary font-medium hover:text-darkPrimary transition-colors">
                            En savoir plus →
                          </a>
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
                            src={PossibleAfricaLogo} 
                            alt="Pyramid Africa logo" 
                            className="h-16 md:h-20 w-auto object-contain"
                          />
                        </div>
                        <div className="p-5 md:p-6 flex-grow bg-white">
                          <h3 className="font-semibold text-xl text-gray-800 mb-3">Pyramid Africa</h3>
                          <p className="text-gray-600">
                            {_.landing_service_pyramid}
                          </p>
                        </div>
                        <div className="bg-primary-50 p-3 text-center">
                          <a href="https://pyramid.possible.africa" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-darkPrimary transition-colors">
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
                          <h3 className="font-semibold text-xl text-gray-800 mb-3">African Tech Industry</h3>
                          <p className="text-gray-600">
                            {_.landing_service_african_tech}
                          </p>
                        </div>
                        <div className="bg-primary-50 p-3 text-center">
                          <a href="#" className="text-primary font-medium hover:text-darkPrimary transition-colors">
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
                            src={LogoHyperlink}
                            alt="Hyperlink"
                            className="h-16 md:h-20 w-auto object-contain"
                          />
                        </div>
                        <div className="p-5 md:p-6 flex-grow bg-white">
                          <h3 className="font-semibold text-xl text-gray-800 mb-3">Hyperlink</h3>
                          <p className="text-gray-600">
                            {_.landing_service_yprlink}
                          </p>
                        </div>
                        <div className="bg-primary-50 p-3 text-center">
                          <a href="#" className="text-primary font-medium hover:text-darkPrimary transition-colors">
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
          src={socialMedias.includes(post.airLogo) ? logoPlaceholder : post.airLogo}
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
            {getDate(post.airDateAdded)}
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

export const Header = ({ page }) => {
  const lang_trans = useContext(LangTransContext);
  const lang = lang_trans.lang;
  const _ = lang_trans._;
  const dispatch = useContext(LangTransDispatchContext);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  return (
    <div className="sticky top-0 right-0 left-0 bg-white shadow-lg px-5 md:px-28 md:pb-2.5 z-50">
      <AnimatePresence>
        {mobileMenuIsVisible && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
            onClick={() => setMobileMenuIsVisible(!mobileMenuIsVisible)}
            className="origin-top-left md:hidden fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/75"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="bg-white w-[300px] flex flex-col shadow-xl mt-6 ml-2"
            >
              <Link
                to="/"
                className={`inline-flex pl-5 py-2.5 hover:bg-primary-100 ${
                  page === "/" ? "font-black text-primary bg-primary-200" : ""
                }`}
              >
                {_.header_link_home}
              </Link>
              <Link
                to="/news"
                className={`inline-flex pl-5 py-2.5 hover:bg-primary-100 ${
                  page === "/news"
                    ? "font-black text-primary bg-primary-200"
                    : ""
                }`}
              >
                {_.header_link_news}
              </Link>
              <Link
                to="/database"
                className={`inline-flex pl-5 py-2.5 hover:bg-primary-100 ${
                  page === "/database"
                    ? "font-black text-primary bg-primary-200"
                    : ""
                }`}
              >
                {_.header_link_database}
              </Link>
              <Link
                to="https://pyramid.possible.africa/dashboard/leads"
                target="_blank"
                className={`inline-flex pl-5 py-2.5 hover:bg-primary-100 ${
                  page === "https://pyramid.possible.africa/dashboard/leads"
                    ? "font-black text-primary underline underline-offset-8"
                    : ""
                }`}
              >
                Sales Platform
              </Link>
              <Link
                to="https://yprlink.africa"
                className={`inline-flex pl-5 py-2.5 hover:bg-primary-100 ${
                  page === "https://yprlink.africa"
                    ? "font-black text-primary bg-primary-200"
                    : ""
                }`}
              >
                Yperlink
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-24 w-full flex justify-between items-center">
        <div className="w-6/12 flex justify-start gap-10 items-center">
          <a href="/">
            <img src={Logo} alt="" className="min-w-[100px] h-[50px] " />
          </a>
          <div className="hidden md:flex justify-start items-center gap-x-10 px-5">
            {/* <span className="border-b-2 border-primary">Overview</span> */}
            <Link
              to="/"
              className={`font-medium ${
                page === "/"
                  ? "font-black text-primary underline underline-offset-8"
                  : ""
              }`}
            >
              {_.header_link_home}
            </Link>
            <Link
              to="/news"
              className={`font-medium ${
                page === "/news"
                  ? "font-black text-primary underline underline-offset-8"
                  : ""
              }`}
            >
              {_.header_link_news}
            </Link>
            <Link
              to="/database"
              className={`font-medium text-nowrap ${
                page === "/database"
                  ? "font-black text-primary underline underline-offset-8"
                  : ""
              }`}
            >
              {_.header_link_database}
            </Link>
            <Link
              to="https://pyramid.possible.africa/dashboard/leads"
              target="_blank"
              className={`font-medium text-nowrap ${
                page === "https://pyramid.possible.africa/dashboard/leads"
                  ? "font-black text-primary underline underline-offset-8"
                  : ""
              }`}
            >
              Sales Platform
            </Link>
            {/* <a
              href="/waitlist"
              className={`font-medium text-nowrap ${
                page === "/waitlist"
                  ? "font-black text-primary underline underline-offset-8"
                  : ""
              }`}
            >
              Rejoindre notre waitlist
            </a> */}
            <Link
              to="https://yprlink.africa"
              target="_blank"
              className={`font-medium ${
                page === "https://yprlink.africa"
                  ? "font-black text-primary underline underline-offset-8"
                  : ""
              }`}
            >
              Yprlink
            </Link>
          </div>
        </div>
        <div className="flex justify-end  w-6/12 items-center gap-x-3 md:gap-x-5">
          <span className="text-xl font-medium text-[#242827] hidden md:inline-block">
            {_.header_connect}
          </span>
          <select
            name=""
            id=""
            defaultValue={lang}
            className="px-3 py-1 outline-none rounded-full text-[#124B42] font-semibold text-xl bg-[#C0E8E2]"
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
          <div
            onClick={() => setMobileMenuIsVisible(!mobileMenuIsVisible)}
            className="md:hidden w-11 h-11 rounded border border-white shadow-xl p-[4px] flex justify-center items-center z-[100]"
          >
            {mobileMenuIsVisible ? (
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                />
              </svg>
            )}
          </div>
          <Link
            to="https://pyramid.possible.africa/dashboard/leads"
            target="_blank"
            className="hidden md:flex gap-2 justify-between items-center min-w-[216px] h-[48px] bg-[#2BB19C] text-lg font-medium rounded-full px-[20px] py-[12px] text-white border border-primary hover:bg-primary-50 hover:text-primary transition-colors"
          >
            <span className="font-bold">+</span>
            <span className="text-nowrap font-bold">
              {_.header_btn_free_first_campaign}
            </span>
          </Link>
        </div>
      </div>
      {/* <div> */}

      {/* </div> */}
    </div>
  );
};

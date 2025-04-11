import { Button } from "../components/for_database/jbutton";

import minute_record_icon from "../assets/icons/minute_record_icon.png";
import create_todo_icon from "../assets/icons/create_todo_icon.png";
import send_invite_icon from "../assets/icons/send_invite_icon.png";

import envelope_icon from "../assets/icons/envelope_icon.png";
import linkedin_icon from "../assets/icons/linkedin_icon.png";
import whatsapp_icon from "../assets/icons/whatsapp_icon.png";
import create_note_icon from "../assets/icons/create_note_icon.png";

import globe_icon from "../assets/icons/globe_icon.png";
import globe_2_icon from "../assets/icons/globe_2_icon.png";
import chart_down_icon from "../assets/icons/chart_down_icon.png";
import info_round_icon from "../assets/icons/info_round_icon.png";

import view_more_icon from "../assets/icons/view_more_icon.png";

import option_icon from "../assets/icons/option_icon.png";

import basil_settings_adjust from "../assets/icons/basil_settings-adjust-outline.svg";
import filter_reset from "../assets/icons/filter-reset-icon.svg";
import { Footer, Header } from "./Landing";
import { Link, useParams } from "react-router-dom";
import NoData from "../utils/NoData";
import { useGetOrganisationByNameQuery } from "../features/api/apiSlice";
import { useEffect, useContext } from "react";
import Loader from "../assets/icons/loader.svg";
import Organisations, { logoPlaceholder } from "./NewOrganisations";
import ArrowLeftSolidCustomIcon from "../components/icons/ArrowLeftSolidCustomIcon";
import SimilarOrganizations from "../components/SimilarOrganizations";
import { LangTransContext } from "../langTransContext";

export default function OneOrganisation({ iconSx, backUrl }) {
  const { name } = useParams();
  const { data, isLoading, isError } = useGetOrganisationByNameQuery(name);
  const langTrans = useContext(LangTransContext);
  const _ = langTrans._;

  let contactRandomLength = Math.round(Math.random() * 10);

  contactRandomLength = contactRandomLength > 3 ? 3 : contactRandomLength;

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [isLoading, data]);

  if (isLoading) {
    return (
      <>
        <Header page="/news" />
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

        <Footer />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Header page="/news" />
        <div className="flex justify-center">
          <div className="flex flex-col w-11/12">
            <NoData />
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        {/* En-tête avec bouton retour et titre */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => {
              // Vérifier si nous avons un paramètre focusOrgId dans l'URL de référence
              const referrer = document.referrer;
              if (referrer && referrer.includes('/database')) {
                // Si on vient de la page de base de données, on retourne avec le paramètre focusOrgId
                window.history.back();
              } else {
                // Sinon, on redirige vers la page de base de données avec un paramètre pour mettre en évidence cette organisation
                const orgId = `org-row-${data.id || data.name.replace(/\s+/g, '-').toLowerCase()}`;
                const databaseUrl = new URL(`${window.location.origin}/database`);
                databaseUrl.searchParams.set('focusOrgId', orgId);
                window.location.href = databaseUrl.toString();
              }
            }}
            className="flex items-center justify-center mr-4 bg-primary-50 hover:bg-primary-100 text-primary px-3 py-2 rounded-full transition-colors"
            aria-label="Retour"
            title="Retour à la page précédente"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            <span className="ml-2 font-medium">{_?.back || "Retour"}</span>
          </button>
          
          <h1 className="text-2xl font-bold text-gray-800">{data?.name}</h1>
        </div>

        {/* Grid principale */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Carte profil */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
            <div className="bg-primary-50 rounded-full p-2 mb-4">
              <img
                src={data.logo}
                width={100}
                height={100}
                alt={data?.name}
                className="w-[100px] h-[100px] rounded-full object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://api.possible.africa/storage/logos/placeholder_org.jpeg";
                }}
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              {data?.name}
            </h2>

            {/* Boutons sociaux */}
            {/* <div className="flex justify-center gap-3 mb-4">
              <button className="bg-primary-50 h-[46px] w-[46px] flex justify-center items-center rounded-full text-primary hover:bg-primary-100 transition-colors">
                <img src={envelope_icon} width={20} height={20} alt="Email" />
              </button>
              <button className="bg-primary-50 h-[46px] w-[46px] flex justify-center items-center rounded-full text-primary hover:bg-primary-100 transition-colors">
                <img src={linkedin_icon} width={20} height={20} alt="LinkedIn" />
              </button>
              <button className="bg-primary-50 h-[46px] w-[46px] flex justify-center items-center rounded-full text-primary hover:bg-primary-100 transition-colors">
                <img src={whatsapp_icon} width={20} height={20} alt="WhatsApp" />
              </button>
              <button className="bg-primary-50 h-[46px] w-[46px] flex justify-center items-center rounded-full text-primary hover:bg-primary-100 transition-colors">
                <img src={create_note_icon} width={20} height={20} alt="Notes" />
              </button>
            </div> */}

            {/* Informations rapides */}
            <div className="w-full space-y-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-full">
                  <img src={globe_icon} alt="Country" width={16} height={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{_?.country || "Pays"}</p>
                  <p className="font-medium">{data.headquarter || "-"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary-50 p-2 rounded-full">
                  <img
                    src={chart_down_icon}
                    alt="Sector"
                    width={16}
                    height={16}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{_?.sector || "Secteur"}</p>
                  <p className="font-medium">{data.sector || "-"}</p>
                </div>
              </div>

              {data.website && (
                <a
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="bg-primary-50 p-2 rounded-full">
                    <img
                      src={globe_2_icon}
                      alt="Website"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{_?.website || "Site web"}</p>
                    <p className="font-medium break-all">{_?.visit_website || "Visiter le site web"}</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Informations principales */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {_?.about || "À propos de"} {data?.name}
            </h2>

            {data.description ? (
              <div className="text-gray-700 mb-6 leading-relaxed">
                {data.description}
              </div>
            ) : (
              <div className="text-gray-500 italic mb-6">
                {_?.no_description || "Aucune description disponible."}
              </div>
            )}

            {/* Tags et caractéristiques */}
            <div className="flex flex-wrap gap-3 mb-6">
              {data.operatingCountries && (
                <div className="bg-primary-50 text-primary rounded-full px-4 py-1 text-sm">
                  {_?.operates_in || "Opère en"}: {data.operatingCountries}
                </div>
              )}
              {data.tier && (
                <div className="bg-primary-50 text-primary rounded-full px-4 py-1 text-sm">
                  {data.tier}
                </div>
              )}
              {data.subSector && (
                <div className="bg-primary-50 text-primary rounded-full px-4 py-1 text-sm">
                  {data.subSector}
                </div>
              )}
              {data.region && (
                <div className="bg-primary-50 text-primary rounded-full px-4 py-1 text-sm">
                  {data.region}
                </div>
              )}
            </div>

            {/* Contacts */}
            {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">Contacts</h3> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Carte contact exemple - remplacer par des données réelles si disponibles */}

              {/* {Array.from({ length: contactRandomLength }).map((_, index) => (
                <div key={index} className="bg-primary-50 rounded-xl p-4 transition-transform hover:scale-[1.02] filter blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">CEO</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="flex items-center gap-2 mb-1">
                    <span className="text-gray-500">Email:</span>
                    <span className="text-primary">contact@company.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-500">Tél:</span>
                    <span>+123 456 7890</span>
                    </p>
                  </div>
                </div>
              ))} */}

              {/* Bouton ajouter un contact */}
              <Link
                to="https://pyramid.possible.africa/dashboard/leads"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-dashed border-primary-100 rounded-xl p-4 flex flex-col items-center justify-center text-primary hover:bg-primary-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Ajouter comme Lead</span>
              </Link>
            </div>

            {/* Actualités récentes */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Actualités récentes
            </h3>
            <div className="relative">
              {data?.postsRelated?.length > 3 && (
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <button 
                    className="bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center text-primary hover:bg-gray-50 focus:outline-none transition-colors"
                    onClick={(e) => {
                      const container = e.target.closest('.relative').querySelector('.overflow-x-auto');
                      container.scrollBy({ left: 300, behavior: 'smooth' });
                    }}
                    aria-label="Voir plus d'articles"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              
              <div className="overflow-x-auto pb-2 hide-scrollbar">
                <div className="flex space-x-3" style={{ minWidth: 'min-content' }}>
                {data?.postsRelated?.length > 0 ? (
                  data?.postsRelated?.map((post, index) => {
                    return (
                      <Link
                        key={index}
                        to={post?.airLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0" 
                        style={{ width: 'calc(100% - 1rem)', maxWidth: '420px' }}
                      >
                        <div className="h-[90px] border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 bg-white">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 mr-4">
                              <img
                                src={post?.airLogo}
                                alt="Disrupt Africa"
                                onError={(e) => {
                                  e.target.src = logoPlaceholder;
                                }}
                                className="w-10 h-10 min-w-10 min-h-10 md:w-14 md:h-14 md:min-w-14 md:min-h-14 rounded-md"
                              />
                            </div>
                            <div className="flex-grow min-w-0">
                              <h4 className="text-base font-medium text-gray-900 truncate pr-8">
                                Kenya's Zanifu secures $1m to grow FMCG supply
                                chain financing solution
                              </h4>
                            </div>
                            <a
                              href={post?.airLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 ml-2 p-2 text-gray-400 hover:text-primary rounded-full hover:bg-gray-50 transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <div className="border rounded-xl p-6 flex items-center justify-center text-gray-500" style={{ width: '100%' }}>
                    <p>Aucune actualité récente n'est disponible.</p>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section des interactions */}
        {/* <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Interactions</h2>
            <div className="flex gap-3">
              <a href="https://pyramid.possible.africa/dashboard/leads" target="_blank" rel="noopener noreferrer">
                <Button className="border border-primary text-white hover:bg-primary-50 hover:text-primary transition-colors">
                  Nouvelle interaction
                </Button>
              </a>
              <a href="https://pyramid.possible.africa/dashboard/leads" target="_blank" rel="noopener noreferrer">
                <Button className="border border-primary text-white hover:bg-primary-50 hover:text-primary transition-colors">
                  Filtrer
                </Button>
              </a>
            </div>
          </div>
          
          Liste des interactions - vide pour le moment
          <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-gray-500 mb-2">Aucune interaction pour le moment</p>
            <Link to="https://pyramid.possible.africa/dashboard/leads" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 bg-primary text-white hover:bg-darkPrimary transition-colors">
                Contacter l'organisation
              </Button>
            </Link>
          </div>
        </div> */}
        {/* Section Organisations similaires */}
        {data && data.sector && (
          <SimilarOrganizations
            sector={data.sector}
            currentOrgId={data.id}
            currentOrgName={data.name}
          />
        )}
      </div>

      <Footer />
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </>
  );
}

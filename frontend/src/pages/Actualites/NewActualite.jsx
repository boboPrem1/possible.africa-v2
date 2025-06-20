// eslint-disable-next-line no-unused-vars
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import CardComponent from "../../components/CardComponent.jsx";
import {
  useGetPostCategoriesQuery,
  useGetPostsQuery,
} from "../../features/api/apiSlice.js";
import CustomContainer from "../../utils/CustomContainer.jsx";
import { ParseSlice } from "../../utils/htmlParser.jsx";
import {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
  useCallback,
} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NoData from "../../utils/NoData.jsx";
import CenteredContainer from "../../utils/CenteredContainer.jsx";
import { NoMoreDataToLoad } from "../../components/noMoreDataToLoad.jsx";
import Input from "../../components/Input.jsx";
import Select from "../../components/Select.jsx";
import CustumSelect from "../../components/Select.jsx";
import Loader from "../../assets/icons/loader.svg";
import Star from "../../assets/icons/star.svg";
import tagSolid from "../../assets/icons/tag-solid.svg";
import filterSolid from "../../assets/icons/filter-solid.svg";
import xmarkSolid from "../../assets/icons/xmark-solid.svg";
import { LangTransContext } from "../../langTransContext.js";
import LogoExa from "../../assets/logoEXA.svg";
import PossibleAfricaLogo from "../../assets/dashboard_logo.svg";
import AfricanTechIndustry from "../../assets/african_tech_industry.webp";
import LogoHyperlink from "../../assets/logo_hyperlink.png";
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import Header from "../../components/pyramid-africa/components/header";
import { Footer } from "../Landing";
import LogoPossibleAfrica from "../../assets/LogoPossible.png";


const socialMedias = [
  "https://api.possible.africa/storage/logos/wwwlinkedincom.jpg",
  "https://api.possible.africa/storage/logos/linkedincom.jpg",
  "https://api.possible.africa/storage/logos/wwwtwittercom.jpg",
  "https://api.possible.africa/storage/logos/twittercom.jpg",
  "https://api.possible.africa/storage/logos/wwwfacebookcom.jpg",
  "https://api.possible.africa/storage/logos/facebookcom.jpg",
  "https://api.possible.africa/storage/logos/wwwinstagramcom.jpg",
  "https://api.possible.africa/storage/logos/instagramcom.jpg",
  "https://logo.clearbit.com/",
  "https://api.possible.africa/storage/logos/wwwredditcom.jpg",
  "https://api.possible.africa/storage/logos/workspacegooglecom.jpg",
  "https://api.possible.africa/storage/logos/myaccountgooglecom.jpg",
  "https://api.possible.africa/storage/logos/wwwyoutubecom.jpg",
  "https://api.possible.africa/storage/logos/youtubecom.jpg",
  "https://api.possible.africa/storage/logos/wwwtiktokcom.jpg",
  "https://api.possible.africa/storage/logos/tiktokcom.jpg",
  "https://api.possible.africa/storage/logos/iriswhoint.jpg",
];
const logoPlaceholder =
  "https://api.possible.africa/storage/logos/placeholder_org.jpeg";

const tagList = [
  "Fintech",
  "Edtech",
  "Healthtech",
  "Agritech",
  "E-commerce",
  "Insurtech",
  "Media & Content",
  "Telco",
  "Banking",
  "Logistics",
  "Energy & Climate",
];

const countryList = [
  "Nigeria",
  "Kenya",
  "South Africa",
  "Egypt",
  "Ghana",
  "Rwanda",
  "Senegal",
  "Côte d'Ivoire",
  "Uganda",
  "Tanzania",
  "Zambia",
  "Morocco",
  "Tunisia",
  "Cameroon",
  "Mauritius",
  "Ethiopia",
  "Democratic Republic of Congo",
  "Benin",
  "Togo",
  "Algeria",
];

function getPageEqValue(key, state) {
  if (state.length) {
    state.forEach((s) => {
      if (s.field === key) {
        return s.value;
      }
    });
  } else {
    return false;
  }
}

// Modified pageEqReducer that also updates URL
function pageEqReducer(state, action) {
  let newState = [...state];

  switch (action.field) {
    case "title":
      newState[1] = { ...state[1], value: action.value };
      break;
    case "airTags":
      newState[2] = { ...state[2], value: action.value };
      break;
    case "airMedia":
      newState[3] = { ...state[3], value: action.value };
      break;
    case "airLanguage":
      newState[4] = { ...state[4], value: action.value };
      break;
    case "countries":
      newState[5] = { ...state[5], value: action.value };
      break;
    case "reset":
      newState = [
        { field: "possible", value: true },
        { field: "title", value: "" },
        { field: "airTags", value: "" },
        { field: "airMedia", value: "" },
        { field: "airLanguage", value: "" },
        { field: "countries", value: "" },
      ];
      break;
    default:
      break;
  }

  return newState;
}

// Nouveau composant NewsCard avec un design amélioré
const NewsCard = ({ post, index, language, _, tagScrollRefs }) => {
  const createdAt = new Date(post?.airDateAdded);
  const date =
    createdAt.getDate() +
    "/" +
    (createdAt.getMonth() + 1) +
    "/" +
    createdAt.getFullYear();

  const scrollTags = (direction, postId) => {
    if (tagScrollRefs.current[postId]) {
      const scrollAmount = 150;
      if (direction === "left") {
        tagScrollRefs.current[postId].scrollLeft -= scrollAmount;
      } else {
        tagScrollRefs.current[postId].scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <Link
      to={
        post.airMedia === "Possible Africa"
          ? `/news/${post.slug}`
          : post.airLink
      }
      target={post.airMedia === "Possible Africa" ? null : "_blank"}
      rel="noopener noreferrer"
      className="group w-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden relative mt-2 block p-2"
    >
      <div className="w-full h-full bg-gradient-to-br from-white to-gray-50">
        {/* En-tête avec logo et informations */}
        <div className="p-2 flex items-start gap-1 border-b border-gray-100">
          <div className="relative">
            <div className="h-8 w-8 rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-100">
              <img
                src={
                  socialMedias.includes(post?.airLogo)
                    ? logoPlaceholder
                    : post?.airLogo
                }
                onError={(e) => {
                  e.target.src = logoPlaceholder;
                }}
                className="h-full w-full object-cover"
                alt="logo"
              />
            </div>
            {post.airMedia === "Possible Africa" && (
              <img
                src={Star}
                alt="Star possible"
                className="absolute -top-1.5 -right-1.5 w-4 h-4 animate-[wiggle_1s_ease-in-out_infinite]"
              />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-[13px] text-gray-900 truncate mt-0 mb-1">
              {post.airMedia}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>
                {_.news_published_on} {date}
              </span>
              <span>•</span>
              <span className="text-primary font-medium">
                {post.airLanguage === "ENG" ? "Anglais" : "Français"}
              </span>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="p-2">
          <h2 className="text-[1rem] font-bold text-primary group-hover:text-darkPrimary transition-colors duration-200 line-clamp-2 mb-1">
            {post.title}
          </h2>

          {/* Tags avec défilement */}
          {post?.airTags && (
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollTags("left", post.id || `${language}-${index}`);
                  }}
                  className="bg-white/80 backdrop-blur-sm shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-white focus:outline-none text-primary transition-all duration-200"
                  aria-label="Défiler vers la gauche"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>

              <div
                ref={(el) =>
                  (tagScrollRefs.current[post.id || `${language}-${index}`] =
                    el)
                }
                className="flex gap-0.5 overflow-x-auto px-7 py-1 scrollbar-hide"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {post?.airTags?.split(", ")?.map((tag) => (
                  <div
                    key={tag}
                    className="inline-flex items-center gap-0.5 px-1 py-0.5 bg-gray-50 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <img src={tagSolid} className="w-2.5 h-2.5" alt="Tag" />
                    <span className="text-xs font-medium whitespace-nowrap">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollTags("right", post.id || `${language}-${index}`);
                  }}
                  className="bg-white/80 backdrop-blur-sm shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-white focus:outline-none text-primary transition-all duration-200"
                  aria-label="Défiler vers la droite"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

function News() {
  const langTrans = useContext(LangTransContext);
  const lang = langTrans.lang;
  const _ = langTrans._;
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTags, setSelectedTags] = useState(
    searchParams.get("tags") || ""
  );
  const [selectedCountries, setSelectedCountries] = useState(
    searchParams.get("countries") || ""
  );

  // Initialize filter state from URL parameters
  const initialPageEq = [
    { field: "possible", value: true },
    { field: "title", value: searchParams.get("title") || "" },
    { field: "airTags", value: searchParams.get("tags") || "" },
    { field: "airMedia", value: searchParams.get("media") || "" },
    { field: "airLanguage", value: searchParams.get("language") || "" },
    { field: "countries", value: searchParams.get("countries") || "" },
  ];

  const [page, setPage] = useState(1);
  const [mobileFilterIsVisible, setMobileFilterIsVisible] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [filterIn, setFilterIn] = useState(true);
  const [pageS, setPageS] = useState(page + 1);
  const [engPage, setEngPage] = useState(1);
  const [frPage, setFrPage] = useState(1);
  // Initialize language from URL or fallback to context language
  const [language, setLanguage] = useState(searchParams.get("lang") || lang);
  const [languageChanging, setLanguageChanging] = useState(false);
  const [infiniteScrollIsFetching] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const heroRef = useRef(null);
  const newsContentRef = useRef(null);

  const [pageEq, dispatch] = useReducer(pageEqReducer, initialPageEq);
  const [pageEqS, setPageEqS] = useState(initialPageEq);
  const [allTags, setAllTags] = useState([]);
  const tagScrollRefs = useRef({});

  // Function to update URL parameters based on filter state
  const updateUrlParams = useCallback(
    (filters) => {
      const params = new URLSearchParams();

      if (filters[1]?.value) params.set("title", filters[1].value);
      if (filters[2]?.value) params.set("tags", filters[2].value);
      if (filters[3]?.value) params.set("media", filters[3].value);
      if (filters[4]?.value) params.set("language", filters[4].value);
      if (filters[5]?.value) params.set("countries", filters[5].value);
      if (language !== lang) params.set("lang", language);

      // Only update if params have changed
      if (params.toString() !== searchParams.toString()) {
        setSearchParams(params);
      }
    },
    [language, lang, searchParams, setSearchParams]
  );

  // Apply filters and update URL
  const applyFilters = useCallback(() => {
    setPageEqS([...pageEq]);
    updateUrlParams(pageEq);
  }, [pageEq, updateUrlParams]);

  // Reset filters and clear URL parameters
  const resetFilters = useCallback(() => {
    const resetState = [
      { field: "possible", value: true },
      { field: "title", value: "" },
      { field: "airTags", value: "" },
      { field: "airMedia", value: "" },
      { field: "airLanguage", value: "" },
      { field: "countries", value: "" },
    ];

    dispatch({ field: "reset", value: "" });
    setPageEqS(resetState);
    setSelectedTags([]);
    setSelectedCountries([]);
    setSearchParams(new URLSearchParams());
  }, [setSearchParams]);

  // Modified filter change handler that updates UI state
  const handleFilterEqChange = useCallback(
    (field, value) => {
      dispatch({ field, value });
      setPage(1);
      setPageS(2);

      // Réinitialiser les pages spécifiques par langue
      if (field === "airLanguage" || field === "language") {
        setLanguage(value || lang);
        setEngPage(1);
        setFrPage(1);
        setFirstLoad(true);
      }
    },
    [lang]
  );

  const handleTagClick = (tag) => {
    if (selectedTags != tag) {
      // Créer la nouvelle liste sans le tag sélectionné
      // const updatedTags = selectedTags.filter((t) => t !== tag);
      setSelectedTags(tag);
      dispatch({ field: "airTags", value: tag });
      setPageEqS([...pageEq, { field: "airTags", value: tag }]);

      // Mettre à jour les paramètres d'URL
      const params = new URLSearchParams(searchParams);
      params.set("tags", tag);
      setSearchParams(params);

      window.location.reload();

      // Lancer la recherche
      // applyFilters();
    } else {
      // Créer la nouvelle liste avec le nouveau tag
      setSelectedTags("");
      dispatch({ field: "airTags", value: "" });
      setPageEqS([...pageEq, { field: "airTags", value: "" }]);

      // Mettre à jour les paramètres d'URL
      const params = new URLSearchParams(searchParams);
      params.set("tags", "");
      setSearchParams(params);

      window.location.reload();

      // Lancer la recherche
      // applyFilters();
    }
  };

  const handleCountryClick = (country) => {
    if (selectedCountries != country) {
      // Créer la nouvelle liste sans le pays sélectionné
      setSelectedCountries(country);
      dispatch({ field: "countries", value: country });
      setPageEqS([...pageEq, { field: "countries", value: country }]);

      // Mettre à jour les paramètres d'URL
      const params = new URLSearchParams(searchParams);
      params.set("countries", country);
      setSearchParams(params);

      window.location.reload();
      // Lancer la recherche
      // applyFilters();
    } else {
      // Créer la nouvelle liste avec le nouveau pays
      setSelectedCountries("");
      dispatch({ field: "countries", value: "" });
      setPageEqS([...pageEq, { field: "countries", value: "" }]);

      // Mettre à jour les paramètres d'URL
      const params = new URLSearchParams(searchParams);
      params.set("countries", "");
      setSearchParams(params);

      window.location.reload();

      // Lancer la recherche
      // applyFilters();
    }
  };

  // Sync URL parameters with filter state on component mount and URL changes
  useEffect(() => {
    const title = searchParams.get("title") || "";
    const tags = searchParams.get("tags") || "";
    const media = searchParams.get("media") || "";
    const filterLanguage = searchParams.get("language") || "";
    const countries = searchParams.get("countries") || "";
    const urlLang = searchParams.get("lang");

    const newFilters = [
      { field: "possible", value: true },
      { field: "title", value: title },
      { field: "airTags", value: tags },
      { field: "airMedia", value: media },
      { field: "airLanguage", value: filterLanguage },
      { field: "countries", value: countries },
    ];

    if (
      title !== pageEq[1].value ||
      tags !== pageEq[2].value ||
      media !== pageEq[3].value ||
      filterLanguage !== pageEq[4].value ||
      countries !== pageEq[5].value
    ) {
      // Update internal state based on URL parameters
      dispatch({ field: "title", value: title });
      dispatch({ field: "airTags", value: tags });
      dispatch({ field: "airLanguage", value: filterLanguage });
      dispatch({ field: "airMedia", value: media });
      dispatch({ field: "countries", value: countries });
      setPageEqS(newFilters);
    }

    // Update language if specified in URL
    if (urlLang && urlLang !== language) {
      setLanguage(urlLang);
    }
  }, [searchParams, location.search, selectedTags, selectedCountries]);

  // Watch for language changes and update URL
  useEffect(() => {
    if (lang !== language) {
      setLanguage(lang);
      setLanguageChanging(true);
      setFirstLoad(true);

      // Update language in URL
      const params = new URLSearchParams(searchParams);
      params.set("lang", lang);
      setSearchParams(params);

      refetch();

      setTimeout(() => {
        setLanguageChanging(false);
      }, 1000);
    }
  }, [lang]);

  const {
    data: allNews = [],
    isLoading,
    isFetching,
    isError,
    isSuccess,
    error,
    refetch,
  } = useGetPostsQuery({
    limit: firstLoad ? 10 * page : 10 * (page + 1),
    page: firstLoad ? page : page + 1,
    fields: [],
    eq: pageEqS,
  });

  useEffect(() => {
    if (page != pageS || pageEq.length) {
      refetch();
    }
  }, [isLoading, page, pageS]);

  // Add scroll listener to handle hero visibility
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Reset hero visibility
    setShowHero(true);
    if (heroRef.current) {
      heroRef.current.style.opacity = 1;
    }
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      // Calculate opacity based on scroll position
      const opacity = Math.max(0, 1 - scrollPosition / (heroHeight * 0.7));

      // Apply opacity to hero section
      heroRef.current.style.opacity = opacity;

      // Hide hero completely when it's almost invisible
      setShowHero(opacity > 0.05);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  if (isError || error) {
    return (
      <>
        <Header shadow page="/news" />
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
      <Header shadow page="/news" />
      {/* Hero Section */}
      {showHero && (
        <div
          // ref={heroRef}
          className="w-full flex flex-col justify-center items-center transition-opacity duration-500 ease-out relative"
          style={{
            transform: showHero ? "translateY(0)" : "translateY(-100%)",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-primary/5 z-0"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 z-10 opacity-10">
            <svg width="100%" height="auto">
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle
                  id="pattern-circle"
                  cx="10"
                  cy="10"
                  r="1.6"
                  fill="#6366F1"
                ></circle>
              </pattern>
              <rect
                id="rect"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              ></rect>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="inline bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  {_.news_cta_text_one || "The latest news from Africa,"}
                </span>
                <br />
                <span className="inline">
                  {_.news_cta_text_two || "brought together for you"}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                {_.news_cta_subtext ||
                  "Stay on top of trends, capture innovations and seize the best opportunities"}
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    newsContentRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-darkPrimary transition-all duration-300 flex items-center justify-center"
                >
                  {_.news_cta_button || "Discover News"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {pageEqS[1].value || pageEqS[2].value || pageEqS[3].value ? (
                  <button
                    onClick={resetFilters}
                    className="px-8 py-3 bg-white text-primary border border-primary rounded-full font-medium hover:bg-gray-50 transition-all duration-300"
                  >
                    {_.reset_filters || "Reset Filters"}
                  </button>
                ) : (
                  <button
                    onClick={() => setMobileFilterIsVisible(true)}
                    className="px-8 py-3 bg-white text-primary border border-primary rounded-full font-medium hover:bg-gray-50 transition-all duration-300 md:hidden"
                  >
                    {_.filter_news || "Filter News"}
                  </button>
                )}
              </div> */}
            </div>
          </div>

          {/* Bottom fade effect */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div> */}

          {/* Powered By Possible Africa */}
          <div className="z-30 flex items-center gap-2">
            <span className="text-xs md:text-base font-extrabold tracking-widest text-primary drop-shadow-lg uppercase" style={{letterSpacing: '0.15em'}}>
              Powered By
            </span>
            <span className="text-xs md:text-base font-extrabold tracking-widest text-blue-500 drop-shadow-lg uppercase bg-transparent px-2 py-1 rounded-full animate-pulse duration-1000" style={{letterSpacing: '0.15em'}}>
            <img
              src={LogoPossibleAfrica}
              alt="Possible Africa"
              className="h-10 mb-4 mx-auto md:mx-0"
            />
            </span>
          </div>
        </div>
      )}
      <div ref={newsContentRef} className="flex justify-center">
        {/* Filter Results Banner - Only shows when filters are active */}
        <div className="flex flex-col w-11/12">
          {(pageEqS[1].value || pageEqS[2].value || pageEqS[3].value) &&
            !isFetching && (
              <div className="w-full bg-gradient-to-r from-white to-primary/5 border-b border-primary/10 py-3 mb-4 rounded-[12px]">
                <div className="w-11/12 mx-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    {/* Filter summary */}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-800 mb-1">
                        {_.news_filter_results}
                        <span className="ml-2 text-primary font-bold">
                          {allNews.length}
                        </span>
                      </h2>
                      <p className="text-sm text-gray-600">
                        {_.news_we_found}{" "}
                        <span className="font-medium text-primary">
                          {allNews.length}
                        </span>{" "}
                        {_.news_results_with}{" "}
                        <span className="font-medium text-primary">
                          {
                            allNews.filter(
                              (el) =>
                                el.airTrans ===
                                (language === "fr" ? language : "eng")
                            ).length
                          }
                        </span>{" "}
                        {_.news_shown}{" "}
                        {language === "eng" ? "in french" : "in english"}
                      </p>
                    </div>

                    {/* Active filters pills */}
                    <div className="mt-3 sm:mt-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm text-gray-500 mr-1">
                          {_.news_active_filters}:
                        </span>
                        {pageEqS[1].value && (
                          <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1">
                            <span>{_.news_title}:</span>
                            <span className="font-semibold">
                              {pageEqS[1].value}
                            </span>
                          </div>
                        )}
                        {pageEqS[2].value && (
                          <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1">
                            <span>{_.news_tag}:</span>
                            <span className="font-semibold">
                              {pageEqS[2].value}
                            </span>
                          </div>
                        )}
                        {pageEqS[3].value && (
                          <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1">
                            <span>{_.news_language}:</span>
                            <span className="font-semibold">
                              {pageEqS[3].value === "ENG"
                                ? "Anglais"
                                : "Français"}
                            </span>
                          </div>
                        )}
                        <button
                          onClick={resetFilters}
                          className="ml-1 bg-white text-gray-500 hover:text-danger rounded-full p-1 transition-colors"
                          aria-label="Reset filters"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar for results distribution */}
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{
                            width: `${
                              allNews.length
                                ? (allNews.filter(
                                    (el) =>
                                      el.airTrans ===
                                      (language == "fr" ? language : "eng")
                                  ).length /
                                    allNews.length) *
                                  100
                                : 0
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium whitespace-nowrap">
                      {Math.round(
                        allNews.length
                          ? (allNews.filter(
                              (el) =>
                                el.airTrans ===
                                (language == "fr" ? language : "eng")
                            ).length /
                              allNews.length) *
                              100
                          : 0
                      )}
                      % {language === "fr" ? "FR" : "EN"}
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-11/12">
          <div
            onClick={() => setMobileFilterIsVisible(!mobileFilterIsVisible)}
            className={`cursor-pointer md:hidden text-2xl p-2 bg-white text-primary border-l-0 border-2 ${
              mobileFilterIsVisible ? "border-danger" : "border-primary"
            } sticky top-2.5 z-[110] rounded-r-full flex justify-center items-center w-[44px] gap-2 active:scale-110`}
          >
            <span className="hidden">Filtres</span>
            <img
              className="w-[24px] text-primary"
              src={mobileFilterIsVisible ? xmarkSolid : filterSolid}
              alt=""
            />
          </div>
          <div
            className={`md:hidden fixed top-0 bottom-0 left-0 right-0 bg-white w-[100vw] h-[100vh] z-[100] flex justify-center items-center ${
              mobileFilterIsVisible ? "" : "hidden"
            }`}
          >
            <div className="absolute min-h-[400px] max-h-[100vh] flex justify-start flex-col items-center gap-5 border-[.5px] rounded-[12px] border-primary p-5 ">
              {/* Somes tags */}

              <div className="flex flex-wrap gap-2">
                <h1 className="text-lg font-bold w-full">Tags</h1>
                {tagList.map((tag, index) => (
                  <button
                    key={index}
                    className={`bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1 ${
                      selectedTags.includes(tag) ? "!bg-primary text-white" : ""
                    }`}
                    onClick={() => handleTagClick(tag)}
                  >
                    <span>{tag}</span>
                  </button>
                ))}
              </div>

              {/* Sommes countries */}

              <div className="flex flex-wrap gap-2">
                <h1 className="text-lg font-bold w-full">Countries</h1>
                {countryList.map((country, index) => (
                  <button
                    key={index}
                    className={`bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1 ${
                      selectedCountries.includes(country)
                        ? "!bg-primary text-white"
                        : ""
                    }`}
                    onClick={() => handleCountryClick(country)}
                  >
                    <span>{country}</span>
                  </button>
                ))}
              </div>

              <Input
                label={_.news_search_by_tag}
                placeholder={_.news_search_by_tag_enter_a_tag}
                type="text"
                value={getPageEqValue("airTags", pageEq)}
                onChange={(e) => {
                  dispatch({ field: "airTags", value: e.target.value });
                }}
              />

              {/* <Input
                label={_.news_search_by_media || "Search by media"}
                placeholder={
                  _.news_search_by_media_enter_a_media || "Enter a media name"
                }
                type="text"
                value={getPageEqValue("airMedia", pageEq)}
                onChange={(e) => {
                  dispatch({ field: "airMedia", value: e.target.value });
                }}
              /> */}

              <button
                className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                onClick={() => {
                  applyFilters();
                  setTimeout(() => {
                    setMobileFilterIsVisible(false);
                  }, 1000);
                }}
              >
                {_.news_btn_filter}
              </button>
              <button
                className="w-full h-[45px] bg-transparent rounded-full text-lg text-primary border-2 border-primary hover:text-white font-bold hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                onClick={() => {
                  resetFilters();
                  setTimeout(() => {
                    setMobileFilterIsVisible(false);
                  }, 1000);
                }}
              >
                {_.news_btn_reset_filter}
              </button>
              <div className="flex justify-center items-center w-full">
                {isFetching && (
                  <img
                    src={Loader}
                    style={{
                      transformOrigin: "bottom center",
                      translate: "-35px 0",
                    }}
                    alt="Loader possible"
                    className="mx-auto w-8 animate-[loading_1s_ease-in-out_infinite_alternate]"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mx-auto bg-transparent w-11/12 mt-10 text-darkGray lg:flex lg:gap-x-8">
            <div className="absolute md:sticky w-1/3 top-10 min-h-[400px] max-h-[95vh] overflow-x-scroll hidden lg:flex lg:justify-start lg:flex-col lg:items-center lg:gap-5 lg:border-[.5px] rounded-[12px] lg:border-primary lg:p-5 ">
              {/* Somes tags */}

              <div className="flex flex-wrap gap-2">
                <h1 className="text-lg font-bold w-full">Tags</h1>
                {tagList.map((tag, index) => (
                  <button
                    key={index}
                    className={`bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1 ${
                      selectedTags.includes(tag) ? "!bg-primary text-white" : ""
                    }`}
                    onClick={() => handleTagClick(tag)}
                  >
                    <span>{tag}</span>
                  </button>
                ))}
              </div>

              {/* Sommes countries */}

              <div className="flex flex-wrap gap-2">
                <h1 className="text-lg font-bold w-full">Countries</h1>
                {countryList.map((country, index) => (
                  <button
                    key={index}
                    className={`bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1 ${
                      selectedCountries.includes(country)
                        ? "!bg-primary text-white"
                        : ""
                    }`}
                    onClick={() => handleCountryClick(country)}
                  >
                    <span>{country}</span>
                  </button>
                ))}
              </div>

              {/* <Input
                label={_.news_search_by_media || "Search by media"}
                placeholder={
                  _.news_search_by_media_enter_a_media || "Enter a media name"
                }
                type="text"
                value={pageEq[3].value}
                inputClassName="w-full border-[.5px] border-primary rounded-full"
                containerClassName="w-full"
                onChange={(e) => {
                  dispatch({ field: "airMedia", value: e.target.value });
                }}
              /> */}

              <Input
                label={_.news_search_by_tag}
                placeholder={_.news_search_by_tag_enter_a_tag}
                type="text"
                value={pageEq[2].value}
                inputClassName="w-full border-[.5px] border-primary rounded-full"
                containerClassName="w-full"
                onChange={(e) => {
                  dispatch({ field: "airTags", value: e.target.value });
                }}
              />

              {/* <Input
                label={_.news_search_by_country || "Search by country"}
                placeholder={
                  _.news_search_by_country_enter_a_country ||
                  "Enter a country name"
                }
                type="text"
                value={pageEq[5].value}
                inputClassName="w-full border-[.5px] border-primary rounded-full"
                containerClassName="w-full"
                onChange={(e) => {
                  dispatch({ field: "countries", value: e.target.value });
                }}
              /> */}

              <div className="flex justify-between w-full gap-3">
                <button
                  className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                  onClick={applyFilters}
                >
                  {_.news_btn_filter}
                </button>
                <button
                  className="w-full h-[45px] bg-transparent rounded-full text-lg text-primary border-2 border-primary hover:text-white font-bold hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                  onClick={resetFilters}
                >
                  {_.news_btn_reset_filter}
                </button>
              </div>

              <div className="flex justify-center items-center w-full">
                {isFetching && (
                  <img
                    src={Loader}
                    style={{
                      transformOrigin: "bottom center",
                      translate: "-35px 0",
                    }}
                    alt="Loader possible"
                    className="mx-auto w-8 animate-[loading_1s_ease-in-out_infinite_alternate]"
                  />
                )}
              </div>
            </div>
            <div className="min-h-[400px] rounded-tr-[12px] flex flex-col gap-y-[30px] md:w-2/3">
              <div className="w-full min-h-40 bg-white border-t-[.5px] border-r-[.5px] border-primary relative flex flex-col justify-start items-center pb-[20px] rounded-tr-[12px]">
                <span className="text-[16px] border-[.5px] border-primary bg-lightPrimary text-primary h-[30px] w-[130px] font-medium rounded-full flex justify-center items-start absolute -top-[14px] left-5">
                  <span className="font-semibold">{_.news_more_recent}</span>
                </span>
                <span className="p-2"></span>
                {/* One card in recents part */}
                {language === "fr"
                  ? allNews
                      .filter((el) => el.airTrans === "fr")
                      .slice(0, 10)
                      .map((post, index) => (
                        <NewsCard
                          key={post.id || `fr-${index}`}
                          post={post}
                          index={index}
                          language="fr"
                          _={_}
                          tagScrollRefs={tagScrollRefs}
                        />
                      ))
                  : allNews
                      .filter((el) => el.airTrans === "eng")
                      .slice(0, 10)
                      .map((post, index) => (
                        <NewsCard
                          key={post.id || `eng-${index}`}
                          post={post}
                          index={index}
                          language="eng"
                          _={_}
                          tagScrollRefs={tagScrollRefs}
                        />
                      ))}
              </div>
              <div
                className={
                  allNews.filter((el) => el.airTrans === "fr").slice(10)
                    .length === 0
                    ? "hidden"
                    : "w-full min-h-40 bg-white border-t-[.5px] border-primary relative flex flex-col justify-start items-center pb-[20px]"
                }
              >
                <span className="text-[16px] border-[.5px] border-primary bg-lightPrimary text-primary h-[30px] w-[150px] font-medium rounded-full flex justify-center items-start absolute -top-[14px] left-5">
                  <span className="font-semibold">{_.news_least_recent}</span>
                </span>
                {/* One card in others parts */}
                {language === "fr"
                  ? allNews
                      .filter((el) => el.airTrans === "fr")
                      .slice(10)
                      .map((post, index) => (
                        <NewsCard
                          key={post.id || `fr-older-${index}`}
                          post={post}
                          index={index}
                          language="fr"
                          _={_}
                          tagScrollRefs={tagScrollRefs}
                        />
                      ))
                  : allNews
                      .filter((el) => el.airTrans === "eng")
                      .slice(10)
                      .map((post, index) => (
                        <NewsCard
                          key={post.id || `eng-older-${index}`}
                          post={post}
                          index={index}
                          language="eng"
                          _={_}
                          tagScrollRefs={tagScrollRefs}
                        />
                      ))}
              </div>

              <div
                className={
                  isFetching
                    ? "w-full md:flex md:justify-between"
                    : "w-full md:flex md:justify-end"
                }
              >
                {isFetching && (
                  <img
                    src={Loader}
                    style={{
                      transformOrigin: "bottom center",
                      translate: "-35px 0",
                    }}
                    alt="Loader possible"
                    className="ml-24 w-8 animate-[loading_1s_ease-in-out_infinite_alternate]"
                  />
                )}
                <button
                  className="w-full mb-8 h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 md:w-6/12 lg:w-5/12 transition-all duration-300"
                  onClick={() => {
                    setPageS((s) => s + 1);
                    setPage((s) => s + 1);
                  }}
                >
                  {_.load_more_results}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default News;

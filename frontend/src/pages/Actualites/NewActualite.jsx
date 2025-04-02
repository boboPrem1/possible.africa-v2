// eslint-disable-next-line no-unused-vars
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import CardComponent from "../../components/CardComponent.jsx";
import {
  useGetPostCategoriesQuery,
  useGetPostsQuery,
} from "../../features/api/apiSlice.js";
import CustomContainer from "../../utils/CustomContainer.jsx";
import { ParseSlice } from "../../utils/htmlParser.jsx";
import { useContext, useEffect, useReducer, useRef, useState, useCallback } from "react";
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
import { Header } from "../Landing.jsx";
import { LangTransContext } from "../../langTransContext.js";
import { logoPlaceholder, socialMedias } from "../NewOrganisations.jsx";

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

function pageEqReducer(state, action) {
  let modifieState = [
    { field: "possible", value: true },
    { field: "title", value: "" },
    { field: "airTags", value: "" },
    { field: "airLanguage", value: "" },
  ];
  let titleValue = "";
  let airLanguageValue = "";
  let airTagsValue = "";
  switch (action.field) {
    case "title":
      state[1] = { ...state[1], value: action.value };
      break;
    case "airTags":
      state[2] = { ...state[2], value: action.value };
      break;
    case "airLanguage":
      state[3] = { ...state[3], value: action.value };
      break;
    case "reset":
      state = [
        { field: "possible", value: true },
        { field: "title", value: "" },
        { field: "airTags", value: "" },
        { field: "airLanguage", value: "" },
      ];
      break;
    default:
      console.log("undefined action");
      break;
  }
  // console.log(state);
  // return [
  //   { field: "possible", value: true },
  //   { field: "title", value: titleValue },
  //   { field: "airTags", value: airTagsValue },
  //   { field: "airLanguage", value: airLanguageValue },
  // ];
  return [...state];
}

function News() {
  const langTrans = useContext(LangTransContext);
  const lang = langTrans.lang;
  const _ = langTrans._;
  const initialPageEq = [
    { field: "possible", value: true },
    { field: "title", value: "" },
    { field: "airTags", value: "" },
    { field: "airLanguage", value: "" },
  ];
  const [page, setPage] = useState(1);
  const [mobileFilterIsVisible, setMobileFilterIsVisible] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [filterIn, setFilterIn] = useState(true);
  const [pageS, setPageS] = useState(page + 1);
  const [engPage, setEngPage] = useState(1);
  const [frPage, setFrPage] = useState(1);
  const [language, setLanguage] = useState(lang);
  const [languageChanging, setLanguageChanging] = useState(false);
  const [infiniteScrollIsFetching] = useState(false);
  const [pageEq, dispatch] = useReducer(pageEqReducer, [
    { field: "possible", value: true },
    { field: "title", value: "" },
    { field: "airTags", value: "" },
    { field: "airLanguage", value: "" },
  ]);
  const [pageEqS, setPageEqS] = useState([
    { field: "possible", value: true },
    { field: "title", value: "" },
    { field: "airTags", value: "" },
    { field: "airLanguage", value: "" },
  ]);
  const [allTags, setAllTags] = useState([]);
  const tagScrollRefs = useRef({});

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

  // const {
  //   data: allNewsLength,
  //   isLoading: allNewsLengthIsLoading,
  //   isFetching: allNewsLengthIsFetching,
  //   refetch: refechAllNewsLength,
  // } = useGetPostsQuery({
  //   fields: [],
  //   eq: pageEqS[0].value ? pageEqS : [],
  // });

  useEffect(() => {
    if (page != pageS || pageEq.length) {
      refetch();
      // console.log(page, pageS);
    } else {
      // console.log(page, pageS);
    }
  }, [isLoading, page, pageS]);

  // Surveiller les changements de langue
  useEffect(() => {
    if (lang !== language) {
      setLanguage(lang);
      setLanguageChanging(true);
      setFirstLoad(true);
      refetch();
      
      setTimeout(() => {
        setLanguageChanging(false);
      }, 1000);
    }
  }, [lang]);

  const scrollTags = (direction, postId) => {
    if (tagScrollRefs.current[postId]) {
      const scrollAmount = 150; // Ajuster selon besoin
      if (direction === 'left') {
        tagScrollRefs.current[postId].scrollLeft -= scrollAmount;
      } else {
        tagScrollRefs.current[postId].scrollLeft += scrollAmount;
      }
    }
  };

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
      </>
    );
  }
  if (isError || error) {
    return (
      <>
        <Header page="/news" />
        <div className="flex justify-center">
          <div className="flex flex-col w-11/12">
            <NoData />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header page="/news" />
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
          {/* <div className="mx-auto max-w-[1280px] bg-green-600 w-full min-h-[400px] grid grid-cols-[1fr_2fr_1fr] gap-x-5"> */}
          <div
            className={`md:hidden fixed top-0 bottom-0 left-0 right-0 bg-white w-[100vw] h-[100vh] z-[100] flex justify-center items-center ${
              mobileFilterIsVisible ? "" : "hidden"
            }`}
          >
            <div className="absolute min-h-[400px] max-h-[100vh] flex justify-start flex-col items-center gap-5 border-[.5px] rounded-[12px] border-primary p-5 ">
              {/* {JSON.stringify(pageEq)} */}
              {/* <div className="w-[248px] h-10 flex justify-center text-center rounded-lg shadow-sm drop-shadow-xl overflow-hidden">
                <div
                  className={
                    language === "fr"
                      ? "w-[124px] h-10 flex justify-center flex-col cursor-pointer bg-[#2BB19C] text-white font-semibold"
                      : "w-[124px] h-10 flex justify-center flex-col cursor-pointer"
                  }
                  onClick={() => {
                    setLanguageChanging(true);
                    setLanguage("fr");
                    setTimeout(() => {
                      setLanguageChanging(false);
                    }, 3000);
                    setTimeout(() => {
                      setMobileFilterIsVisible(false);
                    }, 2000);
                  }}
                >
                  <span>Français</span>
                </div>
                <div
                  className={
                    language === "eng"
                      ? "w-[124px] h-10 flex justify-center flex-col cursor-pointer bg-[#2BB19C] text-white font-semibold"
                      : "w-[124px] h-10 flex justify-center flex-col cursor-pointer"
                  }
                  onClick={() => {
                    setLanguageChanging(true);
                    setLanguage("eng");
                    setTimeout(() => {
                      setLanguageChanging(false);
                    }, 3000);
                    setTimeout(() => {
                      setMobileFilterIsVisible(false);
                    }, 2000);
                  }}
                >
                  <span>Anglais</span>
                </div>
              </div> */}
              <Input
                label={_.news_search_by_title}
                placeholder={_.news_search_by_title_enter_a_title}
                type="text"
                // value={pageEq[1].value}
                value={getPageEqValue("title", pageEq)}
                onChange={(e) => {
                  dispatch({ field: "title", value: e.target.value });
                }}
              />
              <Input
                label={_.news_search_by_tag}
                placeholder={_.news_search_by_tag_enter_a_tag}
                type="text"
                value={getPageEqValue("airTags", pageEq)}
                onChange={(e) => {
                  dispatch({ field: "airTags", value: e.target.value });
                }}
              />
              {/* <CustumSelect
          label="Pays du siège social"
          multi
          placeholder="Choisissez un pays ."
        /> */}
              {/* <CustumSelect
          label="Filtrer par Tag"
          options={[]}
          multi
          placeholder="Choisissez un tag ."
        /> */}
              <div className="flex gap-2">
                <button
                  className={`text-sm font-medium px-4 py-2 rounded-full ${
                    language === "fr"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-primary"
                  }`}
                  onClick={() => {
                    setLanguage("fr");
                    refetch();
                    if (languageChanging) return;
                    setLanguageChanging(true);
                    setTimeout(() => {
                      setLanguageChanging(false);
                    }, 1000);
                  }}
                >
                  {_.news_french}
                </button>
                <button
                  className={`text-sm font-medium px-4 py-2 rounded-full ${
                    language === "en"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-primary"
                  }`}
                  onClick={() => {
                    setLanguage("en");
                    refetch();
                    if (languageChanging) return;
                    setLanguageChanging(true);
                    setTimeout(() => {
                      setLanguageChanging(false);
                    }, 1000);
                  }}
                >
                  {_.news_english}
                </button>
              </div>
              <CustumSelect
                label={_.news_search_language}
                placeholder={_.news_search_language_choice}
                // value={pageEq[3].value}
                value={getPageEqValue("airLanguage", pageEq)}
                onChange={(e) => {
                  dispatch({ field: "airLanguage", value: e.target.value });
                }}
              >
                <option value="">{_.news_search_language_choice}</option>
                <option value="ENG">English</option>
                <option value="FR">Français</option>
              </CustumSelect>

              <button
                className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                onClick={() => {
                  setPageEqS([...pageEq]);
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
                  setPageEqS([
                    { field: "possible", value: true },
                    { field: "title", value: "" },
                    { field: "airTags", value: "" },
                    { field: "airLanguage", value: "" },
                  ]);
                  dispatch({ field: "reset", value: "" });
                  setTimeout(() => {
                    setMobileFilterIsVisible(false);
                  }, 1000);
                }}
              >
                {_.news_btn_reset_filter}
              </button>
              {/* <div>
          <div className="font-semibold">Langue de publication</div>
          <Input label="Anglais" type="checkbox" />
          <Input label="Français" type="checkbox" />
        </div> */}
              {/* <Input
          label="Date de publication"
          placeholder="Choisissez la date ."
          type="date"
          onChange={(e) => {
            setPageEq(
              pageEq.map((a) => {
                if (a.field === "airDateAdded") {
                  return { field: a.field, value: e.target.value };
                } else {
                  return a;
                }
              })
            );
          }}
        /> */}
              {/* <button
          onClick={() => {
            setPageEqS((s) => {
              return [...pageEq];
            });
          }}
          className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
        >
          Filtrer
        </button> */}
              {/* <button
          onClick={() => {
            setPageEq([
              { field: "possible", value: true },
              { field: "title", value: "" },
              { field: "airTags", value: "" },
              { field: "airLanguage", value: "" },
            ]);
            // refetch();
          }}
          className="w-full h-[45px] bg-transparent border-2 border-primary text-primary rounded-full text-lg font-bold hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
        >
          Réinitialiser les filtres
        </button> */}
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
          <div className="mx-auto bg-transparent w-11/12 mt-10 text-darkGray lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:gap-x-5 max-w-[1280px]">
            <div className="absolute md:sticky top-10 min-h-[400px] max-h-[100vh] overflow-x-scroll hidden lg:flex lg:justify-start lg:flex-col lg:items-center lg:gap-5 lg:border-[.5px] rounded-[12px] lg:border-primary lg:p-5 ">
              {/* {JSON.stringify(pageEq)} */}
              {/* <div className="w-[248px] h-10 flex justify-center text-center rounded-lg shadow-sm drop-shadow-xl overflow-hidden">
                <div
                  className={
                    language === "fr"
                      ? "w-[124px] h-10 flex justify-center flex-col cursor-pointer bg-[#2BB19C] text-white font-semibold"
                      : "w-[124px] h-10 flex justify-center flex-col cursor-pointer"
                  }
                  onClick={() => {
                    setLanguageChanging(true);
                    setLanguage("fr");
                    setTimeout(() => {
                      setLanguageChanging(false);
                    }, 3000);
                  }}
                >
                  <span>Français</span>
                </div>
                <div
                  className={
                    language === "eng"
                      ? "w-[124px] h-10 flex justify-center flex-col cursor-pointer bg-[#2BB19C] text-white font-semibold"
                      : "w-[124px] h-10 flex justify-center flex-col cursor-pointer"
                  }
                  onClick={() => {
                    setLanguageChanging(true);
                    setLanguage("eng");
                    setTimeout(() => {
                      setLanguageChanging(false);
                    }, 3000);
                  }}
                >
                  <span>Anglais</span>
                </div>
              </div> */}
              <Input
                label={_.news_search_by_title}
                placeholder={_.news_search_by_title_enter_a_title}
                type="text"
                value={pageEq[1].value}
                onChange={(e) => {
                  dispatch({ field: "title", value: e.target.value });
                }}
              />
              <Input
                label={_.news_search_by_tag}
                placeholder={_.news_search_by_tag_enter_a_tag}
                type="text"
                value={pageEq[2].value}
                onChange={(e) => {
                  dispatch({ field: "airTags", value: e.target.value });
                }}
              />
              {/* <CustumSelect
          label="Pays du siège social"
          multi
          placeholder="Choisissez un pays ."
        /> */}
              {/* <CustumSelect
          label="Filtrer par Tag"
          options={[]}
          multi
          placeholder="Choisissez un tag ."
        /> */}
              <div className="flex gap-2">
                <button
                  className={`text-sm font-medium px-4 py-2 rounded-full ${
                    language === "fr"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-primary"
                  }`}
                  onClick={() => {
                    setLanguage("fr");
                    refetch();
                    if (languageChanging) return;
                    setLanguageChanging(true);
                    setTimeout(() => {
                      setLanguageChanging(false);
                    }, 1000);
                  }}
                >
                  {_.news_french}
                </button>
                <button
                  className={`text-sm font-medium px-4 py-2 rounded-full ${
                    language === "en"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-primary"
                  }`}
                  onClick={() => {
                    setLanguage("en");
                    refetch();
                    if (languageChanging) return;
                    setLanguageChanging(true);
                    setTimeout(() => {
                      setLanguageChanging(false);
                    }, 1000);
                  }}
                >
                  {_.news_english}
                </button>
              </div>
              <CustumSelect
                label={_.news_search_language}
                placeholder={_.news_search_language_choice}
                // value={pageEq[3].value}
                value={pageEq[3].value}
                onChange={(e) => {
                  dispatch({ field: "airLanguage", value: e.target.value });
                }}
              >
                <option value="">{_.news_search_language_choice}</option>
                <option value="ENG">Anglais</option>
                <option value="FR">Français</option>
              </CustumSelect>

              <button
                className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                onClick={() => setPageEqS([...pageEq])}
              >
                {_.news_btn_filter}
              </button>
              <button
                className="w-full h-[45px] bg-transparent rounded-full text-lg text-primary border-2 border-primary hover:text-white font-bold hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                onClick={() => {
                  setPageEqS([
                    { field: "possible", value: true },
                    { field: "title", value: "" },
                    { field: "airTags", value: "" },
                    { field: "airLanguage", value: "" },
                  ]);
                  dispatch({ field: "reset", value: "" });
                }}
              >
                {_.news_btn_reset_filter}
              </button>
              {/* <div>
          <div className="font-semibold">Langue de publication</div>
          <Input label="Anglais" type="checkbox" />
          <Input label="Français" type="checkbox" />
        </div> */}
              {/* <Input
          label="Date de publication"
          placeholder="Choisissez la date ."
          type="date"
          onChange={(e) => {
            setPageEq(
              pageEq.map((a) => {
                if (a.field === "airDateAdded") {
                  return { field: a.field, value: e.target.value };
                } else {
                  return a;
                }
              })
            );
          }}
        /> */}
              {/* <button
          onClick={() => {
            setPageEqS((s) => {
              return [...pageEq];
            });
          }}
          className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
        >
          Filtrer
        </button> */}
              {/* <button
          onClick={() => {
            setPageEq([
              { field: "possible", value: true },
              { field: "title", value: "" },
              { field: "airTags", value: "" },
              { field: "airLanguage", value: "" },
            ]);
            // refetch();
          }}
          className="w-full h-[45px] bg-transparent border-2 border-primary text-primary rounded-full text-lg font-bold hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
        >
          Réinitialiser les filtres
        </button> */}
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
            {/* <div></div> */}
            <div className="min-h-[400px] rounded-[12px] flex flex-col gap-y-[30px] md:max-w-[600px] mx-auto">
              <div className="w-full min-h-40 bg-white border-t-[.5px] border-primary relative flex flex-col justify-start items-center pb-[20px]">
                <span className="text-[16px] border-[.5px] border-primary bg-lightPrimary text-primary h-[30px] w-[130px] font-medium rounded-full flex justify-center items-start absolute -top-[14px] left-5">
                  <span className="font-semibold">{_.news_more_recent}</span>
                </span>
                {/* One card in recents part */}
                {language === "fr"
                  ? allNews
                      .filter((el) => el.airTrans === "fr")
                      .slice(0, 10)
                      .map((post, index) => {
                        const createdAt = new Date(post?.airDateAdded);
                        // transform date to french format
                        const date =
                          createdAt.getDate() +
                          "/" +
                          (createdAt.getMonth() + 1) +
                          "/" +
                          createdAt.getFullYear();
                        return (
                          <a
                            href={
                              post.airMedia === "Possible Africa"
                                ? `/news/${post.slug}`
                                : post.airLink
                            }
                            target={
                              post.airMedia === "Possible Africa"
                                ? null
                                : "_blank"
                            }
                            rel="noopener noreferrer"
                            className="w-full h-[200px] bg-white shadow-lg mt-[20px] rounded-[12px] p-[12px] overflow-hidden relative"
                          >
                            <div key={index} className="w-full h-full bg-white">
                              {post.airMedia === "Possible Africa" && (
                                <img
                                  src={Star}
                                  alt="Star possible"
                                  className="mx-auto w-7 animate-[wiggle_1s_ease-in-out_infinite] absolute top-3 right-3"
                                />
                              )}
                              <div className="h-[46px] w-full flex justify-start items-center gap-x-[8px]">
                                <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-transparent">
                                  <img
                                    src={
                                      socialMedias.includes(post?.airLogo)
                                        ? logoPlaceholder
                                        : post?.airLogo
                                    }
                                    onError={(e) => {
                                      e.target.src = logoPlaceholder;
                                    }}
                                    height={40}
                                    width={40}
                                    alt="logo"
                                  />
                                </div>
                                <div className="flex flex-col justify-start min-h-[46px]">
                                  <div>
                                    <span className="font-semibold md:text-lg">
                                      {post.airMedia}
                                    </span>
                                  </div>
                                  <div className="text-xs italic md:text-sm">
                                    {_.news_published_on} {date},{" "}
                                    {_.news_original_language} :{" "}
                                    <span className="text-primary">
                                      {post.airLanguage === "ENG"
                                        ? "Anglais"
                                        : "Français"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[90px] w-full text-primary hover:text-darkPrimary active:text-darkPrimary visited:text-darkPrimary font-bold flex items-center md:text-xl">
                                {post.title.length > 110
                                  ? post.title.slice(0, 110) + " . . ."
                                  : post.title}
                              </div>
                              <div className="relative h-[40px] w-full">
                                {/* Flèche gauche */}
                                {post?.airTags && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      scrollTags('left', post.id || 'fr-' + index);
                                    }} 
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-50 focus:outline-none text-primary"
                                    aria-label="Défiler vers la gauche"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                )}
                                
                                {/* Conteneur des tags avec masquage de la barre de défilement */}
                                <div 
                                  ref={el => tagScrollRefs.current[post.id || 'fr-' + index] = el}
                                  className="h-[40px] w-full flex justify-start items-center gap-x-[12px] overflow-x-auto px-7"
                                  style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                  <style jsx>{`
                                    div::-webkit-scrollbar {
                                      display: none;
                                    }
                                  `}</style>
                                  
                                  {post?.airTags?.split(", ")?.map((tag) => {
                                    return (
                                      <div
                                        key={tag}
                                        className="inline-flex justify-start items-center gap-x-2 rounded-full border-2 pe-3 text-mediumGray"
                                      >
                                        <div className="h-[35px] w-[35px] rounded-full border-2 scale-105 bg-transparent flex justify-center">
                                          <img
                                            src={tagSolid}
                                            height={20}
                                            width={18}
                                            alt="Tag"
                                          />
                                        </div>
                                        <span className="capitalize md:text-lg md:font-semibold text-nowrap">
                                          {tag}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                                
                                {/* Flèche droite */}
                                {post?.airTags && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      scrollTags('right', post.id || 'fr-' + index);
                                    }} 
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-50 focus:outline-none text-primary"
                                    aria-label="Défiler vers la droite"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                          </a>
                        );
                      })
                  : allNews
                      .filter((el) => el.airTrans === "eng")
                      .slice(0, 10)
                      .map((post, index) => {
                        const createdAt = new Date(post?.airDateAdded);
                        // transform date to french format
                        const date =
                          createdAt.getDate() +
                          "/" +
                          (createdAt.getMonth() + 1) +
                          "/" +
                          createdAt.getFullYear();
                        return (
                          <a
                            href={
                              post.airMedia === "Possible Africa"
                                ? `/news/${post.slug}`
                                : post.airLink
                            }
                            target={
                              post.airMedia === "Possible Africa"
                                ? null
                                : "_blank"
                            }
                            rel="noopener noreferrer"
                            className="w-full h-[200px] bg-white shadow-lg mt-[20px] rounded-[12px] p-[12px] overflow-hidden relative"
                          >
                            <div key={index} className="w-full h-full bg-white">
                              {post.airMedia === "Possible Africa" && (
                                <img
                                  src={Star}
                                  alt="Star possible"
                                  className="mx-auto w-7 animate-[wiggle_1s_ease-in-out_infinite] absolute top-3 right-3"
                                />
                              )}
                              <div className="h-[46px] w-full flex justify-start items-center gap-x-[8px]">
                                <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-slate-200">
                                  <img
                                    src={
                                      socialMedias.includes(post?.airLogo)
                                        ? logoPlaceholder
                                        : post?.airLogo
                                    }
                                    height={40}
                                    width={40}
                                    alt="logo"
                                  />
                                </div>
                                <div className="flex flex-col justify-start min-h-[46px]">
                                  <div>
                                    <span className="font-semibold md:text-lg">
                                      {post.airMedia}{" "}
                                    </span>
                                  </div>
                                  <div className="text-xs italic md:text-sm">
                                    {_.news_published_on} {date},{" "}
                                    {_.news_original_language} :{" "}
                                    <span className="text-primary">
                                      {post.airLanguage === "ENG"
                                        ? "Anglais"
                                        : "Français"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[90px] w-full text-primary hover:text-darkPrimary active:text-darkPrimary visited:text-darkPrimary font-bold flex items-center md:text-xl">
                                {post.title.length > 110
                                  ? post.title.slice(0, 110) + " . . ."
                                  : post.title}
                              </div>
                              <div className="relative h-[40px] w-full">
                                {/* Flèche gauche */}
                                {post?.airTags && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      scrollTags('left', post.id || 'eng-' + index);
                                    }} 
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-50 focus:outline-none text-primary"
                                    aria-label="Défiler vers la gauche"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                )}
                                
                                {/* Conteneur des tags avec masquage de la barre de défilement */}
                                <div 
                                  ref={el => tagScrollRefs.current[post.id || 'eng-' + index] = el}
                                  className="h-[40px] w-full flex justify-start items-center gap-x-[12px] overflow-x-auto px-7"
                                  style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                  <style jsx>{`
                                    div::-webkit-scrollbar {
                                      display: none;
                                    }
                                  `}</style>
                                  
                                  {post?.airTags?.split(", ")?.map((tag) => {
                                    return (
                                      <div
                                        key={tag}
                                        className="inline-flex justify-start items-center gap-x-2 rounded-full border-2 pe-3 text-mediumGray"
                                      >
                                        <div className="h-[35px] w-[35px] rounded-full border-2 scale-105 bg-transparent flex justify-center">
                                          <img
                                            src={tagSolid}
                                            height={20}
                                            width={18}
                                            alt="Tag"
                                          />
                                        </div>
                                        <span className="capitalize md:text-lg md:font-semibold text-nowrap">
                                          {tag}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                                
                                {/* Flèche droite */}
                                {post?.airTags && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      scrollTags('right', post.id || 'eng-' + index);
                                    }} 
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-50 focus:outline-none text-primary"
                                    aria-label="Défiler vers la droite"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                          </a>
                        );
                      })}
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
                      .map((post, index) => {
                        const createdAt = new Date(post?.airDateAdded);
                        // transform date to french format
                        const date =
                          createdAt.getDate() +
                          "/" +
                          (createdAt.getMonth() + 1) +
                          "/" +
                          createdAt.getFullYear();
                        return (
                          <a
                            href={
                              post.airMedia === "Possible Africa"
                                ? `/news/${post.slug}`
                                : post.airLink
                            }
                            target={
                              post.airMedia === "Possible Africa"
                                ? null
                                : "_blank"
                            }
                            rel="noopener noreferrer"
                            className="w-full h-[200px] bg-white shadow-lg mt-[20px] rounded-[12px] p-[12px] overflow-hidden relative"
                          >
                            <div key={index} className="w-full h-full bg-white">
                              <div className="h-[46px] w-full flex justify-start items-center gap-x-[8px]">
                                <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-slate-200">
                                  <img
                                    src={
                                      socialMedias.includes(post?.airLogo)
                                        ? logoPlaceholder
                                        : post?.airLogo
                                    }
                                    height={40}
                                    width={40}
                                    alt="logo"
                                  />
                                </div>
                                <div className="flex flex-col justify-start min-h-[46px]">
                                  <div>
                                    <span className="font-semibold md:text-lg">
                                      {post.airMedia}
                                    </span>
                                  </div>
                                  <div className="text-xs italic md:text-sm">
                                    {_.news_published_on} {date},{" "}
                                    {_.news_original_language} :{" "}
                                    <span className="text-primary">
                                      {post.airLanguage === "ENG"
                                        ? "Anglais"
                                        : "Français"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[90px] w-full text-primary hover:text-darkPrimary active:text-darkPrimary visited:text-darkPrimary font-bold flex items-center md:text-xl">
                                {post.title.length > 110
                                  ? post.title.slice(0, 110) + " . . ."
                                  : post.title}
                              </div>
                              <div className="relative h-[40px] w-full">
                                {/* Flèche gauche */}
                                {post?.airTags && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      scrollTags('left', post.id || 'other-' + index);
                                    }} 
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-50 focus:outline-none text-primary"
                                    aria-label="Défiler vers la gauche"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                )}
                                
                                {/* Conteneur des tags avec masquage de la barre de défilement */}
                                <div 
                                  ref={el => tagScrollRefs.current[post.id || 'other-' + index] = el}
                                  className="h-[40px] w-full flex justify-start items-center gap-x-[12px] overflow-x-auto px-7"
                                  style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                  <style jsx>{`
                                    div::-webkit-scrollbar {
                                      display: none;
                                    }
                                  `}</style>
                                  
                                  {post?.airTags?.split(", ")?.map((tag) => {
                                    return (
                                      <div
                                        key={tag}
                                        className="inline-flex justify-start items-center gap-x-2 rounded-full border-2 pe-3 text-mediumGray"
                                      >
                                        <div className="h-[35px] w-[35px] rounded-full border-2 scale-105 bg-transparent flex justify-center">
                                          <img
                                            src={tagSolid}
                                            height={20}
                                            width={18}
                                            alt="Tag"
                                          />
                                        </div>
                                        <span className="capitalize md:text-lg md:font-semibold text-nowrap">
                                          {tag}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                                
                                {/* Flèche droite */}
                                {post?.airTags && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      scrollTags('right', post.id || 'other-' + index);
                                    }} 
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-50 focus:outline-none text-primary"
                                    aria-label="Défiler vers la droite"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                          </a>
                        );
                      })
                  : allNews
                      .filter((el) => el.airTrans === "eng")
                      .slice(10)
                      .map((post, index) => {
                        const createdAt = new Date(post?.airDateAdded);
                        // transform date to french format
                        const date =
                          createdAt.getDate() +
                          "/" +
                          (createdAt.getMonth() + 1) +
                          "/" +
                          createdAt.getFullYear();
                        return (
                          <a
                            href={
                              post.airMedia === "Possible Africa"
                                ? `/news/${post.slug}`
                                : post.airLink
                            }
                            target={
                              post.airMedia === "Possible Africa"
                                ? null
                                : "_blank"
                            }
                            rel="noopener noreferrer"
                            className="w-full h-[200px] bg-white shadow-lg mt-[20px] rounded-[12px] p-[12px] overflow-hidden relative"
                          >
                            <div key={index} className="w-full h-full bg-white">
                              <div className="h-[46px] w-full flex justify-start items-center gap-x-[8px]">
                                <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-slate-200">
                                  <img
                                    src={
                                      socialMedias.includes(post?.airLogo)
                                        ? logoPlaceholder
                                        : post?.airLogo
                                    }
                                    height={40}
                                    width={40}
                                    alt="logo"
                                  />
                                </div>
                                <div className="flex flex-col justify-start min-h-[46px]">
                                  <div>
                                    <span className="font-semibold md:text-lg">
                                      {post.airMedia}
                                    </span>
                                  </div>
                                  <div className="text-xs italic md:text-sm">
                                    {_.news_published_on} {date},{" "}
                                    {_.news_original_language} :{" "}
                                    <span className="text-primary">
                                      {post.airLanguage === "ENG"
                                        ? "Anglais"
                                        : "Français"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[90px] w-full text-primary hover:text-darkPrimary active:text-darkPrimary visited:text-darkPrimary font-bold flex items-center md:text-xl">
                                {post.title.length > 110
                                  ? post.title.slice(0, 110) + " . . ."
                                  : post.title}
                              </div>
                              <div className="relative h-[40px] w-full">
                                {/* Flèche gauche */}
                                {post?.airTags && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      scrollTags('left', post.id || 'other-' + index);
                                    }} 
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-50 focus:outline-none text-primary"
                                    aria-label="Défiler vers la gauche"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                )}
                                
                                {/* Conteneur des tags avec masquage de la barre de défilement */}
                                <div 
                                  ref={el => tagScrollRefs.current[post.id || 'other-' + index] = el}
                                  className="h-[40px] w-full flex justify-start items-center gap-x-[12px] overflow-x-auto px-7"
                                  style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                  <style jsx>{`
                                    div::-webkit-scrollbar {
                                      display: none;
                                    }
                                  `}</style>
                                  
                                  {post?.airTags?.split(", ")?.map((tag) => {
                                    return (
                                      <div
                                        key={tag}
                                        className="inline-flex justify-start items-center gap-x-2 rounded-full border-2 pe-3 text-mediumGray"
                                      >
                                        <div className="h-[35px] w-[35px] rounded-full border-2 scale-105 bg-transparent flex justify-center">
                                          <img
                                            src={tagSolid}
                                            height={20}
                                            width={18}
                                            alt="Tag"
                                          />
                                        </div>
                                        <span className="capitalize md:text-lg md:font-semibold text-nowrap">
                                          {tag}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                                
                                {/* Flèche droite */}
                                {post?.airTags && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      scrollTags('right', post.id || 'other-' + index);
                                    }} 
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-50 focus:outline-none text-primary"
                                    aria-label="Défiler vers la droite"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                          </a>
                        );
                      })}
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
                  className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 md:w-6/12 lg:w-5/12 transition-all duration-300"
                  onClick={() => {
                    setPageS((s) => s + 1);
                    setPage((s) => s + 1);
                  }}
                >
                  {_.load_more_results}
                </button>
              </div>
            </div>
            <div className="sticky top-10 min-h-[400px] max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-gray-100 hidden lg:flex lg:justify-start lg:flex-col lg:items-center lg:gap-5 lg:border-[.5px] rounded-[12px] lg:border-primary lg:p-5">
              {(pageEqS[1].value || pageEqS[2].value || pageEqS[3].value) && !isFetching ? (
                <div className="w-full">
                  <div className="font-bold text-2xl mb-4 text-primary">
                    {_.news_filter_results}
                  </div>
                  
                  {/* Statistiques détaillées */}
                  <div className="space-y-4 mb-5">
                    <div className="font-medium text-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span>{_.news_total_results || "Résultats totaux"}:</span> 
                        <span className="text-lg font-semibold text-primary">{allNews.length}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    
                    <div className="font-medium text-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span>{_.news_in_current_language || "Dans la langue actuelle"}:</span>
                        <span className="text-lg font-semibold text-primary">
                          {allNews.filter((el) => el.airTrans === (language == 'fr' ? language : 'eng')).length}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{
                            width: `${allNews.length ? (allNews.filter((el) => el.airTrans === (language == 'fr' ? language : 'eng')).length / allNews.length) * 100 : 0}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="font-medium text-mediumGray border-t border-gray-200 pt-4">
                    {_.news_we_found}{" "}
                    <strong className="text-primary">
                      {allNews.length}
                    </strong>{" "}
                    {_.news_results_with}{" "}
                    <strong className="text-primary">
                      {allNews.filter((el) => el.airTrans === (language == 'fr' ? language : 'eng')).length}
                    </strong>{" "}
                    {_.news_shown}{" "}
                    {language === "fr" ? "en français" : "en anglais"}
                  </div>
                  
                  {/* Liste des filtres actifs */}
                  {(pageEqS[1].value || pageEqS[2].value || pageEqS[3].value) && (
                    <div className="mt-5">
                      <h3 className="font-semibold mb-2 text-gray-800">{_.news_active_filters || "Filtres actifs"}:</h3>
                      <div className="flex flex-wrap gap-2">
                        {pageEqS[1].value && (
                          <div className="bg-primary-50 text-primary rounded-full px-3 py-1 text-sm font-medium">
                            {pageEqS[1].value}
                          </div>
                        )}
                        {pageEqS[2].value && (
                          <div className="bg-primary-50 text-primary rounded-full px-3 py-1 text-sm font-medium">
                            {pageEqS[2].value}
                          </div>
                        )}
                        {pageEqS[3].value && (
                          <div className="bg-primary-50 text-primary rounded-full px-3 py-1 text-sm font-medium">
                            {pageEqS[3].value}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;

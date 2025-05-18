/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import ArrowLeftSolidCustomIcon from "../components/icons/ArrowLeftSolidCustomIcon.jsx";
import Socialshare from "../components/Socialshare.jsx";
import { CalendarIcon, MapIcon } from "../assets/icons.jsx";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { Parse } from "../utils/htmlParser.jsx";
import { useGetPostBySlugQuery } from "../features/api/apiSlice.js";
import { useEffect } from "react";
import Header from "../components/pyramid-africa/components/header";
import Footer from "../components/pyramid-africa/components/footer";
import Loader from "../assets/icons/loader.svg";
import NoData from "../utils/NoData.jsx";
import DOMPurify from "dompurify";

function OneActualite({ iconSx, backUrl, events }) {
  const { slug } = useParams();

  const { isLoading, isError, error, data } = useGetPostBySlugQuery(slug);

  useEffect(() => {
    if (data) {
      // console.log(data);
    }
  }, [isLoading]);

  // format date
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("fr-FR", options);
  };

  const sanitizedHtml = DOMPurify.sanitize(data?.content);

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

  const content = data?.content && Parse(data?.content);

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-screen-xl p-0">
        <div className="flex ml-10">
          <ArrowLeftSolidCustomIcon
            sx={iconSx}
            backUrl="/news"
            className="mr-1 mt-5"
          />
        </div>

        <div className="w-full pl-10">
          <img
            className="w-full mb-5"
            src="https://possibledotafrica.s3.eu-west-3.amazonaws.com/users/images/1741354259963-PARTNERS%20BAND.jpg"
            alt="Possible africa partners"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder_org.jpeg";
            }}
          />
        </div>

        <div className="flex flex-col md:flex-row py-0">
          {/* Main Content */}
          <div className="w-full md:w-3/4 p-10 flex flex-col space-y-10 items-start">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-5">
                {/* <div className="min-w-[90px]">
                  <img
                    className="object-cover w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-lg border border-gray-100"
                    src={data?.airLogo}
                    alt={data?.airLogo}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder_org.jpeg";
                    }}
                  />
                </div> */}
                <div className="flex flex-col gap-2">
                  {/* <div className="flex justify-start items-center gap-3">
                    <div className="w-[100px] border overflow-hidden rounded-lg">
                      <img
                        className="w-full"
                        src={data?.image}
                        alt={data?.image}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/placeholder_org.jpeg";
                        }}
                      />
                    </div>

                  </div> */}
                  <div className="flex justify-start items-center gap-2">
                    {data.airTags.split(", ").map((tag) => {
                      return (
                        <span className="inline-block h-8 px-3 rounded-md bg-primary text-white text-sm text-gray-500 flex items-center justify-center capitalize font-medium">
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <h1 className="text-lg md:text-4xl font-bold text-gray-darkest mb-1.5">
                    {data?.title}
                  </h1>
                  <div className="flex justify-start items-center gap-4 mb-8">
                    <div className="flex justify-start items-center gap-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://possibledotafrica.s3.eu-west-3.amazonaws.com/users/images/1741772042908-1739889775930.jpg"
                        alt="Author avatar"
                      />
                      <span className="font-medium text-sm">
                        Marthe Jesuwame
                      </span>
                    </div>
                    <span className="font-medium text-sm">
                      {formatDate(data.createdAt)}
                    </span>
                  </div>
                  <div className="w-full h-auto border overflow-hidden rounded-lg">
                    <img
                      className="w-full"
                      src={data?.image}
                      alt={data?.image}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder_org.jpeg";
                      }}
                    />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-5">
                      {/* Location */}
                      {data?.airLink && (
                        <div className="flex items-center gap-1">
                          <a
                            href={data?.airLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center font-semibold text-[14px]"
                          >
                            <div className="flex items-center gap-1">
                              <LaunchOutlinedIcon />
                              <span className="text-[14px] text-primary hover:text-darkPrimary active:text-primary visited:text-darkPrimary">
                                Article Source
                              </span>
                            </div>
                          </a>
                        </div>
                      )}
                      {/* Frequence */}
                      {/* <div className="flex items-center gap-1">
                      <CalendarIcon />
                      <span className="text-[14px]">
                        {events?.frequence}
                      </span>
                    </div> */}
                      {/* Registration Link */}
                      {/* <div className="flex items-center">
                        <a
                          href={events?.registration_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center font-semibold text-[14px]"
                        >
                          <div className="flex items-center gap-1">
                            <LaunchOutlinedIcon />
                            <span className="text-[14px]">En savoir plus</span>
                          </div>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <img
              className="w-full"
              src={data?.image}
              alt={data?.image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder_org.jpeg";
              }}
            /> */}

            {/* Content */}

            {/* <main className="w-full">{content}</main> */}
            <main className="w-full">
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                id="tinymce"
                className="mce-content-body "
              />
            </main>

            {/* Social share */}
            <div className="w-full mt-20 border-t border-gray-100 pt-5">
              <div className="flex w-full h-full items-center justify-end space-x-2">
                <Socialshare />
              </div>
            </div>
          </div>

          {/* Sidebar (vide ou pour d'autres contenus) */}
          <div className="w-full md:w-1/4 p-10 space-y-10 items-start bg-white">
            {/* Contenu additionnel ici */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OneActualite;

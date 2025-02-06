import React, { useEffect, useState } from "react";

import { sum } from "mathjs";
import iso3166 from "iso-3166-1";
import {
  MobileResponsiveCloropleth,
  ResponsiveCloropleth,
} from "../components/for_database/donut_chart";
import { calculateDaysFromNow, COUNTRIES, SUB_SECTORS } from "../utils/utils";
import { fetchResource } from "../utils/possible_api_actions";
import { GrowingEnterAnimation } from "../components/for_database/animations";
import OrganisationsByRegionsByTier from "../components/organisations_by_regions_by_tier";
import SectorSubsectorSelector from "../components/for_database/sector_sub_sector_selector";
import SectorSelector from "../components/for_database/sector_selector";
import Logo from "../assets/LogoPossible.png";
import Loader from "../assets/icons/loader.svg";
import { Header } from "./landing";

export default function Database() {
  const [dashBoardData, setDashboardData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    let data;
    async function fetchData() {
      // You can await here
      let data = await fetchResource("dashboard", {});
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
  let uniqueRegions;
  let uniqueHeadquarters;
  let totalRegions;
  let uniqueTiers;
  let totalTiers;

  if (dashBoardData) {
    uniqueRegions = dashBoardData.organisations.regions.filter(
      (region) => !(region._id.split(",").length > 1)
    );
    uniqueHeadquarters = dashBoardData.organisations.headquarters.filter(
      (headquarter) =>
        !headquarter._id || !(headquarter._id.split(",").length > 1)
    );
    totalRegions = sum(uniqueRegions.map((region) => region.count));
    uniqueTiers = dashBoardData.organisations.tiers;
    totalTiers = sum(uniqueTiers.map((tier) => tier.count));
  }

  // const {alpha3} = iso3166.whereCountry('Togo');
  if (uniqueHeadquarters) {
    uniqueHeadquarters = uniqueHeadquarters.map((headquarter) => {
      if (headquarter._id) {
        const result = iso3166.whereCountry(headquarter._id);
        if (headquarter._id === "Ivory Coast")
          return {
            id: "CIV",
            value: headquarter.count,
          };
        if (headquarter._id === "Democratic Republic of the Congo")
          return {
            id: "COD",
            value: headquarter.count,
          };
        if (headquarter._id === "Tanzania")
          return {
            id: "TZA",
            value: headquarter.count + 1,
          };
        if (result) {
          return {
            id: result.alpha3,
            value: headquarter.count,
          };
        } else {
          return {
            id: headquarter._id,
            value: headquarter.count,
          };
        }
      } else {
        return {
          id: headquarter._id,
          value: headquarter.count,
        };
      }
    });
  }

  let byRegionsData;
  let byTiersData;
  // let cloroplethData;

  if (uniqueRegions && totalRegions) {
    byRegionsData = [
      {
        id: uniqueRegions[0]._id || "_",
        label: uniqueRegions[0]._id || "_",
        value: Math.round((uniqueRegions[0].count * 100) / totalRegions),
        color: "hsl(110, 61%, 43%)",
      },
      {
        id: uniqueRegions[1]._id || "_",
        label: uniqueRegions[1]._id || "_",
        value: Math.round((uniqueRegions[1].count * 100) / totalRegions),
        color: "hsl(171, 61%, 43%)",
      },
      {
        id: uniqueRegions[2]._id || "_",
        label: uniqueRegions[2]._id || "_",
        value: Math.round((uniqueRegions[2].count * 100) / totalRegions),
        color: "hsl(215, 100%, 79%)",
      },
      {
        id: uniqueRegions[3]._id || "_",
        label: uniqueRegions[3]._id || "_",
        value: Math.round((uniqueRegions[3].count * 100) / totalRegions),
        color: "hsl(165, 5%, 15%)",
      },
      {
        id: uniqueRegions[4]._id || "_",
        label: uniqueRegions[4]._id || "_",
        value: Math.round((uniqueRegions[4].count * 100) / totalRegions),
        color: "hsl(216, 64%, 81%)",
      },
      {
        id: uniqueRegions[5]._id || "_",
        label: uniqueRegions[5]._id || "_",
        value: Math.round((uniqueRegions[5].count * 100) / totalRegions),
        color: "hsl(306, 64%, 81%)",
      },
      {
        id: uniqueRegions[6]._id || "_",
        label: uniqueRegions[6]._id || "_",
        value: Math.round((uniqueRegions[6].count * 100) / totalRegions),
        color: "hsl(106, 64%, 81%)",
      },
    ];
  }

  if (uniqueTiers && totalTiers) {
    byTiersData = [
      {
        id: uniqueTiers[0]._id || "_",
        label: uniqueTiers[0]._id || "_",
        value: Math.round((uniqueTiers[0].count * 100) / totalTiers),
        color: "hsl(110, 61%, 43%)",
      },
      {
        id: uniqueTiers[1]._id || "_",
        label: uniqueTiers[1]._id || "_",
        value: Math.round((uniqueTiers[1].count * 100) / totalTiers),
        color: "hsl(171, 61%, 43%)",
      },
      {
        id: uniqueTiers[2]._id || "_",
        label: uniqueTiers[2]._id || "_",
        value: Math.round((uniqueTiers[2].count * 100) / totalTiers),
        color: "hsl(215, 100%, 79%)",
      },
      {
        id: uniqueTiers[3]._id || "_",
        label: uniqueTiers[3]._id || "_",
        value: Math.round((uniqueTiers[3].count * 100) / totalTiers),
        color: "hsl(165, 5%, 15%)",
      },
      {
        id: uniqueTiers[4]._id || "_",
        label: uniqueTiers[4]._id || "_",
        value: Math.round((uniqueTiers[4].count * 100) / totalTiers),
        color: "hsl(216, 64%, 81%)",
      },
    ];
  }

  // cloroplethData = [
  //   { id: "NGA", value: 765187 },
  //   { id: "BEN", value: 560942 },
  //   { id: "GHA", value: 689321 },
  //   { id: "CIV", value: 693447 },
  //   // Ajoute plus de données ici pour chaque pays
  // ];

  // console.log(uniqueHeadquarters);

  if (!dashBoardData) {
    return (
      <>
        <Header />
        <div className="flex justify-center">
          <div className="flex flex-col w-11/12">
            <div className="h-[400px] w-full m-auto flex justify-center items-center">
              <img
                src={Loader}
                style={{
                  transformOrigin: "bottom center",
                  translate: "-100px 0",
                }}
                alt="Loader possible"
                className="w-16 animate-[loading_1s_ease-in-out_infinite_alternate]"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header page="/database" />
      <div className="flex justify-center">
        <div className="flex flex-col w-11/12">
          <div className="flex flex-col gap-y-5 relative">
            <GrowingEnterAnimation>
              <div className="w-full bg-custom-white rounded-2xl p-6">
                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-x-11 gap-y-10">
                    <div className="w-full h-[112px] bg-primary-100 rounded-2xl p-6 flex flex-col justify-between">
                      <div className="font-medium text-base">
                        Total Organisations
                      </div>
                      <div className="text-2xl font-bold">
                        {dashBoardData?.organisations?.all}
                      </div>
                    </div>
                    <div className="w-full h-[112px] bg-primary-100 rounded-2xl p-6">
                      {" "}
                      <div className="font-medium text-base">Sectors</div>
                      <div className="text-2xl font-bold">
                        {Object.keys(SUB_SECTORS).length}
                      </div>
                    </div>
                    <OrganisationsByRegionsByTier
                      byRegionsData={byRegionsData}
                      byTiersData={byTiersData}
                    />
                    <div className="w-full h-[112px] bg-primary-100 rounded-2xl p-6">
                      {" "}
                      <div className="font-medium text-base">
                        Covered Countries
                      </div>
                      <div className="text-2xl font-bold">
                        {sum(Object.keys(COUNTRIES).map((o) => o.length))}
                      </div>
                    </div>
                    <div className="w-full h-[112px] bg-primary-100 rounded-2xl p-6">
                      {" "}
                      <div className="font-medium text-base">Sub-Sectors</div>
                      <div className="text-2xl font-bold">
                        {sum(Object.keys(SUB_SECTORS).map((o) => o.length))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GrowingEnterAnimation>
            {/* <GrowingEnterAnimation></GrowingEnterAnimation> */}

            <GrowingEnterAnimation className=" w-full">
              <div className="w-full rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-x-4">
                <div className="col-span-1 h-[500px] w-full bg-custom-white rounded-2xl p-6 flex flex-col gap-y-5">
                  <div className="flex justify-between items-center h-16 gap-x-3">
                    <div className="text-2xl w-6/12">Last news</div>
                    <div className="flex justify-end items-center gap-x-3 w-6/12">
                      <span>View more</span>
                      <svg
                        // style={style}
                        className="fill-custom-white h-[36px] w-[36px]"
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="35"
                          height="35"
                          rx="17.5"
                          stroke="#242827"
                        />
                        <path
                          d="M23.6258 13.2746H13.7539C13.5525 13.2746 13.3594 13.1946 13.2169 13.0522C13.0745 12.9098 12.9945 12.7166 12.9945 12.5152C12.9945 12.3138 13.0745 12.1207 13.2169 11.9783C13.3594 11.8359 13.5525 11.7559 13.7539 11.7559H24.3852C24.5866 11.7559 24.7797 11.8359 24.9221 11.9783C25.0645 12.1207 25.1445 12.3138 25.1445 12.5152V23.1465C25.1445 23.3479 25.0645 23.541 24.9221 23.6834C24.7797 23.8259 24.5866 23.9059 24.3852 23.9059C24.1838 23.9059 23.9906 23.8259 23.8482 23.6834C23.7058 23.541 23.6258 23.3479 23.6258 23.1465V13.2746Z"
                          fill="#242827"
                        />
                        <path
                          d="M23.8475 11.9776C23.9901 11.835 24.1835 11.7549 24.3852 11.7549C24.5868 11.7549 24.7802 11.835 24.9228 11.9776C25.0654 12.1202 25.1455 12.3136 25.1455 12.5152C25.1455 12.7169 25.0654 12.9103 24.9228 13.0529L12.0134 25.9622C11.8708 26.1048 11.6775 26.1849 11.4758 26.1849C11.2741 26.1849 11.0808 26.1048 10.9382 25.9622C10.7956 25.8196 10.7155 25.6262 10.7155 25.4246C10.7155 25.2229 10.7956 25.0295 10.9382 24.887L23.8475 11.9776Z"
                          fill="#242827"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2.5 overflow-y-auto overflow-x-hidden h-full w-full p-1 scrollbar-hidden">
                    {dashBoardData?.posts?.lastByLang[lang].map((post) => {
                      return (
                        <div
                          key={post.title}
                          className="flex justify-between items-start gap-x-5 border border-gray-light-300 bg-primary-50 rounded-md min-h-26 p-2.5 w-full"
                        >
                          <div className="w-1/12">
                            <img
                              src={`https://logo.clearbit.com/${
                                post.airLogo
                                  .split("/")
                                  [post.airLogo.split("/").length - 1].split(
                                    ".jpg"
                                  )[0]
                                  .split("com")[0]
                              }.com`}
                              height={40}
                              width={40}
                              alt={`${post.title}'s logo`}
                              className="min-w-10 min-h-10"
                            />
                          </div>
                          <div className="flex flex-col justify-start items-center gap-y-1 w-10/12">
                            <div className="flex justify-between w-full">
                              <span>{post.airMedia}</span>
                              <span>
                                {post.airDateAdded
                                  ? `${
                                      calculateDaysFromNow(post?.airDateAdded) *
                                      -1
                                    } days`
                                  : "No date available"}{" "}
                                days
                              </span>
                            </div>
                            <div className="w-full text-xs font-semibold">
                              {post.title.slice(0, 45) + " ..."}
                            </div>
                            <div className="w-full text-xs flex justify-start gap-x-2 overflow-auto scrollbar-hidden">
                              {post?.airTags?.split(", ").map((tag) => {
                                return (
                                  <div
                                    key={tag}
                                    className="py-0.5 px-1.5 border rounded flex justify-between items-center gap-x-1"
                                  >
                                    <svg
                                      // style={style}
                                      className="fill-gray-light-100 w-3 h-3"
                                      viewBox="0 0 13 12"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.50956 3.77606L4.15606 3.42256M5.99006 10.0971L2.34106 6.44806C2.15606 6.26306 2.05106 6.01306 2.04756 5.75206L2.00006 2.00756C1.99905 1.94063 2.01148 1.87418 2.03663 1.81215C2.06177 1.75012 2.09912 1.69378 2.14645 1.64645C2.19378 1.59912 2.25012 1.56177 2.31215 1.53663C2.37418 1.51148 2.44063 1.49905 2.50756 1.50006L6.25206 1.54756C6.51351 1.55064 6.76335 1.656 6.94806 1.84106L10.5971 5.49006C10.9341 5.82656 11.1931 6.46956 10.8091 6.85356L7.35406 10.3086C6.96956 10.6931 6.32656 10.4336 5.99006 10.0971Z"
                                        stroke="#878787"
                                        strokeWidth="0.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    <span className="text-nowrap">{tag}</span>
                                  </div>
                                );
                              }) || "No tags available"}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="hidden md:block col-span-2 h-[500px] w-10/12 bg-custom-white rounded-2xl">
                  <ResponsiveCloropleth
                    style={{
                      height: "473px",
                      width: "100%",
                    }}
                    data={uniqueHeadquarters}
                  />
                </div>
                <div className="md:hidden col-span-2 h-[500px] w-10/12 bg-custom-white rounded-2xl">
                  <MobileResponsiveCloropleth
                    style={{
                      height: "473px",
                      width: "100%",
                    }}
                    data={uniqueHeadquarters}
                  />
                </div>
                <div className="col-span-1 h-[500px] w-full bg-custom-white rounded-2xl p-6 flex flex-col gap-y-2.5">
                  <div className="flex justify-start items-center h-16 gap-x-1.5">
                    <div className="text-2xl w-6/12">Last additions</div>
                  </div>
                  <div className="flex flex-col gap-y-2.5 overflow-auto h-full p-1 scrollbar-hidden">
                    {dashBoardData?.organisations?.last.map((organisation) => {
                      return (
                        <div
                          key={organisation.name}
                          className="flex justify-between items-center gap-x-2.5 border border-gray-light-300 bg-primary-50 rounded-md min-h-18 p-2.5"
                        >
                          <div className="w-12 h-12 flex justify-center items-center bg-custom-white rounded">
                            <img
                              src={`https://logo.clearbit.com/${organisation.website}`}
                              height={40}
                              width={40}
                              alt={`${organisation.name}'s logo`}
                              className="w-10 h-10"
                            />
                          </div>
                          <div className="flex flex-col justify-center items-center gap-y-1 w-11/12">
                            <div className="w-full text-xs font-semibold">
                              {organisation.name}
                            </div>
                            <div className="w-full text-xs">
                              {organisation.description.slice(0, 45) + " ..."}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </GrowingEnterAnimation>
            <GrowingEnterAnimation>
              <div className="w-full bg-custom-white rounded-2xl p-6 h-[350px]">
                <SectorSelector
                  organisationsBySector={dashBoardData.OrganisationsBySectors}
                />
              </div>
            </GrowingEnterAnimation>
            <GrowingEnterAnimation>
              <div className="w-full bg-custom-white rounded-2xl p-6 h-[350px]">
                <SectorSubsectorSelector
                  organisationsBySubSectors={
                    dashBoardData.OrganisationsBySubSectors
                  }
                />
              </div>
            </GrowingEnterAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

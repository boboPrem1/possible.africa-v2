import React, { useContext, useEffect, useState } from "react";

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
import { Footer, Header } from "./Landing";
import Organisations from "./NewOrganisations";
import { LangTransContext } from "../langTransContext";

export default function Database() {
  const langTrans = useContext(LangTransContext);
  const lang = langTrans.lang;
  const _ = langTrans._;
  const [dashBoardData, setDashboardData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let data = await fetchResource("dashboard", {});
      setDashboardData(data);
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

  if (uniqueHeadquarters) {
    uniqueHeadquarters = uniqueHeadquarters.map((headquarter) => {
      if (headquarter._id) {
        const result = iso3166.whereCountry(headquarter._id);
        if (headquarter._id === "Republic of the Congo")
          return {
            id: "COG",
            value: headquarter.count,
          };
        if (headquarter._id === "Cape Verde")
          return {
            id: "CPV",
            value: headquarter.count,
          };
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

  if (!dashBoardData) {
    return (
      <>
        <Header />
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

  return (
    <>
      <Header page="/database" />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Section des statistiques */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {_.database_title || "African Tech Ecosystem Overview"}
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <h3 className="text-gray-600 font-medium mb-2">
                    {_.database_total_organisations}
                  </h3>
                  <div className="text-4xl font-bold text-primary">
                    {dashBoardData?.organisations?.all}
                  </div>
                </div>
              </div>

              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <h3 className="text-gray-600 font-medium mb-2">
                    {_.database_sectors}
                  </h3>
                  <div className="text-4xl font-bold text-primary">
                    {Object.keys(SUB_SECTORS).length}
                  </div>
                </div>
              </div>

              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <h3 className="text-gray-600 font-medium mb-2">
                    {_.database_covered_countries}
                  </h3>
                  <div className="text-4xl font-bold text-primary">
                    {Object.keys(COUNTRIES).length}
                  </div>
                </div>
              </div>

              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <h3 className="text-gray-600 font-medium mb-2">
                    {_.database_sub_sectors}
                  </h3>
                  <div className="text-4xl font-bold text-primary">
                    {Object.keys(SUB_SECTORS).reduce(
                      (acc, sector) => acc + SUB_SECTORS[sector].length,
                      0
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section de la carte et des graphiques */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl overflow-hidden border border-primary/10 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {_.database_map_title || "African Tech Distribution"}
              </h2>
              <div className="h-[600px] hidden md:block max-w-5xl mx-auto">
                <ResponsiveCloropleth
                  style={{
                    height: "600px",
                    width: "100%",
                    margin: "0 auto",
                  }}
                  data={uniqueHeadquarters}
                />
              </div>
            </div>

            <div className="h-[400px] block md:hidden max-w-xl mx-auto">
              <MobileResponsiveCloropleth
                style={{
                  height: "400px",
                  width: "100%",
                  margin: "0 auto",
                }}
                data={uniqueHeadquarters}
              />
            </div>
          </div>

          {/* <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-primary/10 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {_.database_distribution || "Distribution"}
              </h2>
            </div>
            <OrganisationsByRegionsByTier
              byRegionsData={byRegionsData}
              byTiersData={byTiersData}
            />
          </div> */}

          <div className="bg-white rounded-lg shadow-sm overflow-hidden col-span-3 w-full justify-center items-center">
            <Organisations withoutHeader={true} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

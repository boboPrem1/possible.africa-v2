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
import {
  FilterProvider,
  useFilter,
} from "../components/for_database/FilterContext";

function DatabaseContent() {
  const { selectedCountry, setSelectedCountry, scrollToTable } = useFilter();
  const langTrans = useContext(LangTransContext);
  const lang = langTrans.lang;
  const _ = langTrans._;
  const [dashBoardData, setDashboardData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleCountryClick = (countryName) => {
    // Toggle selection if clicking on the already selected country
    if (selectedCountry === countryName) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(countryName);
      
      // Add a small delay to ensure the filter is applied before scrolling
      setTimeout(() => {
        scrollToTable();
      }, 100);
    }
  };

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
        // value: Math.round((uniqueRegions[0].count * 100) / totalRegions),
        value: uniqueRegions[0].count,
        color: "hsl(110, 61%, 43%)",
      },
      {
        id: uniqueRegions[1]._id || "_",
        label: uniqueRegions[1]._id || "_",
        // value: Math.round((uniqueRegions[1].count * 100) / totalRegions),
        value: uniqueRegions[1].count,
        color: "hsl(171, 61%, 43%)",
      },
      {
        id: uniqueRegions[2]._id || "_",
        label: uniqueRegions[2]._id || "_",
        // value: Math.round((uniqueRegions[2].count * 100) / totalRegions),
        value: uniqueRegions[2].count,
        color: "hsl(215, 100%, 79%)",
      },
      {
        id: uniqueRegions[3]._id || "_",
        label: uniqueRegions[3]._id || "_",
        // value: Math.round((uniqueRegions[3].count * 100) / totalRegions),
        value: uniqueRegions[3].count,
        color: "hsl(165, 5%, 15%)",
      },
      {
        id: uniqueRegions[4]._id || "_",
        label: uniqueRegions[4]._id || "_",
        // value: Math.round((uniqueRegions[4].count * 100) / totalRegions),
        value: uniqueRegions[4].count,
        color: "hsl(216, 64%, 81%)",
      },
      {
        id: uniqueRegions[5]._id || "_",
        label: uniqueRegions[5]._id || "_",
        // value: Math.round((uniqueRegions[5].count * 100) / totalRegions),
        value: uniqueRegions[5].count,
        color: "hsl(306, 64%, 81%)",
      },
      {
        id: uniqueRegions[6]._id || "_",
        label: uniqueRegions[6]._id || "_",
        // value: Math.round((uniqueRegions[6].count * 100) / totalRegions),
        value: uniqueRegions[6].count,
        color: "hsl(106, 64%, 81%)",
      },
    ];
  }

  if (uniqueTiers && totalTiers) {
    byTiersData = [
      {
        id: uniqueTiers[0]._id || "_",
        label: uniqueTiers[0]._id || "_",
        // value: Math.round((uniqueTiers[0].count * 100) / totalTiers),
        value: uniqueTiers[0].count,
        color: "hsl(110, 61%, 43%)",
      },
      {
        id: uniqueTiers[1]._id || "_",
        label: uniqueTiers[1]._id || "_",
        // value: Math.round((uniqueTiers[1].count * 100) / totalTiers),
        value: uniqueTiers[1].count,
        color: "hsl(171, 61%, 43%)",
      },
      {
        id: uniqueTiers[2]._id || "_",
        label: uniqueTiers[2]._id || "_",
        // value: Math.round((uniqueTiers[2].count * 100) / totalTiers),
        value: uniqueTiers[2].count,
        color: "hsl(215, 100%, 79%)",
      },
      {
        id: uniqueTiers[3]._id || "_",
        label: uniqueTiers[3]._id || "_",
        // value: Math.round((uniqueTiers[3].count * 100) / totalTiers),
        value: uniqueTiers[3].count,
        color: "hsl(165, 5%, 15%)",
      },
      {
        id: uniqueTiers[4]._id || "_",
        label: uniqueTiers[4]._id || "_",
        // value: Math.round((uniqueTiers[4].count * 100) / totalTiers),
        value: uniqueTiers[4].count,
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
      <div className="flex justify-center py-8">
        <div className="grid w-11/12 max-w-9xl mx-auto grid-cols-3 justify-items-center items-center">
          <div className="col-span-3 md:col-span-1 grid grid-cols-2 gap-2 mb-8 w-full md:w-9/12 h-[275px] justify-items-center items-center">
            <div className="bg-green-50 rounded-lg p-5 w-11/12 md:w-[200px] h-[125px]">
              <div className="text-gray-600 text-sm font-medium">
                {_.database_total_organisations}
              </div>
              <div className="text-3xl font-bold mt-1">
                {dashBoardData?.organisations?.all}
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 w-11/12 md:w-[200px] h-[125px]">
              <div className="text-gray-600 text-sm font-medium">
                {_.database_sectors}
              </div>
              <div className="text-3xl font-bold mt-1">
                {Object.keys(SUB_SECTORS).length}
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 w-11/12 md:w-[200px] h-[125px]">
              <div className="text-gray-600 text-sm font-medium">
                {_.database_covered_countries}
              </div>
              <div className="text-3xl font-bold mt-1">
                {Object.keys(COUNTRIES).length}
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 w-11/12 md:w-[200px] h-[125px]">
              <div className="text-gray-600 text-sm font-medium">
                {_.database_sub_sectors}
              </div>
              <div className="text-3xl font-bold mt-1">
                {Object.keys(SUB_SECTORS).reduce(
                  (acc, sector) => acc + SUB_SECTORS[sector].length,
                  0
                )}
              </div>
            </div>
          </div>

          <div className="mb-8 md:pr-20 md:min-w-[675px] w-full col-span-3 md:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[550px] hidden md:block">
              <ResponsiveCloropleth
                style={{
                  height: "550px",
                  width: "100%",
                }}
                data={uniqueHeadquarters}
                onCountryClick={handleCountryClick}
                selectedCountry={selectedCountry}
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[400px] block md:hidden">
              <MobileResponsiveCloropleth
                style={{
                  height: "400px",
                  width: "100%",
                }}
                data={uniqueHeadquarters}
                onCountryClick={handleCountryClick}
                selectedCountry={selectedCountry}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[400px] w-full col-span-3 md:col-span-1">
            <div className="p-4">
              <div className="flex justify-between h-3">
                {/* <div className="text-lg font-medium">By regions</div>
                <div className="text-lg font-medium">By tiers</div> */}
              </div>
              <OrganisationsByRegionsByTier
                byRegionsData={byRegionsData}
                byTiersData={byTiersData}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden col-span-3 w-11/12">
            <Organisations withoutHeader={true} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default function Database() {
  return (
    <FilterProvider>
      <DatabaseContent />
    </FilterProvider>
  );
}

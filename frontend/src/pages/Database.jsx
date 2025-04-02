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
      <div className="flex justify-center py-8">
        <div className="flex flex-col w-11/12 max-w-9xl mx-auto grid-cols-3">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 rounded-lg p-5">
              <div className="text-gray-600 text-sm font-medium">
                {_.database_total_organisations}
              </div>
              <div className="text-3xl font-bold mt-1">
                {dashBoardData?.organisations?.all}
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-5">
              <div className="text-gray-600 text-sm font-medium">
                {_.database_sectors}
              </div>
              <div className="text-3xl font-bold mt-1">
                {Object.keys(SUB_SECTORS).length}
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-5">
              <div className="text-gray-600 text-sm font-medium">
                {_.database_covered_countries}
              </div>
              <div className="text-3xl font-bold mt-1">
                {Object.keys(COUNTRIES).length}
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-5">
              <div className="text-gray-600 text-sm font-medium">
                {_.database_sub_sectors}
              </div>
              <div className="text-3xl font-bold mt-1">
                {Object.keys(SUB_SECTORS).reduce((acc, sector) => acc + SUB_SECTORS[sector].length, 0)}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[400px]">
              <ResponsiveCloropleth
                style={{
                  height: "400px",
                  width: "100%",
                }}
                data={uniqueHeadquarters}
              />
              <div className="px-4 py-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-sm"></div>
                    <span>5 - 10</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
                    <span>1 - 5</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[400px]">
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div className="text-lg font-medium">By regions</div>
                  <div className="text-lg font-medium">By tiers</div>
                </div>
                <OrganisationsByRegionsByTier
                  byRegionsData={byRegionsData}
                  byTiersData={byTiersData}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-600">
                <div>NAME OF THE COMPANY</div>
                <div>SECTOR</div>
                <div>LOCATION</div>
                <div>CONTACT</div>
                <div className="flex justify-end">
                  <button className="flex items-center gap-1 bg-teal-500 text-white px-4 py-1.5 rounded-md text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filtres
                  </button>
                </div>
              </div>
            </div>
            <Organisations withoutHeader={true} />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

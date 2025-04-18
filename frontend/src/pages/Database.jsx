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
  const [loadCount, setLoadCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Fonction pour récupérer les paramètres depuis l'URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    // Récupérer loadCount
    const loadCountParam = urlParams.get("loadCount");
    if (loadCountParam) {
      try {
        const parsedValue = parseInt(loadCountParam, 10);
        if (parsedValue > 0) {
          setLoadCount(parsedValue);
        }
      } catch (e) {
        console.error("Erreur de conversion loadCount:", e);
      }
    }

    // Récupérer currentPage (nombre de pages déjà chargées)
    const pageParam = urlParams.get("page");
    if (pageParam) {
      try {
        const parsedPage = parseInt(pageParam, 10);
        if (parsedPage > 0) {
          setCurrentPage(parsedPage);
        }
      } catch (e) {
        console.error("Erreur de conversion page:", e);
      }
    }

    // Récupérer le pays sélectionné
    const countryParam = urlParams.get("country");
    if (countryParam) {
      setSelectedCountry(countryParam);
    }
  }, [setSelectedCountry]);

  // Fonction pour mettre à jour l'URL avec tous les paramètres
  const updateUrlParams = (params) => {
    const newUrl = new URL(window.location.href);

    // Mettre à jour les paramètres existants
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        newUrl.searchParams.set(key, value.toString());
      }
    });

    // Mettre à jour l'URL sans recharger la page
    window.history.pushState(
      { path: newUrl.toString() },
      "",
      newUrl.toString()
    );
  };

  const handleLoadCountChange = (newValue) => {
    if (newValue > 0) {
      setLoadCount(newValue);
      updateUrlParams({ loadCount: newValue });
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    updateUrlParams({ page: newPage });
  };

  const handleCountryClick = (countryName) => {
    // Toggle selection if clicking on the already selected country
    if (selectedCountry === countryName) {
      setSelectedCountry(null);
      updateUrlParams({ country: null });
    } else {
      setSelectedCountry(countryName);
      updateUrlParams({ country: countryName });

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
        value: uniqueRegions[0].count,
        color: "#2f7de1", // Bleu
      },
      {
        id: uniqueRegions[1]._id || "_",
        label: uniqueRegions[1]._id || "_",
        value: uniqueRegions[1].count,
        color: "#37c172", // Vert
      },
      {
        id: uniqueRegions[2]._id || "_",
        label: uniqueRegions[2]._id || "_",
        value: uniqueRegions[2].count,
        color: "#f6993f", // Orange
      },
      {
        id: uniqueRegions[3]._id || "_",
        label: uniqueRegions[3]._id || "_",
        value: uniqueRegions[3].count,
        color: "#9561e2", // Violet
      },
      {
        id: uniqueRegions[4]._id || "_",
        label: uniqueRegions[4]._id || "_",
        value: uniqueRegions[4].count,
        color: "#e3342f", // Rouge
      },
      {
        id: uniqueRegions[5]._id || "_",
        label: uniqueRegions[5]._id || "_",
        value: uniqueRegions[5].count,
        color: "#6574cd", // Indigo
      },
      {
        id: uniqueRegions[6]._id || "_",
        label: uniqueRegions[6]._id || "_",
        value: uniqueRegions[6].count,
        color: "#ffed4a", // Jaune
      },
    ];
  }

  if (uniqueTiers && totalTiers) {
    byTiersData = [
      {
        id: uniqueTiers[0]._id || "_",
        label: uniqueTiers[0]._id || "_",
        value: uniqueTiers[0].count,
        color: "#2f7de1", // Bleu
      },
      {
        id: uniqueTiers[1]._id || "_",
        label: uniqueTiers[1]._id || "_",
        value: uniqueTiers[1].count,
        color: "#37c172", // Vert
      },
      {
        id: uniqueTiers[2]._id || "_",
        label: uniqueTiers[2]._id || "_",
        value: uniqueTiers[2].count,
        color: "#f6993f", // Orange
      },
      {
        id: uniqueTiers[3]._id || "_",
        label: uniqueTiers[3]._id || "_",
        value: uniqueTiers[3].count,
        color: "#9561e2", // Violet
      },
      {
        id: uniqueTiers[4]._id || "_",
        label: uniqueTiers[4]._id || "_",
        value: uniqueTiers[4].count,
        color: "#e3342f", // Rouge
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
        <div className="grid w-11/12 max-w-9xl mx-auto grid-cols-12 gap-x-6 gap-y-10 md:gap-y-20 justify-items-center items-center">
          {/* Stats cards - 3 colonnes sur grand écran  */}
          <div className="col-span-12 md:col-span-4 grid grid-cols-1 shadow-xl md:py-12 md:px-12 gap-5 w-full md:w-full h-auto">
            <div className="text-gray-700 text-sm font-medium mb-2 p-2">
              {_.database_cta ||
                "Ciblez et engagez facilement les bons contacts, selon vos critères, pour une prospection plus rapide et plus stratégique"}
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-green-50 rounded-lg p-5 w-full h-[120px]">
                <div className="text-gray-600 text-sm font-medium">
                  {_.database_total_organisations}
                </div>
                <div className="text-3xl font-bold mt-1">
                  {dashBoardData?.organisations?.all}
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-5 w-full h-[120px]">
                <div className="text-gray-600 text-sm font-medium">
                  {_.database_sectors}
                </div>
                <div className="text-3xl font-bold mt-1">
                  {Object.keys(SUB_SECTORS).length}
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-5 w-full h-[120px]">
                <div className="text-gray-600 text-sm font-medium">
                  {_.database_covered_countries}
                </div>
                <div className="text-3xl font-bold mt-1">
                  {Object.keys(COUNTRIES).length}
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-5 w-full h-[120px]">
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
          </div>

          {/* Carte choroplèthe - 6 colonnes sur grand écran - maintenant au milieu */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-lg overflow-hidden shadow-sm h-[400px] md:h-[550px] w-full">
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

          {/* Donut chart - 3 colonnes sur grand écran */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-lg overflow-hidden shadow-xl h-[450px] w-full">
            <div
              className="p-4 h-full flex flex-col"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                {_.database_analytics_title || "Analyse des organisations"}
              </h3>
              {!byRegionsData || !byTiersData ? (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mx-auto mb-0"></div>
                    <p>{_.loading_data || "Chargement des données..."}</p>
                  </div>
                </div>
              ) : (
                <div className="flex-1" style={{ position: "relative" }}>
                  <OrganisationsByRegionsByTier
                    byRegionsData={byRegionsData}
                    byTiersData={byTiersData}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Table des organisations - pleine largeur */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden col-span-12 w-full">
            {/* <div className="flex justify-end p-4">
              <div className="flex items-center gap-2">
                <label htmlFor="loadCount" className="text-sm font-medium text-gray-700">
                  {_.load_more_results_count || "Nombre de pages à charger :"}
                </label>
                <select
                  id="loadCount"
                  className="border rounded-md px-2 py-1 text-sm"
                  value={loadCount}
                  onChange={(e) => handleLoadCountChange(parseInt(e.target.value, 10))}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div> */}
            <Organisations
              withoutHeader={true}
              loadCount={loadCount}
              onLoadCountChange={handleLoadCountChange}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
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

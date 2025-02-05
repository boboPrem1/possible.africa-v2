"use client";

import React, { useState } from "react";
import { ButtonAnimation } from "./animations";
import { Button } from "./jbutton";
// import {
//   usePathname,
//   useRouter,
//   useParams,
//   useSearchParams,
// } from "next/navigation";
import {
  COUNTRIES,
  getAllCountriesOptions,
  getAllRegionsOptions,
  getAllSectorsOptions,
  getAllTiersOptions,
  getCountriesOptionsFromRegion,
  getSubSectorsOptionsFromSector,
  SUB_SECTORS,
} from "../../utils/utils";

export const baseQueryArgs = { limit: 10, page: 1, fields: [], eq: [] };

export function queryTransformer(query = baseQueryArgs, resource) {
  let baseQueryString = ``;
  const { limit = 10, page = 1, fields = [], eq } = query;

  baseQueryString += `?page=${page}&limit=${limit}`;
  if (fields.length) {
    baseQueryString += `&select=${fields.join(",")}`; // Concatène les champs avec des virgules
  }
  if (eq?.length) {
    eq.forEach((item) => {
      baseQueryString += `&${item.field}=${item.value}`;
    });
  }
  return baseQueryString;
}

export default function DatabaseFilters() {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // console.log(searchParams.get("sector"));

  // const { replace } = useRouter();

  const [region, setRegion] =
    useState();
    // searchParams.get("region") || ""
  const [sector, setSector] =
    useState();
    // searchParams.get("sector") || ""
  const [headquarter, setHeadquarter] =
    useState();
    // searchParams.get("headquarter") || ""
  const [subSector, setSubSector] =
    useState();
    // searchParams.get("subSector") || ""
  const [tier, setTier] = useState("");
  const [countryCovered, setCountryCovered] = useState("");

  const applyFilters = () => {
    const eq = [
      { field: "region", value: region },
      { field: "sector", value: sector },
      { field: "headquarter", value: headquarter },
      { field: "subSector", value: subSector },
      { field: "tier", value: tier },
      { field: "operatingCountries", value: countryCovered },
    ];
    const query = {
      eq,
    };
    const queryString = queryTransformer(query, "organisations");
    // replace(`${pathname}${queryString}`);
  };

  const resetFilters = () => {
    setRegion("");
    setSector("");
    setHeadquarter("");
    setSubSector("");
    setTier("");
    setCountryCovered("");
    // replace(`${pathname}${""}`);
  };

  return (
    <>
      <div>
        <div className="text-gray-darkest mb-2">Region</div>
        <select
          name="region"
          id="regionSelect"
          className="text-gray-medium-300 border border-gray-light-300 w-[190px] h-[40px] rounded-md"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          {getAllRegionsOptions()}
        </select>
      </div>
      <div>
        <div className="text-gray-darkest mb-2">Headquarter</div>
        <select
          name="headquarter"
          id="headquarterSelect"
          value={headquarter}
          onChange={(e) => setHeadquarter(e.target.value)}
          className="text-gray-medium-300 border border-gray-light-300 w-[190px] h-[40px] rounded-md"
        >
          <option value="">Choose country</option>
          {getCountriesOptionsFromRegion(region)}
        </select>
      </div>
      <div>
        <div className="text-gray-darkest mb-2">Countries covered</div>
        <select
          name="coutryCovered"
          id="coutryCoveredSelect"
          // multiple
          className="text-gray-medium-300 border border-gray-light-300 w-[190px] h-[40px] rounded-md"
          value={countryCovered}
          onChange={(e) => setCountryCovered(e.target.value)}
        >
          <option value="">Choose country</option>
          {getAllCountriesOptions()}
        </select>
      </div>
      <div>
        <div className="text-gray-darkest mb-2">By sector</div>
        <select
          name="sector"
          id="sectorSelect"
          className="text-gray-medium-300 border border-gray-light-300 w-[190px] h-[40px] rounded-md"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          {getAllSectorsOptions()}
        </select>
      </div>
      <div>
        <div className="text-gray-darkest mb-2">By sub sector</div>
        <select
          name="subSector"
          id="subSectorSelect"
          className="text-gray-medium-300 border border-gray-light-300 w-[190px] h-[40px] rounded-md"
          value={subSector}
          onChange={(e) => setSubSector(e.target.value)}
        >
          <option value="">Choose sub sector</option>
          {getSubSectorsOptionsFromSector(sector)}
        </select>
      </div>
      <div>
        <div className="text-gray-darkest mb-2">By tier</div>
        <select
          name="tier"
          id="tierSelect"
          className="text-gray-medium-300 border border-gray-light-300 w-[190px] h-[40px] rounded-md"
          value={tier}
          onChange={(e) => setTier(e.target.value)}
        >
          <option value="">Choose tier</option>
          {getAllTiersOptions()}
        </select>
      </div>
      <div className="mt-5 flex justify-start items-center flex-col gap-2.5">
        <ButtonAnimation className="w-10/12">
          <Button onClick={() => applyFilters()} full>
            Apply filters
          </Button>
        </ButtonAnimation>
        <Button onClick={() => resetFilters()} onlyAsLink>
          Reset filters
        </Button>
      </div>
    </>
  );
}

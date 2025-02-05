// import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from "react";
import { queryTransformer } from './database_filters';
import { getAllSectorsOptions } from '../../utils/utils';

export default function SectorSubsectorSelector({
  organisationsBySubSectors,
}) {
  const [sector, setSector] = useState("");
  const [byListOfSubSectors, setByListOfSubSectors] = useState('unique');
  // const { replace } = useRouter();

  const filterBySubSector = (subSector) => {
    const eq = [
      { field: "subSector", value: subSector },
    ]
    const query = {
      eq
    };
    const queryString = queryTransformer(query, "organisations");
    // replace(`database/directory${queryString}`);
  }

  return <>
    <div className="flex justify-between items-center mb-5">
      <div className="text-2xl">Organizations by sub sector</div>
      <div className="flex justify-center gap-5">
        <select
          name="sector"
          id="sectorSelect"
          className="text-gray-medium-300 border border-gray-light-300 w-[320px] h-[60px] rounded-full px-4"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <option value="">Choose sector</option>
          {getAllSectorsOptions()}
        </select>
        <select
          name="list_type"
          id="listTypeSelect"
          value={byListOfSubSectors}
          onChange={(e) => setByListOfSubSectors(e.target.value)}
          className="text-gray-medium-300 border border-gray-light-300 w-[320px] h-[60px] rounded-full px-4"
        >
          <option value="unique">Unique sectors</option>
          <option value="list">List of sectors</option>
        </select>
      </div>
    </div>
    <div className="overflow-x-auto min-h-[220px] w-full flex gap-3">
      {organisationsBySubSectors.map((organisation) => {
        if (byListOfSubSectors === 'unique') {

          if (!(organisation?._id.split(',').length > 1)) {
            return <button onClick={() => filterBySubSector(organisation?._id.split(',')[0])} key={organisation?._id}><div className="flex h-[200px] min-w-[200px] rounded-2 flex-col justify-center gap-y-2 bg-primary-50 items-start rounded-lg snap-start">
              <span className="px-3 text-center w-full">{organisation?._id.split(',')[0] || "Not defined"}</span>
              <span className="px-3 text-center w-full text-2xl font-bold">{organisation?.nb}</span>
            </div></button>
          }
        } else {
          return <div key={organisation?._id} className="flex h-[200px] min-w-[200px] rounded-2 flex-col justify-center gap-y-2 bg-primary-50 items-start rounded-lg snap-start">
            <span className="px-3 text-center w-full
                            ">{organisation?._id.slice(0, 18) + " ..." || "Not defined"}</span>
            <span className="px-3 text-center w-full
                             text-2xl font-bold">{organisation?.nb}</span>
          </div>
        }
      })}


    </div></>
} 
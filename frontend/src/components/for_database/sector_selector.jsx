// import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { queryTransformer } from "./database_filters";


export default function SectorSelector({
    organisationsBySector,
}) {
    // console.log(organisationsBySector);
    const [byListOfSectors, setByListOfSectors] = useState('unique');
        // const { replace } = useRouter();

    const filterBySector = (sector) => {
        const eq = [
            { field: "sector", value: sector },
        ]
        const query = {
            eq
        };
        const queryString = queryTransformer(query, "organisations");
        // replace(`database/directory${queryString}`);
    }

    // useEffect(() => {
    //     console.log(byListOfSectors);
    // }, [byListOfSectors]);
    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <div className="text-base md:text-2xl">Organizations by sector</div>
                <select
                    name="list_type"
                    id="listTypeSelect"
                    className="text-gray-medium-300 border border-gray-light-300 w-[160px] md:w-[320px] h-[30px] md:h-[60px] rounded-full px-4"
                    value={byListOfSectors}
                    onChange={(e) => setByListOfSectors(e.target.value)}
                >
                    <option value="unique">Unique sectors</option>
                    <option value="list">List of sectors</option>
                </select>
            </div>
            <div className="overflow-x-auto min-h-[220px] w-full flex gap-3 pb-3 snap-x">
                {organisationsBySector.map((organisation) => {
                    if (byListOfSectors === 'unique') {

                        if (!(organisation?._id.split(',').length > 1)) {
                            return <button onClick={() => filterBySector(organisation?._id.split(',')[0])} key={organisation?._id}><div className="flex h-[200px] min-w-[200px] rounded-2 flex-col justify-center gap-y-2 bg-primary-50 items-start rounded-lg snap-start">
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

            </div>
        </>
    );
}

import React, { useState } from "react";
import { DonutChart } from "./for_database/donut_chart";

export default function OrganisationsByRegionsByTier({byRegionsData, byTiersData}) {

    const [byRegions, setByRegions] = useState(true);
    return (
        <div className="w-full h-full bg-primary-100 row-span-2 rounded-2xl flex flex-col justify-between p-7">
            <div className="flex justify-between items-center gap-x-2 bg-custom-white rounded-full h-10">
                <div className={`flex justify-center items-center h-8 w-6/12 ${byRegions ? "bg-primary rounded-full text-custom-white font-semibold" : ""}`}>
                    <span className="cursor-pointer text-sm md:text-base" onClick={() => setByRegions(true)}>By regions</span>
                </div>
                <div className={`flex justify-center items-center h-8 w-6/12 ${!byRegions ? "bg-primary rounded-full text-custom-white font-semibold" : ""}`}>
                    <span className="cursor-pointer text-sm md:text-base" onClick={() => setByRegions(false)}>By tiers</span>
                </div>
            </div>
            <div style={{ padding: "15px" }} className="h-full">
                <DonutChart
                    style={{
                        height: "150px",
                        width: "100%",
                    }}
                    data={byRegions ? byRegionsData : byTiersData}
                />
            </div>
        </div>
    )
}
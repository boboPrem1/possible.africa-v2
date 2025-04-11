import React, { useContext, useState, useEffect, useRef } from "react";
import { DonutChart } from "./for_database/donut_chart";
import { LangTransContext } from "../langTransContext";

export default function OrganisationsByRegionsByTier({byRegionsData, byTiersData}) {
    const langTrans = useContext(LangTransContext);
    const lang = langTrans.lang;
    const _ = langTrans._;
    const containerRef = useRef(null);

    const [byRegions, setByRegions] = useState(true);
    const [dimensions, setDimensions] = useState({ height: "00px" });
    const [mounted, setMounted] = useState(false);
    
    // Capture les dimensions initiales du conteneur et marque le composant comme monté
    useEffect(() => {
        if (containerRef.current) {
            // Définir une hauteur fixe basée sur la hauteur initiale du conteneur
            const height = containerRef.current.clientHeight || 300;
            setDimensions({ height: `${height}px` });
        }
        
        // Marquer le composant comme monté après un court délai
        const timer = setTimeout(() => {
            setMounted(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);
    
    // S'assurer que les données sont bien définies et non vides
    const hasData = byRegions 
        ? (byRegionsData && byRegionsData.length > 0) 
        : (byTiersData && byTiersData.length > 0);
    
    // Gérer le changement d'onglet en évitant les animations non désirées
    const handleTabChange = (isRegions) => {
        if (isRegions !== byRegions) {
            setByRegions(isRegions);
        }
    };
    
    // Style pour prévenir les animations non désirées
    const containerStyle = {
        height: "100%",
        minHeight: "400px", 
        position: "relative",
        overflow: "hidden",
        willChange: "contents"
    };
    
    const chartContainerStyle = {
        position: "relative",
        height: "100%",
        width: "100%",
        overflowY: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    
    return (
        <div 
            ref={containerRef}
            className="w-full bg-white rounded-2xl flex flex-col justify-between pt-4 pb-6 px-2 h-[550px]"
            style={containerStyle}
        >
            <div className="flex justify-between items-center gap-x-2 bg-primary-50 rounded-full h-8 mx-4 mb-0">
                <div className={`flex justify-center items-center h-7 w-6/12 ${byRegions ? "bg-primary rounded-full text-white font-semibold" : ""}`}>
                    <span 
                        className="cursor-pointer text-xs md:text-sm px-2 w-full text-center" 
                        onClick={() => handleTabChange(true)}
                    >
                        {_.database_by_regions || "By regions"}
                    </span>
                </div>
                <div className={`flex justify-center items-center h-7 w-6/12 ${!byRegions ? "bg-primary rounded-full text-white font-semibold" : ""}`}>
                    <span 
                        className="cursor-pointer text-xs md:text-sm px-2 w-full text-center" 
                        onClick={() => handleTabChange(false)}
                    >
                        {_.database_by_tiers || "By tiers"}
                    </span>
                </div>
            </div>
            
            <div className="flex-1 p-3 md:p-4" >
                {/* Afficher un message si les données ne sont pas disponibles ou si le composant n'est pas encore monté */}
                {!hasData || !mounted ? (
                    <div className="h-full flex items-center justify-center text-gray-500">
                        {_.loading_chart || "Chargement du graphique..."}
                    </div>
                ) : (
                    <div className="h-full" style={chartContainerStyle}>
                        <DonutChart
                            style={{
                                position: "relative",
                                height: "70%", 
                                width: "90%",
                                maxWidth: "400px",
                                marginBottom: "-30px"
                            }}
                            data={byRegions ? byRegionsData : byTiersData}
                            title={null}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
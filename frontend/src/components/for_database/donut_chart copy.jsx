import { ResponsivePie } from "@nivo/pie";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useEffect, useState, useContext } from "react";
import { LangTransContext } from "../../langTransContext";

const representations = ["dots", "lines", "gradient"];

// Implémentation complètement révisée du DonutChart
// export const DonutChart = ({
//   data,
//   style,
//   className,
//   title,
//   subtitle
// }) => {
//   const lang_trans = useContext(LangTransContext);
//   const _ = lang_trans._;

//   // Calculer le total pour les pourcentages
//   const total = Array.isArray(data) && data.length > 0
//     ? data.reduce((sum, item) => sum + (item.value || 0), 0)
//     : 0;

//   return (
//     <div style={{ ...style }} className={className}>
//       {title && (
//         <h3 className="text-center font-semibold text-lg mb-2">{title}</h3>
//       )}
//       {subtitle && (
//         <p className="text-center text-sm text-gray-600 mb-4">{subtitle}</p>
//       )}
//       <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//         {/* Ce div masque tout contenu qui pourrait être affiché au milieu */}
//         {/* <div
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '40%',
//             height: '40%',
//             backgroundColor: 'white',
//             borderRadius: '50%',
//             zIndex: 5
//           }}
//         /> */}

//         <ResponsivePie
//           data={data}
//           margin={{ top: 20, right: 120, bottom: 20, left: 20 }}
//           innerRadius={0.7}
//           padAngle={0.7}
//           cornerRadius={4}
//           activeOuterRadiusOffset={8}
//           colors={{ scheme: "category10" }}
//           borderWidth={1}
//           borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//           enableArcLinkLabels={false}
//           arcLabelsSkipAngle={14}
//           arcLabelsRadiusOffset={0.65}
//           arcLabelsTextColor="#fff"
//           arcLabelsSizePx={14}
//           // Désactiver les annotations centrales
//           enableAnnotations={false}
//           // Spécifier explicitement les couches
//           layers={['arcs', 'arcLabels', 'legends']}
//           // Personnalisation des libellés
//           arcLabelsComponent={({ datum, label, style }) => {
//             // Ne pas afficher de label si la valeur est trop petite
//             if (datum.value < total * 0.08) return null;

//             return (
//               <g transform={style.transform} style={{ pointerEvents: "none" }}>
//                 <rect
//                   x="-20"
//                   y="-12"
//                   width="40"
//                   height="24"
//                   rx="4"
//                   fill="rgba(0,0,0,0.3)"
//                 />
//                 <text
//                   textAnchor="middle"
//                   dominantBaseline="central"
//                   fill="#ffffff"
//                   style={{
//                     fontSize: 12,
//                     fontWeight: 700,
//                     textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
//                   }}
//                 >
//                   {datum.value}
//                 </text>
//               </g>
//             );
//           }}
//           legends={[
//             {
//               anchor: "right",
//               direction: "column",
//               justify: false,
//               translateX: 80,
//               translateY: 0,
//               itemsSpacing: 8,
//               itemWidth: 100,
//               itemHeight: 20,
//               itemTextColor: "#444",
//               itemDirection: "left-to-right",
//               itemOpacity: 1,
//               symbolSize: 15,
//               symbolShape: "circle",
//               effects: [
//                 {
//                   on: "hover",
//                   style: {
//                     itemTextColor: "#2BB19C",
//                     symbolSize: 17
//                   },
//                 },
//               ],
//               itemComponent: ({ label, color, value }) => (
//                 <div style={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "3px 5px",
//                   borderRadius: "4px",
//                   cursor: "pointer"
//                 }}>
//                   <span
//                     style={{
//                       display: "block",
//                       width: 12,
//                       height: 12,
//                       backgroundColor: color,
//                       borderRadius: "50%",
//                       marginRight: 8,
//                       boxShadow: "0 0 3px rgba(0,0,0,0.2)"
//                     }}
//                   />
//                   <div style={{ display: "flex", flexDirection: "column" }}>
//                     <span style={{
//                       fontSize: "11px",
//                       fontWeight: 600,
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       color: "#444"
//                     }}>
//                       {label.length > 15 ? `${label.substring(0, 13)}...` : label}
//                     </span>
//                     <span style={{ fontSize: "10px", color: "#777" }}>
//                       {value} ({((value / total) * 100).toFixed(0)}%)
//                     </span>
//                   </div>
//                 </div>
//               ),
//             },
//           ]}
//           tooltip={({ datum }) => (
//             <div
//               style={{
//                 background: "white",
//                 padding: "10px 14px",
//                 border: "1px solid #e0e0e0",
//                 borderRadius: "6px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//                 fontSize: "12px",
//                 fontWeight: 500,
//               }}
//             >
//               <div style={{
//                 color: datum.color,
//                 fontWeight: 700,
//                 marginBottom: "5px",
//                 fontSize: "14px"
//               }}>
//                 {datum.label}
//               </div>
//               <div style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 gap: "12px"
//               }}>
//                 <span>
//                   <strong style={{ fontSize: "13px" }}>{datum.value}</strong> {_?.organisations || "organisations"}
//                 </span>
//                 <span style={{
//                   background: "#f5f5f5",
//                   padding: "3px 8px",
//                   borderRadius: "12px",
//                   fontSize: "12px",
//                   fontWeight: "bold",
//                   color: "#2BB19C"
//                 }}>
//                   {((datum.value / total) * 100).toFixed(1)}%
//                 </span>
//               </div>
//             </div>
//           )}
//         />
//       </div>
//     </div>
//   );
// };

export const DonutChart = ({ data, style, className, title, subtitle }) => {
  const lang_trans = useContext(LangTransContext);
  const _ = lang_trans._;

  const total =
    Array.isArray(data) && data.length > 0
      ? data.reduce((sum, item) => sum + (item.value || 0), 0)
      : 0;

  return (
    <div style={{ ...style }} className={className}>
      {title && (
        <h3 className="text-center font-semibold text-lg mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-center text-sm text-gray-600 mb-4">{subtitle}</p>
      )}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 140, bottom: 20, left: 20 }}
          innerRadius={0.7}
          padAngle={1}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "nivo" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
          enableArcLinkLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsRadiusOffset={0.65}
          arcLabelsTextColor="#fff"
          arcLabelsComponent={({ datum, label, style }) => (
            <g transform={style.transform} style={{ pointerEvents: "none" }}>
              <rect
                x="-20"
                y="-12"
                width="40"
                height="24"
                rx="4"
                fill="rgba(255, 255, 255, 1)"
              />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fill="#ffffff"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* {datum.value} */}
              </text>
            </g>
          )}
          legends={[
            {
              anchor: "right",
              direction: "column",
              translateX: 125, // Increased from 100 to 125 to add more spacing
              translateY: 0,
              itemWidth: 110,
              itemHeight: 20,
              itemsSpacing: 10,
              itemTextColor: "#444",
              symbolSize: 15,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#2BB19C",
                    symbolSize: 17,
                  },
                },
              ],
              itemComponent: ({ label, color, value }) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "3px 5px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    paddingLeft: "10px",
                    border: "5px solid #000000",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: 12,
                      height: 12,
                      backgroundColor: color,
                      borderRadius: "50%",
                      marginRight: 8,
                      boxShadow: "0 0 3px rgba(0,0,0,0.2)",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        color: "#444",
                      }}
                    >
                      {label.length > 20
                        ? `${label.substring(0, 18)}...`
                        : label}
                    </span>
                    <span style={{ fontSize: "10px", color: "#777" }}>
                      {value} ({((value / total) * 100).toFixed(1)}%)
                    </span>
                  </div>
                </div>
              ),
            },
          ]}
          tooltip={({ datum }) => (
            <div
              style={{
                background: "white",
                padding: "10px 14px",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                fontSize: "12px",
                fontWeight: 500,
                zIndex: 999,
              }}
            >
              <div
                style={{
                  color: datum.color,
                  fontWeight: 700,
                  marginBottom: "5px",
                  fontSize: "14px",
                }}
              >
                {datum.label}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span>
                  <strong style={{ fontSize: "13px" }}>{datum.value}</strong>{" "}
                  {_?.organisations || "organisations"}
                </span>
                {/* <span style={{
                          background: "#f5f5f5",
                          padding: "3px 8px",
                          borderRadius: "12px",
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#2BB19C"
                        }}>
                          {((datum.value / total) * 100).toFixed(1)}%
                        </span> */}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export const ResponsiveCloropleth = ({
  data,
  style,
  className,
  title,
  subtitle,
  onCountryClick, // Add this prop
  selectedCountry, // Add this prop
}) => {
  const [features, setFeatures] = useState([]);
  const lang_trans = useContext(LangTransContext);
  const _ = lang_trans._;

  useEffect(() => {
    fetch("/assets/data/africa_old.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data.features));
  }, []);

  if (features.length === 0) {
    return <div>{_.loading_map || "Loading map..."}</div>;
  }
  return (
    <div style={{ ...style }} className={className}>
      {title && (
        <h3 className="text-center font-semibold text-lg mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-center text-sm text-gray-600 mb-4">{subtitle}</p>
      )}
      <ResponsiveChoropleth
        data={data}
        features={features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 100000]}
        unknownColor="#666666"
        label="properties.name"
        key="properties.name"
        valueFormat=".2s"
        projectionScale={350}
        projectionTranslation={[0.3, 0.55]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        onClick={(feature) => {
          if (onCountryClick && feature.properties && feature.properties.name) {
            onCountryClick(feature.properties.name);
          }
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              {
                offset: 0,
                color: "#124B42",
              },
              {
                offset: 100,
                color: "inherit",
              },
            ],
          },
          // Add pattern for selected country
          {
            id: "selectedCountry",
            type: "patternLines",
            background: "rgba(43, 177, 156, 0.7)", // Primary color with transparency
            color: "rgba(255, 255, 255, 0.7)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          ...data.map((d) => ({
            match: {
              id: d.id,
            },
            id: representations[
              Math.floor(Math.random() * representations.length)
            ],
          })),
        ]}
        // legends={[
        //   {
        //     anchor: "bottom-left",
        //     direction: "column",
        //     justify: true,
        //     translateX: 100,
        //     translateY: -100,
        //     itemsSpacing: 5,
        //     itemWidth: 120,
        //     itemDirection: "left-to-right",
        //     itemTextColor: "#444",
        //     itemOpacity: 0.85,
        //     symbolSize: 18,
        //     title: _.map_legend_title || "Pays par nombre d'organisations",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemTextColor: "#000",
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
        tooltip={({ feature }) => (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <strong>{feature.properties.name}</strong>
            <div>
              {feature.value
                ? `${feature.value} ${_.map_organisations || "organisations"}`
                : _.map_no_data || "Aucune donnée"}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export const MobileResponsiveCloropleth = ({
  data,
  style,
  className,
  title,
  subtitle,
  onCountryClick, // Add this prop
  selectedCountry, // Add this prop
}) => {
  const [features, setFeatures] = useState([]);
  const lang_trans = useContext(LangTransContext);
  const _ = lang_trans._;

  useEffect(() => {
    fetch("/assets/data/africa_old.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data.features));
  }, []);

  if (features.length === 0) {
    return <div>{_.loading_map || "Loading map..."}</div>;
  }
  return (
    <div style={{ ...style }} className={className}>
      {title && (
        <h3 className="text-center font-semibold text-lg mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-center text-sm text-gray-600 mb-4">{subtitle}</p>
      )}
      <ResponsiveChoropleth
        data={data}
        features={features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 100000]}
        unknownColor="#666666"
        label="properties.name"
        key="properties.name"
        valueFormat=".2s"
        projectionScale={230}
        projectionTranslation={[0.3, 0.55]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        onClick={(feature) => {
          if (onCountryClick && feature.properties && feature.properties.name) {
            onCountryClick(feature.properties.name);
          }
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              {
                offset: 0,
                color: "#124B42",
              },
              {
                offset: 100,
                color: "inherit",
              },
            ],
          },
          // Add pattern for selected country
          {
            id: "selectedCountry",
            type: "patternLines",
            background: "rgba(43, 177, 156, 0.7)", // Primary color with transparency
            color: "rgba(255, 255, 255, 0.7)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          ...data.map((d) => {
            return {
              match: {
                id: d.id,
              },
              id: representations[
                Math.floor(Math.random() * representations.length)
              ],
            };
          }),
        ]}
        tooltip={({ feature }) => (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <strong>{feature.properties.name}</strong>
            <div>
              {feature.value
                ? `${feature.value} ${_.map_organisations || "organisations"}`
                : _.map_no_data || "Aucune donnée"}
            </div>
          </div>
        )}
      />
    </div>
  );
};

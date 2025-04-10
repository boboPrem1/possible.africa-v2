import { ResponsivePie } from "@nivo/pie";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useEffect, useState, useContext } from "react";
import { LangTransContext } from "../../langTransContext";

const representations = ["dots", "lines", "gradient"];

export const DonutChart = ({ data, style, className, title, subtitle }) => {
  const lang_trans = useContext(LangTransContext);
  const _ = lang_trans._;

  return (
    <div style={{ ...style }} className={className}>
      {title && (
        <h3 className="text-center font-semibold text-lg mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-center text-sm text-gray-600 mb-4">{subtitle}</p>
      )}
      <ResponsivePie
        data={data}
        margin={{ top: 30, right: 100, bottom: 30, left: 10 }}
        innerRadius={0.4} // Définit le "trou" pour transformer en Donut Chart
        padAngle={0.1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "paired" }} // Palette de couleurs prédéfinie
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "top-right",
            data,
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: -30,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
        tooltip={({ datum }) => (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <strong>{datum.label}</strong>
            <div>
              {datum.value} {/* ({datum.formattedValue}) */}
              Organizations
            </div>
          </div>
        )}
      />
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
        //     itemHeight: 20,
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

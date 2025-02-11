
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useEffect, useState } from "react";

const representations = ["dots", "lines", "gradient"];

export const DonutChart = ({
  data,
  style,
  className,
}) => {
  return (
    <div style={{ ...style }} className={className}>
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
      />
    </div>
  );
};

export const ResponsiveCloropleth = ({
  data,
  style,
  className,
}) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/assets/data/africa_old.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data.features));
  }, []);

  if (features.length === 0) {
    return <div>Loading map...</div>;
  }
  return (
    <div style={{ ...style }} className={className}>
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
        projectionScale={330}
        projectionTranslation={[0.3, 0.55]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
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
        ]}
        fill={[
          ...data.map((d) => ({
            match: {
              id: d.id,
            },
            id: representations[Math.floor(Math.random() * representations.length)],
          })),
        ]}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 100,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                  itemOpacity: 1,
                },
              },
              
            ],
          },
        ]}
      />
    </div>
  );
};


export const MobileResponsiveCloropleth = ({
  data,
  style,
  className,
}) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/assets/data/africa_old.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data.features));
  }, []);

  if (features.length === 0) {
    return <div>Loading map...</div>;
  }
  return (
    <div style={{ ...style }} className={className}>
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
        ]}
        fill={[
          ...data.map((d) => ({
            match: {
              id: d.id,
            },
            id: representations[Math.floor(Math.random() * representations.length)],
          })),
        ]}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 25,
            translateY: -75,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                  itemOpacity: 1,
                },
              },
              
            ],
          },
        ]}
      />
    </div>
  );
};

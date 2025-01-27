import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialBarChart = (props) => {
  const ChartOptions = {
    chart: {
      height: 170,
      type: "radialBar",
    },
    series: [67],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "13px",
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  return (
    <div id="chart" className={props.className}>
      <ReactApexChart
        options={props.options}
        series={props.options.series}
        type="radialBar"
        height={170}
      />
    </div>
  );
};

export default RadialBarChart;

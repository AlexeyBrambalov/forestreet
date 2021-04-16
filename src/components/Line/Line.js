import React, { useContext, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { DataContext } from "../../Context/DataContext";
import { formatData } from "../../utilities/functions";

import defaultData from "../../defaultData.json";

const Line = () => {
  const { state, chartData, setChartData, time } = useContext(DataContext);

  useEffect(() => {
    const newState = [...state];
    const forecastData = formatData("forecast", newState);
    const actualData = formatData("actual", newState);

    defaultData[0].data = forecastData;
    defaultData[1].data = actualData;

    setChartData(defaultData);

    console.log(chartData);

    console.log("chart");
    // eslint-disable-next-line
  }, [state]);

  console.log("chartdata", chartData);
  console.log("time", time);

  return (
    <>
      {state && (
        <ResponsiveLine
          data={chartData}
          margin={{
            top: 50,
            right: 110,
            bottom: 150,
            left: 60,
          }}
          colors={(d) => d.color}
          xScale={{
            type: "point",
          }}
          yScale={{
            type: "linear",
            min: 0,
            max: 500,
          }}
          minY="auto"
          maxY="auto"
          useMesh={true}
          curve="cardinal"
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 45,
            legend: "Date & Time",
            legendOffset: 106,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Carbon Intensity",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      )}
    </>
  );
};

export default Line;

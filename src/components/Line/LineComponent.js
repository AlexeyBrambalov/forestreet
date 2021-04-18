import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { DataContext } from "../../Context/DataContext";
import { getLabelData, getValueData } from "../../utilities/functions";

import { data } from "../../defaultData";

export default function LineComponent() {
  const { state } = useContext(DataContext);

  const newState = [...state];
  const timeData = getLabelData(newState);
  data.labels = timeData;

  const forecastData = getValueData(newState, "forecast");
  const actualData = getValueData(newState, "actual");

  data.datasets[0].data = forecastData;
  data.datasets[1].data = actualData;

  return (
    <div>
      <Line data={data} />
    </div>
  );
}

import React, { createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [time, setTime] = useState({
    startTime: "2018-01-20T12:30Z",
    endTime: "2018-01-20T16:30Z",
  });

  return (
    <DataContext.Provider
      value={{
        state,
        setState,
        chartData,
        setChartData,
        time,
        setTime,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

import React, { createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [chartData, setChartData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        state,
        setState,
        chartData,
        setChartData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

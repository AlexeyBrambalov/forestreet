import { useContext, useEffect } from "react";
import { DataContext } from "./Context/DataContext";
import Loading from "./components/Line/Loading";

import DateAndTimePicker from "./components/Line/DateAndTimePicker";
import LineComponent from "./components/Line/LineComponent";

import "./App.css";

const App = () => {
  const { state, setState, time } = useContext(DataContext);
  useEffect(() => {
    fetch(
      `https://api.carbonintensity.org.uk/intensity/${time.startTime}/${time.endTime}`
    )
      .then((response) => response.json())
      .then((data) => setState(data["data"]))
      .catch((error) => console.log(error));

    // eslint-disable-next-line
  }, [time]);

  return (
    <>
      <div className="App">
        {state?.length ? <LineComponent /> : <Loading />}
      </div>
      <DateAndTimePicker />
    </>
  );
};

export default App;

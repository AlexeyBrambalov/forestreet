import { useContext, useEffect } from "react";
import Line from "./components/Line/Line";
import { DataContext } from "./Context/DataContext";
import Loading from "./components/Line/Loading";

import "./App.css";
import DateAndTimePicker from "./components/Line/DateAndTimePicker";

const App = () => {
  const { state, setState, time } = useContext(DataContext);
  useEffect(() => {
    fetch(
      `https://api.carbonintensity.org.uk/intensity/${time.startTime}/${time.endTime}`
    )
      .then((response) => response.json())
      .then((data) => setState(data["data"]));

    // eslint-disable-next-line
  }, [time]);

  console.log("2018-01-20T12:30Z", "2018-01-20T16:30Z", time);

  console.log("state", state);

  return (
    <>
      <div className="App">{state?.length ? <Line /> : <Loading />}</div>
      <DateAndTimePicker />
    </>
  );
};

export default App;

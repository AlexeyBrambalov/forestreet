import { useContext, useEffect } from "react";
import Line from "./components/Line/Line";
import { DataContext } from "./Context/DataContext";
import Loading from "./components/Line/Loading";

import "./App.css";

const App = () => {
  const { state, setState } = useContext(DataContext);
  useEffect(() => {
    fetch(
      "https://api.carbonintensity.org.uk/intensity/2018-01-20T12:00Z/2018-01-20T16:30Z"
    )
      .then((response) => response.json())
      .then((data) => setState(data["data"]));
    // eslint-disable-next-line
  }, []);

  return <div className="App">{state.length ? <Line /> : <Loading />}</div>;
};

export default App;

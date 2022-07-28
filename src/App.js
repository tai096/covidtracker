import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Hightlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios("https://api.covid19api.com/countries")
      .then((result) => {
        setCountries(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <CountrySelector countries={countries} />
      <Highlight />
      <Summary />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./input.scss";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Hightlight";
import Summary from "./components/Summary";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedData, setSelectedData] = useState([]);

  const handeOnChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((result) => {
        setCountries(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const { Slug } = countries.find(
        (country) => country.ISO2 === selectedCountry
      );
      console.log(Slug);
      axios
        .get(`https://api.covid19api.com/dayone/country/${Slug}`)
        .then((res) => {
          const last = res.data.pop();
          console.log(last);
          setSelectedData([last]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedCountry]);

  return (
    <div className="App">
      <CountrySelector countries={countries} onChange={handeOnChange} />
      <Highlight data={selectedData} />
      <Summary />
    </div>
  );
}

export default App;

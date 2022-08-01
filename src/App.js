import { useEffect, useState } from "react";
import "./input.scss";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Hightlight";
import Summary from "./components/Summary";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const notifySuccess = () =>
    toast.success("Cập nhật thành công !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const notifyError = () =>
    toast.error("Dữ liệu đang được cập nhật !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const handleOnChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((result) => {
        setCountries(result.data);
        setSelectedCountry("VN");
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
      console.log("Slug:", Slug);
      axios
        .get(`https://api.covid19api.com/dayone/country/${Slug}`)
        .then((res) => {
          let last = res.data.pop();
          if (res.data.pop() !== undefined) {
            setSelectedData([last]);
            notifySuccess();
          } else {
            setSelectedData([]);
            notifyError();
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }, [selectedCountry]);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <Header />
      <CountrySelector
        countries={countries}
        onChange={handleOnChange}
        value={selectedCountry}
      />
      <Highlight data={selectedData} />
      <Summary />
    </div>
  );
}

export default App;

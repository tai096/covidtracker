import { useEffect, useState } from "react";
import "./input.scss";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Hightlight";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Chart from "./components/Chart";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [lastData, setLastData] = useState([]);

  const [loading, setLoading] = useState(false);
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
    axios.get("https://api.covid19api.com/countries").then((result) => {
      setCountries(result.data);
      setSelectedCountry("VN");
    }).catch = (err) => {
      console.log(err);
    };
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const { Slug } = countries.find(
        (country) => country.ISO2 === selectedCountry
      );
      console.log("Slug:", Slug);
      setLoading(true);

      axios
        .get(`https://api.covid19api.com/dayone/country/${Slug}`)
        .then((res) => {
          const last = res.data.pop();
          const lineChartData = res.data.slice(res.data.length - 10);
          if (res.data.pop() !== undefined) {
            setLastData([last]);
            setSelectedData(lineChartData);
            console.log(last);
            console.log(lineChartData);
            notifySuccess();
          } else {
            setLastData([]);
            setSelectedData([]);
            notifyError();
          }
          setLoading(false);
        }).catch = (err) => {
        console.log(err);
        setLoading(false);
      };
    }
  }, [selectedCountry]);

  return (
    <div className="App">
      <NavBar />
      <HomePage />
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
      <Header date={lastData} />
      <CountrySelector
        countries={countries}
        onChange={handleOnChange}
        value={selectedCountry}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Highlight data={lastData} />
          <Chart data={selectedData} />
        </>
      )}
    </div>
  );
}

export default App;

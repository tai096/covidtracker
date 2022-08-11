import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CountrySelector from "../CountrySelector";
import HightlightCountry from "../HightlightCountry";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header";
import Loading from "../Loading";
import Chart from "../Chart";
import HightlightGlobal from "../HightlightGlobal";

export default function TrackerPage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [lastData, setLastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [globalTotalConfirmed, setGlobalTotalConfirmed] = useState(0);
  const [globalTotalDeaths, setGlobalTotalDeaths] = useState(0);
  const [globalNewDeaths, setGlobaNewDeaths] = useState(0);

  const [windowWidth, setwindowWidth] = useState({
    winWidth: window.innerWidth,
  });

  const detectSize = () => {
    setwindowWidth({
      winWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowWidth]);

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
    axios.get("https://api.covid19api.com/summary").then((res) => {
      setGlobalTotalConfirmed(res.data.Global.TotalConfirmed);
      setGlobalTotalDeaths(res.data.Global.TotalDeaths);
      setGlobaNewDeaths(res.data.Global.NewDeaths);
    }).catch = (err) => {
      console.log(err);
    };
  }, [globalTotalConfirmed, globalTotalDeaths]);

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
          const lineChartData = res.data.slice(res.data.length - 10);
          const last = res.data.pop();
          if (res.data.pop() !== undefined) {
            setLastData([last]);
            setSelectedData(lineChartData);
            // console.log(last);
            // console.log(res.data);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
      <HightlightGlobal
        totalConfirmed={globalTotalConfirmed}
        totalDeaths={globalTotalDeaths}
        newDeaths={globalNewDeaths}
      />
      <CountrySelector
        countries={countries}
        onChange={handleOnChange}
        value={selectedCountry}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <HightlightCountry data={lastData} />
          {windowWidth.winWidth > 599 ? <Chart data={selectedData} /> : <></>}
        </>
      )}
    </motion.div>
  );
}

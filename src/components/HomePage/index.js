import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img from "../../assets/img/whatIsCovid.png";

export default function HomePage() {
  let navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        class="px-5 flex flex-col-reverse items-center justify-around lg:flex-row"
      >
        <div>
          <h1 className="font-bold text-4xl my-7 text-rose-400 lg:text-5xl">
            Covid-19 là gì?
          </h1>
          <h3 className="font-bold text-2xl mb-4 text-green-900 lg:text-3xl">
            Coronavirus
          </h3>
          <p className="text-base max-w-lg lg:text-lg">
            Corona Viruses are a type of Virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of Respiratory illness now called COVID-19.
          </p>
          <button
            onClick={() => navigate("/information")}
            className="shadow-xl bg-rose-500 border-rose-500 border-2 text-white w-44 h-16 my-6 mx-auto text-xl font-bold rounded-3xl hover:bg-white hover:text-rose-500 transition duration-500 ease-in-out"
          >
            Xem thêm
          </button>
        </div>
        <img src={img} className="w-4/5 max-w-lg" />
      </motion.div>
    </>
  );
}

import img from "../../assets/img/whatIsCovid.png";
export default function HomePage() {
  return (
    <>
      <div class="px-16 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-5xl my-7 text-rose-400">
            Covid-19 là gì?
          </h1>
          <h3 className="font-bold text-2xl mb-4 text-green-900">
            Coronavirus
          </h3>
          <p>
            Corona Viruses are a type of Virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of Respiratory illness now called COVID-19.
          </p>
          <button className="bg-red-200 text-rose-500 w-44 h-16 my-6 text-xl font-bold rounded-3xl hover:border-rose-500 border-2">
            Xem thêm
          </button>
        </div>
        <img src={img} className="w-1/2" />
      </div>
    </>
  );
}

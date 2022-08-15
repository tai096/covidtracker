import moment from "moment";

export default function Header(props) {
  const date =
    props.date &&
    props.date.map((item) => moment(item.Date).format("DD/MM/YYYY"));

  return (
    <div className="flex flex-col items-center justify-center py-14 ">
      <h1 className="text-3xl lg:text-6xl sm:text-5xl">Số liệu COVID-19</h1>
      <h3 className="mt-4 lg:text-xl ">{date}</h3>
    </div>
  );
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart(props) {
  const labels = [
    "Tổng Số Ca Nhiễm",
    "Số Ca Khỏi Trong Ngày",
    "Tổng Số Ca Tử Vong",
    "Tổng Số Ca Tử Vong",
    "Tổng Số Ca Tử Vong",
  ];
  const confirmed = props.data.map((item) => item.Confirmed);
  const recovered = props.data.map((item) => item.Recovered);
  const deaths = props.data.map((item) => item.Deaths);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Biểu đồ Covid-19",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Số ca nhiễm",
        data: confirmed,
        backgroundColor: "rgb(250 204 21)",
      },
      {
        label: "Số ca khỏi",
        data: recovered,
        backgroundColor: "rgb(74 222 128)",
      },
      {
        label: "Số ca tử vong",
        data: deaths,
        backgroundColor: "rgb(239 68 68)",
      },
    ],
  };

  return (
    <div className=" bg-white mx-44 mt-44 ">
      <Line options={options} data={data} />
    </div>
  );
}

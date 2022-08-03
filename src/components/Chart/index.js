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
import moment from "moment";

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
  const confirmed = props.data.map((item) => item.Confirmed);
  const deaths = props.data.map((item) => item.Deaths);
  const date = props.data.map((item) => moment(item.Date).format("DD/MM/YYYY"));

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Số liệu Covid-19 trong 10 ngày gần nhất",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        color: "#fff",
      },
      y1: {
        color: "#fff",

        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  const labels = date;
  const data = {
    labels,
    datasets: [
      {
        label: "Số ca mắc",
        data: confirmed,
        borderColor: "rgb(253 224 71)",
        backgroundColor: "rgba(250 ,204 ,21, 0.4)",
        yAxisID: "y",
      },
      {
        label: "Số ca tử vong",
        data: deaths,
        borderColor: "rgba(248, 113, 113)",
        backgroundColor: "rgba(248, 113, 113, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className=" bg-blue-100 bg-opacity-80 mx-44 mt-44 p-8 ">
      <Line options={options} data={data} />
    </div>
  );
}

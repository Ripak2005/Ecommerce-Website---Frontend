import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip,
  ArcElement,
  PointElement,
  Filler,
  RadialLinearScale,
  plugins,
  scales,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip,
  ArcElement,
  PointElement,
  Filler,
  RadialLinearScale
);

const BarChart = ({ sold, title }) => {
  const options = {
    responsive: true,
    indexAxis: "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: title,
    datasets: [
      {
        label: "Units Sold",
        data: sold,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };
  return (
    <>
      <Bar width={"350px"} options={options} data={data} />
    </>
  );
};

export default BarChart;

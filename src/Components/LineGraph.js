import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-colorschemes";


export default function LineGraph() {
  const [data] = useContext(DataContext);

  const lineData = {
    labels:
      data.length === 0 ? [] : data.vaccine_data.map((index) => index.date),
    datasets: [
      {
        label: "Total Number of Vaccines",
        data:
          data.length === 0
            ? []
            : data.vaccine_data.map((index) => index.total_vaccinations),
        fill: false,
      },
      {
        label: "Total People Vaccinated",
        data:
          data.length === 0
            ? []
            : data.vaccine_data.map((index) => index.people_vaccinated),
        fill: false,
      },
      {
        label: "Daily Vaccines",
        data:
          data.length === 0
            ? []
            : data.vaccine_data.map((index) => index.daily_vaccinations),
        fill: false,
      },
      {
        label: "People Fully Vaccinated",
        data:
          data.length === 0
            ? []
            : data.vaccine_data.map((index) => index.people_fully_vaccinated),
        fill: false,
      },
    ],
  };

  window.onload = function () {
    if (window.orientation === 0 || window.orientation === 180) {
      alert("For best viewing results please turn your phone landscape!");
    }
  };

  const options = {
    title: {
      display: true,
      text: `${data.country} | Vaccine Statistics`,
      fontSize: 20,
      fontColor: "black",
    },
    maintainAspectRatio : false,
    plugins: {
      colorschemes: {
        scheme: "office.Flow6",
        fillAlpha: 0.8,
      },
    },
    legend: {
      display: true,
      position: "bottom",
      fontSize: 10,
    },
    layout: {
      padding: {
        top: 20,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#000",
            fontSize: 12,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#000",
            fontSize: 12,
          },
          type: "time",
          time: {
            unit: "days",
            displayFormats: {
              days: "MMM D",
            },
          },
        },
      ],
    },
  };

  const displayGraph = () => {
    return data.length === 0 ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <Line  data={lineData} options={options} />
      </>
    );
  };

  return <>{displayGraph()}</>;
}

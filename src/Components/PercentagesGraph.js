import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-colorschemes";



export default function PercentagesGraph() {
  const [data] = useContext(DataContext);

  const lineData = {
    labels:
      data.length === 0 ? [] : data.vaccine_data.map((index) => index.date),
    datasets: [
      {
        label: "Total Number of Vaccines per 100k",
        data:
          data.length === 0
            ? []
            : data.vaccine_data.map((index) => index.total_vaccinations_per_hundred),
        fill: false,
      },
      {
        label: "Total Vaccinated per 100k",
        data:
          data.length === 0
            ? []
            : data.vaccine_data.map((index) => index.people_vaccinated_per_hundred),
        fill: false,
      },
      {
        label: "Fully Vaccinated per 100k",
        data:
          data.length === 0
            ? []
            : data.vaccine_data.map((index) => index.people_fully_vaccinated_per_hundred),
        fill: false,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `${data.country} | Vaccine Statistics per 100k `,
      fontSize: 20,
      fontColor: "black",
    },
    maintainAspectRatio: false,
    plugins: {
      colorschemes: {
        scheme: "office.RedViolet6",
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
            min: 0,
            max: 100,
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

  return (
    <>
      {data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Line data={lineData} options={options} />
        </>
      )}
    </>
  );
}

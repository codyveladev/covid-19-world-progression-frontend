import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-colorschemes";

const axios = require("axios");

export default function TopTenGraph() {
  const [topTen, setTopTen] = useState([]);

  const getTopTen = async () => {
    let response = await axios.get(
      "https://covid-19-world-progression-backend.vercel.app/api/top/total-values"
    );
    setTopTen(response.data);
  };

  useEffect(() => {
    getTopTen();
  }, []);

  const barData = {
    labels:
      topTen.length === 0 ? [] : topTen.totals.map((index) => index.Country),
    datasets: [
      {
        label: "# of Total Vaccinations",
        data:
          topTen.length === 0
            ? []
            : topTen.totals.map((index) => parseInt(index.Max)),
        backgroundColor: [
          "rgba(166,206,227, 0.8)",
          "rgba(31,120,180, 0.8)",
          "rgba(178,223,138, 0.8)",
          "rgba(51,160,44,0.8)",
          "rgba(251,154,153,0.8)",
          "rgba(227,26,28,0.8)",
          "rgba(253,191,111, 0.8)",
          "rgba(255,127,0, 0.8)",
          "rgba(202,178,214, 0.8)",
          "rgba(106,61,154, 0.8)",
        ],
        borderColor: [
          "rgba(166,206,227, 1)",
          "rgba(31,120,180, 1)",
          "rgba(178, 223, 138, 1)",
          "rgba(51,160,44, 1)",
          "rgba(251, 154, 153,1),",
          "rgba(227, 26, 28,1)",
          "rgba(253, 191, 111,1)",
          "rgba(255,127,0, 1)",
          "rgba(202,178,214, 1)",
          "rgba(106,61,154,1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `Top 10 Countries with Most Vaccines`,
      fontSize: 20,
      fontColor: "black",
    },
    legend: {
      display: true,
      position: "bottom",
      fontSize: 10,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  return (
    <>
      <Bar data={barData} options={options} />
    </>
  );
}

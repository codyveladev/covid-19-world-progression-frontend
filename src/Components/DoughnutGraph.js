import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
const axios = require("axios");

export default function DoughnutGraph() {
  const [count, setCount] = useState([]);

  const getVaccineCount = async () => {
    try {
      let response = await axios.get(
        "https://covid-19-world-progression-backend.vercel.app/api/count/country-vaccine"
      );

      setCount(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const graphData = {
    labels: Object.keys(count),
    datasets: [
      {
        label: "Countries Using Vaccine",
        data: Object.values(count),
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `Countries Using Vaccines`,
      fontSize: 20,
      fontColor: "black",
    },
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
      fontSize: 10,
    },
  };

  useEffect(() => {
      getVaccineCount()
  }, [])

  return (
    <>
      <Doughnut data={graphData} options={options} />
    </>
  );
}

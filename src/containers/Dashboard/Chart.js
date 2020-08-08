import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ data, title }) => {
  const state = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        height: 500,
        data: data,
      },
    ],
  };

  return (
    <div>
      {" "}
      <Bar
        height="200"
        data={state}
        options={{
          title: {
            display: true,
            text: title,
            fontSize: 20,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default Chart;

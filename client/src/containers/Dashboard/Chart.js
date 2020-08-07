import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = () => {
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
        data: [0, 400, 2000, 500, 1000, 750, 450],
      },
    ],
  };

  return (
    <div style={{ height: 500 }}>
      {" "}
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Calories Burned This Week",
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

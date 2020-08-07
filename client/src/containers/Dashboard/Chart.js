import React from "react";
import BarChart from "react-bar-chart";
const Chart = () => {
  const data = [
    { text: "monday", value: 1100 },
    { text: "tuesday", value: 500 },
    { text: "wednesday", value: 4400 },
    { text: "thursday", value: 1000 },
    { text: "friday", value: 2200 },
    { text: "saturday", value: 300 },
    { text: "sunday", value: 500 },
  ];
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  return (
    <div>
      <BarChart
        ylabel="Calories"
        xlabel="Days"
        height={500}
        width={800}
        margin={margin}
        data={data}
      />
    </div>
  );
};

export default Chart;

import React from "react";
// import BarChart from "react-bar-chart";
const Chart = () => {
  const data = {
    monday: 1100,
    tuesday: 500,
    wednesday: 4400,
    thursday: 1000,
    friday: 2200,
    saturday: 300,
    sunday: 500,
  };
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  return (
    <div>
      {/* <BarChart ylabel="Calories" margin={margin} data={data} /> */}chart
    </div>
  );
};

export default Chart;

import React from "react";
import Chart from "./Chart";

const Charts = () => {
  return (
    <div>
      <Chart
        title={"Calories Burned"}
        data={[100, 400, 800, 2300, 5000, 0, 500]}
      />
      <Chart
        title={"Distance Travelled"}
        data={[100, 400, 800, 2300, 5000, 0, 500]}
      />

      <Chart
        title={"Steps Walked"}
        data={[100, 400, 800, 2300, 5000, 0, 500]}
      />
    </div>
  );
};

export default Charts;

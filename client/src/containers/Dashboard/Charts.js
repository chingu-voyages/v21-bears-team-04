import React from "react";
import Chart from "./Chart";
import { connect } from "react-redux";
import { getUserWeeklyMetric } from "../../utils/transformations";

const Charts = ({ userId, activities }) => {
  return (
    <div>
     
      <Chart
        title={"Calories Burned"}
        data={getUserWeeklyMetric(activities, userId, "calories")}
      />
      <Chart
        title={"Distance Travelled"}
        data={getUserWeeklyMetric(activities, userId, "distance")}
      />

      <Chart
        title={"Steps Walked"}
        data={getUserWeeklyMetric(activities, userId, "steps")}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    activities: state.activities,
  };
};

export default connect(mapStateToProps)(Charts);

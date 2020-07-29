import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getActivitiesCreatedByUser,
  constructActivities,
  getActivitiesByDay,
} from "../utils/transformations";

export const _Journal = ({
  activities,
  activityCategories,
  auth: { userId, username },
}) => {
  const constructActivityEntries = (activities, associatedData) => {
    const userActivities = getActivitiesCreatedByUser(activities, userId);
    const activitiesWithData = constructActivities(
      userActivities,
      associatedData
    );
    const activitiesByDay = getActivitiesByDay(activities)
    console.log("activitiesWithData", activitiesWithData)

    return activitiesWithData.map((activity) => (
      <li key={Math.random()}>
        <h3>{activity.title}</h3>
        <h3>{activity.category.name}</h3>
      </li>
    ));
  };

  return (
    <div>
      <h1>Journal</h1>

      <div>
        <ul>
          {activities &&
            activityCategories &&
            constructActivityEntries(activities, {
              categories: activityCategories,
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    activities: state.activities,
    activityCategories: state.activityCategories,
  };
};

export const Journal = connect(mapStateToProps, {})(_Journal);

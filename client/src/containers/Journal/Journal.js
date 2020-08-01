import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import JournalDay from "./JournalDay";
import {
  getActivitiesCreatedByUser,
  constructActivities,
  getActivitiesByDay,
} from "../../utils/transformations";

export const _Journal = ({
  activities,
  activityCategories,
  auth: { userId, username },
}) => {
  const constructEntriesByDay = (activities, associatedData) => {
    const userActivities = getActivitiesCreatedByUser(activities, userId);
    const activitiesWithData = constructActivities(
      userActivities,
      associatedData
    );
    const activitiesByDay = getActivitiesByDay(activitiesWithData);

    const daysArr = Object.values(activitiesByDay).map((day) =>
      Object.values(day).flat()
    );
    return daysArr;
  };

  const renderActivities = (activities, associatedData) => {
    const activitiesByDay = constructEntriesByDay(activities, associatedData);
    return activitiesByDay.map((dayActivities) => (
      <JournalDay key={Math.random()} activityInfo={dayActivities} />
    ));
  };

  return (
    <div>
      <h1>Journal</h1>
      <button>
        <Link to="/add_activity">Add Activity</Link>
      </button>
      <div>
        <ul>
          {activities &&
            activityCategories &&
            renderActivities(activities, { categories: activityCategories })}
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

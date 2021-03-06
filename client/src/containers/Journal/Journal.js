import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import JournalDay from "./JournalDay";
import { createUseStyles } from "react-jss";
import { Typography, Button } from "../../components";
import moment from "moment";

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
  const classes = useStyles();
  const constructEntriesByDay = (activities, associatedData) => {
    const userActivities = getActivitiesCreatedByUser(activities, userId);
    const activitiesWithData = constructActivities(
      userActivities,
      associatedData
    );
    const activitiesByDay = getActivitiesByDay(activitiesWithData);

    const daysArr = Object.keys(activitiesByDay)
      .map(
        (year) => Object.values(activitiesByDay[year]) // [{15: [entry, entry], 17: [entry]}, {14: [entry]} ]
      )
      .flat();
    daysArr.sort((dayArr1, dayArr2) => {
      return (
        moment(dayArr2[0].momentActivity).valueOf() -
        moment(dayArr1[0].momentActivity).valueOf()
      );
    });
    console.log("daysArr", daysArr);
    return daysArr;
  };

  const renderActivities = (activities, associatedData) => {
    const activitiesByDay = constructEntriesByDay(activities, associatedData);
    // console.log("activitiesByDay", activitiesByDay);
    return activitiesByDay.map((dayActivities) => (
      <JournalDay key={Math.random()} activityInfo={dayActivities} />
    ));
  };

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.header}>
        Journal
      </Typography>
      <Button variant="contained" color="secondary">
        <Link to="/add_activity" >Add Activity</Link>
      </Button>
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

export const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& > div": {
      margin: theme.spacing(4, 0),
    },
  },
  header: {
    marginBottom: "15px",
  },

});

const useStyles = createUseStyles(styles, { name: "journal" });

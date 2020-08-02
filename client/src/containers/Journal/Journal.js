import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import JournalDay from "./JournalDay";
import { createUseStyles } from 'react-jss';
import { Typography, Button } from '../../components';


import {
  getActivitiesCreatedByUser,
  constructActivities,
  getActivitiesByDay,
} from "../../utils/transformations";
import { findByLabelText } from "@testing-library/react";

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
    <div className={classes.root}>
      <Typography variant="h1" className={classes.header}>Journal</Typography>
      <Button variant="contained" color="secondary">
        <Link to="/add_activity">Add Activity</Link>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& > div': {
      margin: theme.spacing(4, 0),
    }},
  header: {
    marginBottom: '15px',
  }
});

const useStyles = createUseStyles(styles, { name: 'journal' });
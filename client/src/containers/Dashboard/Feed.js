import React from "react";
import FeedEntry from "./FeedEntry";
import { getFeedActivities } from "../../utils/transformations";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";

const Feed = ({ activities, following, userId, users, activityCategories }) => {
  const classes = useStyles();

  const renderFeedEntries = (entries, users, activityCategories) => {
    return entries.map((activity) => {
      const user = users.find((user) => user.id === activity.user_id);
      console.log(activityCategories);
      const category = activityCategories.find(
        (c) => activity.category === c.id
      );
      return (
        <div key={Math.random()} className={classes.feedEntry}>
          <FeedEntry activity={activity} user={user} category={category} />
        </div>
      );
    });
  };

  return (
    <div className={classes.container}>
      {activities &&
        activityCategories &&
        renderFeedEntries(
          getFeedActivities(userId, activities, following),
          users,
          activityCategories
        )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
    following: state.following,
    userId: state.auth.userId,
    users: state.users,
    activityCategories: state.activityCategories,
  };
};

export const styles = (theme) => ({
  feedEntry: {
    borderBottom: "2px solid black",
  },
  container: {
    float: "left",
    borderRight: "2px solid black",
    height: "100vh",
  },
});

const useStyles = createUseStyles(styles, { name: "feed" });

export default connect(mapStateToProps)(Feed);

import React from "react";
import moment from "moment";
import { createUseStyles } from "react-jss";
import CommentBox from "../CommentBox/CommentBox";

const FeedDetails = ({ activity }) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h6 className={classes.date}>
          {activity && moment(activity.ending).format("LLLL")}
        </h6>
        <CommentBox activityId={activity.id} />
      </div>
    </div>
  );
};

export const styles = (theme) => ({
  date: {
    margin: "10px",
  },
});

const useStyles = createUseStyles(styles, { name: "feedDetails" });

export default FeedDetails;

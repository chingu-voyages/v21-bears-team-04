import React, { useState } from "react";
import { connect } from "react-redux";
import JournalCommentBox from "./JournalCommentBox";
import { Typography, Button } from "../../components";
import { deleteAndRemoveActivity } from "../../actions/activities";

const JournalEntryDetail = ({ activity, deleteAndRemoveActivity }) => {
  const [showComments, setShowComments] = useState(false);

  const handleDelete = () => {
      deleteAndRemoveActivity(activity.id)
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  console.log("activity", activity);
  return (
    <div>
      <div>
        <Typography variant="h6">
          Activity Type: {activity.category.name}
        </Typography>
        {activity.calories && (
          <Typography variant="h6">Calories: {activity.calories}</Typography>
        )}
        {activity.distance && (
          <Typography variant="h6">Distance: {activity.distance}</Typography>
        )}
        {activity.steps && (
          <Typography variant="h6">Steps: {activity.steps}</Typography>
        )}
      </div>

      <Button variant="contained" color="secondary" onClick={handleDelete}>
        delete this activity
      </Button>
      {
        <Button variant="contained" color="secondary" onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
      }
      {showComments && <JournalCommentBox comments={activity.comments} />}
    </div>
  );
};

export default connect(null, {deleteAndRemoveActivity})(JournalEntryDetail);

import React from "react";
import {connect} from "react-redux"
import Comments from "./Comments"
import AddComment from "./AddComment" 
import {getCommentsForActivity} from "../../utils/transformations"


const JournalCommentBox = ({activityId, comments, users}) => {
  return (
    <div>
      <AddComment activityId={activityId} />
      <Comments comments={getCommentsForActivity(activityId, comments)} users={users}  /> 
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments,
    users: state.users
  }
}

export default connect(mapStateToProps,{})(JournalCommentBox);

import React from "react";
import {connect} from "react-redux"
import Comments from "./Comments"
import AddComment from "./AddComment" 


const JournalCommentBox = ({comments}) => {
  return (
    <div>
      <AddComment />
      <Comments comments={comments}  /> 
    </div>
  );
};

export default JournalCommentBox;

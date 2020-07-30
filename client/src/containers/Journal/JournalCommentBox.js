import React from "react";
import Comment from "../../components/Comment";

const JournalCommentBox = ({ comments }) => {
  return (
    <div>
      {comments && comments.map((comment) => (
        <Comment key={Math.random()} comment={comment} />
      ))}
    </div>
  );
};

export default JournalCommentBox;

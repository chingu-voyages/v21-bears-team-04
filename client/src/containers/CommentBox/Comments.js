import React from "react";
import Comment from "./Comment"


const Comments = ({comments, users}) => {
  return (
    <div>
      {comments && users && comments.map((comment) => (
        <Comment key={Math.random()} comment={comment} user={users.find(user => user.id === comment.user_id)} />
      ))}
    </div>
  );
};

export default Comments;

import React from "react";

const Comment = ({ comment, user }) => {
  return (
    <div>
      <p>{comment.content}</p>
      <h6>-{user.username}</h6>
      <hr />
    </div>
  );
};

export default Comment;

import React, { useState } from "react";
import { connect } from "react-redux";
import { createAndAddComment } from "../../actions/comments";

const AddComment = ({ createAndAddComment, activityId, userId }) => {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleCommentClick = () => {
    if (content.length > 0) {
      createAndAddComment({ userId, content, activityId });
    }
  };

  return (
    <div>
      <textarea value={content} onChange={handleContentChange}></textarea>
      <br />
      <button onClick={handleCommentClick}>Add Comment</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

export default connect(mapStateToProps, { createAndAddComment })(AddComment);

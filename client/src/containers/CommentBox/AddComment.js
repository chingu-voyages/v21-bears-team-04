import React, { useState } from "react";
import { connect } from "react-redux";

const AddComment = ({ addComment, activityId }) => {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleCommentClick = () => {
    if (content.length > 0) {
      console.log(content);
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

export default AddComment;

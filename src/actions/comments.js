
import { SET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from "./types";

export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
};

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    payload: commentId,
  };
};
import { SET_FOLLOWINGS, ADD_FOLLOWING, REMOVE_FOLLOWING } from "./types";
import api from "../services";

export const setFollowings = (following) => {
  return {
    type: SET_FOLLOWINGS,
    payload: following, // array of userIds
  };
};

export const addFollowing = (followingId) => {
  return {
    type: ADD_FOLLOWING,
    payload: followingId, // user id
  };
};

export const removeFollowing = (followingId) => {
  return {
    type: REMOVE_FOLLOWING,
    payload: followingId, // user id
  };
};

export const createAndAddFollowing = (data, token) => async (dispatch) => {
  try {
    const createFollowingResponse = await api.comments.createComment(data, token);
    const { followingId } = createFollowingResponse.data;
    dispatch(addFollowing(followingId));
  } catch (err) {
    console.log(err);
  }
};

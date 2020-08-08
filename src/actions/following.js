import { SET_FOLLOWINGS, ADD_FOLLOWING, REMOVE_FOLLOWING } from "./types";

export const setFollowings = (followings) => {
  return {
    type: SET_FOLLOWINGS,
    payload: followings, // array of userIds
  };
};

export const addFollowing = (following) => {
  return {
    type: ADD_FOLLOWING,
    payload: following, // user id
  };
};

export const removeFollowing = (following) => {
  return {
    type: REMOVE_FOLLOWING,
    payload: following, // user id
  };
};
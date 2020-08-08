import { SET_FOLLOWINGS, ADD_FOLLOWING, REMOVE_FOLLOWING } from "./types";

export const setFollowings = (followings) => {
  return {
    type: SET_FOLLOWINGS,
    payload: followings, // array of userIds
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
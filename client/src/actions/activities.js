import { ADD_ACTIVITY, REMOVE_ACTIVITY, SET_ACTIVITIES } from "./types";

export const setActivities = (activities) => {
  return {
    type: SET_ACTIVITIES,
    payload: activities,
  };
};

export const addActivity = (activity) => {
  return {
    type: ADD_ACTIVITY,
    payload: activity,
  };
};

export const removeActivity = (activityId) => {
  return {
    type: REMOVE_ACTIVITY,
    payload: activityId,
  };
};

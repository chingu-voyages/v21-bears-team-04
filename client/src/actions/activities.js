import { ADD_ACTIVITY, REMOVE_ACTIVITY, SET_ACTIVITIES } from "./types";
import api from "../services";

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

export const createAndAddActivity = (activity, token) => async (dispatch) => {
  try {
    const createActivityResponse = await api.createActivity(activity, token);
    const { activity } = createActivityResponse.data;
    dispatch(addActivity(activity));
  } catch (err) {
    console.log(err);
  }
};

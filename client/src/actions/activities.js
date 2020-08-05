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

export const createAndAddActivity = (newActivity, history, token) => async (
  dispatch
) => {
  try {
    const createActivityResponse = await api.activities.createActivity(
      newActivity,
      token
    );
    const { activity } = createActivityResponse.data;

    dispatch(addActivity(activity));
    history.push("/journal");
  } catch (err) {
    console.log(err);
  }
};

export const deleteAndRemoveActivity = (activityId, token) => async (
  dispatch
) => {
  try {
    await api.activities.deleteActivity(activityId, token);
    dispatch(removeActivity(activityId));
  } catch (err) {
    console.log(err);
  }
};

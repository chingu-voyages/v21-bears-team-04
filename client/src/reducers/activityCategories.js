import { SET_ACTIVITY_CATEGORIES } from "../actions/types";

const initialState = [];

function activityCategories(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVITY_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

export default activityCategories;

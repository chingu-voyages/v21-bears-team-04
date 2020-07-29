import {
    SET_ACTIVITIES,
    ADD_ACTIVITY,
    REMOVE_ACTIVITY,
  } from "../actions/types";
  
  const initialState = [];
  
  function activities(state = initialState, action) {
    switch (action.type) {
      case SET_ACTIVITIES:
        return action.payload;
      case ADD_ACTIVITY:
        return [...state, action.payload];
      case REMOVE_ACTIVITY:
        return state.filter((activity) => activity.id !== action.payload);
  
      default:
        return state;
    }
  }
  
  export default activities;
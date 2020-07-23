import { SET_MY_ACTIVITIES } from "../actions/types";

// this reducer is responsible for handling all the activities object that belong to the users journal
// so, any activities that the user logs

const initialState = [];

function journal(state = initialState, action) {
  switch (action.type) {
    case SET_MY_ACTIVITIES:
      console.log("SET_JOURNAL case", action.payload)
      return action.payload;
    default:
      return state;
  }
}

export default journal;

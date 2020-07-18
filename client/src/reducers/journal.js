import { SET_JOURNAL } from "../actions/types";

const initialState = [];

function journal(state = initialState, action) {
  switch (action.type) {
    case SET_JOURNAL:
      return action.payload;
    default:
      return state;
  }
}

export default journal;

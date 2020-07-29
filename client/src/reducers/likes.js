import { SET_LIKES, ADD_LIKE, REMOVE_LIKE } from "../actions/types";

const initialState = [];

function likesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIKES:
      return action.payload;
    case ADD_LIKE:
      return [...state, action.payload];
    case REMOVE_LIKE:
      return state.filter((like) => like.id !== action.payload);
    default:
      return state;
  }
}

export default likesReducer;
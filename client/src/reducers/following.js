import {
  SET_FOLLOWINGS,
  ADD_FOLLOWING,
  REMOVE_FOLLOWING,
} from "../actions/types";

const initialState = [];

function followingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FOLLOWINGS:
      return action.payload;
    case ADD_FOLLOWING:
      return [...state, action.payload];

    case REMOVE_FOLLOWING:
      return state.filter((following) => following !== action.payload);
    default:
      return state;
  }
}

export default followingReducer;

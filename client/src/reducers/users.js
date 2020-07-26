import { SET_USERS, ADD_USER, REMOVE_USER } from "./types";

const initialState = [];

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    case ADD_USER:
      return [...state, action.payload];

    case REMOVE_USER:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
}

export default usersReducer;

import { SET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from "../actions/types";

const initialState = [];

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return action.payload;
    case ADD_COMMENT:
      return [...state, action.payload];

    case REMOVE_COMMENT:
      return state.filter((comment) => comment.id !== action.payload);
    default:
      return state;
  }
}

export default commentsReducer;
import { ADD_TODO } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.payload;

    default:
      return state;
  }
};

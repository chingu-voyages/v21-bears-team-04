import { SET_FEED_ACTIVITIES } from '../actions/types';

const initialState = {
  activities: [],
};

function feed(state = initialState, action) {
  switch (action.type) {
    case SET_FEED_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
}

export default feed;

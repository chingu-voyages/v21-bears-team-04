import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import journalReducer from "./journal";
import authReducer from "./auth";
import feedReducer from "./feed";

export default combineReducers({
  todo: todoReducer,
  journal: journalReducer,
  auth: authReducer,
  feed: feedReducer
});

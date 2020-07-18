import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import journalReducer from "./journal";

export default combineReducers({
  todo: todoReducer,
  journal: journalReducer
});

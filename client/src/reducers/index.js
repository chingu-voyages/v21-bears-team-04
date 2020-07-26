import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import authReducer from "./auth";
import usersReducer from "./users";
import followingReducer from "./following";

export default combineReducers({
  todo: todoReducer,
  auth: authReducer,
  users: usersReducer,
  following: followingReducer
});

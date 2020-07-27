import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import authReducer from "./auth";


export default combineReducers({
  todo: todoReducer,
  auth: authReducer

});

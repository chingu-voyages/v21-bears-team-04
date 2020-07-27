import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import authReducer from "./auth";
import usersReducer from "./users";
import followingReducer from "./following";
import activityCategoriesReducer from "./activityCategories";
import activitiesReducer from "./activities";
import commentsReducer from "./comments";
import likesReducer from "./likes";

export default combineReducers({
  todo: todoReducer,
  auth: authReducer,
  users: usersReducer,
  following: followingReducer,
  activityCategories: activityCategoriesReducer,
  activities: activitiesReducer,
  comments: commentsReducer,
  likes: likesReducer,
});

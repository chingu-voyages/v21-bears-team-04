// import {
//   SET_ACTIVITIES,
//   SET_ACTIVITY_CATEGORIES,
//   SET_COMMENTS,
//   SET_FOLLOWINGS,
//   SET_LIKES,
//   SET_USERS
// } from "./types";
import api from "../services";
import { setActivities } from "./activities";
import { setActivityCategories } from "./activityCategories";
import { setComments } from "./comments";
import { setFollowings } from "./following";
import { setLikes } from "./likes";
import { setUsers } from "./users";

export const getDashboard = (token) => async (dispatch) => {
  try {
    const dashboardData = await api.feed.getDashboard(token);
    console.log("dashboarddata", dashboardData)

  } catch (err) {
      console.log(err)
  }
};

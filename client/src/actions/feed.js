import api from "../services";
import { setActivities } from "./activities";
import { setActivityCategories } from "./activityCategories";
import { setComments } from "./comments";
import { setFollowings } from "./following";
import { setLikes } from "./likes";
import { setUsers } from "./users";

export const getDashboard = (token) => async (dispatch) => {
  try {
    const dashboardResponse = await api.feed.getDashboard(token);
    const {activities, activityCategories, comments, likes, users, following} = dashboardResponse.data
    dispatch(setUsers(users))
    dispatch(setComments(comments))
    dispatch(setActivities(activities))
    dispatch(setActivityCategories(activityCategories))
    dispatch(setLikes(likes))
    dispatch(setFollowings(following))
  } catch (err) {
      console.log(err)
  }
};

import React, { useEffect } from "react";
import { connect } from "formik";
import { connect as reduxConnect } from "react-redux";
import { getDashboard } from "../api/api";
import { setUsers } from "../actions/users";
import { setFollowings } from "../actions/following";
import { setActivityCategories } from "../actions/activityCategories";
import { setActivities } from "../actions/activities";

export const Dashboard = ({
  auth: { token },
  setUsers,
  setFollowings,
  setActivityCategories,
  setActivities,
}) => {
  useEffect(() => {
    (async () => {
      const dashboardData = await getDashboard(token);
      console.log(dashboardData);
      // set the relevant stuff in redux store, based on dashboardData
      const {
        users,
        likes,
        comments,
        activities,
        following,
        activityCategories,
      } = dashboardData;
      setUsers(users);
      setFollowings(following);
      setActivities(activities);
      setActivityCategories(activityCategories);
      // console.log("users", users);
      // console.log("likes", likes);
      // console.log("comments", comments);
      // console.log("activities", activities);
      // console.log("following", following);
      // console.log("activityCategories", activityCategories);
    })();
  }, []);

  return <div>Dashboard</div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsers(users)),
    setFollowings: (followings) => dispatch(setFollowings(followings)),
    setActivityCategories: (activityCategories) =>
      dispatch(setActivityCategories(activityCategories)),
    setActivities: (activities) => dispatch(setActivities(activities)),
  };
};

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Dashboard);

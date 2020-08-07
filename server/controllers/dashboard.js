const Activity = require("../models/Activity");
const ActivityCategory = require("../models/ActivityCategory");
const User = require("../models/User");
const Following = require("../models/Following");
const Like = require("../models/Like");
const Comment = require("../models/Comment");

const getFollowingUserIds = async (userId) => {
  // ids of the users userid is following
  const followingIds = (await Following.findBy({ follower: userId })).map(
    (record) => record.following
  );

  return followingIds;
};

const getDashboardUserIds = async (userId) => {
  // the logged in userId; the ids of all the users the logged in user is following; maybe ids for trending/recommended
  const followingIds = await getFollowingUserIds(userId);
  const userIds = [...followingIds, userId];
  return userIds;
};

const getDashboardUsers = async (userIds) => {
  const users = await User.in("id", userIds);
  const usersWithSubsettedAttributes = User.allWithAttributesSubsetted(users, [
    "id",
    "username",
  ]);
  return usersWithSubsettedAttributes;
};

const getDashboardActivities = async (userId) => {
  // user's own activities
  // activities of user's followers
  // potentially other activities, like "trending", "recommended", "random"
  const dashboardUserIds = await getDashboardUserIds(userId);

  const activities = await Activity.in("user_id", dashboardUserIds);
  return activities;
};

const getDashboardComments = async (activitiesIds) => {
  if (activitiesIds.length === 0) return [];
  const comments = await Comment.in("resource_id", activitiesIds, {colName: 'created_at', desc: true});
  return comments;
};

const getDashboardLikes = async (activitiesIds) => {
  if (activitiesIds.length === 0) return [];

  const likes = await Like.in("resource_id", activitiesIds);

  return likes;
};

const get = async (req, res) => {
  const userId = req.user.id;

  // userIds being followed by this user
  const followingIds = await getFollowingUserIds(userId);
  console.log("following ids", followingIds);
  // all the users ids that are visible on dashboard
  const dashboardUserIds = await getDashboardUserIds(userId);
  console.log("DashboardUSerIds", dashboardUserIds);
  // users that have activities visible on dashboard
  const dashboardUsers = await getDashboardUsers(dashboardUserIds);
  // activities
  const activities = await getDashboardActivities(userId);
  const activitiesIds = activities.map((activity) => activity.id);
  console.log("activitiesIds", activitiesIds);
  const activityCategories = await ActivityCategory.all();
  // comments and likes for those activities

  const likes = await getDashboardLikes(activitiesIds);
  console.log("likes", likes);
  const comments = await getDashboardComments(activitiesIds);
  console.log("comments", comments);

  res.json({
    users: dashboardUsers,
    following: followingIds,
    activities: activities,
    activityCategories: activityCategories,
    likes: likes,
    comments: comments,
  });

  try {
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports = {
  get,
};

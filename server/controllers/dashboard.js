const Activity = require("../models/Activity");
const User = require("../models/User");
const Following = require("../models/Following");

const constructUserActivities = async (userId, fields) => {
  const userActivities = await Activity.findBy({ user_id: userId });
  // add related-table data for fields: category, likes, user, comments
  const userActivitiesWithExtraData = [];
  let activityWithExtraData;
  for (const activity of userActivities) {
    activityWithExtraData = await activity.withAssociatedData(fields);
    userActivitiesWithExtraData.push(activityWithExtraData)
  }
  return userActivitiesWithExtraData;
};

const constructUserFollowingActivities = async (userId, fields) => {
  const followings_ids = (await Following.findBy({follower: userId})).map(following => following.id)
  const allFollowingActivities = []
  let currentFollowingId; 
  for (const following_id of followings_ids) {
    currentFollowingId = await constructUserActivities(fields)
    allFollowingActivities.push(currentFollowingId)
  }
  return allFollowingActivities.flat() 
}

const get = async (req, res) => {
  const userId = req.user.id;
  try {
    // get user created activities, and activities created by users this user is following
    const userCreatedActivities = await constructUserActivities(userId, {likes: true, comments: true, category: true });
    const userFollowingActivities = await constructUserFollowingActivities(userId, {likes: true, comments: true, category: true, user: true})
    res.json({myActivities: userCreatedActivities, followingActivities: userFollowingActivities});
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports = {
  get
};

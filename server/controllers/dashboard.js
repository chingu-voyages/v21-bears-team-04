const Activity = require("../models/Activity");
const User = require("../models/User");
const Following = require("../models/Following");

const constructUserActivities = async (userId) => {
  const userActivities = await Activity.findBy({ user_id: userId });
  // add related-table data for activity_category, likes, and comments
  const userActivitiesWithExtraData = [];
  let activityWithExtraData;
  for (const activity of userActivities) {
    activityWithExtraData = await activity.withAssociatedData({
      comments: true,
      likes: true,
      category: true,
    });
  }
  return activitiesWithExtraData;
};

const get = async (req, res) => {
  const userId = req.user.id;
  try {
    // get all activities created by user
    const userCreatedActivities = await constructUserActivities(userId);
    res.json(userActivitiesWithExtraData);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports = {
  get
};

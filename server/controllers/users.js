const User = require("../models/User");
const Activity = require("../models/Activity");
const { json } = require("body-parser");

const get = async (req, res) => {
  const id = req.params.id;
  const user = await User.find(id);
  res.status(200).json(user);
};

const getActivities = async (req, res) => {
  const userId = parseInt(req.params.user_id);
  const activities = await Activity.findBy({user_id: userId});
  const desiredRelatedTableData = {comments: true, likes: true, category: true}
  const activitiesWithRelatedData = []
  let resolvedActivity;

  for (const activity of activities) {
     resolvedActivity = await activity.withAssociatedData(desiredRelatedTableData)
     activitiesWithRelatedData.push(resolvedActivity)
  }
  
  res.json({activities: activitiesWithRelatedData});
};



const getAll = async (req, res) => {
  const users = await User.all();
  res.status(200).json(users);
};

module.exports = {
  get,
  getAll,
  getActivities,
  createActivity,
};

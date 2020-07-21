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
  const user = await User.find(userId);
  const queryText = "SELECT * FROM activities WHERE user_id=$1";
  const queryResult = await user.query({ text: queryText, values: [user.id] });
  res.json(queryResult);
};

const createActivity = async (req, res) => {
  try {
    

    const {
      title,
      start,
      ending,
      category,
      distance,
      steps,
      calories,
    } = req.body;

    const userId = parseInt(req.params.user_id);
    const newActivity = new Activity({
      user_id: userId,
      title: title,
      start: start,
      ending: ending,
      category: parseInt(category),
      distance: Number(distance),
      steps: parseInt(steps),
      calories: parseInt(calories),
    });
    const activity = await newActivity.save();
    res.status(200).json(activity);
  } catch (err) {
    console.log("error:", err);
    res.status(500).json(err);
  }
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

const User = require("../models/User");
const Activity = require("../models/Activity");
const { json } = require("body-parser");

const get = async (req, res) => {
  const id = req.params.id;
  const user = await User.find(id);
  res.status(200).json(user);
};

const getActivities = async (req, res) => {
  const userId = req.params.user_id
  const user = await User.find(parseInt(userId))
  const queryText = "SELECT * FROM activities WHERE user_id=$1"
  const queryResult = await user.query({text: queryText, values: [user.id]})
  res.json(queryResult)
  
};

const createActivity = async (req, res) => {

  const userId = req.params.user_id
  const user = await User.find(parseInt(userId))
     
}


const getAll = async (req, res) => {
  const users = await User.all();
  res.status(200).json(users);
};

module.exports = {
  get,
  getAll,
  getActivities
};

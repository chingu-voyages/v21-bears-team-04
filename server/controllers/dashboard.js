const Activity = require("../models/Activity");
const User = require("../models/User");
const Following = require("../models/Following");

const getDashboardActivities = () => {
  // user's own activities
  // activities of user's followers
  // potentially other activities, like "trending", "recommended"
}

const get = async (req, res) => {
  // activities
  // comments and likes for those activities
  const userId = req.user.id;
  try {
    
   
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports = {
  get
};

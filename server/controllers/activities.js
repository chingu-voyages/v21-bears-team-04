const Activity = require("../models/Activity");

const get = async (req, res) => {
  // get address by id
};

const getAll = async (req, res) => {
  // get all activities
  // if req.query.userSubset is true, return just subset of activities created by user
  // example request: http://localhost:3000/activities?userSubset=true
  const userId = req.user.id;
  let activities;
  try {
    if (req.query.userSubset) {
      activities = await Activity.findBy({ user_id: userId });
    } else {
      activities = await Activity.all();
    }

    res.status(200).send(activities);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const destroy = async (req, res) => {
  try {
    console.log("req", req);
    const { activityId } = req.body;
    const activity = await Activity.find(activityId);
    const userId = req.user.id;
    if (activity.user_id === userId) {
      await activity.delete();
      res.status(204).send();
    } else
      throw new Error("user doesnt have permission to delete this activity");
  } catch (err) {
    console.log("error:", err);
    res.status(500).json(err);
  }
};

const create = async (req, res) => {
  // create an activity

  try {
    const {
      title,
      start,
      end,
      category,
      distance,
      steps,
      calories,
    } = req.body.data;

    const userId = req.user.id;

    const constructedData = {
      user_id: userId,
      title: title,
      start: start,
      ending: end,
      category: category,
    };
    console.log("distance: ", distance);
    console.log("typeof distance", typeof distance);
    // if it's an empty string, it doesnt apply to this activity_category
    if (distance !== "") constructedData.distance = distance;
    if (calories !== "") constructedData.calories = calories;
    if (steps !== "") constructedData.steps = steps;

    const newActivity = new Activity(constructedData);
    const activity = await newActivity.save();
    console.log("the created activity", activity);
    res.status(200).json({ activity: activity });
  } catch (err) {
    console.log("error:", err);
    res.status(500).json(err);
  }
};

module.exports = {
  get,
  getAll,
  create,
  destroy,
};

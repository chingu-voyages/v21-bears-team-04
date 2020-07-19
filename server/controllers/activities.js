const Activity = require("../models/Activity")


const get = async (req, res) => {
  // get address by id
  console.log("hit endpoint");
  const activity_id = req.params.id;
  const activity = await Activity.find(activity_id);
  const activityWithAssociatedData = await activity.withAssociatedData()
  if (activityWithAssociatedData) res.status(200).json(activityWithAssociatedData);
  else res.send({ error: "some error" });
}

const getAll = async (req, res) => {
  // get all activities
  const activities = await Activity.all();
  const activitiesWithAssociatedData = []
  let activityWithData;
  for (const activity of activities) {
      activityWithData = await activity.withAssociatedData()
      activitiesWithAssociatedData.push(activityWithData)
  }
  console.log("activitiesWithAssociatedData", activitiesWithAssociatedData)
  res.status(200).json(activitiesWithAssociatedData);
}

module.exports = {
  get,
  getAll,
}
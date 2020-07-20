const User = require("../models/User")


const get = async (req, res) => {
  const id = req.params.id;
  const user = await User.find(id)
  res.status(200).json(user)
}

const getActivities = async (req, res) => {
  console.log("GET USER ACTIVITIES")
}

const getAll = async (req, res) => {
  const users = await User.all()
  res.status(200).json(users)
}

module.exports = {
  get, 
  getAll,
  getActivities
}
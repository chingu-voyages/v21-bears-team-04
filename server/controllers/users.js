const User = require("../models/User")


const get = async (req, res) => {
  console.log("GET USER")
}

const getActivities = async (req, res) => {
  console.log("GET USER ACTIVITIES")
}

const getAll = async (req, res) => {
  console.log("GET ALL USERS")
  // get all addresses
  const users = await User.all()
  res.status(200).json(users)
}

module.exports = {
  get, 
  getAll,
  getActivities
}
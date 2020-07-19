const Router = require("express-promise-router");
const User = require("../models/User");
const Activity = require("../models/Activity")
const router = new Router();

router.get("/:user_id/activities", async (req, res) => {
  console.log("GET ALL USER ACTIVITIES")
})

router.get("/:user_id", async (req, res) => {
  console.log("GET  USER ")

})

router.get("/", async (req, res) => {
  console.log("GET ALL USERS")
  // get all addresses
  const users = await User.all()
  res.status(200).json(users)
});

module.exports = router
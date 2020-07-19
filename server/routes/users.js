const Router = require("express-promise-router");
const User = require("../models/User");
const Activity = require("../models/Activity")
const usersController = require("../controllers/users")
const router = new Router();


router.get("/:user_id/activities", usersController.getActivities )

router.get("/:user_id", usersController.get)

router.get("/", usersController.getAll);

module.exports = router
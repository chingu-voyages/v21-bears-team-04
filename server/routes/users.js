const Router = require("express-promise-router");
const User = require("../models/User");
const Activity = require("../models/Activity")
const usersRouter = new Router();
const usersActivityRouter = new Router({mergeParams: true})
usersRouter.use("/:user_id/activities", usersActivityRouter)


usersRouter.get("/:user_id", async (req, res) => {

})




const Router = require("express-promise-router");
const activitiesController = require("../controllers/activities")
const router = new Router();
const Activity = require("../models/Activity");


router.get("/:id", activitiesController.get);

router.get("/", activitiesController.getAll);


module.exports = router;

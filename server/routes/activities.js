const Router = require("express-promise-router");
const activitiesController = require("../controllers/activities");
const router = new Router();

router.get("/:id", activitiesController.get);

router.get("/", activitiesController.getAll);

router.post("/", activitiesController.create);

router.delete("/", activitiesController.destroy);

module.exports = router;

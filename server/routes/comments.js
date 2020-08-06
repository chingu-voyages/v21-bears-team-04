const Router = require("express-promise-router");
const commentsController = require("../controllers/comments");
const router = new Router();

router.post("/", activitiesController.create);

module.exports = router;

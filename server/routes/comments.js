const Router = require("express-promise-router");
const commentsController = require("../controllers/comments");
const router = new Router();

router.post("/", commentsController.create);

module.exports = router;

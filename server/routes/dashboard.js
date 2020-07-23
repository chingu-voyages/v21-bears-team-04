const Router = require("express-promise-router");
const dashboardController = require("../controllers/dashboard");
const router = new Router();

router.get("/", dashboardController.get);

module.exports = router;

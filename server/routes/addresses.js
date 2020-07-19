const Router = require("express-promise-router");
const adressesController = require("../controllers/addresses")
const router = new Router();
const Address = require("../models/Address");

router.get("/", adressesController.getAll);

router.get("/:id", adressesController.get);

module.exports = router;

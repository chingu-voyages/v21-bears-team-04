const Router = require("express-promise-router");

const router = new Router();
const Address = require("../models/Address");

router.get("/", async (req, res) => {
  // get all addresses
  //   console.log("id", JSON.stringify(Address.));
});

router.get("/:id", async (req, res) => {
  // get address by id
  console.log("hit endpoint");
  const address_id = req.params.id;
  const address = await Address.find(address_id);
  if (address) res.status(200).json(address);
  else res.send({ error: "some error" });
});

module.exports = router;

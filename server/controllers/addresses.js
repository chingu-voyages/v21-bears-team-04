const Address = require("../models/Address")


const get =  async (req, res) => {
  // get address by id
  console.log("hit endpoint");
  const address_id = req.params.id;
  const address = await Address.find(address_id);
  if (address) res.status(200).json(address);
  else res.send({ error: "some error" });
}

const getAll =  async (req, res) => {
  // get all addresses
  const addresses = await Address.all()
  res.status(200).json(addresses)
}

module.exports = {
  get,
  getAll,
}
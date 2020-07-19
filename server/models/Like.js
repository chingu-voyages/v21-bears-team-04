const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class Like extends DBbase {
  // 'table' used by DBbase to map class to specific table name 
  static table = "likes";

  // 'validColumnNames' used by DBbase to check for valid properities on each model
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validLikeAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = Like;

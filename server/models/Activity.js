const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class Activity extends DBbase {
  static table = "activities";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validActivityAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = Activity;

const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class Goal extends DBbase {
  static table = "goals";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validGoalAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = Goal;

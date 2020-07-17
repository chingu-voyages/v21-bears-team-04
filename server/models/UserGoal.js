const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class UserGoal extends DBbase {
  static table = "users_goals";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validUserGoalAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = UserGoal;

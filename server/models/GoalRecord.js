const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class GoalRecord extends DBbase {
  static table = "goal_record";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validGoalRecordAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = GoalRecord;

const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class ChallengeGoal extends DBbase {
  static table = "challenges_goals";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validChallengeGoalAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = ChallengeGoal;

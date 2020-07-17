const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class Challenge extends DBbase {
  static table = "challenges";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validChallengeAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = Challenge;

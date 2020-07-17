const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class UserChallenge extends DBbase {
  static table = "users_challenges";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validUserChallengeAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = UserChallenge;

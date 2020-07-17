const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class Comment extends DBbase {
  static table = "comments";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validCommentAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = Comment;

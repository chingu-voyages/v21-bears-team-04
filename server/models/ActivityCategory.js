const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class ActivityCategory extends DBbase {
  static table = "activity_categories";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validActivityCategoryAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = ActivityCategory;

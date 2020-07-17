const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class ExerciseCategories extends DBbase {
  static table = "exercise_categories";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validExerciseCategoriesAttributes(attributes) {}

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = ExerciseCategories;

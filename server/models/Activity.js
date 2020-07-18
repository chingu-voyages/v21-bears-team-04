const DBbase = require("./DBbase");
const ActivityCategory = require("./ActivityCategory");
const Joi = require("@hapi/joi");

class Activity extends DBbase {
  static table = "activities";
  static validColumnNames = [
    "user_id",
    "title",
    "start",
    "ending",
    "category",
    "distance",
    "calories",
    "steps"
  ];

  constructor(attributes) {
    super(); // initializing super class, DBbase - communication with db methods
    if (Activity.validActivityAttributes(attributes)) {
      this.setAttributes(attributes);
    } else {
      console.log("invalid Activity attributes");
      throw new Error("invalid Activity attributes");
    }
  }

  async withAssociatedData() {
    // return object with this data, and associated data
    // associated data includes category data
    const thisActivityCategory = await ActivityCategory.find(this.category);

    return {
      id: this.id,
      user_id: this.user_id,
      title: this.title,
      distance: this.distance,
      calories: this.calories,
      start: this.start,
      ending: this.ending,
      category: {
        id: thisActivityCategory.id,
        name: thisActivityCategory.name
      }
    };
  }

  setAttributes(attributes) {
    // use this to update the model, but not the db
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  static validActivityAttributes(attributes) {
    return true;
  }

  async allowTheseCategoryUnits() {
    // need to know if any of these can be used for associated category: distance, calories, steps
    const names = [];
    if (this.category) {
      const categoryInfo = await ActivityCategory.find(this.category);
      if (categoryInfo.use_distance) names.push("distance");
      if (categoryInfo.use_calories) names.push("calories");
      if (categoryInfo.use_steps) names.push("steps");
      return names;
    }
  }
  async validCategoryUnits() {
    // we dont want to save to db an activity that tries to store units that dont match corresponding activity_category units
    const validNames = await this.allowTheseCategoryUnits();
    console.log(validNames);
    if (validNames) {
      if (
        (this.distance && !validNames.includes("distance")) ||
        (this.calories && !validNames.includes("calories")) ||
        (this.steps && !validNames.includes("steps"))
      )
        return false;
      return true;
    }

    return false;
  }

  // "user_id",
  // "title",
  // "start",
  // "ending",
  // "category",
  // "distance",
  // "calories",
  // "steps"

  async save() {
    if (this.validCategoryUnits()) {
      const queryText =
        "INSERT INTO activities(user_id, category, title, start, ending, distance, calories, steps) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
      const query = {
        text: queryText,
        values: [
          this.user_id,
          this.category,
          this.title,
          this.start,
          this.ending,
          this.distance,
          this.calories,
          this.steps
        ]
      };
      const queryResult = await this.query(query);
      const newRecord = queryResult[0];
      // make sure this activity_category has the updated attributes
      this.id = newRecord.id;
      return this;
    }
  }

  async update(attributes) {}

  async delete() {}
}

async function test() {
  const activity = await Activity.find(1);
  console.log("activity", activity);
  const allowed = await activity.validCategoryUnits();
  console.log(allowed);
}

test();

module.exports = Activity;

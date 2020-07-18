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
      if (categoryInfo && categoryInfo.use_distance) names.push("distance");
      if (categoryInfo && categoryInfo.use_calories) names.push("calories");
      if (categoryInfo && categoryInfo.use_steps) names.push("steps");
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
      // make sure this Activity has the updated attributes
      this.id = newRecord.id;
      this.distance = newRecord.distance;
      this.calories = newRecord.calories;
      this.steps = newRecord.steps;

      return this;
    }
  }

  async update(attributes) {
    if (Activity.validActivityAttributes(attributes) && this.id) {
      // update model
      this.setAttributes(attributes);
      const queryText =
        "UPDATE activities SET user_id=$1, category=$2, title=$3, start=$4, ending=$5, distance=$6, calories=$7, steps=$8 WHERE id=$9 RETURNING *";
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
          this.steps,
          this.id
        ]
      };
      const queryResult = await this.query(query);
      //console.log(queryResult);
      const newRecord = queryResult[0];
      if (newRecord) {
        return true;
      }
    } else {
      console.log("Invalid attributes supplied to update");
    }
  }

  async delete() {
    if (this.id) {
      const queryText = "DELETE FROM activities WHERE id=$1";
      const substituteValues = [this.id];
      const query = {
        text: queryText,
        values: substituteValues
      };
      await this.query(query);
    } else {
      console.log(
        "This record either (1) hasnt been saved to database, or (2) its already been deleted"
      );
    }
  }
}

// async function test() {
// test inherited .all
// const all = await Activity.all()
// console.log(all)

// test inherited .find
// const activity1 = await Activity.find(1)
// console.log(activity1)

// test inherited .findBy
// const activity1 = await Activity.findBy({
//   title: "Running on a sunny day",
//   calories: 300
// });
// console.log(activity1);

//  this.user_id,
//  this.category,
//  this.title,
//  this.start,
//  this.ending,
//  this.distance,
//  this.calories,
//  this.steps

//test .save
// const newActivity = new Activity({
//   user_id: 1,
//   category: 1,
//   title: "a new activity",
//   start: "2020-07-18T19:43:49.989Z",
//   ending: "2020-07-18T20:43:49.989Z",
//   distance: 4,
//   calories: 200,
//   steps: 5000
// });
// await newActivity.save();
// console.log(newActivity);

// test .delete
// const newActivity = new Activity({
//   user_id: 1,
//   category: 1,
//   title: "a newer activity",
//   start: "2020-07-18T19:43:49.989Z",
//   ending: "2020-07-18T20:43:49.989Z",
//   distance: 2,
//   calories: 300
// });
// await newActivity.save();
// console.log("saved a new activity", newActivity);
// await newActivity.delete()
// activity = await Activity.findBy({title: "a newer activity", distance: 2})
// console.log(activity)

//test .update
//   const newActivity = new Activity({
//     user_id: 1,
//     category: 1,
//     title: "something activity",
//     start: "2020-07-18T19:43:49.989Z",
//     ending: "2020-07-18T20:43:49.989Z",
//     distance: .2,
//     calories: 7770,
//     steps: 50
//   });
//   await newActivity.save();
//   console.log("saved a new activity", newActivity);
//   let activity = (await Activity.findBy({calories: 7770}))[0]
//   console.log("activity before update", activity)
//   await activity.update({title: "the cool updated title"})
//   console.log("activity after update", activity)
// }

// test();

module.exports = Activity;

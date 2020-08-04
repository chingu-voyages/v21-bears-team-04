const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class ActivityCategory extends DBbase {
    // 'table' used by DBbase to map class to specific table name 
  static table = "activity_categories";

  // 'validColumnNames' used by DBbase to check for valid properities on each model
  static validColumnNames = [
    "name",
    "use_distance",
    "use_calories",
    "use_steps"
  ]; // TODO: fill in names

  constructor(attributes) {
    super(); // initializing super class, DBbase - communication with db methods
    if (ActivityCategory.validActivityCategoryAttributes(attributes)) {
      this.setAttributes(attributes);
    } else {
      console.log("invalid ActivityCategory attributes");
      throw new Error("invalid ActivityCategory attributes");
    }
  }

  static validActivityCategoryAttributes(attributes) {
    return true;
  }

  async save() {
    const queryText =
      "INSERT INTO activity_categories(name, use_distance, use_calories, use_steps) VALUES ($1, $2, $3, $4) RETURNING *";
    const query = {
      text: queryText,
      values: [this.name, this.use_distance, this.use_calories, this.use_steps]
    };
    const queryResult = await this.query(query);
    const newRecord = queryResult[0];
    // make sure this activity_category has the updated attributes
    this.id = newRecord.id;
    return this;
  }

  setAttributes(attributes) {
    // use this to update the model, but not the db
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  async update(attributes) {
    if (ActivityCategory.validActivityCategoryAttributes(attributes) && this.id) {
      // update model
      this.setAttributes(attributes);
      const queryText =
        "UPDATE activity_categories SET name=$1, use_distance=$2, use_calories=$3, use_steps=$4 WHERE id=$5 RETURNING *";
      const query = {
        text: queryText,
        values: [
          this.name,
          this.use_distance,
          this.use_calories,
          this.use_steps,
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
      const queryText = "DELETE FROM activity_categories WHERE id=$1";
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
    // const all = await ActivityCategory.all()
    // console.log(all)
  
  // test inherited .find
    // const activityCategory1 = await ActivityCategory.find(1)
    // console.log(activityCategory1)
  
  // test inherited .findBy
    // const activityCategory1 = await ActivityCategory.findBy({name: "Running", use_steps: true})
    // console.log(activityCategory1)
  
  // test .save
    // const newActivityCategory = new ActivityCategory({name: "Swimming",use_steps: false, use_calories: true, use_distance: true })
    // await newActivityCategory.save()
    // console.log(newActivityCategory)

  // test .delete
    // const newActivityCategory = new ActivityCategory({name: "Swimming",use_steps: false, use_calories: true, use_distance: true })
    // await newActivityCategory.save()
    // console.log(newActivityCategory)
    // let activityCategory1 = (await ActivityCategory.findBy({name: "Swimming"}))[0]
    // console.log(activityCategory1)
    // await activityCategory1.delete()
    // activityCategory1 = await ActivityCategory.findBy({name: "Swimming"})
    // console.log(activityCategory1)

  // test .update
    // const newActivityCategory = new ActivityCategory({name: "Flying",use_steps: false, use_calories: true, use_distance: true })
    // await newActivityCategory.save()
    // console.log(newActivityCategory)
    // let activityCategory1 = (await ActivityCategory.findBy({name: "Flying"}))[0]
    // console.log(activityCategory1)
    // await activityCategory1.update({use_calories: false, use_distance: false})
    // console.log(activityCategory1)
// }

// test();

module.exports = ActivityCategory;

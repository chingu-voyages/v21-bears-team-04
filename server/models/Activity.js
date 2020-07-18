const DBbase = require("./DBbase");
const ActivityCategory = require("./ActivityCategory")
const Joi = require("@hapi/joi");



class Activity extends DBbase {
  static table = "activities";
  static validColumnNames = ["user_id", "title", "start", "ending", "category", "distance", "calories", "steps" ]; 

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
    const thisActivityCategory = await ActivityCategory.find(this.category)
    
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
    }
  }

  setAttributes(attributes) {
    // use this to update the model, but not the db
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  static validActivityAttributes(attributes) {
    return true
  }


  async allowTheseCategoryUnits() {
    // need to know if any of these can be used for associated category: distance, calories, steps
    const names = []
    if (this.category) {
      const categoryInfo = await ActivityCategory.find(this.category)
      if (categoryInfo.distance) names.push("distance")
      if (categoryInfo.calories) names.push("calories")
      if (categoryInfo.steps) names.push("steps")
      return names
    }
    
    
  }
  async validCategoryUnits() {
    // we dont want to save to db an activity that tries to store units that dont match corresponding activity_category units
    const validNames = await allowTheseCategoryUnits()
    if (validNames) {

      const actualNames = []
      if (this.distance) actualNames.push("distance")
      if (this.calories) actualNames.push("calories")
      if (this.steps) actualNames.push("steps")
      return actualNames === validNames
      
    }

    return false // this means 
  }

  // async save() {
    
  //   const names = 

    

  //   // const queryText =
  //   //   "INSERT INTO activity_categories(name, use_distance, use_calories, use_steps) VALUES ($1, $2, $3, $4) RETURNING *";
  //   // const query = {
  //   //   text: queryText,
  //   //   values: [this.name, this.use_distance, this.use_calories, this.use_steps]
  //   // };
  //   // const queryResult = await this.query(query);
  //   // const newRecord = queryResult[0];
  //   // // make sure this activity_category has the updated attributes
  //   // this.id = newRecord.id;
  //   // return this;

  // }

  async update(attributes) {}

  async delete() {}
}


async function test() {
    const activity = await Activity.find(1)
    const serializedActivity = await activity.withAssociatedData()
    console.log(serializedActivity)
  
  }

test()

module.exports = Activity;

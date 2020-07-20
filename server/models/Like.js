const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

// "id" serial NOT NULL,
// "user_id" int NOT NULL,
// "resource_id" int NOT NULL,
// "resource_type" character varying(100) NOT NULL,
// "created_at" timestamp with time zone NOT NULL,

class Like extends DBbase {
  // 'table' used by DBbase to map class to specific table name
  static table = "likes";

  // 'validColumnNames' used by DBbase to check for valid properities on each model
  static validColumnNames = [
    "user_id",
    "resource_id",
    "resource_type",
    "created_at"
  ];
  static validResourceTypes = ["activity"]; // for reference

  constructor(attributes) {
    super(); // initializing super class, DBbase - communication with db methods
    if (Like.validLikeAttributes(attributes)) {
      this.setAttributes(attributes);
    } else {
      console.log("invalid Like attributes");
      throw new Error("invalid Like attributes");
    }
  }

  static validLikeAttributes(attributes) {
    return true;
  }

  async save() {
    const queryText =
      "INSERT INTO likes(user_id, resource_id, resource_type, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *";
    const query = {
      text: queryText,
      values: [this.user_id, this.resource_id, this.resource_type]
    };
    const queryResult = await this.query(query);
    const newRecord = queryResult[0];
    // make sure this Like has the updated attributes
    this.id = newRecord.id;
    return this;
  }

  async update(attributes) {
    if (Like.validLikeAttributes(attributes) && this.id) {
      // update model
      this.setAttributes(attributes);
      const queryText =
        "UPDATE likes SET user_id=$1, resource_id=$2, resource_type=$3 WHERE id=$4 RETURNING *";
      const query = {
        text: queryText,
        values: [this.user_id, this.resource_id, this.resource_type, this.id]
      };
      const queryResult = await this.query(query);
      //console.log(queryResult);
      const newRecord = queryResult[0];
      if (newRecord) {
        this.created_at = newRecord.created_at
        return true;
      }
    } else {
      console.log("Invalid attributes supplied to update");
    }
  }

  async delete() {
    if (this.id) {
      const queryText = "DELETE FROM likes WHERE id=$1";
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

async function test() {
  // testing .save
  // const newLike = new Like({user_id: 1, resource_id: 1, resource_type: "activity"})
  // await newLike.save()

  // testing .delete
  //  const newLike = new Like({user_id: 1, resource_id: 1, resource_type: "activity"})
  //  await newLike.save()
  //  console.log("newLike id:", newLike.id)
  //  await newLike.delete()
  //  const findNewLike = await Like.find(newLike.id)
  //  console.log("findNewlike is gone, should be undefined", findNewLike)

  // testing .update
//   const newLike = new Like({
//     user_id: 1,
//     resource_id: 1,
//     resource_type: "activity"
//   });
//   await newLike.save();
//   console.log("newLike before update", newLike);
//   await newLike.update({ resource_type: "comment" });
//   const findNewLike = await Like.find(newLike.id);
//   console.log("newLike after update", findNewLike);
 }

// test();

module.exports = Like;

const DBbase = require("./DBbase");

class Following extends DBbase {
  // 'table' used by DBbase to map class to specific table name
  static table = "followings";
  // 'validColumnNames' used by DBbase to check for valid properities on each model
  static validColumnNames = ["id", "follower", "following", "created_at"];

  constructor(attributes) {
    super(); // initializing super class, DBbase - communication with db methods
    if (Following.validFollowingAttributes(attributes)) {
      this.setAttributes(attributes);
    } else {
      console.log("invalid Following attributes");
      throw new Error("invalid Following attributes");
    }
  }

  async save() {
    const queryText =
      "INSERT INTO followings(follower, following, created_at) VALUES ($1, $2, NOW()) RETURNING *";
    const query = {
      text: queryText,
      values: [this.follower, this.following],
    };
    const queryResult = await this.query(query);
    const newRecord = queryResult[0];
    // make sure this has the updated attributes
    this.id = newRecord.id;
    this.created_at = newRecord.created_at;
    return this;
  }

  async delete() {
    if (this.id) {
      const queryText = "DELETE FROM followings WHERE id=$1";
      const substituteValues = [this.id];
      const query = {
        text: queryText,
        values: substituteValues,
      };
      await this.query(query);
    } else {
      console.log(
        "This record either (1) hasnt been saved to database, or (2) its already been deleted"
      );
    }
  }

  static validFollowingAttributes(attributes) {
    return true;
  }
}

async function test() {
  //testing .save
  const newFollowing = new Following({ follower: 1, following: 1 });
  await newFollowing.save();
  console.log(newFollowing);
  // testing .delete
  const newFollowing = new Following({ follower: 1, following: 1 });
  await newFollowing.save();
  console.log("newFollowing id:", newFollowing.id);
  await newFollowing.delete();
  const findNewFollowing = await Following.find(newFollowing.id);
  console.log("findNewFollowing is gone, should be undefined", findNewFollowing);
}

// test();

module.exports = Following;

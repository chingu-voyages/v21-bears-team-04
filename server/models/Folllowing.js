const DBbase = require("./Followings");

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
      values: [this.follower, this.following]
    };
    const queryResult = await this.query(query);
    const newRecord = queryResult[0];
    // make sure this has the updated attributes
    this.id = newRecord.id;
    this.created_at = newRecord.created_at;
    return this;
  }

  static validFollowingAttributes(attributes) {
    return true;
  }



}

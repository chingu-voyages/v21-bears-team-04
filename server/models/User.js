const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class User extends DBbase {
  // 'table' used by DBbase to map class to specific table name 
  static table = "users";

  // 'validColumnNames' used by DBbase to check for valid properities on each model
  static validColumnNames = [ 
  "first_name",
  "last_name",
  "password_digest",
  "id",
  "admin",
  "username",
  "email",
  "created_at",
	"updated_at",
  "isCompany"
];  

  constructor(attributes) {
    super()
    if (User.validUserAttributes(attributes)) {
      this.setAttributes(attributes);
    } else {
      console.log("invalid User attributes");
      throw new Error("invalid User attributes");
    }
  }

  static validUserAttributes(attributes) {
    // make sure to use Joi to ensure both password_digest and pass_word confirm are equal
    return true;
  }

  setAttributes(attributes) {
    // use this to update the model, but not the db
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  static async findByEmail (email) {
    try {
      const result = await this.query({
        text: "SELECT * FROM users WHERE email = $1;",
        values: [email]
      });
      return result[0]
    }
    catch(err) {
      return { error: err}
    }
  }

  async create() {
    try {
      const result = await this.query({
        text: "INSERT INTO users (first_name, last_name, password_digest, username, email, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7);",
        values: [this.first_name, this.last_name, this.password_digest, this.username, this.email, this.created_at, this.updated_at]
      });
      console.log("New user saved to DB")
      return result
    }
    catch(err) {
      return { error: err}
    }
  }

  async update(attributes) {}

  async delete() {}
}

module.exports = User;

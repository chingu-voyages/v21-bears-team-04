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
    return true;
  }

  static createPasswordDigest(password) {
    // User.createPasswordDigest("iAmPasswordGottenFromEndpoint")
    // should use a encryption library, and call a function that uses a secret in .env to return a new string that can be used for saving to password_digest, or comparison.
  }

  static async createToken(data) {
    // use jwt library to create a token, use the secret in .env, and encode data
  }

  static async authenticateToken(token) {
    // use jwtl library, secret, to decode token, return token data
    // otherwise, return some falsy value
  }

  async authenticatePassword(password) {
    //  we will have some endpoint, like /auth/login
    //  the user will have supplied an email, and a password
    // we find the user with that email, so like user1 = User.findBy({email: 'an_email'}  )[0]
    //  we can now use User.createPasswordDigest(password), and compare that to user1.password_digest
    // if they're the same string, we know the user's password is good, so can return true
  }

  setAttributes(attributes) {
    // use this to update the model, but not the db
    for (let attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = User;

const DBbase = require("./DBbase");
const Joi = require("@hapi/joi");

class User extends DBbase {
  static table = "users";
  static validColumnNames = []; // TODO: fill in names

  constructor(attributes) {}

  static validUserAttributes(attributes) {}

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

  async save() {}

  async update(attributes) {}

  async delete() {}
}

module.exports = User;

const User = require("../models/User")
const argon2 = require("argon2")

class AuthService {
    // Attributes need to be validated in controller
    static async signup(attributes) {
    const passwordHashed = await argon2.hash(attributes.password_digest)
    attributes.password_digest = passwordHashed
    const user = new User(attributes)
    const result = await user.create()
    if (result.error) {
      console.log(`Failed to save user due to: ${result.error.detail}`)
      return result
    }
    else {
      return {
        user: {
          email: user.email,
          username: user.username,
        }
      }
    }
  }

}

module.exports = AuthService
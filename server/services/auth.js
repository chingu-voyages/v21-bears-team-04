const User = require("../models/User")
const jwt = require("jsonwebtoken")
const argon2 = require("argon2")

class AuthService {
  // Attributes need to have been validated in auth controller
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

  static async generateJWT(user) {
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email
    }
    const signature = process.env.JWT_SECRET;
    const expiration = '6h';
    return jwt.sign(payload, signature, { expiresIn: expiration });
  }

  static async signin(credentials) {
    // Credentials need to have already been validated in auth controller
    // Currently credentials are an object with email & password {email: user@domain.com, password: userPassword}
    const user = await User.findByEmail(credentials.email)
    // If no user return error 'email or password incorrect' 
    if (!user) return {error: true, message: "Email or password incorrect"}
    // If user exists, compare credentials with stored hash
    const correctPassword = await argon2.verify(user.password_digest, credentials.password_digest)
    // If password hashes match, generate JWT and send to client with basic unhashed user info in JSON and as a cookie
    if (correctPassword) {
      const token = await this.generateJWT(user)
      return token
    }
    // If password hashes don't match return error 'email or password incorrect'
    return {error: true, message: "Email or password incorrect"}
  }
}

module.exports = AuthService
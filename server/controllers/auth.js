const User = require("../models/User")
const AuthService = require("../services/auth")

const signup = async (req, res) => {
  const attributes = req.body
  if (User.validUserAttributes(attributes)) {
    const result = await AuthService.signup(attributes)
    res.send(result)
  }
}

module.exports = {
  signup
}
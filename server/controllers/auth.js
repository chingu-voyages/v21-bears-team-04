const User = require("../models/User")
const AuthService = require("../services/auth")

const signup = async (req, res) => {
  const attributes = req.body
  if (User.validUserAttributes(attributes)) {
    const result = await AuthService.signup(attributes)
    res.send(result)
  }
  else {
    // make sure to send Joi error from validation in User.validUserAttributes here
    res.send({error: true, details: "Invalid user attributes"})
  }
}

const signin = async (req, res) => {
  const credentials = req.body

  // Validate credentials format
  const credentialsValidator = (signInData) => {
    // Fill in validation later using Joi
    return true
  }
  if (credentialsValidator(credentials)) {

    // Attempt signin and return result
    const result = await AuthService.signin(credentials)

    // If signin sucessful, set JWT in cookie and send JWT as json
    if (!result.error){
      res.set({
        "Set-Cookie": `jwt=${result}; Max-Age=21600; Wecure;`
      })
      // res.cookie('jwt', result, { secure: true })
      return res.json(result)
    } 

    // If signin not successful send error from AuthService.signin
    res.send(result)
  }
  else {
    // Make sure to send Joi error from credentialsValidator here
    res.send({error: true, details: "Invalid credentials"})
  }
}

module.exports = {
  signup,
  signin
}
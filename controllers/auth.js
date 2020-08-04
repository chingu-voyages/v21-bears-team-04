// require('dotenv').config()
const User = require('../models/User');
const auth = require('../services/auth');

const signup = async (req, res) => {
  const attributes = req.body;

  if (User.validUserAttributes(attributes)) {
    const result = await auth.signup(attributes);
    res.status(200).send(result);
  } else {
    // make sure to send Joi error from validation in User.validUserAttributes here
    res.status(401).send({ error: true, details: 'Invalid user attributes' });
  }
};

const signin = async (req, res) => {
  const credentials = req.body;

  // Validate credentials format
  const credentialsValidator = (signInData) => {
    // Fill in validation later using Joi
    return true;
  };

  if (credentialsValidator(credentials)) {
    // Attempt signin and return result
    const result = await auth.signin(credentials);

    // If signin sucessful, set JWT in cookie and send JWT as json
    if (!result.error) {
      // For setting cookie options if in secure https production environment
      const isSecure = process.env.SECURE === 'false' ? false : true;
      const options = isSecure ? { secure: true, maxAge: 21600 } : {};
      res.cookie('jwt', result, options);
      return res.json(result);
    }

    // If signin not successful send error from AuthService.signin
    res.status(200).send(result);
  } else {
    // Make sure to send Joi error from credentialsValidator here
    res.status(401).send({ error: true, details: 'Invalid credentials' });
  }
};

module.exports = {
  signup,
  signin,
};

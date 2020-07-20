const User = require("../models/User")

// Used to attach full user info to req.currentUser after isAuth verifies valid JWT
const attachCurrentUser = async (req, res, next) => {
  const user = await User.find(req.user.id)

  // Ends response cycle in case JWT is valid but no corresponding user found in DB
  if(!user) {
    return res.status(404).end('User not found')
  } 
  else {
    req.user = user
    return next();
  }
}

module.exports = attachCurrentUser
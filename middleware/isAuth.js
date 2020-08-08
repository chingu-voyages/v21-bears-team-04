require('dotenv').config()

const jwt = require("jsonwebtoken")

const getTokenFromHeader = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
}

// Gets JWT from req.cookies, decodes, and attaches user info to req.user
// Ends request cycle if no JWT or bad JWT
const isAuth = (req, res, next) => {

  // Supports cookies or Authorization header
  const token = req.cookies.jwt || getTokenFromHeader(req) //


  // Go on to next middleware if no token
  if (!token) return res.status(401).json({error: true, message: "Not authorized - Missing token"})

  // Declaire userInfo, try to decode JWT, throw error if bad token
  let userInfo
  try {
    userInfo = jwt.verify(token, process.env.JWT_SECRET)
  }
  catch(err){
    return res.status(401).json({error: true, message: "Not authorized - Bad token"})
  }

  // Attach basic user info to req.user if valid token present
  const user = {
    id: userInfo.id,
    email: userInfo.email,
    username: userInfo.username
  }
  req.user = user
  return next()
}

module.exports = isAuth
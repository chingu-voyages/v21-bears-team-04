const User = require("../models/User");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

// Attributes need to have been validated in auth controller
async function signup(attributes) {
  //console.log("Attributes", attributes)
  const passwordHashed = await argon2.hash(attributes.password_digest);
  //console.log("passwordHashed", passwordHashed)
  attributes.password_digest = passwordHashed;
  const user = new User(attributes);
  console.log(user);
  const result = await user.create();
  if (result.error) {
    console.log(`Failed to save user due to: ${result.error.detail}`);
    return result;
  } else {
    return {
      user: {
        email: user.email,
        username: user.username,
      },
    };
  }
}

async function generateJWT(user) {
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };
  const signature = process.env.JWT_SECRET;
  const expiration = "6h";
  return jwt.sign(payload, signature, { expiresIn: expiration });
}

async function signin(credentials) {
  // Credentials need to have already been validated in auth controller
  // Currently credentials are an object with email & password {email: user@domain.com, password: userPassword}
 
  const user = (await User.findBy({ email: credentials.email }))[0];
  // If no user return error 'email or password incorrect'
  if (!user) return { error: true, message: "Email or password incorrect" };
  // If user exists, compare credentials with stored hash
  const correctPassword = await argon2.verify(
    user.password_digest,
    credentials.password_digest
  );
  // If password hashes match, generate JWT and send to client with basic unhashed user info in JSON and as a cookie
  if (correctPassword) {
    const token = await generateJWT(user);
    const userData = user.withAttributesSubsetted(["id", "username", "email"]);
    return { token: token, userData: userData };
  }
  // If password hashes don't match return error 'email or password incorrect'
  return { error: true, message: "Email or password incorrect" };
}

module.exports = {
  signup,
  signin,
};

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
// const cors = require('cors');
const isAuth = require("./middleware/isAuth");
const attachCurrentUser = require("./middleware/attachCurrentUser");

// Require all routes
const addressRoutes = require("./routes/addresses");
const activitiesRoutes = require("./routes/activities");
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const commentsRoutes = require("./routes/comments");

const app = express();

app.use(morgan("tiny"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

//routes
app.use("/api/addresses", addressRoutes);
app.use("/api/activities", isAuth, attachCurrentUser, activitiesRoutes);
app.use("/api/comments", isAuth, attachCurrentUser, commentsRoutes);
app.use("/api/dashboard", isAuth, attachCurrentUser, dashboardRoutes);
app.use("/api/users", isAuth, attachCurrentUser, usersRoutes);
app.use("/api/auth", authRoutes);

// Serve static files for react app in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // Express will serve up index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const isAuth = require("./middleware/isAuth")
const attachCurrentUser = require("./middleware/attachCurrentUser")

const PORT = process.env.PORT || 3000

// Require all routes
const addressRoutes = require('./routes/addresses')
const activitiesRoutes = require('./routes/activities')
const usersRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const dashboardRoutes = require("./dashboard")

const app = express()


app.use(morgan('tiny'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



//routes
app.use('/addresses', addressRoutes);
app.use('/activities', isAuth, attachCurrentUser, activitiesRoutes);
app.use('/dashboard', isAuth, attachCurrentUser, dashboardRoutes)
app.use('/users', isAuth, attachCurrentUser, usersRoutes);
app.use('/auth', authRoutes);


app.listen(PORT)

console.log(`App listening on ${PORT}`)
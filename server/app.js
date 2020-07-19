require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000

// Require all routes
const addressRoutes = require('./routes/addresses')
const activitiesRoutes = require('./routes/activities')
const usersRoutes = require('./routes/users')

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//routes
app.use('/addresses', addressRoutes);
app.use('/activities', activitiesRoutes);
app.use('/users', usersRoutes);


app.listen(PORT)

console.log(`App listening on ${PORT}`)
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//routes
app.use('/addresses', require('./routes/addresses'));
app.use('/activities', require('./routes/activities'));


app.listen(PORT)

console.log(`App listening on ${PORT}`)
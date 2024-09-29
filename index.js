const connectToMongo = require('./db')
const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

connectToMongo();

app.use(express.json());
app.use(cors())

app.use('/api',require('./routes/booking.js'))
app.use('/api',require('./routes/review.js'))

app.listen(port,
    console.log("Server running on port 5000"))
const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/index');
const bodyParser = require('body-parser')
//const SwaggerUI = require('swagger-ui')

const app = express()
const port = 3000

/**
 * Mongo DB Connection
 */
var mongoDB = 'mongodb://127.0.0.1/timesheet-up';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/**
 * Body Parser
 */
app.use(bodyParser.json())

/**
 * Router
 */
app.use('/', router);


/**
 * Swagger UI
 */
//app.use(express.static(pathToSwaggerUi));

/**
 * Middleware logger for request
 */
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${res.statusCode}`);
  next();
});


app.listen(port, () => {
  console.log(`Timesheet App - Arquitectura WEB 1C 2022 - UP - ${port}`)
})
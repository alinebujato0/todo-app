const port = 5000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(function(error, req, res, next) {
  console.error(error);
  next();
});

server.use(function(req, res, next) {

  console.log("Request recebido.")
  next();

});

server.use(bodyParser.urlencoded({ extended: true }))

server.use(function(req, res, next) {

  console.log("After 'bodyParser.urlencoded'.")
  next();

});

server.use(bodyParser.json())

server.use(function(req, res, next) {

  console.log("After 'bodyParser.json()'.")
  next();

});

server.use(allowCors)

server.use(function(req, res, next) {

  console.log("After 'allowCors'.")
  next();

});

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
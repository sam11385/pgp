var express = require('express');
var app = express();
const bodyParser = require('body-parser');

let promise = require('bluebird');

const initOptions = {
  promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

// Database connection parameters:
const config = {
  host: 'localhost',
  port: 5432,
  database: 'restaurant',
  user: 'postgres'
};
// call our config file
const db = pgp(config);

// RUN SOME SQL!
// Get everything!
db.query('SELECT * FROM restaurant').then(function(results) {
  results.forEach(function(column) {
    console.log(column.id, column.name);
  });
});

// Example of getting a search paramater!
db.one("SELECT * FROM restaurant WHERE name='Outback'").then(function(column) {
  console.log(column.id, column.name, column.category);
});

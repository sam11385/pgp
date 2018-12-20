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
db.query('SELECT * FROM restaurant').then(function(results) {
  results.forEach(function(r) {
    console.log(r.id, r.name);
  });
});

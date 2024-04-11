"use strict";

var express = require('express');
var planJob = require('./planJob/planJob.index');
var example = require('./example/example.index');
var app = express();
app.use('/', function (req, res, next) {
  return req.path === '/' ? res.send('Hello User DSS') : next();
});
app.use('/example', example);
app.use('/plan-job', planJob);
module.exports = app;
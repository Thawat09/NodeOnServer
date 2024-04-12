const express = require('express');
const checkUserExistence = require('../auth/authenticateUser');
const planJob = require('./planJob/planJob.index');
const example = require('./example/example.index');

const app = express();

app.use('/', (req, res, next) =>
  req.path === '/' ? res.send('Hello User DSS') : next()
);

app.use('/example', checkUserExistence, example);
app.use('/plan-job', checkUserExistence, planJob);

module.exports = app;

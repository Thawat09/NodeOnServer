const express = require('express');
const planJob = require('./planJob/planJob.index');
const example = require('./example/example.index');

const app = express();

app.use('/', (req, res, next) =>
  req.path === '/' ? res.send('Hello User DSS') : next()
);

app.use('/example', example);
app.use('/plan-job', planJob);

module.exports = app;

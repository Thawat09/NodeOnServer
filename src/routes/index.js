const express = require('express');
const planJob = require('./planJob');

const app = express();

app.use('/', (req, res, next) =>
  req.path === '/' ? res.send('Hello User DSS') : next()
);

app.use('/plan-job', planJob);

module.exports = app;

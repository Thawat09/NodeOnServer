const express = require('express');
const checkUserExistence = require('../auth/authenticateUser');
const checkPermission = require('../middleware/permission');
const example = require('./example/example.index');
const lineBot = require('./lineBot/lineBot.index');
const planJob = require('./planJob/planJob.index');

const app = express();

app.use('/', (req, res, next) =>
  req.path === '/' ? res.send('Hello User DSS') : next()
);

app.use('/example', checkUserExistence, checkPermission, example);
app.use('/line-bot', lineBot);
app.use('/plan-job', checkUserExistence, checkPermission, planJob);

module.exports = app;

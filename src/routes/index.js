const express = require('express');
const aboutRoutes = require('./about');

const app = express();

app.use('/', (req, res, next) =>
  req.path === '/' ? res.send('Hello User') : next()
);

app.use('/about', aboutRoutes);

module.exports = app;

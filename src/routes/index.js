const express = require('express');
const aboutRoutes = require('./about');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello User');
});

app.use('/about', aboutRoutes);

module.exports = app;
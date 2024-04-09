const express = require('express');
const rateLimit = require("express-rate-limit");
const app = express();
const indexAPI = require('./src/routes/index.js');

const limiter = rateLimit({
    windowMs: 3 * 60 * 1000,
    max: 5
});

app.use(limiter);
app.use(indexAPI);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});